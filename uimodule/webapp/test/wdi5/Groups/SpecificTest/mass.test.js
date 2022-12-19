/* eslint-disable no-undef */
/* jshint esversion: 11 */
const {
  // eslint-disable-next-line no-unused-vars
  wdi5
} = require("wdio-ui5-service");
const MassView = require("../../pageObjects/MassView");
const CreateView = require("../../pageObjects/CreateView"); // CreateConfig
const MainView = require("../../pageObjects/MainView"); // Template
// eslint-disable-next-line no-unused-vars
let fieldConfig;

// eslint-disable-next-line no-undef
describe("Upload File:", async () => {
  before(async () => {
    const templateButton = await MainView.getDownloadTemplateButton();
    await templateButton.press();
    await MassView.open();
    await CreateView.init();
    fieldConfig = CreateView.CreateConfig;
  });

  it("should load the create page", async () => {
    await MassView.getPage();
  });
  // eslint-disable-next-line no-undef
  it("should upload file, using correct template", async () => {
    const uploader = await MassView.getFileUploader();
    // prep the file to upload
    const downloadPath = `C:\\Users\\${process.env.USERNAME}\\Downloads\\`;
    const downloadedFile = `${downloadPath}${MainView.templateName}`;
    const remoteFilePath = await browser.uploadFile(downloadedFile);
    // transition from wdi5 api -> wdio api
    const $uploader = await uploader.getWebElement(); // wdi5
    const $fileInput = await $uploader.$("input[type=file]"); // wdio
    await $fileInput.setValue(remoteFilePath); // wdio
    const inputs = await MassView.getGenericInput(true);
    const uploaderInput = inputs.find(x => x._domId.includes("fileuploader"));
    expect(await uploaderInput.getValue()).toEqual(MainView.templateName);
  });

  it("should upload file, validate correct input data vs odata fields", async () => {
    const button = await MassView.getUploadButton();
    await button.press();

    const dialogs = await MassView.getGenericDialog();
    const okDialogContent = await dialogs.getContent();
    const okDialogTexts = await okDialogContent[0].getItems();
    await expect(`total ${okDialogTexts.length}`).toEqual(`total ${parseInt(MassView.responseStats.total)}`);
    const dialogTextHighlights = await Promise.all(okDialogTexts.map(x => x.getHighlight()));
    // lines configured in massResponse
    await expect(`green line ${dialogTextHighlights.filter(x => x === 'Success').length}`).toEqual(`green line ${parseInt(MassView.responseStats.succ)}`);

    const browerLogs = await browser.getLogs("browser");
    const reqPayload = browerLogs.filter((log) => log.level === "WARNING").filter((log) => log.message.includes("oPayload"));
    const request = Object.values(JSON.parse(reqPayload[0].message.match(/(?<=oPayload:).*\]/gm)[0].replaceAll("\\", ""))[0]).map(x => x.toUpperCase());
    const valsExpected = fieldConfig.filter(x => !x.excludeMass).map((config) => config.retValue.toUpperCase());
    // find all elements of valsExpected in request, remove found ones; this ensures that all expected values are found including duplicates
    const resultRequest = [...request];
    let allFound = true;
    for (const val of valsExpected) {
      const index = resultRequest.indexOf(val);
      if (index > -1) {
        resultRequest.splice(index, 1);
      } else {
        allFound = false;
        break;
      }
    }
    console.log("Expected values:");
    console.log(valsExpected);
    console.log("Request values:");
    console.log(request);
    console.log(resultRequest);
    if (allFound) {
      await browser.screenshot("after upload");
    }
    await expect(allFound).toBe(true);    
  });
});
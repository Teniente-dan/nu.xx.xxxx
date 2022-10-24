/* eslint-disable no-undef */
/* jshint esversion: 11 */
// const ConfigJSON = require('../../localData/appConfig.json');
const {
  // eslint-disable-next-line no-unused-vars
  wdi5
} = require("wdio-ui5-service");
const MassView = require("../../pageObjects/MassView");
const Config = require("../../ConfigCreate");
const ConfigTemplate = require("../../ConfigTemplate");
// eslint-disable-next-line no-unused-vars
let fieldConfig;

// eslint-disable-next-line no-undef
describe("Upload File:", async () => {
  before(async () => {
    await MassView.open();
    fieldConfig = await Config.getConfig();
  });

  it("should load the create page", async () => {
    const pageSelector = {
      selector: {
        controlType: "sap.m.Page",
        interaction: "root"
      }
    };
    await browser.asControl(pageSelector);
  });
  // eslint-disable-next-line no-undef
  it("should upload file, using correct template", async () => {
    const fileUploaderSelector = {
      forceSelect: true,
      selector: {
        id: "fileuploader",
        viewName: MassView._viewName,
      }
    };

    const inputSelector = {
      forceSelect: true,
      selector: {
        controlType: "sap.m.Input"
      }
    };
    const uploader = await browser.asControl(fileUploaderSelector);
    // prep the file to upload
    const downloadPath = `C:\\Users\\${process.env.USERNAME}\\Downloads\\`;
    const downloadedFile = `${downloadPath}${ConfigTemplate.templateName}`;
    const remoteFilePath = await browser.uploadFile(downloadedFile);
    // transition from wdi5 api -> wdio api
    const $uploader = await uploader.getWebElement(); // wdi5
    const $fileInput = await $uploader.$("input[type=file]"); // wdio
    await $fileInput.setValue(remoteFilePath); // wdio
    const inputs = await browser.allControls(inputSelector);
    const uploaderInput = inputs.find(x => x._domId.includes("fileuploader"));
    expect(await uploaderInput.getValue()).toEqual(ConfigTemplate.templateName);
  });

  it("should upload file, validate correct input data vs odata fields", async () => {
    const buttonSelector = {
      selector: {
        controlType: "sap.m.Button",
        interaction: "press",
        properties: {
          text: "Upload"
        }
      }
    };
    const button = await browser.asControl(buttonSelector);
    await button.press();

    const okDialogSelector = {
      selector: {
        controlType: "sap.m.Dialog"
      },
    };
    const dialogs = await browser.asControl(okDialogSelector);
    // const okDialog = dialogs.filter(x => x._domId.includes("success"))?.[0];
    const okDialogContent = await dialogs.getContent();
    const okDialogTexts = await okDialogContent[0].getItems();
    await expect(okDialogTexts.length).toEqual(2);

    const test3 = await browser.getLogs("browser");
    const testo = test3.filter((log) => log.level === "WARNING").filter((log) => log.message.includes("oPayload"));
    const request = Object.values(JSON.parse(testo[0].message.match(/(?<=oPayload:).*\]/gm)[0].replaceAll("\\", ""))[0]).map(x => x.toUpperCase());
    const valsExpected = fieldConfig.filter(x => !x.excludeMass).map((config) => config.retValue.toUpperCase());
    // find all elements of valsExpected in request
    const allFound = valsExpected.every((val) => request.includes(val));
    console.log(valsExpected);
    console.log(request);
    await expect(allFound).toBe(true);
  });
});
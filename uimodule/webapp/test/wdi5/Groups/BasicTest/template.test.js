/* jshint esversion: 8 */
const {
  // eslint-disable-next-line no-unused-vars
  wdi5
} = require("wdio-ui5-service");
const {
  stat
} = require("node:fs/promises");
const MainView = require("../../pageObjects/MainView");
describe("Download Template:", async () => {
  it("should download a template", async () => {
    const templateButton = await MainView.getDownloadTemplateButton();
    await templateButton.press();
    const downloadPath = `C:\\Users\\${process.env.USERNAME}\\Downloads\\`;
    const downloadedFile = `${downloadPath}${MainView.templateName}`;
    console.log("Waiting for download to complete");
    await new Promise(resolve => setTimeout(resolve, 2000));
    await expect(await (await stat(downloadedFile)).size).toBeGreaterThan(1);
  });
});
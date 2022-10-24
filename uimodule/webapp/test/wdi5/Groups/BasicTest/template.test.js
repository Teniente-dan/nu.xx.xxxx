/* eslint-disable no-undef */
/* jshint esversion: 8 */
// const ConfigJSON = require('../../localData/appConfig.json');
const {
  // eslint-disable-next-line no-unused-vars
  wdi5
} = require("wdio-ui5-service");
const {
  stat
} = require("node:fs/promises");
const Config = require("../../ConfigTemplate");
const {
  syncBuiltinESMExports
} = require("node:module");

// eslint-disable-next-line no-undef
describe("Download Template:", async () => {
  // eslint-disable-next-line no-undef
  const backButtonSelector = {
    forceSelect: true,
    selector: {
      controlType: "sap.m.Button",
      interaction: "press",
      properties: {
        type: "Back"
      },
    }
  };
  it("should download a template", async () => {
    const templateButtonSelector = {
      forceSelect: true,
      selector: {
        controlType: "sap.m.Button",
        interaction: "press",
        properties: {
          text: new RegExp(/.*Template*/gm)
        }
      }
    };

    const templateButton = await browser.asControl(templateButtonSelector);
    await templateButton.press();
    const downloadPath = `C:\\Users\\${process.env.USERNAME}\\Downloads\\`;
    // const downloadedFile = `${downloadPath}${Config.templateName}_export_${new Date().toISOString().slice(0,10).replace(/-/g,"")}.xlsx`;
    const downloadedFile = `${downloadPath}${Config.templateName}`;
    console.log("Waiting for download to complete");
    await new Promise(resolve => setTimeout(resolve, 2000));
    await expect(await (await stat(downloadedFile)).size).toBeGreaterThan(1)

  });
});
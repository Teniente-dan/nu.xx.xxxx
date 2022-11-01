/* jshint esversion: 11 */
const Page = require("./Page");
const templateConfig = require('../../../../../fieldBuilder/template.json');

class MainView extends Page {
  constructor() {
    super();
    this._viewName = "nu.<%= module %>.<%= appname %>.view.MainView";
    // template Download
    this.fileID = templateConfig.fileID;
    this.templateName = `${this.fileID}_export_${new Date().toISOString().slice(0, 10).replace(/-/g, "")}.xlsx`;
  }
  async open() {
    await super.open(`#/create`);
  }

  async getBackButton() {
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
    return await browser.asControl(backButtonSelector);
  }

  async getNavDownloadButton() {
    const downloadButtonSelector = {
      forceSelect: true,
      selector: {
        controlType: "sap.m.Button",
        interaction: "press",
        id: "midBut",
        viewName: this._viewName
      }
    };
    return await browser.asControl(downloadButtonSelector);
  }

  async getDownloadTemplateButton() {
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
    return await browser.asControl(templateButtonSelector);
  }
}

module.exports = new MainView();
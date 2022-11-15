/* jshint esversion: 11 */
const Page = require("./Page");
const responses = require('../../../localService/mockResponses.json');

class MassView extends Page {
  constructor() {
    super();
    this._viewName = "nu.<%= module %>.<%= appname %>.view.Mass";
    this.navMassButtonText = "Mass";
    this.responseStats = responses.toOutputStats.results[0];
  }
  async open() {
    await super.open(`#/mass`);
  }
  async getNavMassButton() {
    const massButtonSelector = {
      forceSelect: true,
      selector: {
        controlType: "sap.m.Button",
        interaction: "press",
        properties: {
          text: new RegExp(/.*Mass*/gm)
        }
      }
    };
    return await browser.asControl(massButtonSelector);
  }

  async getFileUploader() {
    const fileUploaderSelector = {
      forceSelect: true,
      selector: {
        id: "fileuploader",
        viewName: this._viewName,
      }
    };
    return await browser.asControl(fileUploaderSelector);
  }

  async getUploadButton() {
    const buttonSelector = {
      selector: {
        controlType: "sap.m.Button",
        interaction: "press",
        properties: {
          text: "Upload"
        }
      }
    };
    return await browser.asControl(buttonSelector);
  }

  async getNavMassPage() {
    return await browser.asControl(this._getNavPage(this._viewName));
  }
}

module.exports = new MassView();
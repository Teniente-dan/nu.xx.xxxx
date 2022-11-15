/* jshint esversion: 11 */
const Page = require("./Page");
const responses = require('../../../localService/mockResponses.json');
class CreateView extends Page {
  constructor() {
    super();
    this._viewName = "nu.<%= module %>.<%= appname %>.view.Create";
    this.navCreateButtonText = "Single";
    const resMess = Object.values(responses.toReturn.results[0])[0];
    this.successCreateResponse = resMess.split("&&")?.[1] || resMess;
  }

  async init() {
    this.CreateConfig = await this._getCsvConfig('./fieldBuilder/createFields.csv');
  }

  async open() {
    await super.open(`#/create`);
  }

  async getCreateButton() {
    const buttonSelector = {
      selector: {
        controlType: "sap.m.Button",
        interaction: "press",
        properties: {
          text: "Create"
        }
      }
    };
    return await browser.asControl(buttonSelector);
  }

  async getAllInputs() {
    const inputSelector = {
      forceSelect: true,      
      selector: {
        controlType: "sap.m.Input",
        interaction: "focus"
      }
    };

    return await browser.allControls(inputSelector);
  }

  async getAllDialogs() {
    const dialogSelector = {
      selector: {
        controlType: "sap.m.Dialog",
        interaction: "root"
      }
    };
    return await browser.allControls(dialogSelector);
  }

  async getRadioButton() {
    const radioSelector = {
      selector: {
        controlType: "sap.m.RadioButton",
        bindingPath: {
          path: "",
          propertyPath: "/in15",
          modelName: "datosGral"
        }
      }
    }
    return await browser.asControl(radioSelector);
  }

  async getOkDialogSelector() {
    const okDialogSelector = {
      selector: {
        controlType: "sap.m.Dialog",
        properties: {
          state: "None"
        }
      },
    };
    return await browser.allControls(okDialogSelector);
  }

  async getNavCreateSingleButton() {
    const createButtonSelector = {
      forceSelect: true,
      selector: {
        controlType: "sap.m.Button",
        interaction: "press",
        properties: {
          text: new RegExp(/.*Single*/gm)
        }
      }
    };
    return await browser.asControl(createButtonSelector);
  }

  async getNavCreateSinglePage() {
    return await browser.asControl(this._getNavPage(this._viewName));
  }

  createSelectorBuilder() {
    return this._selectorBuilder(this.CreateConfig, this._viewName);
  }

  // async getRadioButtonOperation() {
  //   const radioSelector = {
  //     selector: {
  //       controlType: "sap.m.RadioButton",
  //       bindingPath: {
  //         path: "",
  //         propertyPath: "/in3",
  //         modelName: "datosGral"
  //       }
  //     }
  //   };
  //   return await browser.asControl(radioSelector);
  // }
}


module.exports = new CreateView();
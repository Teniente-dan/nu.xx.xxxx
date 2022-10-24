/* eslint-disable no-undef */
/* jshint esversion: 11 */
const {
  // eslint-disable-next-line no-unused-vars
  wdi5
} = require("wdio-ui5-service");
const CreateView = require("../../pageObjects/CreateView");
const Config = require("../../ConfigCreate");
let fieldConfig;
// eslint-disable-next-line no-undef
describe("Create view:", async () => {
  before(async () => {
    await CreateView.open();
    fieldConfig = await Config.getConfig();
  });
  // const fieldConfig;
  it("should load the create page", async () => {
    const pageSelector = {
      selector: {
        controlType: "sap.m.Page",
        interaction: "root"
      }
    };
    const page = await browser.asControl(pageSelector);
  });

  it("should send create request and return 'Please fill all fields with valid inputs' then validate mandatory", async () => {
    const buttonSelector = {
      selector: {
        controlType: "sap.m.Button",
        interaction: "press",
        properties: {
          text: "Create"
        }
      }
    };
    const button = await browser.asControl(buttonSelector);
    await button.press();
    const inputSelector = {
      selector: {
        controlType: "sap.m.Input",
        interaction: "focus"
      }
    };

    const dialogSelector = {
      selector: {
        controlType: "sap.m.Dialog",
        interaction: "root"
      }
    };
    const dialog = await browser.allControls(dialogSelector);
    let dialogContent = await dialog[0].getContent();
    let dialogText = await dialogContent[0].getText();
    await expect(dialogText).toEqual("Please fill all fields with valid inputs");
    await dialog[0].close();
    dialogContent = await dialog[1].getContent();
    dialogText = await dialogContent[0].getText();
    await expect(dialogText).toEqual("Please enter a TR Description");
    await dialog[1].close();

    const allInputs = await browser.allControls(inputSelector);
    await expect(allInputs.length).toBe(fieldConfig.length);
    for (const input of allInputs) {
      for (const configId of fieldConfig) {
        const ui5Id = input._domId?.match(/in\d*$/)[0];
        if (ui5Id === configId.id) {
          const valueState = await input.getProperty("valueState");
          if (configId.mandatory) {
            await expect(`${ui5Id}-${valueState}`).toBe(`${ui5Id}-Error`);
          } else {
            await expect(`${ui5Id}-${valueState}`).toBe(`${ui5Id}-None`);
          }
        }
      }
    }
  });

  it("should get log", async () => {
    const test1 = await browser.getLogs("browser");
    const testa = 1;
  });

  it("should retrive and set data form search helps and free input fields", async () => {
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
    const radio = await browser.asControl(radioSelector);
    await radio.press();

    // const fieldConfig = fieldConfig;

    const selectorBuilder = (arrConfig) => {
      return arrConfig.map((config) => {
        if (!config.valueHelp) {
          return {
            forceSelect: true,
            selector: {
              controlType: "sap.m.Input",
              interaction: "focus",
              id: config.id,
              viewName: CreateView._viewName
            },
            ui5Id: config.id,
            setValue: config.setValue,
            expectedValue: config.retValue
          };
        }
        return {
          forceSelect: true,
          selector: {
            controlType: "sap.m.Input",
            interaction: "press",
            id: config.id,
            viewName: CreateView._viewName,
          },
          ui5Id: config.id,
          focusSelector: {
            forceSelect: true,
            selector: {
              controlType: "sap.m.Input",
              interaction: "focus",
              id: config.id,
              viewName: CreateView._viewName
            }
          },
          expectedValue: config.retValue,
        };
      });
    };

    const selectorsPress = selectorBuilder(fieldConfig);

    const tableItemSelector = {
      forceSelect: true,
      selector: {
        id: new RegExp(/.*__item.-__clone*/gm), // "__item2-__clone0", // item 1
        controlType: "sap.m.ColumnListItem",
        interaction: "press"
      }
    };

    const assertInput = async (selector) => {
      const input = await browser.asControl(selector);
      let focusInput = {};
      if (selector.setValue) {
        await input.setValue(selector.setValue);
        focusInput = input;
      } else {
        await input.press();
        const tableItem = await browser.asControl(tableItemSelector);
        await tableItem.press();
        focusInput = await browser.asControl(selector.focusSelector);
      }
      const focusVal = await focusInput.getValue();
      await expect(`${selector.ui5Id}-${focusVal}`).toEqual(`${selector.ui5Id}-${selector.expectedValue}`);
    };

    for (const selector of selectorsPress) {
      await assertInput(selector);
    }

  });

  it("should send create request and return chido one; and validate all fields", async () => {
    const buttonSelector = {
      selector: {
        controlType: "sap.m.Button",
        interaction: "press",
        properties: {
          text: "Create"
        }
      }
    };
    const button = await browser.asControl(buttonSelector);
    await button.press();

    const okDialogSelector = {
      selector: {
        controlType: "sap.m.Dialog",
        properties: {
          state: "None"
        }
      },
    };
    const dialogs = await browser.allControls(okDialogSelector);
    const okDialog = dialogs.filter(x => x._domId.includes("success"))?.[0];
    const okDialogContent = await okDialog.getContent();
    const okDialogText = await okDialogContent[0].getText();
    await expect(okDialogText).toEqual("chido one");

    const test3 = await browser.getLogs("browser");
    const testo = test3.filter((log) => log.level === "WARNING").filter((log) => log.message.includes("oPayload"));
    const request = Object.values(JSON.parse(testo[0].message.match(/(?<=oPayload:).*\]/gm)[0].replaceAll("\\", ""))[0]).map(x => x.toUpperCase());
    const valsExpected = fieldConfig.map((config) => config.retValue.toUpperCase());
    // find all elements of valsExpected in request
    const allFound = valsExpected.every((val) => request.includes(val));
    console.log(valsExpected);
    console.log(request);
    await expect(allFound).toBe(true);
  });
});
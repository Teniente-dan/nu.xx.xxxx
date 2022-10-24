/* eslint-disable no-undef */
/* jshint esversion: 11 */
const {
  // eslint-disable-next-line no-unused-vars
  wdi5
} = require("wdio-ui5-service");
const DownloadView = require("../../pageObjects/DownloadView");
const Config = require("../../ConfigDownload");
// eslint-disable-next-line no-unused-vars
let fieldConfig;
// eslint-disable-next-line no-undef
describe("Download view: ", async () => {
  before(async () => {
    await DownloadView.open();
    fieldConfig = await Config.getConfig();
  });
  it("should load the download page", async () => {
    const pageSelector = {
      selector: {
        controlType: "sap.m.Page",
        interaction: "root"
      }
    }
    const page = await browser.asControl(pageSelector);
  });

  it("should retrive and set data form search helps and free input fields", async () => {
    const selectorBuilder = (arrConfig) => {
      return arrConfig.map((config) => {
        if (!config.valueHelp) {
          return {
            forceSelect: true,
            selector: {
              controlType: "sap.m.Input",
              interaction: "focus",
              id: config.id,
              viewName: DownloadView._viewName
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
            viewName: DownloadView._viewName,
          },
          ui5Id: config.id,
          focusSelector: {
            forceSelect: true,
            selector: {
              controlType: "sap.m.Input",
              interaction: "focus",
              id: config.id,
              viewName: DownloadView._viewName
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
        id: new RegExp(/.*__item.-__clone*/gm),
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
});
/* eslint-disable no-undef */
/* jshint esversion: 11 */
const {
  // eslint-disable-next-line no-unused-vars
  wdi5
} = require("wdio-ui5-service");
const DownloadView = require("../../pageObjects/DownloadView");
// eslint-disable-next-line no-unused-vars
let fieldConfig;
describe("Download view: ", async () => {
  before(async () => {
    await DownloadView.open();
    await DownloadView.init();
    fieldConfig = DownloadView.DownConfig;
  });
  it("should load the download page", async () => {
    await DownloadView.getPage();
  });

  it("should retrive and set data form search helps and free input fields", async () => {
    const selectorsPress = DownloadView.downloadSelectorBuilder();

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
      let focusVal = {};

      if (selector.checkbox) {
        await input.setSelected(selector.setValue ? true : false);
        focusInput = input;
        const checkVal = await input.getSelected();
        focusVal = checkVal ? "x" : "";
      }

      if (selector.input) {
        if (selector.setValue) {
          await input.setValue(selector.setValue);
          focusInput = input;
        } else {
          await input.press();
          const tableItem = await browser.asControl(tableItemSelector);
          await tableItem.press();
          focusInput = await browser.asControl(selector.focusSelector);
        }
        focusVal = await focusInput.getValue();
      }
      await expect(`${selector.ui5Id}-${focusVal}`).toEqual(`${selector.ui5Id}-${selector.expectedValue}`);
    };

    for (const selector of selectorsPress) {
      await assertInput(selector);
    }

  });
});
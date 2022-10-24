/* eslint-disable no-undef */
/* jshint esversion: 8 */
const {
  // eslint-disable-next-line no-unused-vars
  wdi5
} = require("wdio-ui5-service");
const MainView = require("../../pageObjects/MainView");
const CreateView = require("../../pageObjects/CreateView");
const MassView = require("../../pageObjects/MassView");
const DownloadView = require("../../pageObjects/DownloadView");

// eslint-disable-next-line no-undef
describe("Main view:", async () => {
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
  it("should navigate To and Back from Create View", async () => {
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
    const createPageSelector = {
      forceSelect: true,
      selector: {
        controlType: "sap.m.Page",
        interaction: "root",
        viewName: CreateView._viewName
      }
    };

    const createButton = await browser.asControl(createButtonSelector);
    await createButton.press();
    const createPage = await browser.asControl(createPageSelector);
    const content = await createPage.getContent();
    await expect(content.length).toBe(1);
    const backButton = await browser.asControl(backButtonSelector);
    await backButton.press();
    const createButtonRet = await browser.asControl(createButtonSelector);
    await expect(await createButtonRet.getProperty('text')).toContain("Single");
  });

  it("should navigate To and Back from Mass View", async () => {
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
    const massPageSelector = {
      forceSelect: true,
      selector: {
        controlType: "sap.m.Page",
        interaction: "root",
        viewName: MassView._viewName
      }
    };

    const massButton = await browser.asControl(massButtonSelector);
    await massButton.press();
    const massPage = await browser.asControl(massPageSelector);
    const content = await massPage.getContent();
    await expect(content.length).toBe(1);
    const backButton = await browser.asControl(backButtonSelector);
    await backButton.press();
    const massButtonRet = await browser.asControl(massButtonSelector);
    await expect(await massButtonRet.getProperty('text')).toContain("Mass");
  });

  it("should navigate To and Back from Download View", async () => {
    const downloadButtonSelector = {
      forceSelect: true,
      selector: {
        controlType: "sap.m.Button",
        interaction: "press",
        id: "midBut",
        viewName: MainView._viewName
      }
    };

    const downloadPageSelector = {
      forceSelect: true,
      selector: {
        controlType: "sap.m.Page",
        interaction: "root",
        viewName: DownloadView._viewName
      }
    };

    const downloadButton = await browser.asControl(downloadButtonSelector);
    await downloadButton.press();
    const downloadPage = await browser.asControl(downloadPageSelector);
    const content = await downloadPage.getContent();
    await expect(content.length).toBe(1);
    const backButton = await browser.asControl(backButtonSelector);
    await backButton.press();
    const downloadButtonRet = await browser.asControl(downloadButtonSelector);
    await expect(await downloadButtonRet.getProperty('text')).toContain("Download");
  });
});
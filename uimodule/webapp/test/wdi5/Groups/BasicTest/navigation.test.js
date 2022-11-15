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

describe("Main view:", async () => {
  it("should navigate To and Back from Create View", async () => {
    const createButton = await CreateView.getNavCreateSingleButton();
    await createButton.press();
    const createPage = await CreateView.getNavCreateSinglePage();
    const content = await createPage.getContent();
    await expect(content.length).toBe(1);
    const backButton = await MainView.getBackButton();
    await backButton.press();
    const createButtonRet = await CreateView.getNavCreateSingleButton();
    await expect(await createButtonRet.getProperty('text')).toContain(CreateView.navCreateButtonText);
  });

  it("should navigate To and Back from Mass View", async () => {
    const massButton = await MassView.getNavMassButton();
    await massButton.press();
    const massPage = await MassView.getNavMassPage();
    const content = await massPage.getContent();
    await expect(content.length).toBe(1);
    const backButton = await MainView.getBackButton();
    await backButton.press();
    const massButtonRet = await MassView.getNavMassButton();
    await expect(await massButtonRet.getProperty('text')).toContain(MassView.navMassButtonText);
  });

  it("should navigate To and Back from Download View", async () => {
    const downloadButton = await MainView.getNavDownloadButton();
    await downloadButton.press();
    const downloadPage = await DownloadView.getNavDownloadPage();
    const content = await downloadPage.getContent();
    await expect(content.length).toBe(1);
    const backButton = await MainView.getBackButton();
    await backButton.press();
    const downloadButtonRet = await MainView.getNavDownloadButton();
    await expect(await downloadButtonRet.getProperty('text')).toContain(DownloadView.navDownloadButtonText);
  });
});
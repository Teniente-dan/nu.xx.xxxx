/* jshint esversion: 11 */
const Page = require("./Page");
class DownloadView extends Page {
  constructor() {
    super();
    this._viewName = "nu.<%= module %>.<%= appname %>.view.Download";
    this.navDownloadButtonText = "Download";
  }

  async init() {
    this.DownConfig = await this._getCsvConfig('./fieldBuilder/downloadFields.csv');
  }

  async open() {
    await super.open(`#/download`);
  }

  downloadSelectorBuilder() {
    return this._selectorBuilder( this.DownConfig, this._viewName );
  }

  async getNavDownloadPage() {
    return await browser.asControl(this._getNavPage(this._viewName));
  }

}

module.exports = new DownloadView();
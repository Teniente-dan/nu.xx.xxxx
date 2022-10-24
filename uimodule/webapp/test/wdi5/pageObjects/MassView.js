/* jshint esversion: 11 */
const Page = require("./Page");

class MassView extends Page {
    async open() {
        await super.open(`#/mass`);
    }

    _viewName = "nu.<%= module %>.<%= appname %>.view.Mass"

    // async getCheckbox() {
    //     const cbSelector1 = {
    //         wdio_ui5_key: "cbSelector1",
    //         selector: {
    //             id: "idCheckbox",
    //             viewName: this._viewName,
    //             controlType: "sap.m.CheckBox"
    //         }
    //     }

    //     return await browser.asControl(cbSelector1)
    // }
}

module.exports = new MassView()
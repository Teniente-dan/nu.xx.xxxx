const Page = require("./Page")

class CreateView extends Page {
    async open() {
        await super.open(`#/create`)
    }

    _viewName = "nu.<%= module %>.<%= appname %>.view.Create"

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

module.exports = new CreateView()
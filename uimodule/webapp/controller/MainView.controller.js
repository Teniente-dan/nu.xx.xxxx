/* eslint-disable spaced-comment */
/* eslint-disable no-var */
/* jshint esnext: true */
sap.ui.define(
  ["./BaseController",
    "sap/m/MessageBox"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.m.MessageBox} MessageBox 
   */
  function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("nu.<%= module %>.<%= appname %>.controller.MainView", {
      onInit: function () {
        this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        this.oRouter.getRoute("mainView").attachPatternMatched(this.onPageLoaded, this);
      },
      /**
       * @override
       */
      onPageLoaded: function () {
        this.initView();
      },
      initView: function () {
        this.appConfig = this.getOwnerComponent().appConfig.getData();
      },
      onPressSingle: function (oEvent) {
        this.oRouter.navTo("createView");
      },
      onPressMass: function (oEvent) {
        this.oRouter.navTo("massView");
      },
      onPressDownloadTemplate: function (oEvent) {
        //directly download the template file
        this.byId("downButton").setBusy(true);
        this.getTemplateHeaders().then((oHeaders) => {
            this.getOwnerComponent().oXlsxUtils.getTemplate(undefined, oHeaders, this.appConfig.templateName);
          })
          .catch((err) => {
            if (err) {
              MessageBox.error(err);
            }
          })
          .finally(() => {
            this.byId("downButton").setBusy(false);
          });
      },
      onPressDownloadPlant: function (oEvent) {
        this.oRouter.navTo("downloadView");
      },
      getTemplateHeaders: function () {
        var url = "/actionSet";
        var that = this;
        var oPayload = {
          actionKey: "TEMPLATE",
          toXLSX: []
        };
        console.trace(`TEMPLATE: ${JSON.stringify(oPayload)}`);
        return new Promise(function (resolve, reject) {
          that.getModel().create(url, oPayload, {
            success: function (res) {
              console.trace(`TEMPLATESucc: ${JSON.stringify(res)}`);
              if (res.toXLSX.results && res.toXLSX.results.length > 0) {
                var oHeaders = {};
                for (const key in res.toXLSX.results[0]) {
                  if (key !== "__metadata") {
                    oHeaders[res.toXLSX.results[0][key]] = "";
                  }
                }
                return resolve(oHeaders);
              }
              return reject();
            },
            error: function (err) {
              console.trace(`TEMPLATEErr: ${JSON.stringify(err)}`);
              if (err.responseText.indexOf("<message>") > -1) {
                var message = err.responseText.substring(err.responseText.indexOf("<message>") + 9, err.responseText.indexOf("</message>"));
                MessageBox.error(message);
              } else if (err.responseText) {
                var error = `${err.statusCode}:`;
                JSON.parse(err.responseText).error.innererror.errordetails.forEach((err) => {
                  error = error ? `${error}\n${err.message}` : err.message;
                });
                MessageBox.error(error);
              } else {
                MessageBox.error(`${err.statusCode}: ${err.message}`);
              }
              return reject();
            }
          });
        });
      }
    });
  }
);
// @ts-nocheck
/* eslint-disable no-console */
/* eslint-disable no-var */
sap.ui.define([
  "./BaseController",
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/Fragment",
  "sap/m/MessageBox",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (
  BaseController,
  JSONModel,
  Fragment,
  MessageBox,
  Filter,
  FilterOperator
) {
  "use strict";

  return BaseController.extend("nu.<%= module %>.<%= appname %>.controller.Mass", {
    dontClear: false, //-----UPDATE
    onInit: function () {
      this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      this.oRouter.getRoute("massView").attachPatternMatched(this.onPageLoaded, this);
    },
    initView: function () {
      this.setModel(new JSONModel({
        in14: true,
        in15: false,
      }), "datosGral");
      this.datosGral = this.getModel("datosGral");
      this.appConfig = this.getOwnerComponent().appConfig.getData();
    },
    onPageLoaded: function (oEvent) {
      this.initView();
    },
    getTemplateHeaders: function () {
      var url = "/actionSet";
      var that = this;
      var oPayload = {
        actionKey: "TEMPLATE",
        toXLSX: []
      };
      this.getModel().setUseBatch(false);
      console.trace(`TEMPLATE_MASS: ${JSON.stringify(oPayload)}`);
      return new Promise(function (resolve, reject) {
        that.getModel().create(url, oPayload, {
          success: function (res) {
            console.trace(`TEMPLATE_MASS_SUCC: ${JSON.stringify(res)}`);
            if (res.toXLSX.results && res.toXLSX.results.length > 0) {
              var oHeaders = [];
              for (const key in res.toXLSX.results[0]) {
                if (key !== "__metadata" && res.toXLSX.results[0][key]) {
                  oHeaders.push(res.toXLSX.results[0][key]);
                }
              }
              return resolve(oHeaders);
            }
            return reject();
          },
          error: function (err) {
            console.trace(`TEMPLATE_MASS_ERR: ${JSON.stringify(err)}`);
            return reject(err);
          }
        });
      });
    },
    onValueHelp: function (oEvent, param) {
      var oView = this.getView();
      if (!this._oDialog) {
        Fragment.load({
          id: oView.getId(),
          name: this.appConfig.fragValueHelp,
          controller: this,
        }).then(
          function (oDialog) {
            // connect dialog to the root view of this component (models, lifecycle)
            oView.addDependent(oDialog);
            console.log("Frag Search Help");
            this.loadFragSpecific(param);
            this._oDialog = oDialog;
            this._oDialog.param = param;
            oDialog.open();
          }.bind(this)
        );
      } else {
        this.loadFragSpecific(param);
        this._oDialog.open();
        this._oDialog.param = param;
      }
    },
    loadFragSpecific: function (param) {
      console.trace(`loadFrafSpecific: ${JSON.stringify(param)}`);
      switch (param) {
        case "in17":
          this.catalogs.ownValueHelp.bind(this)();
          break;
        default:
          break;
      }
    },
    handleValueItemPress: function (oEvent) {
      var param = this._oDialog.param;
      var aContexts = oEvent.getParameter("selectedContexts");
      var selectedItem = aContexts[0].getModel().getProperty(aContexts[0].getPath());
      var datosGral = this.datosGral.getData();
      if (aContexts && aContexts.length) {
        var field = this.getValueHelpToField(param);
        datosGral[param] = selectedItem[field];
      }
      this.datosGral.setData(datosGral);
      oEvent.getSource().getBinding("items").filter([]);
    },
    getValueHelpToField: function (param) {
      var fieldMap = {
        "in17": "strkorr",
      };
      return fieldMap[param];
    },
    onUpload: function (oEvent) {
      var datosGral = this.datosGral.getData();
      if (!datosGral.in1) {
        return MessageBox.error("Please select a file");
      }
      if (!this.oGlobalBusyDialog) {
        this.oGlobalBusyDialog = new sap.m.BusyDialog();
      }
      if (this.toMain && this.toMain.length > 0) {
        this.oGlobalBusyDialog.open();
        this.sendToBackForCreate(this.toMain)
          .then(function (result) {
            // setTimeout(() => {
            //   this.closeView();
            // }, 2000);
          })
          .catch(function (err) {
            if (err) {
              MessageBox.error(err);
            }
          })
          .finally(function () {
            this.oGlobalBusyDialog.close();
          }.bind(this));
      }
    },
    sendToBackForCreate: function (arrToMain) {
      var datosGral = this.datosGral.getData();
      var url = "/actionSet";
      var that = this;
      var oPayload = {
        actionKey: "UPLOAD",
        toMain: arrToMain.map((item) => {
          // ----------------------------------------------------------------------------------------------FSCODE
          // ----------------------------------------------------------------------------------------------------
          item.r1 = datosGral.in14 ? "X" : "";
          item.as4text = (datosGral.in14 ? (datosGral.in16 || "") : "").substring(0, 30); //DESCRIPTION
          item.r2 = datosGral.in15 ? "X" : "";
          item.strkorr = datosGral.in15 ? (datosGral.in17 || "") : ""; //OWN REQUEST
          return item;
        }),
        toReturn: [],
        toOutput: [],
        toError: [],
      };
      console.warn(`oPayload: ${JSON.stringify(oPayload.toMain)}`);
      this.getModel().setUseBatch(false);
      console.trace(`UPLOAD: ${JSON.stringify(oPayload)}`);
      if (window.location.href.includes("localhost")) {
        this.getModel().setHeaders({
          "testCase": 0,
        });
      }
      return new Promise(function (resolve, reject) {
        that.getModel().create(url, oPayload, {
          success: function (res) {
            console.trace(`UPLOAD_SUCC: ${JSON.stringify(res)}`);
            var toDisplay = [];
            if (res.toReturn.results) {
              toDisplay.push(...res.toReturn.results);
            }
            if (res.toError.results) {
              toDisplay.push(...res.toError.results);
            }
            if (res.toOutput.results) {
              toDisplay.push(...res.toOutput.results);
            }
            if (toDisplay && toDisplay.length > 0) {
              var mapFields = [
                // ----------------------------------------------------------------------------------------------FSCODE
                // ----------------------------------------------------------------------------------------------------
                "message", // toReturn
                "Msg", // toError
                'Sorg', 'Msg' // toOutput
              ];
              return resolve(that.displayResults(toDisplay, [...new Set(mapFields)]));
            }
            return reject(MessageBox.error(that.get18("EmptyResponseFromBackend")));
          },
          error: function (err) {
            console.trace(`UPLOAD_ERR: ${JSON.stringify(err)}`);
            if (err.responseText.indexOf("<message>") > -1) {
              var message = err.responseText.substring(err.responseText.indexOf("<message>") + 9, err.responseText.indexOf("</message>"));
              MessageBox.error(message);
            } else if (err.responseText) {
              var error = `${err.statusCode}:`;
              try {
                JSON.parse(err.responseText).error.innererror.errordetails.forEach((err) => {
                  error = error ? `${error}\n${err.message}` : err.message;
                });
              } catch (e) {
                error = `${err.statusCode}: ${err.responseText}`;
              }
              MessageBox.error(error);
            } else {
              MessageBox.error(`${err.statusCode}: ${err.message}`);
            }
            return reject();
          }
        });
      });
    },
    displayResults: function (arrResults, arrProperty) {
      if (arrResults.length > 0) {
        var oResults = arrResults.map((result) => {
          // join value of array into string
          var value = arrProperty.map((property) => {
            return result[property];
          }).join(" ");
          var okFlow = value.split("&&");
          if (okFlow.length > 1 || new RegExp(/\s[Ss]([uU][cC].*[sS]*)\w+/g).test(value)) { //-----UPDATE
            return {
              C1: okFlow.length > 1 ? okFlow[1] : value, //-----UPDATE
              state: "Success"
            };
          }
          return {
            C1: value,
            state: "Error"
          };
        });
        //-----UPDATE
        if (!this.dontClear) {
          this.byId("fileuploader").clear();
        }
        this.getOwnerComponent().oFlowFrag.open(oResults, "Creation Results", this.getView());

      }
    },
    closeView: function () {
      this.initView();
      this.toMain = {};
      this.oRouter.navTo("midOptionView");
    },
    /* ===========================================================
     Managed Upload
    ============================================================= */
    onHandleUploadStart: function (oEvent) {
      // this.datosGral.setProperty("/atta", true);
      this.templateFile = oEvent.getParameter("files")[0];
    },
    onHandleUploadComplete: function (oEvent) {
      this.getTemplateHeaders().then((oHeaders) => {
          this.oHeaders = oHeaders;
        })
        .then(() => {
          this.getOwnerComponent().getExcelUtils().readTemplate(this.templateFile, true)
            .then(
              //-----UPDATE
              (jsonObj) => {
                if (this.valHeader(jsonObj[0], this.oHeaders)) {
                  this.toMain = this.mapToBackend(jsonObj);
                }
                console.log('%c', 'font-weight: bold; background-color: lightblue;font-size: large;');
              })
            .catch((error) => {
              this.byId("fileuploader").clear(); //-----UPDATE
              MessageBox.error(error.responseText || error.message);
            })
            .finally(() => {
              // this.datosGral.setProperty("/atta", false);
            });
        })
        .catch(() => {
          MessageBox.error("No Headers Found");
        });
    },
    mapToBackend: function (jsonObj) {
      var toMain = [];
      jsonObj.forEach((row) => {
        // ----------------------------------------------------------------------------------------------FSCODE
        // ----------------------------------------------------------------------------------------------------
        toMain.push({
          vkorg: (row[this.oHeaders[0]] || "").toString().substring(0, 6),
          bukrs: (row[this.oHeaders[1]] || "").toString(),
          // vtext: row[this.oHeaders[1]] || "",
          // waers: row[this.oHeaders[2]] || "",
          // name1: row[this.oHeaders[3]] || "",
          // sort1: row[this.oHeaders[4]] || "",
          // street: row[this.oHeaders[5]] || "",
          // houseNum1: row[this.oHeaders[6]] || "",
          // postCode1: row[this.oHeaders[7]] || "",//(row[this.oHeaders[7]] || "").substring(0, 40),
          // city1: row[this.oHeaders[8]] || "",
          // country: row[this.oHeaders[9]] || "",
          // region: row[this.oHeaders[10]] || "",
          // langu: row[this.oHeaders[11]] || ""
        });
      });
      return toMain;
    },
    handleSearch: function (evt) {
      var param = this._oDialog.param;
      var sValue = evt.getParameter("value");
      var oBinding = evt.getParameter("itemsBinding");
      var filterProperty1;
      switch (param) {
        case "in17":
          filterProperty1 = [new Filter("strkorr", FilterOperator.Contains, sValue)];
          break;
        default:
          break;
      }
      oBinding.filter(new Filter({
        filters: filterProperty1,
        and: false
      }));
    }
  });
});
/* eslint-disable @sap/ui5-jsdocs/no-jsdoc */
/* eslint-disable max-lines */
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
  //-----UPDATE
  return BaseController.extend("nu.<%= module %>.<%= appname %>.controller.Create", {
    onInit: function () {
      this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      this.oRouter.getRoute("createView").attachPatternMatched(this.onPageLoaded, this);
    },
    initView: function () {
      this.setModel(new JSONModel({
        in14: true,
        in15: false,
      }), "datosGral");
      this.datosGral = this.getModel("datosGral");
      this.appConfig = this.getOwnerComponent().appConfig.getData();
      this.specInputs = this.appConfig.specInputs;
    },
    onPageLoaded: function (oEvent) {
      this.initView();
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
      // ----------------------------------------------------------------------------------------------FSCODE
      // ----------------------------------------------------------------------------------------------------
      switch (param) {
        case "in1":
          this.catalogs.vkorgValueHelp.bind(this)();
          break;
        case "in2":
          this.catalogs.bukrsValueHelp.bind(this)();
          // this.applyBaseFilter("in2");
          break;
          // ownRequest
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
      var selectedItem;
      if (this.specInputs.includes(param)) {
        selectedItem = aContexts[0].getModel().getProperty(aContexts[0].getPath());
      } else {
        selectedItem = aContexts[0].getModel('common').getProperty(aContexts[0].getPath());
      }
      var datosGral = this.datosGral.getData();
      if (aContexts && aContexts.length) {
        var field = this.getValueHelpToField(param);
        if (typeof (field) === 'object') {
          for (const key in field) {
            if (Array.isArray(field[key])) {
              var mutable = field[key][1];
              if (mutable) {
                datosGral[key] = selectedItem[field[key][0]];
              } else {
                datosGral[key] = datosGral[key] ? datosGral[key] : selectedItem[field[key][0]];
              }
            } else {
              datosGral[key] = selectedItem[field[key]];
            }
          }
        } else {
          datosGral[param] = selectedItem[field];
        }
      }
      this.datosGral.setData(datosGral);
      oEvent.getSource().getBinding("items").filter([]);
    },
    getValueHelpToField: function (param) {
      // ----------------------------------------------------------------------------------------------FSCODE
      // ----------------------------------------------------------------------------------------------------
      var fieldMap = {
        "in1": "Vkorg",
        "in2": {
          "in1": "Werks",
          "in2": "Lgort"
        },
        // own request
        "in17": "strkorr"
      };
      return fieldMap[param];
    },
    onInputChange: function (oEvent, param) {
      var inVal = oEvent.getSource().getValue();
      switch (param) {
        // ----------------------------------------------------------------------------------------------FSCODE
        // ----------------------------------------------------------------------------------------------------
        case "in1":
          this.valMainFieldOrg(inVal);
          break;
        default:
          break;
      }
    },
    valMainFieldOrg: function (param) {
      // var url = `/Val${mainField}Set('${param}')`;
      var that = this;
      this.getModel().setUseBatch(false);
      return Promise.resolve(true);
      // return new Promise(function (resolve, reject) {
      //   that.getModel().read(url, {
      //     success: function (oData) {
      //       // oData.message = ""
      //       if (oData.message) {
      //         reject(MessageBox.error(oData.message));
      //       }
      //       resolve(true);
      //     },
      //     error: function (oError) {
      //       MessageBox.error(oError.message);
      //       reject(oError);
      //     }
      //   });
      // });
    },
    valAllFields: function () {
      var datosGral = this.datosGral.getData();
      var valFields = this.appConfig.valFields;
      valFields.forEach((field) => {
        if (!datosGral[field]) {
          this.byId(field).setValueState(sap.ui.core.ValueState.Error);
        } else {
          this.byId(field).setValueState(sap.ui.core.ValueState.None);
        }
      });
      var res = valFields.every((field) => {
        return datosGral[field];
      });
      if (!res) {
        MessageBox.error("Please fill all fields with valid inputs");
      }
      res = this.valTrOptions(res);
      return res;
    },
    valTrOptions: function (res) {
      var datosGral = this.datosGral.getData();
      if (datosGral.in14 && !datosGral.in16) {
        MessageBox.error("Please enter a TR Description");
        return false;
      }
      if (datosGral.in15 && !datosGral.in17) {
        MessageBox.error("Please select a TR from the list");
        return false;
      }
      return res;
    },
    onCreate: function (oEvent) {
      if (!this.oGlobalBusyDialog) {
        this.oGlobalBusyDialog = new sap.m.BusyDialog();
      }
      this.oGlobalBusyDialog.open();
      setTimeout(() => {
        this.createFlow()
          .catch((err) => {
            console.log(`%c${err}`, 'font-weight: bold; background-color: lightblue;font-size: large;')
          })
          .finally(() => {
            this.oGlobalBusyDialog.close();
          });
      }, 1);
    },
    createFlow: function () {
      var datosGral = this.datosGral.getData();
      return new Promise(function (resolve, reject) {
        this.valMainFieldOrg(datosGral.in1).then(function (result) {
            if (result && this.valAllFields()) {
              return resolve(this.sendToBackForCreate());
            } 
            return reject(false);
          }.bind(this))
          .catch(function (oError) {
            return reject(oError);
          });
      }.bind(this));
    },
    sendToBackForCreate: function () {
      var datosGral = this.datosGral.getData();
      var url = "/actionSet";
      var that = this;
      var oPayload = {
        actionKey: "CREATE",
        // ----------------------------------------------------------------------------------------------FSCODE
        // ----------------------------------------------------------------------------------------------------
        toMain: [{
          vkorg: (this.replaceSpaces(datosGral.in1) || ""), //.toString().substring(0, 4),
          bukrs: (datosGral.in2 || "").toString(),
          as4text: datosGral.in14 ? (datosGral.in16 || "") : "", //DESCRIPTION
          strkorr: datosGral.in15 ? (datosGral.in17 || "") : "", //OWN REQUEST
          r1: datosGral.in14 ? "X" : "",
          r2: datosGral.in15 ? "X" : "",
        }],
        toReturn: []
      };
      console.warn(`oPayload: ${JSON.stringify(oPayload.toMain)}`);
      this.getModel().setUseBatch(false);
      console.trace(`CREATE: ${JSON.stringify(oPayload)}`);
      if (window.location.href.includes("localhost")) {
        this.getModel().setHeaders({
          "testCase": 0
        });
      }      
      return new Promise(function (resolve, reject) {
        that.getModel().create(url, oPayload, {
          success: function (res) {
            console.trace(`CREATESucc: ${JSON.stringify(res)}`);
            if (res.toReturn.results) {
              return resolve(that.displayResults(res.toReturn.results));
            }
            return resolve(true);
          },
          error: function (err) {
            console.trace(`CREATEErr: ${JSON.stringify(err)}`);
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
    displayResults: function (arrResults) {
      // ----------------------------------------------------------------------------------------------FSCODE
      // ----------------------------------------------------------------------------------------------------
      var message = "message";
      if (arrResults.length > 0) {
        var okFlow = arrResults[0][message].split("&&");
        if (okFlow.length > 1 || new RegExp(/\s[Ss]([uU][cC].*[sS]*)\w+/g).test(arrResults[0][message])) { //-----UPDATE
          MessageBox.success(okFlow.length > 1 ? okFlow[1] : arrResults[0][message], { //-----UPDATE
            onClose: function () {
              this.closeView();
            }.bind(this)
          });
        } else {
          var oResults = arrResults.map((result) => {
            return result[message];
          }).join("\n");
          MessageBox.error(oResults);
        }
      }
    },
    closeView: function () {
      this.initView();
      this.oRouter.navTo("MainView");
    },
    handleSearch: function (evt) {
      var param = this._oDialog.param;
      var sValue = evt.getParameter("value");
      var oBinding = evt.getParameter("itemsBinding");
      var filterProperty1;
      // ----------------------------------------------------------------------------------------------FSCODE
      // ----------------------------------------------------------------------------------------------------
      switch (param) {
        case "in1":
          filterProperty1 = [
            new Filter("Vkorg", FilterOperator.Contains, sValue)
          ];
          break;
        case "in2":
          filterProperty1 = [
            new Filter("Bukrs", FilterOperator.Contains, sValue),
            new Filter("Butxt", FilterOperator.Contains, sValue),
            new Filter("Waers", FilterOperator.Contains, sValue)
          ];
          break;
          // own request
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
    },
    applyBaseFilter: function (param) {
      var oFilter;
      var gralData = this.datosGral.getData();
      // ----------------------------------------------------------------------------------------------FSCODE
      // ----------------------------------------------------------------------------------------------------
      switch (param) {
        case "in1":
          break;
        case "in2":
          if (gralData.in1) {
            this.applySpecFilter([{
              field: "Werks",
              value: gralData.in1
            }]);
          }
          break;
        default:
          break;
      }
      return oFilter;
    }
  });
});
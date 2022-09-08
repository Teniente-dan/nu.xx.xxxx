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

  return BaseController.extend("nu.xx.xxxx.controller.Create", {
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
      // FSCODE
      switch (param) {
        case "in1":          
          this.catalogs.salesOrgValueHelp.bind(this)();
          break;
        case "in2":          
          this.catalogs.bukrsValueHelp.bind(this)();
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
      if (this.specInputs.includes(param)) {
        var selectedItem = aContexts[0].getModel().getProperty(aContexts[0].getPath());
      } else {
        var selectedItem = aContexts[0].getModel('common').getProperty(aContexts[0].getPath());
      }
      var datosGral = this.datosGral.getData();
      if (aContexts && aContexts.length) {
        var field = this.getValueHelpToField(param);
        datosGral[param] = selectedItem[field];
      }
      this.datosGral.setData(datosGral);
      oEvent.getSource().getBinding("items").filter([]);
    },
    getValueHelpToField: function (param) {
      // FSCODE
      var fieldMap = {
        "in1": "Vkorg",
        "in2": "Bukrs",
        // own request
        "in17": "strkorr"
      };
      return fieldMap[param];
    },
    onInputChange: function (oEvent, param) {
      var inVal = oEvent.getSource().getValue();
      switch (param) {
        // FSCODE
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
              resolve(this.sendToBackForCreate());
            } else {
              reject(false);
            }
          }.bind(this))
          .catch(function (oError) {
            reject(oError);
          });
      }.bind(this));
    },
    sendToBackForCreate: function () {
      var datosGral = this.datosGral.getData();
      var url = "/actionSet";
      var that = this;
      var oPayload = {
        actionKey: "CREATE",
        // FSCODE
        toMain: [{
          vkorg: this.replaceSpaces(datosGral.in1),
          bukrs: datosGral.in2,
          as4text: datosGral.in14 ? (datosGral.in16 || "") : "",
          strkorr: datosGral.in15 ? (datosGral.in17 || "") : "",
          r1: datosGral.in14 ? "X" : "",
          r2: datosGral.in15 ? "X" : "",
        }],
        toReturn: []
      };
      this.getModel().setUseBatch(false);
      return new Promise(function (resolve, reject) {
        that.getModel().create(url, oPayload, {
          success: function (res) {
            if (res.toReturn.results) {
              resolve(that.displayResults(res.toReturn.results));
            }
            resolve(true);
          },
          error: function (err) {
            MessageBox.error(err.message);
            reject(err);
          }
        });
      });
    },
    displayResults: function (arrResults) {
      if (arrResults.length > 0) {
        var okFlow = arrResults[0].message.split("&&");
        if (okFlow.length > 1) {
          MessageBox.success(okFlow[1], {
            onClose: function () {
              this.closeView();
            }.bind(this)
          });
        } else {
          var oResults = arrResults.map((result) => {
            return result.message;
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
      // FSCODE
      switch (param) {
        case "in1":
          filterProperty1 = [new Filter("Vkorg", FilterOperator.Contains, sValue)];
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
    }
  });
});
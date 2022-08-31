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

  return BaseController.extend("nu.sd.assignSales.controller.Create", {
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
      this.appConfig = this.getOwnerComponent().appConfig;
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
      switch (param) {
        case "in1":
          this.salesOrgValueHelp();
          break;
        case "in3":
          this.statisticsValueHelp();
          break;
        case "in6":
          this.streetValueHelp();
          break;
        case "in10":
          this.countryValueHelp();
          break;
        case "in11":
          this.regionValueHelp();
          break;
        case "in12":
          this.languageValueHelp();
          break;
        case "in17":
          this.ownValueHelp();
          break;
        default:
          break;
      }
    },
    countryValueHelp: function () {
      var tableSelectId = this.byId('TableSelectId');
      tableSelectId.unbindAggregation("items");
      var tableSelectTemplate = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({
            text: "{common>Land1}"
          }),
          new sap.m.Text({
            text: "{common>Landx}"
          }),
          new sap.m.Text({
            text: "{common>Natio}"
          })
        ]
      });
      this.byId('valueHelpField1').setText('Country/Region');
      this.byId("col2").setVisible(true);
      this.byId('valueHelpField2').setText('Name');
      this.byId("col3").setVisible(true);
      this.byId('valueHelpField3').setText('Nationality');
      this.byId("col4").setVisible(false);
      this.byId("col5").setVisible(false);
      this.byId("col6").setVisible(false);
      this.byId("col7").setVisible(false);
      this.byId("col8").setVisible(false);
      this.byId("col9").setVisible(false);
      tableSelectId.bindAggregation("items", "common>/countrySet", tableSelectTemplate);
    },
    streetValueHelp: function () {
      var tableSelectId = this.byId('TableSelectId');
      tableSelectId.unbindAggregation("items");
      var tableSelectTemplate = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({
            text: "{common>CityName}"
          }),
          new sap.m.Text({
            text: "{common>McStreet}"
          }),
          new sap.m.Text({
            text: "{common>McCity}"
          }),
          new sap.m.Text({
            text: "{common>CityExt}"
          }),
          new sap.m.Text({
            text: "{common>Region}"
          }),
          new sap.m.Text({
            text: "{common>Country}"
          }),
          new sap.m.Text({
            text: "{common>Langu}"
          }),
          new sap.m.Text({
            text: "{common>StrtCode}"
          }),
          new sap.m.Text({
            text: "{common>CityCode}"
          })
        ]
      });
      this.byId('valueHelpField1').setText('City');
      this.byId("col2").setVisible(true);
      this.byId('valueHelpField2').setText('Street');
      this.byId("col3").setVisible(true);
      this.byId('valueHelpField3').setText('City 1');
      this.byId("col4").setVisible(true);
      this.byId('valueHelpField4').setText('City Extension');
      this.byId("col5").setVisible(true);
      this.byId('valueHelpField5').setText('Region');
      this.byId("col6").setVisible(true);
      this.byId('valueHelpField6').setText('Country/Region');
      this.byId("col7").setVisible(true);
      this.byId('valueHelpField7').setText('Language');
      this.byId("col8").setVisible(true);
      this.byId('valueHelpField8').setText('Street No');
      this.byId("col9").setVisible(true);
      this.byId('valueHelpField9').setText('City No');
      tableSelectId.bindAggregation("items", "common>/streetSet", tableSelectTemplate);
    },

    regionValueHelp: function () {
      var tableSelectId = this.byId('TableSelectId');
      tableSelectId.unbindAggregation("items");
      var tableSelectTemplate = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({
            text: "{common>Land1}"
          }),
          new sap.m.Text({
            text: "{common>Bland}"
          }),
          new sap.m.Text({
            text: "{common>Bezei}"
          })

        ]
      });
      this.byId('valueHelpField1').setText('C/R');
      this.byId("col2").setVisible(true);
      this.byId('valueHelpField2').setText('Rg');
      this.byId("col3").setVisible(true);
      this.byId('valueHelpField3').setText('Description');
      this.byId("col4").setVisible(false);
      this.byId("col5").setVisible(false);
      this.byId("col6").setVisible(false);
      this.byId("col7").setVisible(false);
      this.byId("col8").setVisible(false);
      this.byId("col9").setVisible(false);
      tableSelectId.bindAggregation("items", "common>/regionSet", tableSelectTemplate);
    },

    languageValueHelp: function () {
      var tableSelectId = this.byId('TableSelectId');
      tableSelectId.unbindAggregation("items");
      var tableSelectTemplate = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({
            text: "{common>Spras}"
          }),
          new sap.m.Text({
            text: "{common>Sptxt}"
          })

        ]
      });
      this.byId('valueHelpField1').setText('Language');
      this.byId("col2").setVisible(true);
      this.byId('valueHelpField2').setText('Name of Language');
      this.byId("col3").setVisible(false);
      this.byId("col4").setVisible(false);
      this.byId("col5").setVisible(false);
      this.byId("col6").setVisible(false);
      this.byId("col7").setVisible(false);
      this.byId("col8").setVisible(false);
      this.byId("col9").setVisible(false);
      tableSelectId.bindAggregation("items", "common>/languageSet", tableSelectTemplate);
    },
    ownValueHelp: function () {
      var tableSelectId = this.byId('TableSelectId');
      tableSelectId.unbindAggregation("items");
      var tableSelectTemplate = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({
            text: "{strkorr}"
          }),
          new sap.m.Text({
            text: "{as4text}"
          })
        ]
      });
      this.byId('valueHelpField1').setText('Parent Request');
      this.byId("col2").setVisible(true);
      this.byId('valueHelpField2').setText('Short Description');
      this.byId("col3").setVisible(false);
      this.byId("col4").setVisible(false);
      this.byId("col5").setVisible(false);
      this.byId("col6").setVisible(false);
      this.byId("col7").setVisible(false);
      this.byId("col8").setVisible(false);
      this.byId("col9").setVisible(false);
      tableSelectId.bindAggregation("items", "/salesOwnSet", tableSelectTemplate);
    },

    statisticsValueHelp: function () {
      var tableSelectId = this.byId('TableSelectId');
      tableSelectId.unbindAggregation("items");
      var tableSelectTemplate = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({
            text: "{Waers}"
          }),
          new sap.m.Text({
            text: "{Ltext}"
          })
        ]
      });
      this.byId('valueHelpField1').setText('Crcy');
      this.byId("col2").setVisible(true);
      this.byId('valueHelpField2').setText('Long Text');
      this.byId("col3").setVisible(false);
      this.byId("col4").setVisible(false);
      this.byId("col5").setVisible(false);
      this.byId("col6").setVisible(false);
      this.byId("col7").setVisible(false);
      this.byId("col8").setVisible(false);
      this.byId("col9").setVisible(false);

      tableSelectId.bindAggregation("items", "/statsCurrSet", tableSelectTemplate);
    },

    salesOrgValueHelp: function () {
      var tableSelectId = this.byId('TableSelectId');
      tableSelectId.unbindAggregation("items");
      var tableSelectTemplate = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({
            text: "{Vkorg}"
          }),
          new sap.m.Text({
            text: "{Vtext}"
          })

        ]
      });
      this.byId('valueHelpField1').setText('SOrg.');
      this.byId("col2").setVisible(true);
      this.byId('valueHelpField2').setText('Name');
      this.byId("col3").setVisible(false);
      this.byId("col4").setVisible(false);
      this.byId("col5").setVisible(false);
      this.byId("col6").setVisible(false);
      this.byId("col7").setVisible(false);
      this.byId("col8").setVisible(false);
      this.byId("col9").setVisible(false);
      tableSelectId.bindAggregation("items", "/salesOrgSet", tableSelectTemplate);
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
      var fieldMap = {
        "in1": "Vkorg",
        "in3": "Waers",
        "in6": "McStreet",
        "in10": "Land1",
        "in11": "Bland",
        "in12": "Spras",
        "in17": "strkorr"
      };
      return fieldMap[param];
    },

    onSOChange: function (oEvent) {
      var so = oEvent.getSource().getValue();
      this.valMainFieldOrg(so);
    },
    valMainFieldOrg: function (param) {
      var mainField = this.appConfig.mainField;
      var url = `/Val${mainField}Set('${param}')`;
      // var url = "/plantValPlantSet";
      var that = this;
      this.getModel().setUseBatch(false);
      // return Promise.resolve(true);
      return new Promise(function (resolve, reject) {
        //   that.getModel().read(url, {
        //     success: function (oData) {
        //       // oData.message = ""
        //       if (oData.message) {
        //         reject(MessageBox.error(oData.message));
        //       }
        setTimeout(function () {
          resolve(true);
        }, 1000);
        //     },
        //     error: function (oError) {
        //       MessageBox.error(oError.message);
        //       reject(oError);
        //     }
        //   });
      });
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
      var res = datosGral.in1 && datosGral.in2 && datosGral.in3 && datosGral.in4 && datosGral.in6 && datosGral.in8 && datosGral.in9 && datosGral.in10 && datosGral.in11 && datosGral.in12;
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
        this.createSalesOrg().finally(() => {
          this.oGlobalBusyDialog.close();
        });
      }, 1);
    },
    createSalesOrg: function () {
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
        action: "CREATE",
        toMain: [{
          vkorg: datosGral.in1, //replaceSpaces(datosGral.in1),
          vtext: datosGral.in2,
          waers: datosGral.in3,
          name1: datosGral.in4,
          sort1: datosGral.in5,
          street: datosGral.in6,
          houseNum1: datosGral.in7,
          postCode1: datosGral.in8,
          city1: datosGral.in9,
          country: datosGral.in10,
          region: datosGral.in11,
          langu: datosGral.in12,
          as4text: datosGral.in14 ? (datosGral.in16 || "") : "",
          strkorr: datosGral.in15 ? (datosGral.in17 || "") : "",
          rad3: datosGral.in14 ? "X" : "",
          rad4: datosGral.in15 ? "X" : "",
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
          MessageBox.success(okFlow[1]);
          setTimeout(() => {
            this.closeView();
          }, 2000);
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
      switch (param) {
        case "in1":
          filterProperty1 = [new Filter("Vkorg", FilterOperator.Contains, sValue)];
          break;
        case "in3":
          filterProperty1 = new Filter({
            filters: [new Filter("Waers", FilterOperator.Contains, sValue)],
            and: false
          });
          break;
        case "in6":
          filterProperty1 = [
            new Filter("Region", FilterOperator.Contains, sValue),
            new Filter("Country", FilterOperator.Contains, sValue),
            new Filter("McStreet", FilterOperator.Contains, sValue)
          ];
          break;
        case "in10":
          filterProperty1 = [new Filter("Land1", FilterOperator.Contains, sValue)];
          break;
        case "in11":
          filterProperty1 = [
            new Filter("Land1", FilterOperator.Contains, sValue),
            new Filter("Bland", FilterOperator.Contains, sValue)
          ];
          break;
        case "in12":
          filterProperty1 = [new Filter("Spras", FilterOperator.Contains, sValue)];
          break;
        case "in17":
          filterProperty1 = [new Filter("strkorr", FilterOperator.Contains, sValue)];
          break;
        default:
          break;
      }
      oBinding.filter(filterProperty1);
    }
  });
});
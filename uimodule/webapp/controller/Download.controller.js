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

  return BaseController.extend("nu.<%= module %>.<%= appname %>.controller.Download", {
    onInit: function () {
      this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      this.oRouter.getRoute("downloadView").attachPatternMatched(this.onPageLoaded, this);
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
      console.trace(`loadFragSpecific: ${JSON.stringify(param)}`);
      // ----------------------------------------------------------------------------------------------FSCODE
      // ----------------------------------------------------------------------------------------------------
      switch (param) {
        case "in1":
        case "in2":
          this.f1ValueHelp();
          // this.applyBaseFilter("in3");          
          break;
        default:
          break;
      }
    },
    f1ValueHelp: function () {
      // ----------------------------------------------------------------------------------------------FSCODE
      // ----------------------------------------------------------------------------------------------------           
      this.catalogs.vkorgValueHelp.bind(this)();
    },
    handleValueItemPress: function (oEvent) {
      var param = this._oDialog.param;
      var aContexts = oEvent.getParameter("selectedContexts");
      var selectedItem = aContexts[0].getModel().getProperty(aContexts[0].getPath());
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
        "in2": "Vkorg",
        "in3": {
          "in1": ["Werks", false],
          "in3": "Lgort"
        },
      };
      return fieldMap[param];
    },
    inputToRange: function (param1, param2, field) {
      // sort array of strings
      var sRange = [param1 || "", param2 || ""].sort();
      if (sRange[0] === "") {
        sRange.shift();
      }
      return {
        Sign: (field || "").toUpperCase() || "I",
        Option: sRange[1] ? "BT" : "EQ",
        Low: sRange[0],
        High: sRange[1] ? sRange[1] : ""
      };
    },
    sendToBackForCreate: function () {
      var datosGral = this.datosGral.getData();
      var url = "/actionSet";
      var that = this;
      // ----------------------------------------------------------------------------------------------FSCODE
      // ----------------------------------------------------------------------------------------------------   
      var ranges = [{
        param1: datosGral.in1,
        param2: datosGral.in2,
        // },
        // {
        //   param1: datosGral.in1,
        //   param2: datosGral.in2,
        //   field: "Ekorg"
        // },{
        //   param1: datosGral.in3,
        //   param2: datosGral.in4,
        //   field: "Bukrs"
      }].reduce(function (acc, item) {
        var range = that.inputToRange(item.param1, item.param2, item.field);
        if (range.Low) {
          acc.push(range);
        }
        return acc;
      }, []);

      var oPayload = {
        actionKey: "DOWNLOAD",
        toRange: ranges,
        toXLSX: [],
        toReturn: []
      };
      this.getModel().setUseBatch(false);
      console.trace(`DOWNLOAD: ${JSON.stringify(oPayload)}`);
      return new Promise(function (resolve, reject) {
        that.getModel().create(url, oPayload, {
          success: function (res) {
            console.trace(`DOWNLOADSucc: ${JSON.stringify(res)}`);
            if (res.toReturn.results && res.toReturn.results.length > 0) {
              return reject(that.displayResults(res.toReturn.results));
            }
            if (res.toXLSX.results && res.toXLSX.results.length > 0) {
              return resolve(res.toXLSX.results);
            }
            return reject("No data found");
          },
          error: function (err) {
            console.trace(`DOWNLOADErr: ${JSON.stringify(err)}`);
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
            reject();
          }
        });
      });
    },
    displayResults: function (arrResults) {
      if (arrResults.length > 0) {
        var oResults = arrResults.map((result) => {
          return result.message;
        }).join("\n");
        MessageBox.error(oResults);
      }
    },
    closeView: function () {
      this.initView();
      this.oRouter.navTo("mainView");
    },

    onDownload: function (oEvent) {
      this.sendToBackForCreate()
        .then(function (arrResults) {
          arrResults = arrResults.map((line) => {
            for (var key in line) {
              if (key.includes("_metadata")) {
                delete line[key];
              }
            }
            return line;
          });
          this.getOwnerComponent().oXlsxUtils.onDownloadAsExcel(arrResults, this.appConfig.downloadFileName);
        }.bind(this))
        .then(function () {
          // this.closeView();
        }.bind(this))
        .catch(function (err) {
          if (err) {
            MessageBox.error(err);
          }
          console.log('%c error downloading', 'font-weight: bold; background-color: lightblue;font-size: large;')
        }.bind(this));
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
        case "in2":
          filterProperty1 = [
            new Filter("Vkorg", FilterOperator.Contains, sValue)
          ];
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
        case "in2":
          break;
        case "in3":
        case "in4":
          var vals = [gralData.in1, gralData.in2];
          if (vals.some(Boolean)) {
            this.applySpecFilter([{
                field: "Werks",
                value: gralData.in1
              },
              {
                field: "Werks",
                value: gralData.in2
              }
            ]);
          }
          break;
        default:
          break;
      }
      return oFilter;
    },
  });
});
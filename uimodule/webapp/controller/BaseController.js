/* eslint-disable no-var */
sap.ui.define(
  ["sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent",
    "nu/<%= module %>/<%= appname %>/model/formatter",
    "nu/<%= module %>/<%= appname %>/model/common_ValueHelp_Catalogs",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.ui.core.routing.History} History
   * @param {typeof sap.ui.core.UIComponent} UIComponent
   */
  function (Controller,
    History,
    UIComponent,
    formatter,
    common_ValueHelp_Catalogs,
    FilterOperator,
    Filter) {
    "use strict";

    return Controller.extend("nu.<%= module %>.<%= appname %>.controller.BaseController", {
      formatter: formatter,
      catalogs: common_ValueHelp_Catalogs,
      /**
       * Convenience method for getting the view model by name in every controller of the application.
       * @public
       * @param {string} sName the model name
       * @returns {sap.ui.model.Model} the model instance
       */
      getModel: function (sName) {
        return this.getView().getModel(sName);
      },

      /**
       * Convenience method for setting the view model in every controller of the application.
       * @public
       * @param {sap.ui.model.Model} oModel the model instance
       * @param {string} sName the model name
       * @returns {sap.ui.core.mvc.View} the view instance
       */
      setModel: function (oModel, sName) {
        return this.getView().setModel(oModel, sName);
      },

      /**
       * Convenience method for getting the resource bundle.
       * @public
       * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
       */
      getResourceBundle: function () {
        return this.getOwnerComponent().getModel("i18n").getResourceBundle();
      },

      /**
       * Method for navigation to specific view
       * @public
       * @param {string} psTarget Parameter containing the string for the target navigation
       * @param {Object.<string, string>} pmParameters? Parameters for navigation
       * @param {boolean} pbReplace? Defines if the hash should be replaced (no browser history entry) or set (browser history entry)
       */
      navTo: function (psTarget, pmParameters, pbReplace) {
        this.getRouter().navTo(psTarget, pmParameters, pbReplace);
      },

      getRouter: function () {
        return UIComponent.getRouterFor(this);
      },

      onNavBack: function () {
        const sPreviousHash = History.getInstance().getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.back();
        } else {
          this.getRouter().navTo("appHome", {}, true /* no history*/ );
        }
      },
      intputToUpperCase: function (oEvent) {
        // eslint-disable-next-line no-var
        var _oInput = oEvent.getSource();
        var val = _oInput.getValue();
        var outVal = val.toUpperCase();
        _oInput.setValue(outVal);
      },
      onPressToHome: function (oEvent) {
        this.getRouter().navTo("mainView");
      },
      replaceSpaces(val) {
        return val.replace(/^\s+|\s+$/g, "_");
      },
      valueHelpBuild: function (sSet, arrFields) {
        var tableSelectId = this.byId('TableSelectId');
        tableSelectId.unbindAggregation("items");
        var tableSelectTemplate = new sap.m.ColumnListItem({
          cells: arrFields.map(function (item) {
            return new sap.m.Text({
              text: `{${item.text}}`
            });
          })
        });
        for (let idx = 1; idx < 10; idx++) {
          if (arrFields[idx - 1]) {
            this.byId(`valueHelpField${idx}`).setText(arrFields[idx - 1].textName);
            this.byId(`col${idx}`).setVisible(true);
          } else {
            this.byId(`col${idx}`).setVisible(false);
          }
        }
        tableSelectId.bindAggregation("items", sSet, tableSelectTemplate);
      },
      applySpecFilter: function (arrFilter) {
        var oBinding = this.byId('TableSelectId').getBinding("items");
        var filterProperty1 = [];
        arrFilter.filter(x => x.value).forEach((filter) => {
          filterProperty1.push(new Filter(filter.field, FilterOperator.EQ, filter.value));
        });
        oBinding.filter(new Filter({
          filters: filterProperty1,
          and: false
        }));
      },
      get18: function (sText) {
        return this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(sText);
      },
      valHeader: function (XLSXoHeader, oHeaders) {
        var oHeader = Object.values(oHeaders);
        var oHeaderXLSX = Object.keys(XLSXoHeader);
        var error = `File is not valid. Please verify the template`;
        oHeader.forEach((key) => {
          if (oHeaderXLSX.indexOf(key) === -1) {
            throw new Error(error);
          }
        });
        oHeaderXLSX.forEach((key) => {
          if (oHeader.indexOf(key) === -1) {
            throw new Error(error);
          }
        });
        return true;
      },
      // baseOnlyNumbers: function (oEvent, noZero) {
      //   var _oInput = oEvent.getSource();
      //   var val = _oInput.getValue();
      //   var outVal = val.replace(/[^\d.]|\.(?=.*\.)/g, "");
      //   if (noZero) {
      //     outVal = val === 0 ? "" : val;
      //   }
      //   _oInput.setValue(isNaN(outVal) ? "" : outVal);
      // },
    });
  }
);
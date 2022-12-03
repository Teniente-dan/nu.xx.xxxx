sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/Device", "nu/<%= module %>/<%= appname %>/model/models", "./utils/XlsxUtils", "./utils/FlowFrag"],
  /**
   * @param {typeof sap.ui.core.UIComponent} UIComponent
   * @param {typeof sap.ui.Device} Device
   */
  function (UIComponent, Device, models, XlsxUtils, FlowFrag) {
    "use strict";

    return UIComponent.extend("nu.<%= module %>.<%= appname %>.Component", {
      metadata: {
        manifest: "json",
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * @public
       * @override
       */
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // enable routing
        this.getRouter().initialize();

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        //Fragmento de resultados de creacion de flujo 
        this.oFlowFrag = new FlowFrag(this);

        this.appConfig = this.getModel("appConfig");
      },
      getExcelUtils: function () {
        // Objeto para descargar y cargar XLSX template
        return new XlsxUtils(this);
      }
    });
  }
);
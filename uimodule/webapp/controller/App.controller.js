sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} BaseController
   */
  function (BaseController) {
    "use strict";

    return BaseController.extend("nu.<%= module %>.<%= appname %>.controller.App", {
      onInit() {},
    });
  }
);
/* eslint-disable @sap/ui5-jsdocs/no-jsdoc */
/* eslint-disable no-var */
sap.ui.define([
  "../localService/mockserver",
  "../localService/mockserverBase",
  "sap/m/MessageBox"
], function (mockserver,
  mockserverBase,
  MessageBox) {
  "use strict";

  var aMockservers = [];

  // initialize the mock server
  aMockservers.push(mockserver.init(), mockserverBase.init());

  Promise.all(aMockservers).catch(function (oError) {
    MessageBox.error(oError.message);
  }).finally(function () {
    // initialize the embedded component on the HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
  });
});
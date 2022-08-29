/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["nu/sd/assignSales/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});

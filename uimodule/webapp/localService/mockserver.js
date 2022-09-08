/* eslint-disable no-var */
sap.ui.define([
  "sap/ui/core/util/MockServer",
  "sap/ui/model/json/JSONModel",
  "sap/base/Log",
  "sap/base/util/UriParameters"
], function (MockServer, JSONModel, Log, UriParameters) {
  "use strict";

  var oMockServer,
    _sAppPath = "nu/xx/xxxx/",
    _sJsonFilesPath = _sAppPath + "localService/mockdata";

  var oMockServerInterface = {

    /**
     * Initializes the mock server asynchronously.
     * You can configure the delay with the URL parameter "serverDelay".
     * The local mock data in this folder is returned instead of the real data for testing.
     * @protected
     * @param {object} [oOptionsParameter] init parameters for the mockserver
     * @returns{Promise} a promise that is resolved when the mock server has been started
     */
    init: function (oOptionsParameter) {
      var oOptions = oOptionsParameter || {};

      return new Promise(function (fnResolve, fnReject) {
        var sManifestUrl = sap.ui.require.toUrl(_sAppPath + "manifest.json"),
          oManifestModel = new JSONModel(sManifestUrl);

        oManifestModel.attachRequestCompleted(function () {
          var oUriParameters = new UriParameters(window.location.href),
            // parse manifest for local metadata URI
            sJsonFilesUrl = sap.ui.require.toUrl(_sJsonFilesPath),
            oMainDataSource = oManifestModel.getProperty("/sap.app/dataSources/mainService"),
            sMetadataUrl = sap.ui.require.toUrl(_sAppPath + oMainDataSource.settings.localUri),
            // ensure there is a trailing slash
            sMockServerUrl = /.*\/$/.test(oMainDataSource.uri) ? oMainDataSource.uri : oMainDataSource.uri + "/";
          // ensure the URL to be relative to the application
          // sMockServerUrl = sMockServerUrl && new URI(sMockServerUrl).absoluteTo(sap.ui.require.toUrl(_sAppPath)).toString();

          // create a mock server instance or stop the existing one to reinitialize
          if (!oMockServer) {
            oMockServer = new MockServer({
              rootUri: sMockServerUrl
            });
          } else {
            oMockServer.stop();
          }

          // configure mock server with the given options or a default delay of 0.5s
          MockServer.config({
            autoRespond: true,
            autoRespondAfter: (oOptions.delay || oUriParameters.get("serverDelay") || 0)
          });

          // simulate all requests using mock data
          oMockServer.simulate(sMetadataUrl, {
            sMockdataBaseUrl: sJsonFilesUrl,
            bGenerateMissingMockData: true
          });

          var aRequests = oMockServer.getRequests();

          // compose an error response for each request
          var fnResponse = function (iErrCode, sMessage, aRequest) {
            aRequest.response = function (oXhr) {
              oXhr.respond(iErrCode, {
                "Content-Type": "text/plain;charset=utf-8"
              }, sMessage);
            };
          };

          // simulate metadata errors
          if (oOptions.metadataError || oUriParameters.get("metadataError")) {
            aRequests.forEach(function (aEntry) {
              if (aEntry.path.toString().indexOf("$metadata") > -1) {
                fnResponse(500, "metadata Error", aEntry);
              }
            });
          }

          // simulate request errors
          var sErrorParam = oOptions.errorType || oUriParameters.get("errorType"),
            iErrorCode = sErrorParam === "badRequest" ? 400 : 500;
          if (sErrorParam) {
            aRequests.forEach(function (aEntry) {
              fnResponse(iErrorCode, sErrorParam, aEntry);
            });
          }

          // custom mock behaviour may be added here

          // set requests and start the server
          oMockServer.setRequests(aRequests);
          oMockServer.start();

          Log.info("Running the app with mock data");
          /* ===========================================================
          //For getEntity, it must match an automated or json provided entry!!!!!           
          ============================================================= */
          // oMockServer.attachAfter(sap.ui.core.util.MockServer.HTTPMETHOD.GET, function (oCall, param) {
          //   oCall.mParameters.oFilteredData = "xxx";
          // }, "valXXXXSet");
          oMockServer.attachAfter(sap.ui.core.util.MockServer.HTTPMETHOD.POST, function (oCall) {
            switch (oCall.mParameters.oEntity.actionKey) {
              case 'TEMPLATE':
                var toXLSX = {
                  results: [{
                    vkorg: "vkorgHEADER",
                    bukrs: "bukrsHEADER",
                  }]
                };
                oCall.mParameters.oEntity.toXLSX = toXLSX;
                break;
              case 'CREATE':
                var toReturn = {
                  results: [{
                    message: "S&&chindo one"
                  },
                  // {
                  //   message: "pura madre1"
                  // },
                  // {
                  //   message: "pura madre2"
                  // }
                ]
                };
                oCall.mParameters.oEntity.toReturn = toReturn;
                break;
                case 'DOWNLOAD':
                  // var toReturn = {
                  //   results: [{
                  //     message: "S&&chindo one"
                  //   },
                  var toXLSX = {
                    results: [{
                      vkorg: "vkorgHEADER",
                      bukrs: "bukrsHEADER",
                    },
                    {
                      vkorg: "vkorg VAL",
                      bukrs: "bukrs VAL",
                    }]
                  };
                  // oCall.mParameters.oEntity.toReturn = toReturn;
                  oCall.mParameters.oEntity.toXLSX = toXLSX;
                  break;
                  case 'UPLOAD':
                    // var toReturn = {
                    //   results: [{
                    //     "message": "&&Uploaded successfully"
                    //   },
                    //   {
                    //     "message": "perro successfully",
                    //   }]
                    // };
                    // oCall.mParameters.oEntity.toReturn = toReturn;
                    // var toError = {
                    //   results: [{
                    //     "Msg": "&&Uploaded successfully"
                    //   },
                    //   {
                    //     "Msg": "perro successfully",
                    //     "Plant": "Plant VAL1"
                    //   }]
                    // };
                    // oCall.mParameters.oEntity.toError = toError;
                    var toOutput = {
                      results: [{
                        "Msg": "&&Uploaded successfully"
                      },
                      {
                        "Msg": "perro successfully"
                      }]
                    };
                    oCall.mParameters.oEntity.toOutput = toOutput;
                    break;
              default:
                break;
            }
            console.log("Sections");
          }, "actionSet");
          fnResolve();
        });

        oManifestModel.attachRequestFailed(function () {
          var sError = "Failed to load application manifest";

          Log.error(sError);
          fnReject(new Error(sError));
        });
      });
    },

    /**
     * @public returns the mockserver of the app, should be used in integration tests
     * @returns {sap.ui.core.util.MockServer} the mockserver instance
     */
    getMockServer: function () {
      return oMockServer;
    }
  };

  return oMockServerInterface;
});
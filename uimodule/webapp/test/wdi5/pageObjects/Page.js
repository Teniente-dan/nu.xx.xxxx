/* jshint esversion: 11 */
const {
    wdi5
  } = require("wdio-ui5-service");
  const fs = require('fs');
  const {
    parse
  } = require("csv-parse");
  module.exports = class Page {
    async open(path) {
      wdi5.goTo(path);
    }
  
    async getPage() {
      const pageSelector = {
        selector: {
          controlType: "sap.m.Page",
          interaction: "root"
        }
      };
      return await browser.asControl(pageSelector);
    }
  
    _getNavPage(sViewName) {
      const pageSelector = {
        forceSelect: true,
        selector: {
          controlType: "sap.m.Page",
          interaction: "root",
          viewName: sViewName
        }
      };
      return pageSelector;
    }
  
    async _getCsvConfig(sCsvFile, fromLine = 2) {
      const csv = [];
      const stream = fs.createReadStream(sCsvFile, {
        encoding: 'utf8'
      });
      stream
        .pipe(parse({
          delimiter: ",",
          from_line: fromLine
        }))
        .on("data", function (row) {
          csv.push({
            id: row[0],
            retFieldId: row[1],
            retValue: row[2],
            valueHelp: !!row[3],
            mandatory: !!row[4],
            setValue: row[5],
            excludeMass: row[8],
            type: row[9],
          });
        });
      var end = new Promise(function (resolve, reject) {
        stream.on('end', () => resolve(csv));
      });
      return await end;
    }
  
    _selectorBuilder(arrConfig, sViewName) {
      // eslint-disable-next-line array-callback-return, consistent-return
      return arrConfig.map((config) => {
        switch (config.type) {
          case "checkbox":
            return {
              forceSelect: true,
                selector: {
                  controlType: "sap.m.CheckBox",
                  id: config.id,
                  viewName: sViewName
                },
                checkbox: true,
                ui5Id: config.id,
                setValue: config.setValue,
                expectedValue: config.retValue
            };
          case "input":
            if (config.valueHelp) {
              return {
                forceSelect: true,
                selector: {
                  controlType: "sap.m.Input",
                  interaction: "press",
                  id: config.id,
                  viewName: sViewName,
                },
                input: true,
                ui5Id: config.id,
                focusSelector: {
                  forceSelect: true,
                  selector: {
                    controlType: "sap.m.Input",
                    interaction: "focus",
                    id: config.id,
                    viewName: sViewName
                  }
                },
                expectedValue: config.retValue,
              };
            }
            // freeInput
            return {
              forceSelect: true,
                selector: {
                  controlType: "sap.m.Input",
                  interaction: "focus",
                  id: config.id,
                  viewName: sViewName
                },
                input: true,
                ui5Id: config.id,
                setValue: config.setValue,
                expectedValue: config.retValue
            };
  
          default:
            break;
        }
      });
    }
  
  
    // PUBLIC METHODS
    async getGenericInput(bAll = false) {
      const inputSelector = {
        forceSelect: true,
        selector: {
          controlType: "sap.m.Input"
        }
      };
      return bAll ? await browser.allControls(inputSelector) : await browser.asControl(inputSelector);
    }
  
    async getGenericDialog() {
      const okDialogSelector = {
        selector: {
          controlType: "sap.m.Dialog"
        },
      };
      return await browser.asControl(okDialogSelector);
    }
  };
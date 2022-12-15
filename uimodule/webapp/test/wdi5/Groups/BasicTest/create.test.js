/* eslint-disable no-undef */
/* jshint esversion: 11 */
const {
  // eslint-disable-next-line no-unused-vars
  wdi5
} = require("wdio-ui5-service");
const CreateView = require("../../pageObjects/CreateView");
let fieldConfig;

describe("Create view:", async () => {
  before(async () => {
    await CreateView.open();
    await CreateView.init();
    fieldConfig = CreateView.CreateConfig;
  });

  it("should load the create page", async () => {
    await CreateView.getPage();
  });

  it("should send create request and return 'Please fill all fields with valid inputs' then validate mandatory", async () => {
    const button = await CreateView.getCreateButton();
    await button.press();

    const dialog = await CreateView.getAllDialogs();
    let dialogContent = await dialog[0].getContent();
    let dialogText = await dialogContent[0].getText();
    await expect(dialogText).toEqual("Please fill all fields with valid inputs");
    await dialog[0].close();

    //with TR Options
    dialogContent = await dialog[1].getContent();
    dialogText = await dialogContent[0].getText();
    await expect(dialogText).toEqual("Please enter a TR Description");
    await dialog[1].close();

    // const allInputs = await CreateView.getAllInputs();
    const allInputs = (await CreateView.getAllInputs()).concat(await CreateView.getAllSelects());
    await expect(allInputs.length).toBe(fieldConfig.filter(x => ["input", "select"].includes(x.type)).length);
    // verify why filter for mandatory was applied?? Cant be always equal: checkboxes, radio buttons, etc are not mandatory
    // verify if Select case works??
    for (const input of allInputs) {
      for (const configId of fieldConfig) {
        let ui5Id;
        try {
          ui5Id = input._domId && input._domId.match(/in\d*$/)[0];
        } catch (error) {
          ui5Id = input._domId && input._domId.match(/(in\d*)(.vhi)$/)[1];
        }
        if (ui5Id === configId.id) {
          console.log(ui5Id);
          const valueState = await input.getProperty("valueState");
          if (configId.mandatory) {
            await expect(`${ui5Id}-${valueState}`).toBe(`${ui5Id}-Error`);
          } else {
            await expect(`${ui5Id}-${valueState}`).toBe(`${ui5Id}-None`);
          }
        }
      }
    }
  });

  //  MULTIPLE SETS in VIEW
  // it("should send create request and return 'Please fill all fields with valid inputs' then validate mandatory", async () => {
  //   const button = await CreateView.getCreateButton();
  //   await button.press();

  //   const dialog = await CreateView.getAllDialogs();
  //   let dialogContent = await dialog[0].getContent();
  //   let dialogText = await dialogContent[0].getText();
  //   await expect(dialogText).toEqual("Please fill all fields with valid inputs");
  //   await dialog[0].close();
  //   dialogContent = await dialog[1].getContent();
  //   dialogText = await dialogContent[0].getText();
  //   await expect(dialogText).toEqual("Please enter a TR Description");
  //   await dialog[1].close();

  //   let allInputs = (await CreateView.getAllInputs());
  //   const allSelects = await CreateView.getGenericSelect();
  //   const allCheckBoxes = await CreateView.getCheckBoxes();

  //   const setBRadio = await CreateView.getRadioButtonSetB();
  //   await setBRadio.press();

  //   let allInputsSetB = await CreateView.getAllInputs();
  //   const allSelectsB = await CreateView.getGenericSelect();
  //   const allCheckBoxesB = await CreateView.getCheckBoxes();

  //   allInputs = allInputs.concat(allInputsSetB.filter((item) => allInputs.map(x => x._domId).indexOf(item._domId) < 0));
  //   allInputs = allInputs.concat(allSelects).concat(allCheckBoxes).concat(allSelectsB).concat(allCheckBoxesB).filter(x => !x._domId.match(/in6\d*$/));
  //   await expect(allInputs.length).toBe(fieldConfig.length); // verify why filter for mandatory was applied??

  //   // set B

  //   allInputsSetB = allInputsSetB.concat(allSelectsB).concat(allCheckBoxesB);
  //   for (const input of allInputsSetB) {
  //     for (const configId of fieldConfig) {
  //       let ui5Id;
  //       try {
  //         ui5Id = input._domId && input._domId.match(/in\d*$/)[0];
  //       } catch (error) {
  //         ui5Id = input._domId && input._domId.match(/(in\d*)(.vhi)$/)[1];
  //       }
  //       if (ui5Id === configId.id) {
  //         console.log(ui5Id);
  //         const valueState = await input.getProperty("valueState");
  //         if (configId.mandatory) {
  //           await expect(`${ui5Id}-${valueState}`).toBe(`${ui5Id}-Error`);
  //         } else {
  //           await expect(`${ui5Id}-${valueState}`).toBe(`${ui5Id}-None`);
  //         }
  //       }
  //     }
  //   }

  //   // set A
  //   const setARadio = await CreateView.getRadioButtonSetA();
  //   await setARadio.press();

  //   let allInputsSetA = (await CreateView.getAllInputs());
  //   allInputsSetA = allInputsSetA.concat(await CreateView.getGenericSelect()).concat(await CreateView.getCheckBoxes());

  //   // const allInputsSetA = allInputsA.concat(allSelectA);
  //   for (const input of allInputsSetA) {
  //     for (const configId of fieldConfig) {
  //       let ui5Id;
  //       try {
  //         ui5Id = input._domId && input._domId.match(/in\d*$/)[0];
  //       } catch (error) {
  //         ui5Id = input._domId && input._domId.match(/(in\d*)(.vhi)$/)[1];
  //       }
  //       if (ui5Id === configId.id) {
  //         console.log(ui5Id);
  //         const valueState = await input.getProperty("valueState");
  //         if (configId.mandatory) {
  //           await expect(`${ui5Id}-${valueState}`).toBe(`${ui5Id}-Error`);
  //         } else {
  //           await expect(`${ui5Id}-${valueState}`).toBe(`${ui5Id}-None`);
  //         }
  //       }
  //     }
  //   }
  // });


  // it("should set select key 0 and disable in29 ", async () => {
  //   const managementRadio = await CreateView.getRadioButtonManagement();
  //   await managementRadio.press();
  //   const select = await CreateView.getSelect("in28");
  //   await select.open();
  //   await browser.keys("Down arrow");
  //   const items = await select.getItems();
  //   await items[items.length - 1].press();
  //   const input = await CreateView.getInput("in29");
  //   const enabled = await input.getEnabled();
  //   await expect(enabled).toBe(false);
  // });

  it("should get log", async () => {
    const test1 = await browser.getLogs("browser");
    const testa = 1;
  });

  it("should retrive and set data form search helps and free input fields", async () => {
    const radio = await CreateView.getRadioButton();
    await radio.press();

    const selectorsPress = CreateView.createSelectorBuilder();

    const tableItemSelector = {
      forceSelect: true,
      selector: {
        id: new RegExp(/.*__item.*-__clone*/gm), // "__item2-__clone0", // item 1
        controlType: "sap.m.ColumnListItem",
        interaction: "press"
      }
    };

    const listItemSelector = {
      forceSelect: true,
      selector: {
        id: new RegExp(/.*__item.*-0/gm), // "__item2-__clone0", // item 1
      }
    };

    const assertInput = async (selector) => {
      const input = await browser.asControl(selector);
      let focusInput = {};
      let focusVal = {};

      if (selector.checkbox) {
        await input.setSelected(selector.setValue ? true : false);
        focusInput = input;
        const checkVal = await input.getSelected();
        focusVal = checkVal ? "x" : "";
      }

      if (selector.input) {
        if (selector.setValue) {
          await input.setValue(selector.setValue);
          focusInput = input;
        } else {
          await input.press();
          const tableItem = await browser.asControl(tableItemSelector);
          await tableItem.press();
          focusInput = await browser.asControl(selector.focusSelector);
        }
        focusVal = await focusInput.getValue();
      }

      if (selector.select) {
        await input.press();
        const listItem = await browser.asControl(listItemSelector);
        await listItem.press();
        focusVal = await input.getSelectedKey();
      }
      await expect(`${selector.ui5Id}-${focusVal}`).toEqual(`${selector.ui5Id}-${selector.expectedValue}`);
    };

    for (const selector of selectorsPress) {
      // if (selector.ui5Id === "in23") {
      //   continue;
      //   press setB Button
      // }      
      await assertInput(selector);
    }

  });

  it(`should send create request and return success message ${CreateView.successCreateResponse}; and validate all fields`, async () => {
    await browser.screenshot("before create");
    const button = await CreateView.getCreateButton();
    await button.press();
    await browser.screenshot("after create");

    const dialogs = await CreateView.getOkDialogSelector();
    let okDialog = dialogs.filter(x => x._domId.includes("success"))?.[0];
    if (!okDialog && dialogs.length > 0) {
      okDialog = dialogs[0];
    }
    const okDialogContent = await okDialog.getContent();
    const okDialogText = await okDialogContent[0].getText();
    await expect(okDialogText).toEqual(CreateView.successCreateResponse);

    const logs = await browser.getLogs("browser");
    const requestLog = logs.filter((log) => log.level === "WARNING").filter((log) => log.message.includes("oPayload"));
    const request = Object.values(JSON.parse(requestLog[0].message.match(/(?<=oPayload:).*\]/gm)[0].replaceAll("\\", ""))[0]).map(x => x.toUpperCase());
    const resultRequest = [...request];
    const valsExpected = fieldConfig.map((config) => config.retValue.toUpperCase());
    valsExpected.push('X'); // add radiobutton value for TR option
    // find all elements of valsExpected in request, remove found ones; this ensures that all expected values are found including duplicates
    let allFound = true;
    for (const val of valsExpected) {
      const index = resultRequest.indexOf(val);
      if (index > -1) {
        resultRequest.splice(index, 1);
      } else {
        allFound = false;
        break;
      }
    }
    console.log("Expected values:");
    console.log(valsExpected);
    console.log("Request values:");
    console.log(request);
    console.log(resultRequest);
    await expect(allFound).toBe(true);
  });
});
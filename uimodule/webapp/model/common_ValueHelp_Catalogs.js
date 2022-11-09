sap.ui.define([], function () {
  "use strict";
  return {
    // own Request --> strkorr
    ownValueHelp: function () {
      var arrFields = [{
        text: "common>strkorr",
        textName: "Parent Request"
      }, {
        text: "common>as4text",
        textName: "Short Description"
      }];
      this.valueHelpBuild("common>/ownRequestSet", arrFields);
    },

    // title
    titleValueHelp: function () {
      var arrFields = [{
        text: "common>TitleMedi",
        textName: "Title"
      }];
      this.valueHelpBuild("common>/titleSet", arrFields);
    },

    // factory calendar --> Ident
    factoryValueHelp: function () {
      var arrFields = [{
        text: "common>Ident",
        textName: "Factory Cal. ID"
      }, {
        text: "common>Ltext",
        textName: "Text"
      }];
      this.valueHelpBuild("common>/calendarSet", arrFields);
    },

    // language --> Spras
    languageValueHelp: function () {
      var arrFields = [{
        text: "common>Spras",
        textName: "Language"
      }, {
        text: "common>Sptxt",
        textName: "Name of Language"
      }];
      this.valueHelpBuild("common>/languageSet", arrFields);
    },

    // region
    regionValueHelp: function () {
      var arrFields = [{
        text: "common>Land1",
        textName: "C/R"
      }, {
        text: "common>Bland",
        textName: "Rg"
      }, {
        text: "common>Bezei",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/regionSet", arrFields);
    },

    // street
    streetValueHelp: function () {
      var arrFields = [{
        text: "common>CityName",
        textName: "City"
      }, {
        text: "common>McStreet",
        textName: "Street"
      }, {
        text: "common>McCity",
        textName: "City 1"
      }, {
        text: "common>CityExt",
        textName: "City Extension"
      }, {
        text: "common>Region",
        textName: "Region"
      }, {
        text: "common>Country",
        textName: "Country/Region"
      }, {
        text: "common>Langu",
        textName: "Language"
      }, {
        text: "common>StrtCode",
        textName: "Street No"
      }, {
        text: "common>CityCode",
        textName: "City No"
      }];
      this.valueHelpBuild("common>/streetSet", arrFields);
    },

    // Country/Region --> Land1
    countryValueHelp: function () {
      var arrFields = [{
        text: "common>Land1",
        textName: "Country/Region"
      }, {
        text: "common>Landx",
        textName: "Name"
      }, {
        text: "common>Natio",
        textName: "Nationality"
      }];
      this.valueHelpBuild("common>/countrySet", arrFields);
    },

    // company code --> bukrs
    bukrsValueHelp: function () {
      var arrFields = [{
        text: "common>Bukrs",
        textName: "Comp. Code"
      }, {
        text: "common>Butxt",
        textName: "Company Name"
      }, {
        text: "common>Ort01",
        textName: "City"
      }, {
        text: "common>Waers",
        textName: "Currency"
      }];
      this.valueHelpBuild("common>/bukrsSet", arrFields);
    },

    // company as entity --> rcomp
    rcompValueHelp: function () {
      var arrFields = [{
        text: "common>Rcomp",
        textName: "Co."
      }, {
        text: "common>Name1",
        textName: "Company Name"
      }, {
        text: "common>Name2",
        textName: "Name of Company 2"
      }, {
        text: "common>Cntry",
        textName: "C/R"
      }, {
        text: "common>Curr",
        textName: "Crcy"
      }];
      this.valueHelpBuild("common>/rcompSet", arrFields);
    },

    // currency --> Waers
    currencyValueHelp: function () {
      var arrFields = [{
        text: "common>Waers",
        textName: "Crcy"
      }, {
        text: "common>Ltext",
        textName: "Long Text"
      }];
      this.valueHelpBuild("common>/currencySet", arrFields);
    },

    // business area
    gsberValueHelp: function () {
      var arrFields = [{
        text: "common>Gsber",
        textName: "BusA"
      }, {
        text: "common>Gtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/gsberSet", arrFields);
    },

    // sales organization
    vkorgValueHelp: function () {
      var arrFields = [{
        text: "common>Vkorg",
        textName: "SOrg."
      }, {
        text: "common>Vtext",
        textName: "Name"
      }];
      this.valueHelpBuild("common>/vkorgSet", arrFields);
    },

    // chart of accounts --> Ktopl
    ktoplValueHelp: function () {
      var arrFields = [{
        text: "common>Ktopl",
        textName: "Chrt/Accts"
      }, {
        text: "common>Ktplt",
        textName: "Chart of Accounts Description"
      }];
      this.valueHelpBuild("common>/ktoplSet", arrFields);
    },

    fstvaValueHelp: function () {
      var arrFields = [{
        text: "common>Fstva",
        textName: "FStV"
      }, {
        text: "common>Fstxt",
        textName: "Field Status Name"
      }];
      this.valueHelpBuild("common>/fstvaSet", arrFields);
    },

    // purchase organization --> Ekorg
    ekorgValueHelp: function () {
      var arrFields = [{
        text: "common>Ekorg",
        textName: "POrg."
      }, {
        text: "common>Ekotx",
        textName: "Purch. Org. Descr."
      }];
      this.valueHelpBuild("common>/ekorgSet", arrFields);
    },

    // plant --> Werks
    werksValueHelp: function () {
      var arrFields = [{
        text: "common>Werks",
        textName: "Plnt"
      }, {
        text: "common>Name1",
        textName: "Name"
      }, {
        text: "common>Sort2",
        textName: "Search Term 2"
      }, {
        text: "common>Sort1",
        textName: "Search Term 1"
      }, {
        text: "common>PostCode1",
        textName: "Postl Code"
      }, {
        text: "common>City1",
        textName: "City"
      }, {
        text: "common>Name2",
        textName: "Name 2"
      }];
      this.valueHelpBuild("common>/werksSet", arrFields);
    },

    // storage location --> Lgort
    lgortValueHelp: function () {
      var arrFields = [{
        text: "common>Werks",
        textName: "Plnt"
      }, {
        text: "common>Lgort",
        textName: "SLoc"
      }, {
        text: "common>Lgobe",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/lgortSet", arrFields);
    },

    // sales group --> Vkgrp
    vkgrpValueHelp: function () {
      var arrFields = [{
        text: "common>Vkgrp",
        textName: "SGrp"
      }, {
        text: "common>Bezei",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/vkgrpSet", arrFields);
    },

    // distribution channel --> Vtweg
    vtwegValueHelp: function () {
      var arrFields = [{
        text: "common>Vtweg",
        textName: "DChl"
      }, {
        text: "common>Vtext",
        textName: "Name"
      }];
      this.valueHelpBuild("common>/vtwegSet", arrFields);
    },

    // division --> Spart
    spartValueHelp: function () {
      var arrFields = [{
        text: "common>Spart",
        textName: "Dv"
      }, {
        text: "common>Vtext",
        textName: "Name"
      }];
      this.valueHelpBuild("common>/spartSet", arrFields);
    },

    // sales office --> Soff
    vkburValueHelp: function () {
      var arrFields = [{
        text: "common>Vkbur",
        textName: "SOff"
      }, {
        text: "common>Bezei",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/vkburSet", arrFields);
    },

    // account group --> Ktoks
    ktoksValueHelp: function () {
      var arrFields = [{
        text: "common>Ktopl",
        textName: "Chrt/Accts"
      }, {
        text: "common>Ktoks",
        textName: "AcGp"
      }, {
        text: "common>Txt30",
        textName: "Name"
      }];
      this.valueHelpBuild("common>/ktoksSet", arrFields);
    },

    // from to g/l account --> Saknr
    vonnrValueHelp: function () {
      var arrFields = [{
        text: "common>Saknr",
        textName: "G/L Acct"
      }, {
        text: "common>Ktopl",
        textName: "Chrt/Accts"
      }, {
        text: "common>Txt50",
        textName: "Long Text"
      }];
      this.valueHelpBuild("common>/vonnrSet", arrFields);
    },

    // account --> Saknr
    kontsValueHelp: function () {
      var arrFields = [{
        text: "common>Saknr",
        textName: "G/L Acct"
      }, {
        text: "common>Txt50",
        textName: "Long Text"
      }, {
        text: "common>Ktopl",
        textName: "Chrt/Accts"
      }];
      this.valueHelpBuild("common>/kontsSet", arrFields);
    },

    // tolerance group --> Togru  
    togruValueHelp: function () {
      var arrFields = [{
        text: "common>Bukrs",
        textName: "CoCd"
      }, {
        text: "common>Togru",
        textName: "Tol.group"
      }, {
        text: "common>Txt30",
        textName: "Name of Tolerance Group"
      }];
      this.valueHelpBuild("common>/togruSet", arrFields);
    },

    // FV --> Periv
    perivValueHelp: function () {
      var arrFields = [{
        text: "common>Periv",
        textName: "FV"
      }, {
        text: "common>Ltext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/perivSet", arrFields);
    },

    // tolerance group for financial accounting --> Rfpro
    rfproValueHelp: function () {
      var arrFields = [{
        text: "common>Rfpro",
        textName: "Grp"
      }, {
        text: "common>Bukrs",
        textName: "CoCd"
      }];
      this.valueHelpBuild("common>/rfproSet", arrFields);
    },

    // order type --> Auart
    auartValueHelp: function () {
      var arrFields = [{
        text: "common>Auart",
        textName: "Type"
      }, {
        text: "common>Autyp",
        textName: "Cat"
      }, {
        text: "common>Txt",
        textName: "Name"
      }];
      this.valueHelpBuild("common>/auartSet", arrFields);
    },

    // posting Period Variant --> Opvar
    opvarValueHelp: function () {
      var arrFields = [{
        text: "common>Opvar",
        textName: "Var."
      }, {
        text: "common>Opvtx",
        textName: "Posting Period Variant Name"
      }];
      this.valueHelpBuild("common>/opvarSet", arrFields);
    },

    // control Key --> Steus
    steusValueHelp: function () {
      var arrFields = [{
        text: "common>Steus",
        textName: "Ctrl"
      }, {
        text: "common>Txt",
        textName: "Control Key Description"
      }];
      this.valueHelpBuild("common>/steusSet", arrFields);
    },
    // profile group --> grprfGrup, Name
    grprfGrupValueHelp: function () {
      var arrFields = [{
        text: "common>PrfGruppe",
        textName: "Group"
      }, {
        text: "common>PrfName",
        textName: "Name"
      }, {
        text: "common>PrfIndex",
        textName: "Index"
      }, {
        text: "common>Ktext",
        textName: "Name"
      }];
      this.valueHelpBuild("common>/grprfGrupSet", arrFields);
    },

    // change record type --> issueType
    recordTypeValueHelp: function () {
      var arrFields = [{
        text: "common>IssueType",
        textName: "Record Typ"
      }, {
        text: "common>Description",
        textName: "Record Type Description"
      }];
      this.valueHelpBuild("common>/recordTypeSet", arrFields);
    },

    // document type --> blart
    blartValueHelp: function () {
      var arrFields = [{
        text: "common>Blart",
        textName: "Type"
      }, {
        text: "common>Ltext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/blartSet", arrFields);
    },
  };
});
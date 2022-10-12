sap.ui.define([], function () {
  "use strict";
  return {
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

    // factory calendar
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

    // language
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

    // Country/Region
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

    // company code
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

    // chart of accounts
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

    // purchase organization
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

    // plant
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

    // storage location
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

    // sales group
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

    // distribution channel    
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

    // division    
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

    // sales office
    vkburValueHelp: function () {
      var arrFields = [{
        text: "common>Vkbur",
        textName: "SOff"
      }, {
        text: "common>Bezei",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/vkburSet", arrFields);
    }
  };
});
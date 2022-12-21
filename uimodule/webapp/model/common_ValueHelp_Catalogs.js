/* eslint-disable max-lines */
// from D:\Nucleus\0ODATAs\ZNU_CONFIG_SRV.xml
sap.ui.define([], function () {
  "use strict";
  return {
    // empty value help; used for SearchHelps not provided
    emptyValueHelp: function () {
      var arrFields = [];
      this.valueHelpBuild("common>/emptySet", arrFields);
    },

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

    // field status variant --> Fstva
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

    // division --> Spart || Spaau
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

    // FV (Fiscal year variant) 
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

    // PP order type --> Auart
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
    // profile group --> GrprfGrup, Name
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

    // change record type --> IssueType
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

    // document type --> Blart
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

    // purchasing group --> Ekgrp
    ekgrpValueHelp: function () {
      var arrFields = [{
        text: "common>Ekgrp",
        textName: "PGr"
      }, {
        text: "common>Eknam",
        textName: "Description"
      }, {
        text: "common>Ektel",
        textName: "Telephone"
      }, {
        text: "common>Telfx",
        textName: "Fax Number"
      }];
      this.valueHelpBuild("common>/ekgrpSet", arrFields);
    },

    // posting period variant to buk --> Opvar
    bukOpvarValueHelp: function () {
      var arrFields = [{
        text: "common>Opvar",
        textName: "Var."
      }, {
        text: "common>Opvtx",
        textName: "Posting Period Variant Name"
      }];
      this.valueHelpBuild("common>/bukOpvarSet", arrFields);
    },

    // credit control area --> Kkber
    kkberValueHelp: function () {
      var arrFields = [{
        text: "common>Kkber",
        textName: "CCar"
      }, {
        text: "common>Kkbtx",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/kkberSet", arrFields);
    },

    // credit update --> Stafo
    stafoValueHelp: function () {
      var arrFields = [{
        text: "common>Stafo",
        textName: "Update"
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/stafoSet", arrFields);
    },

    // production supervisor --> Fevor
    fevorValueHelp: function () {
      var arrFields = [{
        text: "common>Werks",
        textName: "Plant"
      }, {
        text: "common>Fevor",
        textName: "ProdS"
      }, {
        text: "common>Txt",
        textName: "Production Supervisor Name"
      }];
      this.valueHelpBuild("common>/fevorSet", arrFields);
    },

    // SD document category --> Vbtypl
    vbtyplValueHelp: function () {
      var arrFields = [{
        text: "common>Vbtypl",
        textName: "Doc.Cat."
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/vbtyplSet", arrFields);
    },

    // SD default order type --> Auart
    auartTvakValueHelp: function () {
      var arrFields = [{
        text: "common>Auart",
        textName: "SaTy"
      }, {
        text: "common>Bezei",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/auartTvakSet", arrFields);
    },

    // SD order requierement type --> Voerf to Aufer
    voerfValueHelp: function () {
      var arrFields = [{
        text: "common>Voerf",
        textName: "Ord.Reqd"
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/voerfSet", arrFields);
    },

    // screen sequence group --> Bifgr
    bifgrValueHelp: function () {
      var arrFields = [{
        text: "common>Objekt",
        textName: "Object"
      }, {
        text: "common>Bifgr",
        textName: "ScSG"
      }, {
        text: "common>Bezei",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/bifgrSet", arrFields);
    },

    // display Range --> Umfng
    umfngValueHelp: function () {
      var arrFields = [{
        text: "common>Umfng",
        textName: "Display Range"
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/umfngSet", arrFields);
    },

    // SD delivery type --> Lfart
    lfartValueHelp: function () {
      var arrFields = [{
        text: "common>Lfart",
        textName: "DlvTy"
      }, {
        text: "common>Vtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/lfartSet", arrFields);
    },

    // MM material group --> Matkl
    matklValueHelp: function () {
      var arrFields = [{
        text: "common>Matkl",
        textName: "Matl Group"
      }, {
        text: "common>Wgbez",
        textName: "Material Group Desc."
      }, {
        text: "common>Wgbez60",
        textName: "Description 2 for the Material Group"
      }, {
        text: "common>Spras",
        textName: "Language"
      }];
      this.valueHelpBuild("common>/matklSet", arrFields);
    },

    // MM unit of weight --> Msehi
    geweiValueHelp: function () {
      var arrFields = [{
        text: "common>Mseh3",
        textName: "Commercial"
      }, {
        text: "common>Msehi",
        textName: "MU"
      }, {
        text: "common>Msehl",
        textName: "Measurement unit text"
      }, {
        text: "common>Txdim",
        textName: "Dimension text"
      }];
      this.valueHelpBuild("common>/geweiSet", arrFields);
    },

    // MM field reference --> Flref
    flrefValueHelp: function () {
      var arrFields = [{
        text: "common>Flref",
        textName: "Field"
      }];
      this.valueHelpBuild("common>/flrefSet", arrFields);
    },

    // MM industry sector --> Mbrsh
    mbrshValueHelp: function () {
      var arrFields = [{
        text: "common>Mbrsh",
        textName: "I"
      }, {
        text: "common>Mbbez",
        textName: "Industry Description"
      }];
      this.valueHelpBuild("common>/mbrshSet", arrFields);
    },

    // SD billing type --> Fkart
    fkartValueHelp: function () {
      var arrFields = [{
        text: "common>Fkart",
        textName: "BillT"
      }, {
        text: "common>Vtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/fkartSet", arrFields);
    },

    // SD transaction group --> Trvog
    trvogValueHelp: function () {
      var arrFields = [{
        text: "common>Trvog",
        textName: "TrG"
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/trvogSet", arrFields);
    },

    // SD invoice list type --> Fkart
    fkartRlValueHelp: function () {
      var arrFields = [{
        text: "common>Fkart",
        textName: "BillT"
      }, {
        text: "common>Vtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/fkartRlSet", arrFields);
    },

    // SD account determination procedure --> Kalsm
    kalsmcValueHelp: function () {
      var arrFields = [{
        text: "common>Kalsm",
        textName: "Proc"
      }, {
        text: "common>Vtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/kalsmcSet", arrFields);
    },

    // SD pricing procedure for account determination --> Kalsm
    kalsmcdValueHelp: function () {
      var arrFields = [{
        text: "common>Kvewe",
        textName: "U"
      }, {
        text: "common>Kappl",
        textName: "App"
      }, {
        text: "common>Kalsm",
        textName: "Proc."
      }, {
        text: "common>Vtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/kalsmcdSet", arrFields);
    },

    // SD reference distribution channel --> Vtwau
    vtwauValueHelp: function () {
      var arrFields = [{
        text: "common>Vtwau",
        textName: "DChl"
      }, {
        text: "common>Vtext",
        textName: "Name"
      }];
      this.valueHelpBuild("common>/vtwauSet", arrFields);
    },

    // PP Cheking rule for Availability Check --> Prreg
    prregValueHelp: function () {
      var arrFields = [{
        text: "common>Prreg",
        textName: "ChR"
      }, {
        text: "common>Prrlt",
        textName: "Description of Checking Rule"
      }];
      this.valueHelpBuild("common>/prregSet", arrFields);
    },

    // PP component check type --> Kzakp
    kzakpValueHelp: function () {
      var arrFields = [{
        text: "common>Kzakp",
        textName: "TCC"
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/kzakpSet", arrFields);
    },

    // PP creation control collect.conv. --> Eromat
    eromatValueHelp: function () {
      var arrFields = [{
        text: "common>Eromat",
        textName: "Coll.conv."
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/eromatSet", arrFields);
    },

    // PP checking rule for PRT --> CfPrreg
    cfPrregValueHelp: function () {
      var arrFields = [{
        text: "common>CfPrreg",
        textName: "Rule"
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/cfPrregSet", arrFields);
    },

    // PP creation control when PRT's are not available --> CfErofhm
    cfErofhmValueHelp: function () {
      var arrFields = [{
        text: "common>CfErofhm",
        textName: "Coll.conv."
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/cfErofhmSet", arrFields);
    },

    // PP id of an overall profile for capacity --> ProfileId
    vpkapprofValueHelp: function () {
      var arrFields = [{
        text: "common>ProfileId",
        textName: "Profile ID"
      }, {
        text: "common>Proftxt",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/vpkapprofSet", arrFields);
    },

    // PP creation control if capacity is missing --> Vpkapero
    vpkaperoValueHelp: function () {
      var arrFields = [{
        text: "common>Vpkapero",
        textName: "Coll.conv."
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/vpkaperoSet", arrFields);
    },

    // PP release control --> Vpkapfr
    vpkapfrValueHelp: function () {
      var arrFields = [{
        text: "common>Vpkapfr",
        textName: "Relse"
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/vpkapfrSet", arrFields);
    },

    // PP release control for material --> Frmat
    frmatValueHelp: function () {
      var arrFields = [{
        text: "common>Frmat",
        textName: "Rel. mat."
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/frmatSet", arrFields);
    },

    // PP release control based on the PRT --> CfPrfrs
    cfPrfrsValueHelp: function () {
      var arrFields = [{
        text: "common>CfPrfrs",
        textName: "Relse"
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/cfPrfrsSet", arrFields);
    },

    // PP release control for material in Batch --> Frbatch
    frbatchValueHelp: function () {
      var arrFields = [{
        text: "common>Frbatch",
        textName: "Rel. mat."
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/frbatchSet", arrFields);
    },

    // PP checking group for availability check --> Mtvfp
    mtvfpValueHelp: function () {
      var arrFields = [{
        text: "common>Mtvfp",
        textName: "Av"
      }, {
        text: "common>Bezei",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/mtvfpSet", arrFields);
    },

    // PP Scheduling Margin Key --> Fhori
    fhoriValueHelp: function () {
      var arrFields = [{
        text: "common>Werks",
        textName: "Plant"
      }, {
        text: "common>Fhori",
        textName: "SMKey"
      }, {
        text: "common>Erhor",
        textName: "Op.Pd"
      }, {
        text: "common>Sichz",
        textName: "FlAftProd."
      }, {
        text: "common>Vorgz",
        textName: "FlBefProd."
      }, {
        text: "common>Freiz",
        textName: "ReleasePer."
      }];
      this.valueHelpBuild("common>/fhoriSet", arrFields);
    },

    // SD Relevant for Billing --> Fkrel
    fkrelValueHelp: function () {
      var arrFields = [{
        text: "common>Fkrel",
        textName: "BilRl"
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/fkrelSet", arrFields);
    },

    // SD Carry out pricing --> Prsfd
    prsfdValueHelp: function () {
      var arrFields = [{
        text: "common>Prsfd",
        textName: "Prcg."
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/prsfdSet", arrFields);
    },

    // SD Item Category --> Pstyv
    pstyvValueHelp: function () {
      var arrFields = [{
        text: "common>Pstyv",
        textName: "ItCa"
      }, {
        text: "common>Vtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/pstyvSet", arrFields);
    },

    // FI segment for segmental reporting --> Segment
    segmentValueHelp: function () {
      var arrFields = [{
        text: "common>Segment",
        textName: "Segment"
      }, {
        text: "common>Name",
        textName: "Segment Name"
      }];
      this.valueHelpBuild("common>/segmentSet", arrFields);
    },

    // PP search procedure for batch determination --> Chsch || Kalsm
    chschValueHelp: function () {
      var arrFields = [{
        text: "common>Kvewe",
        textName: "Usage"
      }, {
        text: "common>Kappl",
        textName: "Application"
      }, {
        text: "common>Kalsm",
        textName: "Proc."
      }, {
        text: "common>Vtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/chschSet", arrFields);
    },
    // PP production scheduling profile --> CoProdprf
    coProdprfValueHelp: function () {
      var arrFields = [{
        text: "common>Werks",
        textName: "Plnt"
      }, {
        text: "common>CoProdprf",
        textName: "P.Prof"
      }, {
        text: "common>ProdprfTx",
        textName: "Production Scheduling Profile Name"
      }];
      this.valueHelpBuild("common>/coProdprfSet", arrFields);
    },

    // PP MRP controller --> Dispo
    dispoValueHelp: function () {
      var arrFields = [{
        text: "common>Werks",
        textName: "Plnt"
      }, {
        text: "common>Dispo",
        textName: "MRPCn"
      }, {
        text: "common>Dsnam",
        textName: "Name"
      }, {
        text: "common>Dstel",
        textName: "Telephone"
      }];
      this.valueHelpBuild("common>/dispoSet", arrFields);
    },

    // PP Profit center --> Prctr
    prctrValueHelp: function () {
      var arrFields = [{
        text: "common>Prctr",
        textName: "Profit Ctr"
      }, {
        text: "common>Datbi",
        textName: "To"
      }, {
        text: "common>Kokrs",
        textName: "COAr"
      }, {
        text: "common>Ktext",
        textName: "Name"
      }];
      this.valueHelpBuild("common>/prctrSet", arrFields);
    },

    // PP Recipient Type --> Otype
    otypeValueHelp: function () {
      var arrFields = [{
        text: "common>Otype",
        textName: "Ob"
      }];
      this.valueHelpBuild("common>/otypeSet", arrFields);
    },

    // PP Parameter ID --> Parid
    paridValueHelp: function () {
      var arrFields = [{
        text: "common>Parid",
        textName: "Param."
      }, {
        text: "common>Txt",
        textName: "Keyword"
      }];
      this.valueHelpBuild("common>/paridSet", arrFields);
    },

    // PP Standard Value Key --> Vgwts
    vgwtsValueHelp: function () {
      var arrFields = [{
        text: "common>Vgwts",
        textName: "SVK"
      }, {
        text: "common>Txt",
        textName: "Text for the std value key"
      }];
      this.valueHelpBuild("common>/vgwtsSet", arrFields);
    },

    // PP Commitments Management --> Obligo
    obligoValueHelp: function () {
      var arrFields = [{
        text: "common>Obligo",
        textName: "Commt"
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/obligoSet", arrFields);
    },

    // PP Status Profile --> Stsma
    stsmaValueHelp: function () {
      var arrFields = [{
        text: "common>Stsma",
        textName: "StatProf"
      }, {
        text: "common>Txt",
        textName: "Text"
      }];
      this.valueHelpBuild("common>/stsmaSet", arrFields);
    },

    // PP Settlement Profile --> Aprof
    aprofValueHelp: function () {
      var arrFields = [{
        text: "common>Aprof",
        textName: "SProf."
      }, {
        text: "common>Ptext",
        textName: "Text"
      }];
      this.valueHelpBuild("common>/aprofSet", arrFields);
    },

    // PP CO Partner Update --> Copar
    coparValueHelp: function () {
      var arrFields = [{
        text: "common>Copar",
        textName: "COP"
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/coparSet", arrFields);
    },

    // PP Functional Area --> Fkber
    fkberValueHelp: function () {
      var arrFields = [{
        text: "common>Fkber",
        textName: "Functional Area"
      }, {
        text: "common>Fkbtx",
        textName: "Name"
      }];
      this.valueHelpBuild("common>/fkberSet", arrFields);
    },


    // SD Item Usage --> Vwpos
    vwposValueHelp: function () {
      var arrFields = [{
        text: "common>Vwpos",
        textName: "Usge"
      }, {
        text: "common>Bezei",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/vwposSet", arrFields);
    },

    // SD Item Category of Higher Level --> Uepst
    uepstValueHelp: function () {
      var arrFields = [{
        text: "common>Uepst",
        textName: "ItCa"
      }, {
        text: "common>Vtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/uepstSet", arrFields);
    },

    // PP Indicator Automatic Batch Creation --> Kzbcr
    kzbcrValueHelp: function () {
      var arrFields = [{
        text: "common>Kzbcr",
        textName: "AB"
      }, {
        text: "common>Txt",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/kzbcrSet", arrFields);
    },

    // PP Options to Classify Batches --> Kzcla
    kzclaValueHelp: function () {
      var arrFields = [{
        text: "common>Kzcla",
        tetName: "CB"
      }, {
        text: "common>Txt",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/kzclaSet", arrFields);
    },

    // PP Date of Manufacture --> HsdatDefDate
    hsdatDefDateValueHelp: function () {
      var arrFields = [{
        text: "common>HsdatDefDate",
        textName: "Manuf. Dte"
      }, {
        text: "common>Txt",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/hsdatDefDateSet", arrFields);
    },

    // PP Synchronous Posting of goods movements for EWM --> SyncGmForEwm
    syncGmForEwmValueHelp: function () {
      var arrFields = [{
        text: "common>SyncGmForEwm",
        textName: "Post Sync."
      }, {
        text: "common>Text",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/syncGmForEwmSet", arrFields);
    },

    // PP WM Request at Time of Order --> FlgWmRel
    flgWmRelValueHelp: function () {
      var arrFields = [{
        text: "common>FlgWmRel",
        textName: "Rq."
      }, {
        text: "common>Txt",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/flgWmRelSet", arrFields);
    },

    // SD shipping point --> Vstel
    vstelValueHelp: function () {
      var arrFields = [{
        text: "common>Vstel",
        textName: "ShPt"
      }, {
        text: "common>Vtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/vstelSet", arrFields);
    },

    // SD Determine Loading Time --> Lazbs
    lazbsValueHelp: function () {
      var arrFields = [{
        text: "common>Lazbs",
        textName: "LoadT"
      }, {
        text: "common>Txt",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/lazbsSet", arrFields);
    },

    // SD Determine pick/pack time --> Rizbs
    rizbsValueHelp: function () {
      var arrFields = [{
        text: "common>Rizbs",
        textName: "PckTi"
      }, {
        text: "common>Txt",
        textName: "Short Descript."
      }];
      this.valueHelpBuild("common>/rizbsSet", arrFields);
    },

    // SD Working Times --> Tstrid
    tstridValueHelp: function () {
      var arrFields = [{
        text: "common>Tstrid",
        textName: "TS ID"
      }, {
        text: "common>Calendarid",
        textName: "Cal."
      }, {
        text: "common>Text40",
        textName: "Long text"
      }];
      this.valueHelpBuild("common>/tstridSet", arrFields);
    },

    // SD Application for Output Condition --> Kappl
    kapplValueHelp: function () {
      var arrFields = [{
        text: "common>Kappl",
        textName: "App"
      }, {
        text: "common>Vtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/kapplSet", arrFields);
    },

    // SD Document Classification for Pricing Procedure --> Kalvg
    kalvgValueHelp: function () {
      var arrFields = [{
        text: "common>Kalvg",
        textName: "DocPr"
      }, {
        text: "common>Vtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/kalvgSet", arrFields);
    },

    // SD Condition Type for copying costs from line items --> KschlKo
    kschlKoValueHelp: function () {
      var arrFields = [{
        text: "common>KschlKo",
        textName: "CTyp"
      }, {
        text: "common>Vtext",
        textName: "Name"
      }];
      this.valueHelpBuild("common>/kschlKoSet", arrFields);
    },

    // SD Payment Card Plan type --> Rpart
    rpartValueHelp: function () {
      var arrFields = [{
        text: "common>Rpart",
        textName: "BT"
      }, {
        text: "common>Fpbez",
        textName: "Billing Plan Type"
      }];
      this.valueHelpBuild("common>/rpartSet", arrFields);
    },

    // SD Document payment guarantee procedure --> Babss
    babssValueHelp: function () {
      var arrFields = [{
        text: "common>Babss",
        textName: "PaymGuar"
      }, {
        text: "common>Bezei",
        textName: "Payment Guarantee Procedure"
      }];
      this.valueHelpBuild("common>/babssSet", arrFields);
    },

    // SD Payment cards: Checking group --> Ccpgr
    ccpgrValueHelp: function () {
      var arrFields = [{
        text: "common>Ccvor",
        textName: "CCVOR"
      }, {
        text: "common>Ccpgr",
        textName: "CkGroup"
      }, {
        text: "common>Vtext",
        textName: "Description"
      }];
      this.valueHelpBuild("common>/ccpgrSet", arrFields);
    },
  };
});
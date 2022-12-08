# clone Template

0. clone project
00. rename root folder with correct namespace and **name**     ***max 8 char!!!***
2. ***remove remote***
3. ***remove remote***
4. ***remove remote***
5. ***remove remote***
6. ***Verify that no remote is set***
7. Search and replace nu.xx.xxxx and nu/xx/xxxx with correct namespace and **name**
8. replace ZNU_CONFIG_SRV.xml with updated version
9. replace specific service XML in localService/
10. replace specific service URL in manifest under mainService
11. search and replace zzzz with **name** of point 6.
12. ***Stage Changes and init commit*** for better tracking of common improvements
13. search for FSCODE it signals possible changes 
14. use catalog snippets from common_valueHelp_catalogs


# NOTES
1. sap.ui.getCore().byId('container-mainConfig---createView--CreateButton')
2. WDI5: these package corresponds to installed Chrome version
    "chromedriver": "^108.0.0",    

## REMARKS
1. WDI5 test 
2. multimockserver
3. generator based -> 'generator-nucleus'
4. npm scripting to prepare json files using node (read CSV, write to directory)
5. BABEL trasnpile to IE11; manifest --> minUI5Version: "1.87.0" lastest version support for IE11

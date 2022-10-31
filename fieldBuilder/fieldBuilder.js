/* jshint esversion: 11 */
const fs = require("fs");
const {
  cwd
} = require("node:process");
// const util = require('node:util');
const {
  parse
} = require("csv-parse");

const getFieldConfig = async () => {
  const csv = [];
  const csvFile = 'fieldBuilder/createFields.csv';
  const stream = fs.createReadStream(csvFile, {
    encoding: 'utf8'
  });
  stream
    .pipe(parse({
      delimiter: ",",
      from_line: 2
    }))
    .on("data", function (row) {
      if (row[6]) {
        csv.push({
          retFieldId: row[1],
          retValue: row[2],
          setValue: row[5],
          duplicate: row[7],
          checkbox: row[9],
        });
      }
    });
  var end = new Promise(function (resolve, reject) {
    stream.on('end', () => resolve(csv));
  });
  return await end;
};

const buildTemplate = async () => {
  const csv = await getFieldConfig();
  const template = {
    "results": []
  };
  const line = {};
  csv.forEach((row) => {
    if (row.retFieldId) {
      line[`${row.retFieldId}${row.duplicate||""}`] = row.retValue;
    } else if (row.checkbox) {
      line[`${row.retValue}${row.duplicate||""}`] = row.setValue;      
    } else {
      line[`${row.setValue}${row.duplicate||""}`] = row.retValue;
    }
  });
  const header = {};
  for (const key in line) {
    if (Object.hasOwnProperty.call(line, key)) {
      header[key] = `${key}`;
    }
  }
  template.results.push(header);
  template.results.push(line);
  return template;
};

buildTemplate().then((data) => {
  fs.writeFileSync(`${process.cwd()}/uimodule/webapp/localService/mockFields.json`, JSON.stringify(data));
  // fs.appendFileSync( process.cwd() + '/fieldBuilder/file.json',  util.inspect(JSON.stringify(options)));
});
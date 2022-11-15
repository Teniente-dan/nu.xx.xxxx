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
  const csvFile = './fieldBuilder/massResponses.csv';
  const stream = fs.createReadStream(csvFile, {
    encoding: 'utf8'
  });

  const csv = {};
  let currentBlock = "";
  let blockLines = [];
  stream
    .pipe(parse({
      delimiter: ",",
      from_line: 1
    }))
    .on("data", function (row) {
      if (!row[0].startsWith("!")) { // comments
        if (row[1] === "RES_BLOCK") {
          if (blockLines && currentBlock) {
            csv[currentBlock].push(...blockLines);
            blockLines = [];
            csv[currentBlock] = matrixToArray(csv[currentBlock]);
          }
          if (row[0] !== "END") {
            currentBlock = row[0];
            csv[currentBlock] = [];
          }
        } else {
          if (row[0]) {
            blockLines.push(row);
          }
        }
      }
    });
  var end = new Promise(function (resolve, reject) {
    stream.on('end', () => resolve(csv));
  });
  return await end;
};

//matrix to array of objects with first array as keys
const matrixToArray = (matrix) => {
  const keys = matrix[0];
  const array = [];
  for (let i = 1; i < matrix.length; i++) {
    const obj = {};
    for (let j = 0; j < keys.length; j++) {
      if (keys[j]) {
        obj[keys[j]] = matrix[i][j];
      }
    }
    array.push(obj);
  }
  return {
    "results": array
  };
};

const buildTemplate = async () => {
  const csv = await getFieldConfig();
  const responses = {};
  for (const key in csv) {
    if (Object.hasOwnProperty.call(csv, key)) {
      const element = csv[key];
      responses[key] = element;
    }
  }
  return responses;
};

buildTemplate().then((data) => {
  fs.writeFileSync(`${process.cwd()}/uimodule/webapp/localService/mockResponses.json`, JSON.stringify(data));
  // fs.appendFileSync( process.cwd() + '/fieldBuilder/file.json',  util.inspect(JSON.stringify(options)));
});
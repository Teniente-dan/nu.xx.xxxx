/* jshint esversion: 11 */
const fs = require('fs');
const {
  parse
} = require("csv-parse");
class Config {
  constructor() {
    this.staticData();
  }

  async getConfig() {
    return this.fieldConfig || await this.getCsvConfig();
  }

  async getCsvConfig() {
    const csv = [];
    const csvFile = './fieldBuilder/createFields.csv';
    const stream = fs.createReadStream(csvFile, {
      encoding: 'utf8'
    });
    stream
      .pipe(parse({
        delimiter: ",",
        from_line: 2
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
        });
      });
    var end = new Promise(function (resolve, reject) {
      stream.on('end', () => resolve(csv));
    });
    return await end;
  }

  staticData() {
    // this.fieldConfig = [{
    //     id: "in1",
    //     retFieldId: "Ktopl",
    //     retValue: "Ktopl 1",
    //     valueHelp: true,
    //     mandatory: true,
    //   },
    //   {
    //     id: "in2",
    //     retFieldId: "Ktoks",
    //     retValue: "Ktoks 1",
    //     valueHelp: true,
    //     mandatory: true
    //   },
    //   {
    //     id: "in17",
    //     retFieldId: "strkorr",
    //     retValue: "strkorr 1",
    //     valueHelp: true,
    //     mandatory: false
    //   },
    // ];
  }
}

module.exports = new Config();
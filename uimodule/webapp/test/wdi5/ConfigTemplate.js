const templateConfig = require('../../../../fieldBuilder/template.json');
class Config {
  constructor() {
    this.fileID = templateConfig.fileID;
    this.templateName = `${this.fileID}_export_${new Date().toISOString().slice(0, 10).replace(/-/g, "")}.xlsx`;
  }
}

module.exports = new Config();
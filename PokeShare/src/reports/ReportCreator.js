const ejs = require("ejs")


class ReportCreator{
  constructor(title, subtitle, headers, dataArray){
    this.title = title
    this.subtitle = subtitle
    this.headers = headers
    this.dataArray = dataArray
  }

  async createReport(){
    ejs.renderFile(path.join(__dirname, ".", "reportModel.ejs"), {
      title: this.title,
      subtitle: subtitle,
      makeTable: true,
      headers: headers,
      content: dataArray
    }, (err, html) => {
      if(err) console.log(err);
      else {
        console.log(html);
        pdf.create(html, {}).toFile("src/reports/test1.pdf", (err, res) => {
          if(err) console.log(err);
          else console.log(res);
        });
      }
    })
  }
}

module.exports = ReportCreator;

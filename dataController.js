const { v4: uuidv4 } = require("uuid");
const { WriteFile, ReadFile } = require("./utilfunctions");

exports.wroteData = (req, res) => {
  const data = JSON.parse(req.params.data);
  console.log(data);
  const date = new Date();
  const documentuuid = uuidv4();
  WriteFile(`data/${documentuuid}.json`, req.params.data);

  ReadFile().then((data) => {
    const index = JSON.parse(data.toString("utf8"));

    index.logger.push({
      date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
      time: `${date.getHours()}-${date.getMinutes()}`,
      filename: `data/${documentuuid}.json`,
    });

    WriteFile("data/logger.json", JSON.stringify(index));
  });
  res.json({ status: "success" });
};

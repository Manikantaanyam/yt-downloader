//practice

const express = require("express");

const app = express();
const ytld = require("ytdl-core");

app.use(express.json());

app.post("/download", async (req, res) => {
  const { link } = req.body;
  console.log(link);

  if (!ytld.validateURL(link)) {
    return res.status(400).json({ msg: "Not valid url" });
  }

  const info = await ytld.getBasicInfo(link);
  const title = info.player_response.videoDetails;
  res.json({ msg: title });
});

app.listen(3000);

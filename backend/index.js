//practice

const fs = require("fs");

const ytld = require("ytdl-core");

const link = "https://www.youtube.com/watch?v=2rOnvgFyPgw";
console.log(link);

const youtubeDownloader = async () => {
  if (!ytld.validateURL(link)) {
    return res.status(400).json({ msg: "Not valid url" });
  }

  const info = await ytld.getBasicInfo(link);
  const info1 = await ytld.getInfo(link);

  const title = info.player_response.videoDetails;

  info1.formats.forEach((i) => {
    console.log(
      `${i.qualityLabel} - ${i.container} - ${i.hasAudio} - ${i.hasVideo}`
    );
  });
};

youtubeDownloader();

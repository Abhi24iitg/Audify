const express = require("express");
const route = require("./routes");
const multer = require("multer");
require("./connection");
const bodyParser = require("body-parser");
const cors = require("cors");
const ffmpeg = require("fluent-ffmpeg");
const app = express();
const upload = multer({ dest: "uploads/" }); // Set the destination folder for uploaded files

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Define the route to handle file uploads
app.post("/upload", upload.single("video"), (req, res) => {
  const videoPath = req.file.path;
  const audioPath = `${req.file.destination}/${req.file.filename}.mp3`;

  ffmpeg(videoPath)
    .noVideo()
    .toformat("mp3")
    .save(audioPath)
    .on("end", () => {
      // Conversion completed
      // You can save the audioPath to the database or perform any other necessary actions
      res.status(200).json({ message: "File converted successfully" });
    })
    .on("error", (err) => {
      console.error("Error converting file:", err);
      res.status(500).json({ error: "File conversion failed" });
    });
});
app.use("/", route);
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

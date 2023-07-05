const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/convert', upload.single('video'), (req, res) => {
  const { path } = req.file;
  const outputFilename = 'output.mp3'; // Specify the output audio file name

  ffmpeg.setFfmpegPath("C:/Path_programs/ffmpeg.exe");
  ffmpeg(path)
    .noVideo()
    .save(outputFilename)
    .on('end', () => {
      console.log('Audio conversion completed.');
      res.download(outputFilename); // Provide the converted audio file as a download
    })
    .on('error', (err) => {
      console.error('Error while converting:', err);
      res.status(500).send('Error while converting video to audio.');
    });
});

app.listen(8000, () => {
  console.log('Server is running on port 5000');
});

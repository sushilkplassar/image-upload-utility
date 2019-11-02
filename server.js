const express = require("express");

const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());

// Endpoint - Uploading the file
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "Please select a file to upload..." });
  }
  console.log("out server post");
  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, error => {
    if (error) {
      console.log(error);
      return res.status(500).send(error);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(5001, () => console.log("Server started..."));

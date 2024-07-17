const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const connectDB = require("./config/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send("Hello User, Welcome to RoamIndia : Discover the Soul of India");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.json({ filename: req.file.filename, filepath: req.file.path });
});


app.get("/api/uploads-list", (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: "Unable to scan directory" });
    }
    res.json(files);
  });
});

app.delete('/api/delete/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'uploads', filename);

  fs.unlink(filePath, err => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).send({ message: 'File not found.' });
      }
        return res.status(500).send({ message: 'Error deleting file.' });
    }
    res.status(200).send({ message: 'File deleted successfully.' });
  });
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/states", require("./Routes/StateRoutes"));

app.use("/api/cities", require("./Routes/CityRoutes"));

app.use("/api/users", require("./Routes/UserRoutes"));

app.use("/api/attractions", require("./Routes/AttractionRoutes"));

app.use("/api/reviews", require("./Routes/ReviewRoutes"));

app.listen(port, () => {
  console.log(`The server is running at port ${port}`);
});

const express = require("express");
const i18n = require("i18n");
const path = require("path");
const port = process.env.PORT || 3000;
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(i18n.init);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

i18n.configure({
  locales: [
    "en",
    "de",
    "es",
    "fr-CA",
    "hi",
    "ja",
    "ko",
    "nl",
    "pl",
    "pt",
    "zh-CN",
    "hu",
  ],
  directory: __dirname + "/locales",
});

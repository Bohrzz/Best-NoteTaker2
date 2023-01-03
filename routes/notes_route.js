const router = require("express").Router();
const utils = require("./helpers/fsUtils");
const uuid = require("./helpers/uuid");
//code to create notes here
router.get("/notes", (req, res) => {
  utils
    .readFromFile("./db/db.json")
    .then((notes) => res.json(JSON.parse(notes)));
});

router.post("/notes", (req, res) => {
  let note = {
    title: req.body.title,
    text: req.body.text,
    id: uuid(),
  };
  utils.readAndAppend(note, "./db/db.json");

  let response = {
    status: "success",

    body: note,
  };

  res.json(response);
});
module.exports = router;

const express = require("express");
const router = express.Router();
const passport = require("passport");

/* GET users listing. */
const noteController = require("../controllers/noteController");

router.post(
  "/create-new-note",
  passport.authenticate("jwt", { session: false }),
  noteController.createNewNote
);
router.get(
  "/get-all-notes",
  passport.authenticate("jwt", { session: false }),
  noteController.getAllNotes
);
router.get(
  "/get-note-by-id",
  passport.authenticate("jwt", { session: false }),
  noteController.getNotesById
);
router.put(
  "/update-note",
  passport.authenticate("jwt", { session: false }),
  noteController.updateNotes
);
router.delete(
  "/delete-note",
  passport.authenticate("jwt", { session: false }),
  noteController.deleteNotes
);

module.exports = router;

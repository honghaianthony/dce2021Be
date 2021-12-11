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
router.get("/get-all-notes", noteController.getAllNotes);
router.get("/get-note-by-id", noteController.getNotesById);
router.put("/update-note", noteController.updateNotes);
router.get("/delete-note", noteController.deleteNotes);

module.exports = router;

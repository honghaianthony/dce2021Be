const noteService = require("../services/noteService");

module.exports = {
  createNewNote: async function (req, res) {
    try {
      let note = await noteService.createNewNote(req);
      return res.status(200).json(note);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },
  getAllNotes: async function (req, res) {
    try {
      let note = await noteService.getAllNotes();
      return res.status(200).json(note);
    } catch (error) {
      return res.status(500).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },
  getNotesById: async function (req, res) {
    try {
      let note = await noteService.getNotesById(req.query.id, req.user.id);
      return res.status(200).json(note);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },
  updateNotes: async function (req, res) {
    try {
      let note = await noteService.updateNotes(req.body, req.user.id);
      return res.status(200).json(note);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },
  deleteNotes: async function (req, res) {
    try {
      let note = await noteService.deleteNotes(req.query.id);
      return res.status(200).json(note);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },
};

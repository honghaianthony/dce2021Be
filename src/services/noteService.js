const models = require("../models");

module.exports = {
    createNewNote: function (req) {
        const data = req.body;
        const userId = req.user.id;
        return new Promise(async function (resolve, reject) {
            try {
                await models.Note.create({
                    userId: userId,
                    content: data.content,
                    lessonId: data.lessonId,
                });

                resolve({
                    errCode: 0,
                    errMessage: "Create note successfully",
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    getAllNotes: function () {
        return new Promise(async function (resolve, reject) {
            try {
                let notes;
                notes = await models.Note.findAll({
                    include: {
                        model: models.User,
                        attributes: { exclude: ["password"] },
                    },
                });
                resolve(notes);
            } catch (error) {
                reject(error);
            }
        });
    },
    getNotesById: function (noteId) {
        return new Promise(async function (resolve, reject) {
            try {
                let notes = "";
                if (noteId && noteId !== "ALL") {
                    notes = await models.Note.findOne({
                        where: { id: noteId },
                        include: {
                            model: models.User,
                            attributes: { exclude: ["password"] },
                        },
                    });
                }
                resolve(notes);
            } catch (error) {
                reject(error);
            }
        });
    },
    updateNotes: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.id) {
                    resolve({
                        errCode: 1,
                        errMessage: "Missing input parameter",
                    });
                }
                let notes = await models.Note.findOne({
                    where: { id: data.id },
                    raw: false,
                });
                if (notes) {
                    notes.content = data.content;

                    await notes.save();

                    resolve({
                        errCode: 0,
                        errMessage: "Update Note successfully",
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: "Note not found",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
    deleteNotes: function (noteId) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!noteId) {
                    resolve({
                        errCode: 1,
                        errMessage: "The note ID is not existed",
                    });
                }
                let notes = await models.Note.findOne({
                    where: { id: noteId },
                });
                if (notes) {
                    await notes.destroy();
                    resolve({
                        errCode: 0,
                        errMessage: "The note has been deleted",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
};

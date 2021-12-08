const models = require("../models");

module.exports = {
    createNewLesson: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                await models.Lesson.create({
                    courseId: data.courseId,
                    name: data.name,
                    content: data.content,
                    input: data.input,
                });

                resolve({
                    errCode: 0,
                    errMessage: "Create Lesson successfully",
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    getAllLessons: function () {
        return new Promise(async function (resolve, reject) {
            try {
                let lessons = "";

                lessons = await models.Lesson.findAll();

                resolve(lessons);
            } catch (error) {
                reject(error);
            }
        });
    },
    getLessonsById: function (lessonId) {
        return new Promise(async function (resolve, reject) {
            try {
                let lessons = "";

                if (lessonId && lessonId !== "ALL") {
                    lessons = await models.Lesson.findOne({
                        where: { id: lessonId },
                    });
                }
                resolve(lessons);
            } catch (error) {
                reject(error);
            }
        });
    },
    updateLessons: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.id || !data.name || !data.courseId) {
                    resolve({
                        errCode: 1,
                        errMessage: "Missing input parameter",
                    });
                }
                let lesson = await models.Lesson.findOne({
                    where: { id: data.id },
                    raw: false,
                });
                if (lesson) {
                    lesson.content = data.content;
                    lesson.input = data.input;

                    await lesson.save();

                    resolve({
                        errCode: 0,
                        errMessage: "Update lesson successfully",
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: "lesson not found",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
    deleteLessons: function (lessonId) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!lessonId) {
                    resolve({
                        errCode: 1,
                        errMessage: "The lesson ID is not existed",
                    });
                }
                let lesson = await models.Lesson.findOne({
                    where: { id: lessonId },
                });
                if (lesson) {
                    await lesson.destroy();
                    resolve({
                        errCode: 0,
                        errMessage: "The lesson has been deleted",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
};

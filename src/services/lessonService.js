const models = require("../models");

module.exports = {
    createNewLesson: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                await models.Lesson.create({
                    courseId: data.courseId,
                    lessonName: data.lessonName,
                    content: data.content,
                    description: data.description,
                    input: data.input,
                    output: data.output,
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
    getAllLessonsByCourseId: function (courseId) {
        return new Promise(async function (resolve, reject) {
            try {
                let lessons = "";

                lessons = await models.Lesson.findAll({
                    where: {
                        courseId: courseId,
                    },
                });

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
                if (!data.id || !data.courseId) {
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
                    lesson.lessonName = data.lessonName;
                    lesson.description = data.description;
                    lesson.input = data.input;
                    lesson.output = data.output;

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
    createNewLessonComment: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                await models.LessonComment.create({
                    lessonId: data.lessonId,
                    userId: data.userId,
                    content: data.content,
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
    getAllLessonsComment: function () {
        return new Promise(async function (resolve, reject) {
            try {
                let lessons = "";

                lessons = await models.LessonComment.findAll();

                resolve(lessons);
            } catch (error) {
                reject(error);
            }
        });
    },
    getLessonsByIdComment: function (lessonId) {
        return new Promise(async function (resolve, reject) {
            try {
                let lessons = "";

                if (lessonId && lessonId !== "ALL") {
                    lessons = await models.LessonComment.findOne({
                        where: { id: lessonId },
                    });
                }
                resolve(lessons);
            } catch (error) {
                reject(error);
            }
        });
    },
    updateLessonsComment: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.id || !data.lessonId || !data.userId) {
                    resolve({
                        errCode: 1,
                        errMessage: "Missing input parameter",
                    });
                }
                let lesson = await models.LessonComment.findOne({
                    where: { id: data.id },
                    raw: false,
                });
                if (lesson) {
                    lesson.content = data.content;

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
    deleteLessonsComment: function (lessonId) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!lessonId) {
                    resolve({
                        errCode: 1,
                        errMessage: "The lesson ID is not existed",
                    });
                }
                let lesson = await models.LessonComment.findOne({
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

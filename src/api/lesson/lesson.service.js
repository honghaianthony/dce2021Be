const model = require('../../models');
const { Response } = require('../../utilities/http/statusResponse');
const { httpStatus } = require('../../utilities/http/httpStatus');

module.exports = {
    getAllLesson: async function (req) {
        try {
            const { courseId } = req.query;
            const lessons = await model.Lesson.find({ courseId: courseId });
            return new Response('success', httpStatus.OK, lessons);
        } catch (error) {
            throw new Error(error);
        }
    },
    createLesson: async function (req) {
        try {
            const { lessonName, content, description, courseId } = req.body;
            const course = await model.Course.findOne({ _id: courseId });
            if (course) {
                const lesson = await model.Lesson.create({
                    courseId: course,
                    lessonName,
                    content,
                    description,
                });
                return new Response('success', httpStatus.CREATED, lesson);
            }
            return new Response('course not found', httpStatus.NOT_FOUND);
        } catch (error) {
            throw new Error(error);
        }
    },
    getLessonById: async function (req) {
        try {
            const { id } = req.query;
            const lesson = await model.Lesson.findOne({ _id: id });
            return new Response('success', httpStatus.OK, lesson);
        } catch (error) {
            throw new Error(error);
        }
    },
    deleteLessonById: async function (req) {
        try {
            const { id } = req.query;
            const lesson = await model.Lesson.findOne({ _id: id });
            if (lesson) {
                await lesson.delete();
                return new Response('success', httpStatus.OK);
            }
        } catch (error) {
            throw new Error(error);
        }
    },
    createLessonTest: async function (req) {
        try {
            const { lessonId, input, output } = req.body;
            const lesson = await model.LessonTest.create({
                input,
                output,
                lessonId,
            });
            return new Response('success', httpStatus.CREATED);
        } catch (error) {
            throw new Error(error);
        }
    },
    updateNote: async function (req) {
        try {
            const { lessonId, content } = req.body;
            const { id } = req.user;
            const user = await model.User.findOne({ _id: id });
            const lesson = await model.Lesson.findOne({ _id: lessonId });

            if (user && lesson) {
                const found = await model.LessonNote.findOneAndUpdate(
                    { userId: id, lessonId: lessonId },
                    { userId: user, lessonId: lesson, content: content },
                    { upsert: true },
                );
                return new Response('success', httpStatus.OK);
            }
            return new Response('not found', httpStatus.NOT_FOUND);
        } catch (error) {
            throw new Error(error);
        }
    },
    updateLessonById: async function (req) {
        try {
            const { id, content, description, lessonName, courseId } = req.body;
            const update = {};
            if (content) {
                update.content = content;
            }
            if (description) {
                update.description = description;
            }
            if (lessonName) {
                update.lessonName = lessonName;
            }
            if (courseId) {
                const course = await model.Course.findOne({ _id: courseId });
                if (course) {
                    update.courseId = course;
                }
            }
            await model.Lesson.findOneAndUpdate({ _id: id }, update);
            return new Response('success', httpStatus.OK);
        } catch (error) {
            throw new Error(error);
        }
    },
    updateLessonTestById: async function (req) {
        try {
            const { lessonTestId, lessonId, input, output } = req.body;
            const test = await model.LessonTest.findByIdAndUpdate(
                { _id: lessonTestId, lessonId: lessonId },
                { input, output },
            );
            return new Response('success', httpStatus.OK);
        } catch (error) {
            throw new Error(error);
        }
    },
    getAllLessonTestById: async function (req) {
        try {
            const { lessonId } = req.query;
            const tests = await model.LessonTest.find({ lessonId });
            return new Response('success', httpStatus.OK, tests);
        } catch (error) {
            throw new Error(error);
        }
    },
    getAllLessonComment: async function (req) {
        const lessonId = req.query.lessonId;
        return new Promise(async function (resolve, reject) {
            try {
                const lessonComment = await model.LessonComment.find({
                    lessonId: lessonId,
                }).populate('userId');
                resolve(lessonComment);
            } catch (error) {
                reject(error);
            }
        });
        // try {
        //     const { lessonId } = req.query;
        //     const comments = await model.LessonComment.find({ lessonId }).populate('userId');
        //     return new Response('success', httpStatus.OK, comments);
        // } catch (error) {
        //     throw new Error(error);
        // }
    },
    getLessonNote: async function (req) {
        try {
            const { lessonId } = req.query;
            const { id } = req.user;
            const note = await model.LessonNote.findOne({
                lessonId: lessonId,
                userId: id,
            });
            if (note) {
                return new Response('success', httpStatus.OK, note);
            } else {
                return new Response('not found', httpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new Error(error);
        }
    },
};

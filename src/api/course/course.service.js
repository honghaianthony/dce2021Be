const model = require('../../models');

module.exports = {
    getAllCourses: async function () {
        const courses = await model.Course.find();
        return courses;
    },

    getCourseById: async function (courseId) {
        const course = await model.Course.findOne({
            _id: courseId,
        });
        return course;
    },

    createCourse: async function (req) {
        const data = req.body;
        return new Promise(async function (resolve, reject) {
            try {
                await model.Course.create({
                    courseName: data.courseName,
                    description: data.description,
                    rating: data.rating,
                    time: data.time,
                    image: data.image,
                });

                resolve({
                    errCode: 0,
                    errMessage: 'Create Course successfully',
                });
            } catch (error) {
                reject(error);
            }
        });
    },

    deleteCourseById: async function (req) {
        const courseId = req.query.id;
        return new Promise(async function (resolve, reject) {
            try {
                let course = await model.Course.findOne({
                    _id: courseId,
                });
                if (course) {
                    await course.delete();
                    resolve({
                        errCode: 0,
                        errMessage: 'The course has been deleted.',
                    });
                } else {
                    resolve({
                        errorCode: 1,
                        errMessage: 'The course ID is not existed.',
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },

    updateCourseById: async function (req) {
        const data = req.body;
        return new Promise(async function (resolve, reject) {
            try {
                let course = await model.Course.findOne({
                    _id: data.id,
                });
                if (course) {
                    (course.courseName = data.courseName),
                        (course.description = data.description),
                        (course.rate = data.rate),
                        (course.time = data.time),
                        (course.image = data.image),
                        await course.save();

                    resolve({
                        errCode: 0,
                        errMessage: 'Update course successfully',
                    });
                } else {
                    resolve({
                        errCode: 1,
                        errMessage: 'Course not found',
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
};

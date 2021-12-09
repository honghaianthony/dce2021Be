const models = require("../models");

module.exports = {
    createNewCourses: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                await models.Course.create({
                    courseName: data.courseName,
                    description: data.description,
                    rate: data.rate,
                    time: data.time,
                    image: data.image,
                });

                resolve({
                    errCode: 0,
                    errMessage: "Create course successfully",
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    getAllCourses: function () {
        return new Promise(async function (resolve, reject) {
            try {
                let courses;

                courses = await models.Course.findAll();

                resolve(courses);
            } catch (error) {
                reject(error);
            }
        });
    },
    getCourseById: function (courseId) {
        return new Promise(async function (resolve, reject) {
            try {
                let courses;
                if (courseId && courseId !== "ALL") {
                    courses = await models.Course.findOne({
                        where: { id: courseId },
                    });
                }
                resolve(courses);
            } catch (error) {
                reject(error);
            }
        });
    },
    updateCourses: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.id) {
                    resolve({
                        errCode: 1,
                        errMessage: "Missing input parameter",
                    });
                }
                let course = await models.Course.findOne({
                    where: { id: data.id },
                    raw: false,
                });
                if (course) {
                    course.description = data.description;
                    course.rate = data.rate;
                    course.courseName = data.courseName;
                    course.time = data.time;
                    course.image = data.image;

                    await course.save();

                    resolve({
                        errCode: 0,
                        errMessage: "Update info successfully",
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: "Course not found",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
    deleteCourses: function (courseId) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!courseId) {
                    resolve({
                        errCode: 1,
                        errMessage: "The course ID is not existed",
                    });
                }
                let course = await models.Course.findOne({
                    where: { id: courseId },
                });
                if (course) {
                    await course.destroy();
                    resolve({
                        errCode: 0,
                        errMessage: "The course has been deleted",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
};
const modal = require('../../models');
var mongoose = require('mongoose');
const util = require('../../utilities/jwt');
module.exports = {
    /*done*/
    getAllUsers: async function (token) {
        return new Promise(async function (resolve, reject) {
            try {
                let users = await modal.User.find();
                resolve(users);
            } catch (e) {
                reject(e);
            }
        });
    },
    /*done*/
    getUserById: function (req) {
        const userId = req.query.userId;
        return new Promise(async function (resolve, reject) {
            try {
                var user = await modal.User.findOne({ _id: userId });
                resolve(user);
            } catch (e) {
                reject(e);
            }
        });
    },
    /*done*/
    getUserCourseByCourseId: function (req) {
        const courseId = req.query.courseId;
        const listUser = [];
        return new Promise(async function (resolve, reject) {
            try {
                const course = await modal.Course.findOne({
                    _id: courseId,
                });
                const userCourse = await modal.UserCourse.find({
                    courseId: courseId,
                });

                await Promise.all(
                    userCourse.map(async (course) => {
                        const informationUser = await modal.User.findOne({
                            _id: course.userId,
                        });
                        listUser.push(informationUser);
                    }),
                );
                var userId;
                userCourse.map((item) => {
                    userId = item.userId;
                });
                console.log(userId);
                resolve({
                    course: course,
                    listUser: listUser,
                    userCourse: userCourse,
                });
            } catch (e) {
                reject(e);
            }
        });
    },
    /*Done*/
    getUserLesson: function (req) {
        const lessonId = req.query.lessonId;
        return new Promise(async function (resolve, reject) {
            try {
                const lesson = await modal.Lesson.findOne({
                    _id: lessonId,
                });
                const userLesson = await modal.UserLesson.find({
                    lessonId: lessonId,
                });
                var userId;
                userLesson.map((item) => {
                    userId = item.userId;
                });
                const user = await modal.User.findOne({
                    _id: userId,
                });

                resolve({
                    lesson: lesson,
                    user: user,
                    userLesson: userLesson,
                });
            } catch (e) {
                reject(e);
            }
        });
    },
    /* Done */
    createUserCourse: function (req) {
        const data = req.body;
        const userId = req.user.id;
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.courseId) {
                    resolve({
                        errorCode: 1,
                        errMessage: 'Missing input parameter',
                    });
                }
                const checkUserCourse = await modal.UserCourse.findOne({
                    userId: userId,
                    courseId: data.courseId,
                });
                if (checkUserCourse) {
                    resolve({
                        errCode: 2,
                        errMessage: 'User has resgistered this course',
                    });
                } else {
                    await modal.UserCourse.create({
                        userId: userId,
                        courseId: data.courseId,
                        isCompleted: false,
                    });
                    resolve({
                        errCode: 0,
                        errMessage: 'Create userCourse successfully',
                    });
                }
            } catch (e) {
                reject(e);
            }
        });
    },
    /*done*/
    updateRole: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.role === 3 || !data.role === 1 || !data.role) {
                    resolve({
                        errorCode: 1,
                        errMessage: 'Invalid role',
                    });
                }
                if (!data.userId) {
                    resolve({
                        errorCode: 1,
                        errMessage: 'Missing input parameter',
                    });
                }
                let user = await modal.User.findById({ _id: data.userId });
                if (user) {
                    user.role = data.role;
                    await user.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Update role successfully',
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Role not found',
                    });
                }
            } catch (e) {
                reject(e);
            }
        });
    },

    /* Done */
    registerLesson: function (req) {
        const data = req.body;
        const userId = req.user.id;
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.lessonId) {
                    resolve({
                        errorCode: 1,
                        errMessage: 'Missing input parameter',
                    });
                }
                const checkUserLesson = await modal.UserLesson.findOne({
                    userId: userId,
                    lessonId: data.lessonId,
                });
                if (!checkUserLesson) {
                    await modal.UserLesson.create({
                        userId: userId,
                        lessonId: data.lessonId,
                        isCompleted: false,
                        // code: data.code,
                    });
                    resolve({
                        errCode: 0,
                        errMessage: 'Create userLesson successfully',
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'User has resgistered this lesson',
                    });
                }
            } catch (e) {
                reject(e);
            }
        });
    },
    registerExercise: function (req) {
        const data = req.body;
        const userId = req.user.id;
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.exerciseId) {
                    resolve({
                        errorCode: 1,
                        errMessage: 'Missing input parameter',
                    });
                }
                const checkUserExercise = await modal.userExercise.findOne({
                    userId: userId,
                    exerciseId: data.exerciseId,
                });
                if (!checkUserExercise) {
                    await modal.userExercise.create({
                        userId: userId,
                        exerciseId: data.exerciseId,
                        isCompleted: false,
                        // code: data.code,
                    });
                    resolve({
                        errCode: 0,
                        errMessage: 'Create userExercise successfully',
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'User has resgistered this exercise',
                    });
                }
            } catch (e) {
                reject(e);
            }
        });
    },
    doneLesson: function (req) {
        const data = req.body;
        const userId = req.user.id;
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.lessonId) {
                    resolve({
                        errorCode: 1,
                        errMessage: 'Missing input parameter',
                    });
                }
                let lesson = await modal.UserLesson.findOne({
                    lessonId: data.lessonId,
                    userId: userId,
                });

                if (lesson) {
                    if (lesson.isCompleted) {
                        resolve({
                            errCode: 3,
                            errMessage: 'Lesson has been submitted',
                        });
                    } else {
                        lesson.isCompleted = data.isCompleted;
                        lesson.code = data.code;
                        await lesson.save();
                        resolve({
                            errCode: 0,
                            errMessage: 'Update successfully',
                        });
                    }
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Lesson not found',
                    });
                }
            } catch (e) {
                reject(e);
            }
        });
    },
    doneCourse: function (req) {
        const data = req.body;
        const userId = req.user.id;
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.courseId) {
                    resolve({
                        errorCode: 1,
                        errMessage: 'Missing input parameter',
                    });
                }
                let course = await modal.UserCourse.findOne({
                    courseId: data.courseId,
                    userId: userId,
                });
                console.log(course);
                if (course) {
                    course.isCompleted = true;
                    course.rate = data.rate;
                    course.timeCost = data.timeCost;

                    await course.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Update successfully',
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Course not found',
                    });
                }
            } catch (e) {
                reject(e);
            }
        });
    },
    /*chưa biết làm*/
    checkDoneCourse: function (req) {
        const userId = req.user.id;
        const { courseId } = req.query;
        const listInfoCourse = [];
        return new Promise(async function (resolve, reject) {
            try {
                const userCourse = await modal.UserCourse.find({
                    userId: userId,
                    courseId: courseId,
                });

                userCourse.map(async (course) => {
                    const informationCourses = await modal.UserLesson.findOne({
                        userId: userId,
                    });

                    listInfoCourse.push(informationCourses);
                    console.log(listInfoCourse);
                    resolve(listInfoCourse);
                });
            } catch (e) {
                reject(e);
            }
        });
    },
    checkDoneUserLesson: function (req) {
        const userId = req.user.id;
        const lessonId = req.query.lessonId;
        return new Promise(async function (resolve, reject) {
            try {
                if (!lessonId) {
                    resolve({
                        errCode: 1,
                        errMessage: 'Missing parameter',
                    });
                } else {
                    const lesson = await modal.UserLesson.findOne({
                        userId,
                        lessonId,
                    });
                    if (lesson) {
                        if (lesson.isCompleted == true) {
                            resolve({
                                errCode: 0,
                                errMessage: 'Lesson was completed',
                            });
                        } else {
                            resolve({
                                errCode: 2,
                                errMessage: 'Lesson is not completed',
                            });
                        }
                    } else {
                        resolve({
                            errCode: 3,
                            errMessage: 'Lesson not found',
                        });
                    }
                }
            } catch (e) {
                reject(e);
            }
        });
    },
    getCompletedUserLessonByLessonId: function (req) {
        const userId = req.user.id;
        const lessonId = req.query.lessonId;
        return new Promise(async function (resolve, reject) {
            try {
                if (!lessonId) {
                    resolve({
                        errCode: 1,
                        errMessage: 'Missing parameter',
                    });
                } else {
                    const lesson = await modal.UserLesson.findOne({
                        userId,
                        lessonId,
                        isCompleted: true,
                    });
                    if (lesson) {
                        resolve({
                            lesson,
                            errCode: 0,
                            errMessage: 'Lesson was completed',
                        });
                    } else {
                        resolve({
                            errCode: 3,
                            errMessage: 'Lesson not found',
                        });
                    }
                }
            } catch (e) {
                reject(e);
            }
        });
    },
    getMe: function (req) {
        const userId = req.user.id;
        return new Promise(async function (resolve, reject) {
            try {
                if (!userId) {
                    resolve({
                        errCode: 1,
                        errMessage: 'Missing parameters',
                    });
                }
                const user = await modal.User.findOne({ _id: userId });
                resolve({ errCode: 0, user });
            } catch (e) {
                reject(e);
            }
        });
    },
    /*done*/
    getAllUserCourse: function (req) {
        return new Promise(async function (resolve, reject) {
            try {
                const userId = req.user.id;
                var listInfoCourse = [];
                const courses = await modal.UserCourse.find({
                    userId: userId,
                }).populate('courseId');
                // await Promise.all(
                //     courses.map(async (course) => {
                //         const informationCourses = await modal.Course.findOne({
                //             _id: course.courseId,
                //         });
                //         listInfoCourse.push(informationCourses);
                //     }),
                // );
                resolve(courses);
            } catch (e) {
                reject(e);
            }
        });
    },
    /*done*/
    getAllUserExercise: function (req) {
        return new Promise(async function (resolve, reject) {
            try {
                const userId = req.user.id;
                // let listInforExercise = [];

                const exercises = await modal.userExercise
                    .find({
                        userId: userId,
                    })
                    .populate('exerciseId');

                // await Promise.all(
                //     exercises.map(async (exercise) => {
                //         const informationExercise =
                //             await modal.Exercise.findById({
                //                 _id: exercise.exerciseId,
                //             });
                //         listInforExercise.push(informationExercise);
                //     }),
                // );
                resolve(exercises);
            } catch (e) {
                reject(e);
            }
        });
    },
    updateUserInfo: function (req) {
        return new Promise(async function (resolve, reject) {
            try {
                const userId = req.user.id;
                const { firstName, lastName, dateOfBirth, phone, email } =
                    req.body;
                const user = await modal.User.findOne({ _id: userId });
                const checkEmail = await modal.User.findOne({ email });

                if (user.email === '' && checkEmail === null) {
                    user.email = email;
                }
                if (user.email === '' && checkEmail !== null) {
                    resolve({ errCode: 1 });
                    return;
                }
                //update user info
                user.firstName = firstName;
                user.lastName = lastName;
                user.dateOfBirth = dateOfBirth;
                user.phone = phone;

                user.save();

                const jwt = util.issueJWT(user);
                resolve({ errCode: 0, token: jwt.token });
            } catch (e) {
                reject(e);
            }
        });
    },
};

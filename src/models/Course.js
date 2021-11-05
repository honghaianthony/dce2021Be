module.exports = (sequelize, Sequelize) => {
    class Course extends Sequelize.Model {
        static associate(models) {
            Course.hasMany(models.CoursesStartByUser, {
                foreignKey: "courseId",
            });
            Course.hasMany(models.Lesson, {
                foreignKey: "courseId",
            });
        }
    }

    Course.init(
        {
            name: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: {
                    args: true,
                    msg: "Course with this name has already existed.",
                },
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            rate: {
                type: Sequelize.INTEGER,
            },
            isDeleted: {
                type: Sequelize.BOOLEAN,
            },
            deletedTime: {
                type: Sequelize.DATE,
            },
        },
        {
            sequelize,
            modelName: "Course",
            timestamps: true,
        }
    );

    return Course;
};

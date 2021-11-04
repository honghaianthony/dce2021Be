module.exports = (sequelize, Sequelize) => {
    class Courses extends Sequelize.Model {}

    Courses.init(
        {
            name: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: {
                    args: true,
                    msg: "Courses with this name has already existed.",
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
            modelName: "Courses",
            timestamps: true,
        }
    );

    return Courses;
};

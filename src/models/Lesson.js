module.exports = (sequelize, Sequelize) => {
    class Lesson extends Sequelize.Model {}

    Lesson.init(
        {
            courseId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: {
                    args: true,
                    msg: "User with this username already exist.",
                },
            },
            content: {
                type: Sequelize.TEXT,
            },
            input: {
                type: Sequelize.STRING,
                allowNull: false,
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
            modelName: "Lesson",
            timestamps: true,
        }
    );

    return Lesson;
};

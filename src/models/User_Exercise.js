module.exports = (sequelize, Sequelize) => {
    class User_Exercise extends Sequelize.Model {}

    User_Exercise.init(
        {
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            exerciseId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            code: {
                type: Sequelize.STRING,
            },
            isCompleted: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "User_Exercise",
            timestamps: true,
        }
    );

    return User_Exercise;
};

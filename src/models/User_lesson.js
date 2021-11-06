module.exports = (sequelize, Sequelize) => {
  class User_lesson extends Sequelize.Model {}
  User_lesson.init(
    {
      code: {
        type: Sequelize.STRING,
      },
      isCompleted: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "User_lesson",
      timestamps: true,
    }
  );
  return User_lesson;
};

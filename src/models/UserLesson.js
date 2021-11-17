module.exports = (sequelize, Sequelize) => {
  class UserLesson extends Sequelize.Model {}
  UserLesson.init(
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
      modelName: "UserLesson",
      timestamps: true,
    }
  );
  return UserLesson;
};

module.exports = (sequelize, Sequelize) => {
  class UserLesson extends Sequelize.Model {
    static associate(models) {
      UserLesson.belongsTo(models.User, {
        foreignKey: "userId",
      });
      UserLesson.belongsTo(models.Lesson, {
        foreignKey: "lessonId",
      });
    }
  }
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

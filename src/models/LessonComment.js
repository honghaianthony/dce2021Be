module.exports = (sequelize, Sequelize) => {
  class LessonComment extends Sequelize.Model {
    static associate(models) {
      LessonComment.belongsTo(models.Lesson, {
        foreignKey: "lessonId",
      });
      LessonComment.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  LessonComment.init(
    {
      content: {
        type: Sequelize.TEXT,
      },
    },
    {
      sequelize,
      modelName: "LessonComment",
      timestamps: true,
    }
  );
  return LessonComment;
};

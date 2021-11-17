module.exports = (sequelize, Sequelize) => {
  class LessonComment extends Sequelize.Model {}
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

module.exports = (sequelize, Sequelize) => {
  class LessonComment extends Sequelize.Model {}
  LessonComment.init(
    {
      content: {
        type: Sequelize.TEXT,
      },
      createAt: {
        type: Sequelize.DATEONLY,
      },
      updateAt: {
        type: Sequelize.DATEONLY,
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

module.exports = (sequelize, Sequelize) => {
  class Lesson_comment extends Sequelize.Model {}
  Lesson_comment.init(
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
      modelName: "Lesson_comment",
      timestamps: true,
    }
  );
  return Lesson_comment;
};

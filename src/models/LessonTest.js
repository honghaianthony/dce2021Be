module.exports = (sequelize, Sequelize) => {
  class LessonTest extends Sequelize.Model {
    static associate(models) {
      LessonTest.belongsTo(models.Lesson, {
        foreignKey: "lessonId",
      });
    }
  }
  LessonTest.init(
    {
      lessonId: {
        type: Sequelize.INTEGER,
      },
      input: {
        type: Sequelize.STRING,
      },
      output: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      modelName: "LessonTest",
      timestamps: false,
    }
  );
  return LessonTest;
};

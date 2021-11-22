module.exports = (sequelize, Sequelize) => {
  class Lesson extends Sequelize.Model {
    static associate(models) {
      Lesson.belongsTo(models.Course, {
          foreignKey: "courseId",
      });
      // Lesson.hasMany(models.Note, {
      //     foreignKey: "lessonId",
      // });
      // Lesson.hasMany(models.UserLesson, {
      //     foreignKey: "lessonId",
      // });
      // Lesson.hasMany(models.LessonComment, {
      //     foreignKey: "lessonId",
      // });
      Lesson.belongsToMany(models.User, {
        through: "Note",
        foreignKey: "lessonId",
      });
      Lesson.belongsToMany(models.User, {
        through: "UserLesson",
        foreignKey: "lessonId",
      });
      Lesson.belongsToMany(models.User, {
        through: "LessonComment",
        foreignKey: "lessonId",
      });
    }
  }

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
      output: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Lesson",
      timestamps: true,
      paranoid: true,
    }
  );

  return Lesson;
};

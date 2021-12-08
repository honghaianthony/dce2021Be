module.exports = (sequelize, Sequelize) => {
  class Course extends Sequelize.Model {
    static associate(models) {
      Course.hasMany(models.Lesson, {
        foreignKey: "courseId",
      });

      Course.hasMany(models.UserCourse, {
        foreignKey: "courseId",
      });
    }
  }

  Course.init(
    {
      courseName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      rate: {
        type: Sequelize.INTEGER,
      },
      time: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      modelName: "Course",
      timestamps: true,
      paranoid: true,
    }
  );

  return Course;
};

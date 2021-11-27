module.exports = (sequelize, Sequelize) => {
  class Course extends Sequelize.Model {
    static associate(models) {
      // Course.hasMany(models.CoursesStartByUser, {
      //     foreignKey: "courseId",
      // });
      Course.hasMany(models.Lesson, {
        foreignKey: "courseId",
      });

      Course.belongsToMany(models.User, {
        through: "CourseStartByUser",
        foreignKey: "courseId",
      });
    }
  }

  Course.init(
    {
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: {
          args: true,
          msg: "Course with this name has already existed.",
        },
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
      }
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

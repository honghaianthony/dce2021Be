module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {
    static associate(models) {
      User.hasMany(models.Blog, {
        foreignKey: "userId",
      });
      User.hasMany(models.BlogComment, {
        foreignKey: "userId",
      });

      User.belongsToMany(models.Course, {
        through: "CourseStartByUser",
        foreignKey: "userId",
      });
      User.belongsToMany(models.Lesson, {
        through: "Note",
        foreignKey: "userId",
      });
      User.belongsToMany(models.Lesson, {
        through: "UserLesson",
        foreignKey: "userId",
      });
      User.belongsToMany(models.Lesson, {
        through: "LessonComment",
        foreignKey: "userId",
      });
      User.belongsToMany(models.Exercise, {
        through: "UserExercise",
        foreignKey: "userId",
      });
      User.belongsToMany(models.Blog, {
        through: "BlogComment",
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      username: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: {
          args: true,
          msg: "User with this username already exist.",
        },
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: {
          args: true,
          msg: "User with this email already exist.",
        },
      },
      phone: {
        type: Sequelize.STRING(255),
      },
      role: {
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
      paranoid: true,
    }
  );
  return User;
};

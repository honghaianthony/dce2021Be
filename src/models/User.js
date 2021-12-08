module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {
    static associate(models) {
      User.hasMany(models.Blog, {
        foreignKey: "userId",
      });
      User.hasMany(models.BlogComment, {
        foreignKey: "userId",
      });

      User.hasMany(models.UserCourse, {
        foreignKey: "userId",
      });
      User.hasMany(models.Note, {
        foreignKey: "userId",
      });
      User.hasMany(models.UserLesson, {
        foreignKey: "userId",
      });
      User.hasMany(models.LessonComment, {
        foreignKey: "userId",
      });
      User.hasMany(models.UserExercise, {
        foreignKey: "userId",
      });
      User.hasMany(models.BlogComment, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      userName: {
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

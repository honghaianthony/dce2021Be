module.exports = (sequelize, Sequelize) => {
  class Exercise extends Sequelize.Model {
    static associate(models) {
      // Exercise.hasMany(models.UserExercise, {
      //     foreignKey: "exerciseId",
      // });
      Exercise.belongsTo(models.User, {
          foreignKey: "userId",
      });
      Exercise.belongsToMany(models.User, {
        through: "UserExercise",
        foreignKey: "exerciseId",
      });
      Exercise.hasMany(models.ExerciseTest, {
        foreignKey: "exerciseId"
      });
    }
  }

  Exercise.init(
    {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
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
      level: {
        type: Sequelize.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Exercise",
      timestamps: true,
    }
  );

  return Exercise;
};

module.exports = (sequelize, Sequelize) => {
  class Exercise extends Sequelize.Model {
    static associate(models) {
      Exercise.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Exercise.hasMany(models.UserExercise, {
        foreignKey: "exerciseId",
      });
      Exercise.hasMany(models.ExerciseTest, {
        foreignKey: "exerciseId",
      });
    }
  }

  Exercise.init(
    {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      exerciseName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
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

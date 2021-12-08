module.exports = (sequelize, Sequelize) => {
  class UserExercise extends Sequelize.Model {
    static associate(models) {
      UserExercise.belongsTo(models.Exercise, {
        foreignKey: "exerciseId",
      });
      UserExercise.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }

  UserExercise.init(
    {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      exerciseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      code: {
        type: Sequelize.STRING,
      },
      isCompleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UserExercise",
      timestamps: true,
    }
  );

  return UserExercise;
};

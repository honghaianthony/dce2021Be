module.exports = (sequelize, Sequelize) => {
  class ExerciseTest extends Sequelize.Model {
    static associate(models) {
        ExerciseTest.belongsTo(models.Exercise, {
          foreignKey: "exerciseId",
        });
    }
  }
  ExerciseTest.init(
    {
        exerciseId: {
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
      modelName: 'ExerciseTest',
    }
  );
  return ExerciseTest;
};

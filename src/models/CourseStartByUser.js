module.exports = (sequelize, Sequelize) => {
  class CourseStartByUser extends Sequelize.Model {}
  CourseStartByUser.init(
    {
      rate: {
        type: Sequelize.INTEGER,
      },
      isCompleted: {
        type: Sequelize.BOOLEAN,
      },
      timeCost: {
        type: Sequelize.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "CourseStartByUser",
      timestamps: true,
    }
  );
  return CourseStartByUser;
};

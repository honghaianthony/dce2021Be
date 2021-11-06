module.exports = (sequelize, Sequelize) => {
  class course_start_by_user extends Sequelize.Model {}
  course_start_by_user.init(
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
      modelName: "course_start_by_user",
      timestamps: true,
    }
  );
  return course_start_by_user;
};

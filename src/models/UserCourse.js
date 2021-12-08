module.exports = (sequelize, Sequelize) => {
  class UserCourse extends Sequelize.Model {
    static associate(models) {
      UserCourse.belongsTo(models.User, {
        foreignKey: "userId",
      });
      UserCourse.belongsTo(models.Course, {
        foreignKey: "courseId",
      });
    }
  }
  UserCourse.init(
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
      modelName: "UserCourse",
      timestamps: true,
    }
  );
  return UserCourse;
};

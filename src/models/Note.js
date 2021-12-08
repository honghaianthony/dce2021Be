module.exports = (sequelize, Sequelize) => {
  class Note extends Sequelize.Model {
    static associate(models) {
      Note.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Note.belongsTo(models.Lesson, {
        foreignKey: "lessonId",
      });
    }
  }
  Note.init(
    {
      content: {
        type: Sequelize.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Note",
      timestamps: true,
    }
  );
  return Note;
};

module.exports = (sequelize, Sequelize) => {
  class Note extends Sequelize.Model {}
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

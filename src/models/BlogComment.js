module.exports = (sequelize, Sequelize) => {
  class BlogComment extends Sequelize.Model {
    static associate(models) {
        BlogComment.belongsTo(models.Blog, {
            foreignKey: 'blogId',
        });
        BlogComment.belongsTo(models.User, {
            foreignKey: 'userId',
        });
    }
  }
  BlogComment.init(
    {
        blogId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        content: {
            type: Sequelize.TEXT,
        },
    },
    {
      sequelize,
      modelName: 'BlogComment',
      timestamps: true,
    }
  );
  return BlogComment;
};

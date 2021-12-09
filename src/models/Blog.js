module.exports = (sequelize, Sequelize) => {
  class Blog extends Sequelize.Model {
    static associate(models) {
      Blog.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Blog.hasMany(models.BlogImage, {
        foreignKey: "blogId",
      });
      Blog.hasMany(models.BlogComment, {
        foreignKey: "blogId",
      });
    }
  }
  Blog.init(
    {
      userId: {
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      coverImage: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      modelName: "Blog",
      timestamps: true,
      paranoid: true,
    }
  );
  return Blog;
};

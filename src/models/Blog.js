module.exports = (sequelize, Sequelize) => {
  class Blog extends Sequelize.Model {
    static associate(models) {
        Blog.belongsTo(models.User, {
            foreignKey: 'userId',
        });
        Blog.hasMany(models.BlogImage, {
            foreignKey: 'blogId',
        });
        Blog.hasMany(models.BlogComment, {
            foreignKey: 'blogId',
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
        coverImage: {
            type: Sequelize.STRING,
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
        },
        deleteTime: {
            type: Sequelize.DATE,
        },
    },
    {
      sequelize,
      modelName: 'Blog',
      timestamps: true,
    }
  );
  return Blog;
};

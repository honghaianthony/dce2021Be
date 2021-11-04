module.exports = (sequelize, Sequelize) => {
  class BlogImage extends Sequelize.Model {
    static associate(models) {
        BlogImage.belongsTo(models.Blog, {
            foreignKey: 'blogId',
        });
    }
  }
  BlogImage.init(
    {
        blogId: {
            type: Sequelize.INTEGER,
        },
        image: {
            type: Sequelize.STRING,
        },
    },
    {
      sequelize,
      modelName: 'BlogImage',
      timestamps: false,
    }
  );
  return BlogImage;
};

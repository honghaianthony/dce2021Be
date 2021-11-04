module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {
    static associate(models) {
        User.hasMany(models.Blog, {
            foreignKey: 'userId',
        });
        User.hasMany(models.BlogComment, {
            foreignKey: 'userId',
        });
    }
  }
  User.init(
    {
        username: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: {
                args: true,
                msg: 'User with this username already exist.',
            },
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: {
                args: true,
                msg: 'User with this email already exist.',
            },
        },
        phone: {
            type: Sequelize.STRING(255),
        }, 
        role: {
            type: Sequelize.INTEGER,
        },
        firstName: {
            type: Sequelize.STRING(255),
            allowNull: false,
        }, 
        lastName: {
            type: Sequelize.STRING(255),
            allowNull: false,
        }, 
        dateOfBirth: {
            type: Sequelize.DATE,
            allowNull: false,
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
      modelName: 'User',
      timestamps: true,
    }
  );
  return User;
};

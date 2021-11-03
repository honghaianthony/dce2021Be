module.exports = (sequelize, Sequelize) => {
    class Users extends Sequelize.Model {}

    Users.init(
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
            modelName: 'user',
            timestamps: true,
            underscored: true,
        },
    );

    Users.associate = function (models) {
        Users.hasMany(models.category_rating, {
            foreignKey: 'created_by',
        });
        
        
    };
    return Users;
};

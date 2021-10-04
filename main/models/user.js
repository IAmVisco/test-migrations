class User {
  constructor(sequelize) {
    const { DataTypes, Sequelize } = require('sequelize');

    return sequelize.define(
      'User',
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        title_id: {
          allowNull: false,
          type: DataTypes.UUID,
        },
      },
      {
        tableName: 'users',
        underscored: true,
        timestamps: false,
      },
    );
  }
}

module.exports = User;

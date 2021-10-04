class Title {
  constructor(sequelize) {
    const { DataTypes, Sequelize } = require('sequelize');

    return sequelize.define(
      'Title',
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING,
        },
      },
      {
        tableName: 'titles',
        underscored: true,
        timestamps: false,
      },
    );
  }
}

module.exports = Title;

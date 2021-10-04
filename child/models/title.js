class Title {
  constructor(sequelize) {
    const { DataTypes, Sequelize } = require('sequelize');

    return sequelize.define(
      'Title',
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          // defaultValue: undefined, // Fails to create as PK is null
          defaultValue: Sequelize.UUIDV4, // Throws error: invalid input syntax for type uuid: "{}"
          // defaultValue: Sequelize.literal('uuid_generate_v4()'), // Throws error: invalid input syntax for type uuid: "{"val":"uuid_generate_v4()"}"
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

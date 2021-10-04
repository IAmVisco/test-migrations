'use strict';

module.exports = {
  up: async (queryInterface, { Sequelize, DataTypes }) => {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryInterface.createTable(
      'titles',
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          // None of 3 below work
          // defaultValue: undefined,
          // defaultValue: Sequelize.UUIDV4,
          // defaultValue: Sequelize.literal('uuid_generate_v4()'),
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING,
        },
      },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('titles');
  },
};

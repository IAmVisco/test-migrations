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
          defaultValue: Sequelize.UUIDV4,
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

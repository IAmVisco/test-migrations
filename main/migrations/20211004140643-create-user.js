'use strict';

module.exports = {
  up: async (queryInterface, { Sequelize, DataTypes }) => {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryInterface.createTable(
      'users',
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          // defaultValue: Sequelize.UUIDV4,
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        title_id: {
          allowNull: false,
          type: DataTypes.UUID,
          references: {
            model: 'titles',
            key: 'id',
          },
        },
      },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};

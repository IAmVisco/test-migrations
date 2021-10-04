'use strict';

const { migrations: { createTitlesTable } } = require('child');

module.exports = {
  up: createTitlesTable.up,
  down: createTitlesTable.down,
};

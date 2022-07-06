'use strict';

const items = [
  {
    id: 'NEW-1234',
    name: 'NewItem1',
  },
  {
    id: 'NEW-5678',
    name: 'NewItem2',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Items',
      {
        id: { [Sequelize.Op.in]: items.map((item) => item.id) },
      },
      {}
    );
  },
};
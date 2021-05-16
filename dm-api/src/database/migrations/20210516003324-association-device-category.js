'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('device', 'category_id', {
      type: Sequelize.INTEGER,
      references: {
        model: "category",
        key: "id"
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull:true
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('device', 'category_id');
  }
};

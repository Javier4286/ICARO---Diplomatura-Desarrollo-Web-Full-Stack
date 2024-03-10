'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Artist: {
        type: Sequelize.STRING
      },
      Album: {
        type: Sequelize.STRING
      },
      Year: {
        type: Sequelize.DECIMAL
      },
      Price: {
        type: Sequelize.DECIMAL
      },
      Categorie: {
        type: Sequelize.STRING
      },
      Url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
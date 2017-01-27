'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Programs', [{
      acara: 'Satria Garuda BIMA-X',
      deskripsi: "https://still-mesa-47577.herokuapp.com/YaYabT",
      vote: 0,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      acara: 'Masterchef Indonesia',
      deskripsi: "https://still-mesa-47577.herokuapp.com/uVVxdY",
      vote: 0,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      acara: 'X-Factor Indonesia',
      deskripsi: "https://still-mesa-47577.herokuapp.com/bZCYkT",
      vote: 0,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      acara: 'Pernikahan Dini',
      deskripsi: "https://still-mesa-47577.herokuapp.com/TCYVlg",
      vote: 0,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      acara: 'Preman Pensiun',
      deskripsi: "https://still-mesa-47577.herokuapp.com/eWxZTV",
      vote: 0,
      createdAt:new Date(),
      updatedAt:new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Programs', null, {});
  }
};

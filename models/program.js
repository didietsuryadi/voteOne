'use strict';
module.exports = function(sequelize, DataTypes) {
  var Program = sequelize.define('Program', {
    acara: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    vote: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Program;
};
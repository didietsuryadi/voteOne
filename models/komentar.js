'use strict';
module.exports = function(sequelize, DataTypes) {
  var Komentar = sequelize.define('Komentar', {
    isi_komentar: DataTypes.TEXT,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Komentar;
};
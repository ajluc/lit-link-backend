'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Club.init({
    clubName: DataTypes.STRING,
    bookList: DataTypes.ARRAY,
    meetings: DataTypes.ARRAY,
    proposedMeetings: DataTypes.ARRAY
  }, {
    sequelize,
    modelName: 'Club',
  });
  return Club;
};
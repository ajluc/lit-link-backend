'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReadingList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReadingList.init({
    bookId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'books',
        key: 'id'
      }
    },
    clubId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clubs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ReadingList',
    tableName: 'reading_lists'
  });
  return ReadingList;
};
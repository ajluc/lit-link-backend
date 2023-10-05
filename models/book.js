'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsToMany(models.Club, {
        as: 'clubs',
        through: models.ReadingList,
        foreignKey: 'bookId'
      })
    }
  }
  Book.init({
    data: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'books'
  });
  return Book;
};
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
      Club.belongsToMany(models.User, {
        as: 'members',
        through: models.MemberList,
        foreignKey: 'clubId'
      })
    }
  }
  Club.init({
    clubName: { 
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Club',
    tableName: 'clubs'
  });
  return Club;
};
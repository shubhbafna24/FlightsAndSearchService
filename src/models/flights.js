'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flights.init({
    flightNumber: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    departureAirportID: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    arrivalAirportID: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    arrivalTime: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    departureTime: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    boardingGate: DataTypes.STRING,
    totalSeats: {
      type:DataTypes.INTEGER,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};
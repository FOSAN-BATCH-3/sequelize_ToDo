const { DataTypes } = require('sequelize');
const sq = require('../config/connection')

const ModelUser = sq.define('user', {
  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING

  },
  password: {
    type: DataTypes.STRING,
    length: 200
   
  },
  email: {
    type: DataTypes.STRING,
  }

});


ModelUser.sync({alter:true})

module.exports = ModelUser;
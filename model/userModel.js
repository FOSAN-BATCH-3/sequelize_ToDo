const { DataTypes } = require('sequelize');
const sq = require('../config/connection')

const ModelUser = sq.define('user', {
  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING

  },
  password: {
    type: DataTypes.STRING,
   
  },
  email: {
    type: DataTypes.STRING,
   
  }
}, {
 
});


ModelUser.sync({alter:true})

module.exports = ModelUser;
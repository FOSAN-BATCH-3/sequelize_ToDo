const { DataTypes } = require('sequelize');
const sq = require('../config/connection')
const user = require('./userModel')

const ModelTodo = sq.define('todo', {
  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  kegiatan: {
    type: DataTypes.STRING

  },
  status: {
    type: DataTypes.BOOLEAN,
   
  }
}, {
 
});

// user.belongsTo(ModelTodo);
// ModelTodo.hasMany(user);

ModelTodo.sync({alter:true})

module.exports = ModelTodo;
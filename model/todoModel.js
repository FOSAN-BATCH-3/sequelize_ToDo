const { DataTypes } = require('sequelize');
const sq = require('../config/connection')

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
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});


ModelSiswa.sync({alter:true})

module.exports = ModelSiswa;
import Sequelize from 'sequelize'
// import env from './env.js';
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.DATABASE);
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERANME, process.env.PASSWORD, {
  HOST: process.env.host,
  dialect: 'mysql',
  // eslint-disable-next-line max-len
  // operatorsAliases: false,//DeprecationWarning: A boolean value was passed to options.operatorsAliases. This is a no-op with v5 and should be removed
  logging: false, // // disable logging; default: console.log
  pool: {
    max:5,
    min:0,
    acquire:process.env.ACQUIRE,
    idle:process.env.IDLE,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('../models/User')(sequelize, Sequelize);

// db.User = require('../models/UserType')(sequelize, Sequelize);

module.exports = db;

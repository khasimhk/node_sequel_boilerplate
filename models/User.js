// eslint-disable-next-line no-undef
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull:true,
    },
    roleId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
    },
  });
  return User;
};

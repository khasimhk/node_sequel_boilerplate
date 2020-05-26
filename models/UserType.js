// eslint-disable-next-line no-undef
module.exports = (sequelize, Sequelize) => {
  const UserRole = sequelize.define('UserRole', {
    roleId: {
      type: Sequelize.STRING,
    },
    roleName: {
      type: Sequelize.INTEGER,
    },
  });
  return UserRole;
};

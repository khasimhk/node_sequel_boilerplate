import {
  register,
} from '../controllers/SignUpController.js';

// eslint-disable-next-line no-undef
module.exports = function(app) {
  // Create a new User
  app.post('/api/users', register);
};

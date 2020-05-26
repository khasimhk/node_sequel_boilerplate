import {
    login
} from '../controllers/LoginController';

// eslint-disable-next-line no-undef
module.exports = function (app) {
    // Create a new User
    app.post('/api/users', login);
};
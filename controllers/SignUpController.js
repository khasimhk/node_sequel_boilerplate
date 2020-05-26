// importing database to get modal
import {
  User
} from '../database/db';
// eslint-disable-next-line no-unused-vars
const Customer = User;
import operation from '../dao/userDao'


/* API to register new user */
let register = async (req, res) => {
  if (!req.body.email) {
    res.status(401).json({
      message: 'Parameters are missing'
    })
  } else {
    try {
      let criteria = {
        email: req.body.email
      }
      const checkEmail = await operation.getUserInfo(User, criteria);
      const ExistingEmail = checkEmail ? checkEmail.dataValues.email : '';
      if (ExistingEmail) {
        res.status(401).json({
          message: 'email already registered'
        })
      } else {
        const userData = {   
          firstname: req.body.firstName ? req.body.firstName : "",
          lastname: req.body.lastName ? req.body.lastName : "",
          age: req.body.age,
          roleId: req.body.role,
          email: req.body.email,
        };
        const addUser = await operation.createUser(User, userData);
        if (addUser) {
          res.status(200).json({
            message: 'User registered successfully!'
          })
        } else {
          res.status(403).json({
            message: "Something went wrong"
          });
        }
      }
    } catch (error) {
      res.status(404).json({
        message: "Something went wrongg",
        error: error
      });
    }
  }
};

export {
  register as register
};
// importing database to get modal
import {User} from '../database/db';
// eslint-disable-next-line no-unused-vars
const Customer = User;
import operation from '../dao/userDao'
  
/* API to login user */
let login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      res.status(401).json({message:'Parameters are missing'});
    } else {
      try {
        let criteria = {
          email: req.body.email,
          status: true
        };
        const checkEmail = await operation.getUserInfo(criteria);
        if (checkEmail) {
          let criteria = {
            email: req.body.email,
            password: MD5(MD5(req.body.password))
          };
          const checkPassword = await operation.getUserInfo(criteria);
          if (checkPassword && checkPassword.length==1) {
            res.status(200).json({message:'Logged in successfully!',result:checkPassword});
          } else {
            res.status(401).json({message:'Incorrect password'});
          }
        } else {
          res.status(401).json({message:'Email not exist!'});
        }
        } catch (error) {
          res.status(401).json({message:'Something went wrong',error:error});
        }
      }
    };

  export {
    login  
};
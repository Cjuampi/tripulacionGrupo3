require("dotenv").config();
const jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const fncUtils = {

  
  cryptoW: (word) => {
    return bcrypt.hashSync(word, salt);
  },
  decoToken: (token) => {
    /* console.log('el token',token) */
    const payload = jwt.decode(token, process.env.SECRET)
    return payload
  },
  generateToken: (email,username) => {
    let tkn = jwt.sign({ email, username}, process.env.SECRET, {
      expiresIn: "10h",
    });
    return tkn;
  }
};

module.exports = fncUtils;

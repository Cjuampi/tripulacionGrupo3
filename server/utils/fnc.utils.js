require("dotenv").config();
const jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const fncUtils = {
  
  cryptoW: (word) => {
    return bcrypt.hashSync(word, salt);
  },
  decoToken: (token) => {
    const payload = jwt.decode(token, process.env.SECRET)
    return payload.admin
  },
  generateToken: (email) => {
    let tkn = jwt.sign({ email: email }, process.env.SECRET, {
      expiresIn: "10h",
    });
    return tkn;
  }
};

module.exports = fncUtils;

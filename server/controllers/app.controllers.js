const Products = require('../models/schema')

const user = {
    home: (req, res) => {
      res.status(200).json("dashboard");
    }}

module.exports = user;
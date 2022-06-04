const User = require("../models/user");

// Create
const signup = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    // TODO: Send back a JWT instead of the user
    res.json(user);
  } catch (err) {
    // Probably a schema error
    res.status(400).json(err);
  }
};

module.exports = {
  signup,
};

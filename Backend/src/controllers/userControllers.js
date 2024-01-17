const User = require("./../model/userModel");

const getData = async (req, res) => {
  let found = await User.find({});
  res.send(found);
};

const getDelete = async (req, res) => {
  let deleted = await User.findIdByAndDelete({ id: req.params._id });
};

const getPost = async (req, res) => {
  let newUser = await User(req.body);
  newUser.save();
};

module.exports = {
  getData,
  getDelete,
  getPost,
};

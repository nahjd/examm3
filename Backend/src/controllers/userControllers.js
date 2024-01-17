const User = require("./../model/userModel");

const getData = async (req, res) => {
  let found = await User.find({});
  res.send(found);
};

const getDelete = async (req, res) => {
  let deleted = await User.findByIdAndDelete({ _id: req.params.id });
  res.send(deleted);
};

const getPost = async (req, res) => {
  let newUser = await User(req.body);
  await newUser.save();
  res.send(newUser);
};

module.exports = {
  getData,
  getDelete,
  getPost,
};

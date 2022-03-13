const db = require("../models/user");


exports.signup = async (req, res) => {
  try {
    let { email, password, secret } = req.body;
    
    let newUser = new db.User({
      email,
      password,
      secret,
    });
    newUser = await newUser.save();
    res.status(200).json({
      msg: "Registration is Success",
      status: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: [{ msg: error.message, status: false }] });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;


  db.User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        msg: "USER email does not exists",
      });
    }


    
    if (!user.password)
      return res.status(401).json({
        msg: "Password is wrong",
      });

    if (user.email && user.password) {
      return res.status(200).json({
        msg: "success",
        details: user,
      });
    }
  });
};

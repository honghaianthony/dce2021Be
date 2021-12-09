const models = require("../models");
const util = require("../util/jwt");
const nodemailer = require("nodemailer");

function makeRandomPassword() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = 6;
  for (var i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = {
  register: async function (req) {
    try {
      const hashedPassword = await util.genPasswordAsync(req.body.password);
      const user = await models.User.create({
        userName: req.body.userName,
        password: hashedPassword,
        email: req.body.email,
        phone: req.body.phone,
        role: 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
      });
      const jwt = util.issueJWT(user);
      return {
        message: "Success",
        token: jwt.token,
        expires: jwt.expires,
      };
    } catch (error) {
      console.log(error);
    }
  },
  login: async function (req) {
    const { userName, password } = req.body;
    const user = await models.User.findOne({
      where: {
        userName,
      },
    });

    if (user) {
      const valid = await util.validPasswordAsync(password, user.password);
      if (valid) {
        const jwt = util.issueJWT(user);

        return {
          message: "Success",
          success: true,
          token: jwt.token,
          expiredIn: jwt.expires,
        };
      } else {
        return { message: "Wrong password", success: false };
      }
    }
    return { message: "User not exists", success: false };
  },
  recoverPassword: async function (req) {
    const { email, userName } = req.body;
    const user = await models.User.findOne({
      where: {
        userName,
        email,
      },
      raw: true,
    });
    if (user) {
      var newPassword = makeRandomPassword();
      const hashedPassword = await util.genPasswordAsync(newPassword);
      var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      var mainOptions = {
        from: "Recover password - DCE",
        to: email,
        subject: "Recover password - DCE",
        text: "Your new password is: " + newPassword,
      };
      await models.User.update(
        { password: hashedPassword },
        {
          where: {
            userName,
            email,
          },
        }
      );
      await transporter.sendMail(mainOptions);
      return { message: "Sent recover password to your email", success: true };
    } else {
      return { message: "User or email not exists", success: false };
    }
  },
};

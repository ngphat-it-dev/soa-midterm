var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
var app = express();
const { OAuth2Client } = require("google-auth-library");
const { getOTP } = require("../controllers/userController");
const port = 3000;
const mongoose = require("mongoose");
const userModel = require("../model/user.model");
/* GET home page. */
router.get("/", getOTP);

const GOOGLE_MAILER_CLIENT_ID = "950533224618-bhgunr43dupg3j1a0m2rrgki547iverc.apps.googleusercontent.com";
const GOOGLE_MAILER_CLIENT_SECRET = "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";
const GOOGLE_MAILER_REFRESH_TOKEN = "1//04ier33sTGv6uCgYIARAAGAQSNwF-L9Irjc3mn31VMlcya97HWYgTbsUhwzbC-l3D2XVTpcu5tgoJxWlCjMqvCPW6ySvxHFnSL2g";
const ADMIN_EMAIL_ADDRESS = "giaphatthcs@gmail.com";
// Khởi tạo OAuth2Client với Client ID và Client Secret
const myOAuth2Client = new OAuth2Client(GOOGLE_MAILER_CLIENT_ID, GOOGLE_MAILER_CLIENT_SECRET);
// Set Refresh Token vào OAuth2Client Credentials
myOAuth2Client.setCredentials({
  refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
});
// Tạo API /email/send với method POST
router.post("/", async (req, res) => {
  let OTP = (Math.floor(Math.random() * 90000) + 10000).toString();
  const { email } = req.body;

  // if (!email) return res.send("Invalid email");

  // const user = await userModel.findOne({ gmail: email });

  const rs = await userModel.findOneAndUpdate({ gmail: email }, { OTP });


  try {
    // Lấy thông tin gửi lên từ client qua body
    // const { email, subject, content } = req.body;
    let email = "giaphatthcs@gmail.com";
    let subject ="Ibanking"
    let content = OTP;
    if (!email || !subject || !content) throw new Error("Please provide email, subject and content!");
    /**
     * Lấy AccessToken từ RefreshToken (bởi vì Access Token cứ một khoảng thời gian ngắn sẽ bị hết hạn)
     * Vì vậy mỗi lần sử dụng Access Token, chúng ta sẽ generate ra một thằng mới là chắc chắn nhất.
     */
    const myAccessTokenObject = await myOAuth2Client.getAccessToken();
    // Access Token sẽ nằm trong property 'token' trong Object mà chúng ta vừa get được ở trên
    const myAccessToken = myAccessTokenObject?.token;

    // Tạo một biến Transport từ Nodemailer với đầy đủ cấu hình, dùng để gọi hành động gửi mail
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: ADMIN_EMAIL_ADDRESS,
        clientId: GOOGLE_MAILER_CLIENT_ID,
        clientSecret: GOOGLE_MAILER_CLIENT_SECRET,
        refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
        accessToken: myAccessToken,
      },
    });
    // mailOption là những thông tin gửi từ phía client lên thông qua API
    const mailOptions = {
      to: email, // Gửi đến ai?
      subject: subject, // Tiêu đề email
      html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">IBanking</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing IBanking. Use the following OTP to complete your authentication.<br> OTP is valid for 5 minutes. <br> Don't send it to another people</p>
    <h2 style="background: #00466a;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px; margin:auto">${OTP}</h2>
    <p style="font-size:0.9em;">Regards,<br />IBanking</p>
    <hr style="border:none;border-top:1px solid #eee" />
  </div>
</div>`, // Nội dung email
    };
    // Gọi hành động gửi email
    await transport.sendMail(mailOptions);
    // Không có lỗi gì thì trả về success
    // res.status(200).send({ message: "Email sent successfully." });
    res.render("otp");
  } catch (error) {
    // Có lỗi thì các bạn log ở đây cũng như gửi message lỗi về phía client
    console.log(error);
    res.status(500).send({ errors: error.message });
  }
});

module.exports = router;

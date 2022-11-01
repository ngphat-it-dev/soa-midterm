// // Middleware để verify user
// const authorization = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) {
//     return res.sendStatus(403);
//   }
//   try {
//     const data = jwt.verify(token, "YOUR_SECRET_KEY");
//     req.userId = data.id;
//     req.userRole = data.role;
//     return next();
//   } catch {
//     return res.sendStatus(403);
//   }
// };

// // Check user password, oke thì gắn thêm cái cookie vào response
// app.get("/login", (req, res) => {
//     // tạo token
//   const token = jwt.sign({ id: 7, username: "admin1" }, "tan_dep_trai");
//   return res
//     .cookie("access_token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//     })
//     .status(200)
//     .json({ message: "Logged in successfully 😊 👌" });
// });

// // Apply middleware vào những route cần sử dung middleware
// app.get("/protected", authorization, (req, res) => {
//   return res.json({ user: { id: req.userId, role: req.userRole } });
// });

// // Clear cookie khi log out
// app.get("/logout", authorization, (req, res) => {
//   return res
//     .clearCookie("access_token")
//     .status(200)
//     .json({ message: "Successfully logged out 😏 🍀" });
// });

// // Ez
// // 43 dong code

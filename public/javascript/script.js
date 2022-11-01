// window.onload = function () {
//   const submitBtn = document.getElementById("submit");
//   const validate = (e) => {
//     e.preventDefault();
//     const username = document.getElementById("username");
//     const password = document.getElementById("password");
//     if (username.value === "" || username.value == null) {
//       console.error("Please enter your username.");
//       username.focus();
//       return false;
//     }
//     if (password.value === "" || password.value == null) {
//       console.error("Please enter your password ");
//       password.focus();
//       return false;
//     }
//     if (
//       (username.value == "admin" && password.value == "admin") ||
//       (username.value == "admin1" && password.value == "admin1")
//     ) {
//       console.log({ username, password });
//       // console.error("sending");
//       return true;
//     } else {
//       console.error("INVALID USERNAME OR PASSWORD");
//       return false;
//     }
//   };
//   submitBtn.addEventListener("click", validate);
// };

const validate = () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (username.value === "" || username.value == null) {
    console.error("Please enter your username.");
    username.focus();

    return false;
  }
  if (password.value === "" || password.value == null) {
    console.error("Please enter your password ");
    password.focus();

    return false;
  }

  return true;
};

// window.onload = () => {
//   const form = document.querySelector("#oke");
//   form.addEventListener("submit", validate);
// };

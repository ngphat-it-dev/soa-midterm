const validate = () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (username.value === "" || username.value == null) {
    alert("Please enter your username.");
    username.focus();
    return false;
  }
  if (password.value === "" || password.value == null) {
    alert("Please enter your password ");
    password.focus();
    return false;
  }
  return true;
};

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

function getStudentID() {
  let a = $("#student_id").val();
  let status = document.getElementById("status");

  if (a.length === 8) {
    $.ajax({
      url: "http://localhost:3000/payment",
      type: "POST",
      data: { student_id: a },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      success: function (result) {

        if (result.isPaid == true) {
          status.innerHTML = "Chưa thanh toán";
          $("#name").val(result.transactionHistory[0].fullName);
          $("#tp").val(result.transactionHistory[0].bankBalance);
          $("#total_payable").html(result.transactionHistory[0].bankBalance);
          document.getElementById("continue").disabled = false;
          console.log(result);
          console.log(">> tiền mình có " + result.numberBalance + result.transactionHistory[0].fullName);
          const newresultnumberBalance = result.numberBalance; ;
          console.log(">> Tiền phải trả " + result.transactionHistory[0].bankBalance);
          if ((result.transactionHistory[0].bankBalance - result.numberBalance)<0) {
            const final = result.transactionHistory[0].bankBalance - result.numberBalance;
            
            console.log(">> tiền mình có " + newresultnumberBalance);

            console.log(">> Tiền phải trả " + result.transactionHistory[0].bankBalance);
            console.log(final)
            $("#residual").html(final);
          } else {
            $("#show_error").css("visibility", "visible");
            $("#show_error").show();
            document.getElementById("continue").disabled = true;
          }
        } else if (result.isPaid == false) {
          status.innerHTML = "Đã thanh toán";
          $("#name").val(result.transactionHistory[0].fullName);
          $("#tp").val(result.transactionHistory[0].bankBalance);
          $("#total_payable").html("");
          $("#show_error").hide();
          $("#residual").html("");
          document.getElementById("continue").disabled = true;
        } else {
          status.innerHTML = "INVALID STUDENT ID";
          $("#name").val("");
          $("#tp").val("");
          $("#total_payable").html("");
          $("#show_error").hide();
          $("#residual").html("");
          document.getElementById("continue").disabled = true;
        }
      },
    });
  } else {
    status.innerHTML = "INVALID STUDENT ID";
    $("#name").val("");
    $("#tp").val("");
    $("#residual").html("");
    $("#total_payable").html("");
    $("#show_error").hide();
    document.getElementById("continue").disabled = true;
  }
}

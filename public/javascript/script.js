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

  // phair check ddoanj nayf khi nào ngta nhập đủ mssv mới gọi axjaax check tránh spam server 
  if (a.length === 8) {
    $.ajax({
      url: "http://localhost:3000/payment",
      type: "POST",
      data: { student_id: a },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      success: function (result) {
        console.log(result);
      },
    });
  }else{
    console.log("invalid");
  }

  // Laij ddi
  // ditme hay Tan oi
  // mà Fat đéo hiểu -> Fat convert cái a của Fat thành object rồi sài cái stringtyfy á mà gửi lên vẫn bị undefind wtf

  // var settings = {
  //   url: "http://localhost:3000/payment",
  //   method: "POST",
  //   timeout: 0,
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   data: {
  //     student_id: "519H0113",
  //   },
  // };

  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  // });
}

// xài fetch đi, ajax nhà kê vl

// đây đứa chỉ cho nghe =]]]

// Bí thuật :))) :))
// đau khổ đi fat, ốt tân chỉ cho =)))
// Fat ngồi 7 tiếng chưa đau khổ hả Tân :v
// lai di
// nói chung là, mấy cái thư viện ajax hiện đại, nó check r stringtify luôn cho mình r
// cc gi vay Tan sao Tan

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn form reload trang

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "huanrose@gmail.com" && password === "123456") {
      console.log("Đăng nhập thành công");
    } else {
      console.log("Đăng nhập thất bại");
    }
  });

// Lấy phần tử cần thao tác
let textElements = document.querySelectorAll("#text");
let btn = document.getElementById("btn");

// Thêm sự kiện click vào nút
btn.addEventListener("click", function () {
  // Kiểm tra nếu background đang là đen thì chuyển thành trắng, ngược lại đổi thành đen
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    btn.textContent = "Toggle Dark Mode"; // Đổi lại chữ trên nút

    // Đổi màu chữ của tất cả các phần tử có id "text" thành đen
    textElements.forEach((element) => {
      element.style.color = "black";
    });
  } else {
    document.body.classList.add("dark-mode");
    btn.textContent = "Toggle Light Mode"; // Đổi chữ trên nút

    // Đổi màu chữ của tất cả các phần tử có id "text" thành trắng
    textElements.forEach((element) => {
      element.style.color = "white";
    });
  }
});

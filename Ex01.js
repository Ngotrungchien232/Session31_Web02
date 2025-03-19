// ở đây ta sử dụng document.getElementById để lấy ra các phần tử cần điều chỉnh
let text = document.getElementById("text");
let hideBtn = document.getElementById("hideBtn");
let showBtn = document.getElementById("showBtn");

hideBtn.addEventListener("click", function () {
  // addEventListenner khi chuột được click vào đây thì thức hiện các chức năng có trong hàm
  text.style.display = "none"; // none ở css ẩn tất cả đi
});

showBtn.addEventListener("click", function () {
  text.style.display = "block"; // lúc này ấn vào sẽ xuất hiện trở lại
});

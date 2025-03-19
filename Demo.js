// console.log(document); hai cách này đều như nhau nhưng ưu tiên dùng cách này hơn

// console.dir(document); cái này nó sẽ hiển thị chi tiết hơn

// 1. cách lấy phần tử từ html sang javascrip
let div = document.getElementById("demo-id"); // câu lệnh này sẽ trả về cho mình cái thẻ div có id là "demo-id"
//sau đó log biến div đó ra kiểm tra thử
console.log(div);

// 2. doccumennt.getElementsByClassName();
let elementList = document.getElementsByClassName("demo-class");
console.log("elementList");
// giả sử ta lấy ra một phần tử
let div1 = elementList[0];
console.log(div1);
//giả sử ta muốn lấy ra thẻ b cuối cùng thì ta có thể làm như sau
let b = elementList[2];
console.log(b);
//hiển thị lại ra elementsList để quan sát lại từ đầu
console.log(elementList);
// chúng ta có thể tạo ra một vòng lặp for để lấy ra toàn bộ phần tử có trong elementList
for (let i = 0; i <= elementList.length - 1; i = i + 1) {
  console.log(elementList[i]);
}

// 3. document.getElementsByTagName();
let div3 = document.getElementsByTagName("div");
console.log(div3);

// 4.document.querySelector(); giúp cho chúng ta lấy ra các phần tử html theo cái css của chúng
let div4 = document.querySelector("div#demo-id.demo-class"); // lấy ra được cái thẻ div dầu tiên
console.log(div4);

// 5.document.querySelectorAll();
let div5 = document.querySelectorAll(".demo-class"); // kiểu dữ liệu gần giống với mảng
console.log(div5);

// giả sử chúng ta có thể p  chúng ta tiến hành lấy ta thẻ p đó
let p = document.getElementById(
  "nội dung gì đó ở trong thẻ p chúng ta đã gán "
);
// với 3 phương thức như sau dùng console.log để kiểm tra

// 1. phương thức p.innerHTML
console.log(p.innerHTML);
//2. phương thức p.textContent
console.log(p.textContent);
//3. phương thức p.outerHTML
console.log(p.outerHTML);
// nhận xét cả 3 thuộc tính trên đều có một công dụng là lấy ra nội dung của thẻ p

console.log(div.children);

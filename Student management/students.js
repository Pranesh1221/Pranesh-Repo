var Student_arr = JSON.parse(localStorage.getItem("admission"));
display(Student_arr);

function display(Student_arr) {
  document.querySelector("tbody").innerText = "";
  Student_arr.map(function (el, index) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = el.name;
    var td2 = document.createElement("td");
    td2.innerText = el.email;
    var td3 = document.createElement("td");
    td3.innerText = el.course;
    var td4 = document.createElement("td");
    td4.innerText = el.Gender;
    var td5 = document.createElement("td");
    td5.innerText = el.Number;
    var td6 = document.createElement("td");
    td6.innerText = "Accept";
    td6.addEventListener("click", function () {
      accept_addmission(el, index);
    });
    td6.style.backgroundColor = "green";
    var td7 = document.createElement("td");
    td7.innerText = "Reject";
    td7.addEventListener("click", function () {
      reject_addmission(el, index);
    });
    td7.style.backgroundColor = "red";
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(tr);
  });
}
var arr = JSON.parse(localStorage.getItem("admission-accepted")) || [];
function accept_addmission(el, index) {
  arr.push(el);
  localStorage.setItem("admission-accepted", JSON.stringify(arr));
  Student_arr.splice(index, 1);
  display(Student_arr);
  localStorage.setItem("admission", JSON.stringify(Student_arr));
}
var arr = JSON.parse(localStorage.getItem("admission-rejected")) || [];
function reject_addmission(el, index) {
  arr.push(el);
  localStorage.setItem("admission-rejected", JSON.stringify(arr));
  Student_arr.splice(index, 1);
  display(Student_arr);
  localStorage.setItem("admission", JSON.stringify(Student_arr));
}

function currsefilter() {
  var val = document.querySelector("#filter").value;
  if (val == "" || val == "all") {
    display(Student_arr);
  } else {
    var arr = Student_arr.filter(function (el) {
      return el.course == val;
    });
    display(arr);
  }
}

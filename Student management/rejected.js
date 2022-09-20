var Students = JSON.parse(localStorage.getItem("admission-rejected"));
display(Students);
function display(Students) {
  Students.map(function (el) {
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
    tr.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(tr);
  });
}

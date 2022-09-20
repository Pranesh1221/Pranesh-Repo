var Students = JSON.parse(localStorage.getItem("admission-accepted"));
display(Students);
function display(Students) {
  Students.map(function (elem) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = elem.name;
    var td2 = document.createElement("td");
    td2.innerText = elem.email;
    var td3 = document.createElement("td");
    td3.innerText = elem.course;
    var td4 = document.createElement("td");
    td4.innerText = elem.Gender;
    var td5 = document.createElement("td");
    td5.innerText = elem.Number;
    tr.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(tr);
  });
}

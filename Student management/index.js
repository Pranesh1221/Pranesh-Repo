document.querySelector("#form").addEventListener("submit", add_student_data);
var admission = JSON.parse(localStorage.getItem("admission")) || [];
function add_student_data() {
  event.preventDefault();
  var obj = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    Number: document.querySelector("#phone").value,
    Gender: document.querySelector("#gender").value,
    course: document.querySelector("#course").value,
  };
  admission.push(obj);
  localStorage.setItem("admission", JSON.stringify(admission));
}

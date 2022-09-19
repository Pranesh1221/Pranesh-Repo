// write js code here corresponding to favourites.html
var favmatch = JSON.parse(localStorage.getItem("favourites")) || [];

displayFav(favmatch);

function displayFav(favmatch) {
  document.querySelector("tbody").innerHTML = "";
  favmatch.map(function (elem, index) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.matchNum;

    var td2 = document.createElement("td");
    td2.innerText = elem.teamAid;
    var td3 = document.createElement("td");
    td3.innerText = elem.teamBid;
    var td4 = document.createElement("td");
    td4.innerText = elem.date;
    var td5 = document.createElement("td");
    td5.innerText = elem.venue;

    var td6 = document.createElement("td");
    td6.innerText = "Delete";
    td6.addEventListener("click", function () {
      deleteFav(index);
    });
    td6.style.color = "red";
    td6.style.cursor = "pointer";

    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
  });
}
function deleteFav(i) {
  favmatch.splice(i, 1);
  localStorage.setItem("favourites", JSON.stringify(favmatch));
  displayFav(favmatch);
}

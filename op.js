
document.getElementById("cl").onclick = function() {myFunction()};

function myFunction() {

  var input = document.getElementById("input-name")
  localStorage.setItem("name",input.value);
  localStorage.input = localStorage.getItem("name")

}
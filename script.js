function display(value) {
  var value = document.getElementById("display").value += value;
}

function solve() {
  try {
    let x = document.getElementById("display").value;
    let y = math.evaluate(x);
    document.getElementById("display").value = y;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    clear();
  }
});

function clear() {
  document.getElementById("display").value = "";
}

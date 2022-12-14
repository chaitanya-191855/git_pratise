function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

// required tags
let output = document.querySelector("#output");
let form = document.querySelector("#form");

// eventhandlers
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let a = parseInt(document.querySelector("#number1").value);
  let b = parseInt(document.querySelector("#number2").value);
  let c = document.querySelector("#ans").value;
  switch (c) {
    case "add":
      output.innerHTML = add(a, b);
      break;
    case "sub":
      output.innerHTML = sub(a, b);
      break;
    case "mul":
      output.innerHTML = mul(a, b);
      break;
    default:
      output.innerHTML = div(a, b);
  }
});

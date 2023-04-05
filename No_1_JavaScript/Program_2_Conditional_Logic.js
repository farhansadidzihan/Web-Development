// || If, else if, else ---> Statement ||
let age = 18;
if (age > 0 && age < 9) {
  console.log("You are a kid!");
}
else if (age > 9 && age < 18) {
  console.log("You should learn Python!");
}
else if (age === 18 || age === 20) {
  console.log("You can learn JavaScript!");
}
else if (age > 18 && age < 70) {
  console.log("You should try C++");
}
else {
  console.log("This a invalid age!");
}

// || Ternary Operator ||
console.log("You can", (age > 18 ? "drive!" : "not drive!"))

// || Switch Case Statement ||
let browser = "Edge";
switch (browser) {
  case "Edge":
    console.log("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    console.log("Okay we support these browsers too");
    break;

  default:
    console.log("Is it brower!");
}
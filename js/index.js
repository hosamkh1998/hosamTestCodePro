var userName = "Hosam";
function onInit() {
  console.log("Ready");
  // calcSalary(userName);
}

function calcSalary() {
  var frame = prompt("Enter your frameWork A/R/V");
  var hours;
  var eResultMsg = document.querySelector(".resultMsg");
  if (frame === "A" || frame === "a") {
    hours = prompt("Enter total hours work");
    var result = hours * 150;
    eResultMsg.innerHTML = `as Angular programer can earn ${result.toLocaleString()} ₪ per month`;
    setTimeout(() => {
      eResultMsg.innerHTML = "";
    }, 3000);
  } else if (frame === "R" || frame === "r") {
    hours = prompt("Enter total hours work");
    var result = hours * 60;
    eResultMsg.innerHTML = `as React programer can earn ${result.toLocaleString()} ₪ per month`;
    setTimeout(() => {
      eResultMsg.innerHTML = "";
    }, 3000);
  } else if (frame === "V" || frame === "v") {
    hours = prompt("Enter total hours work");
    var result = hours * 50;
    eResultMsg.innerHTML = `as Vue programer can earn ${result.toLocaleString()} ₪ per month`;
    setTimeout(function () {
      eResultMsg.innerHTML = "";
    }, 3000);
  } else alert("Not found");
}

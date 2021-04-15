// Asynchronous way

// Boil Water 10seconds
// Chop carrots
// add carrots and boil for 5seconds
// chop onion
// add onion and boil for 5seconds

/*

boilWater();
console.log("chop carrots");

function boilWater() {
  console.log("Boiling...");
  setTimeout(function () {
    console.log("Boiling Done");
    console.log("Add carots");
    setTimeout(function () {
      console.log("Carrots Done");
      console.log("Add onion");
      setTimeout(function () {
        console.log("Onions Done");
      }, 3000);
    }, 3000);
    console.log("Chop onion");
  }, 3000);
}

*/

// callback hell - Dom Example

/*
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("Clicked");
  setTimeout(function () {
    one.style.color = "red";
    setTimeout(function () {
      two.style.color = "blue";
      setTimeout(function () {
        three.style.color = "green";
      }, 1000);
    }, 1000);
  }, 1000);
});

console.log("Hello");

*/

//Promises

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {});

const promise = new Promise(function (resolve, reject) {
  let value = false;
  if (value) {
    resolve("The value is true");
  } else {
    reject("The value is false");
  }
});

// console.log(promise);

promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });

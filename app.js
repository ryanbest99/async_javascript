// Asynchronous way

boilWater(5000);
console.log("chop carrots");
console.log("chop onion");

function boilWater(time) {
  console.log("boiling...");
  setTimeout(() => {
    console.log("Done");
  }, time);
}

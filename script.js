// Write your JavaScript below this line

// Create & modify an array
var hobbies = ["reading", "traveling", "cooking", "yoga", "hiking", "photography"];
console.log(hobbies.length);

hobbies.push("gardening");
console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(2, 0, "painting", "coding");
console.log(hobbies);

hobbies.shift();
hobbies.unshift("dancing");
console.log(hobbies);

// Create a new array & combine arrays
var goals = ["run a 10K", "learn Spanish", "build a portfolio website"];
var allTheThings = hobbies.concat(goals);
console.log(allTheThings);

console.log(allTheThings.indexOf("yoga"));
allTheThings.splice(allTheThings.indexOf("yoga"), 1);
console.log(allTheThings);

// Map over an array
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}!`;
});
console.log(plans);

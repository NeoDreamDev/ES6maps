// MAPS = KEY VALUE PAIRS - CAN USE ANY TYPE AS A KEY OF A VALUE

const map1 = new Map();

// Set Keys
const key1 = "some string",
  key2 = {},
  key3 = function () {};

// Set Map Values By Key
map1.set(key1, "Value of Key1");
map1.set(key2, "Value of Key2");
map1.set(key3, "Value of Key3");

// Get Values By Key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count Values Inside Of Map
// console.log(map1.size);

//Iterating Through Maps
// Loop Using for...of
// for (let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// Iterate Keys Only
// for (let key of map1.keys()) {
//   console.log(key);
// }

// Iterate Values Only
// for (let value of map1.values()) {
//   console.log(value);
// }

// Loop With forEach
// map1.forEach(function (value, key) {
//   console.log(`${key} = ${value}`);
// });

// CONVERT TO ARRAYS
//Create An Array Of The Key Value Pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create An Array Of the Values
const valArr = Array.from(map1.values());
console.log(valArr);

// Create An Array Of The Keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);

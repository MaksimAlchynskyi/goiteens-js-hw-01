"use strict";
let age = 14;
console.log(age);

const name = "Maksym Alchynskyi";
console.log(name)

let isStudent = true;
console.log(isStudent)

const myString = "hello world!"
console.log(myString)

let myNumber = 22;
myNumber = myNumber + 10;
console.log(myNumber);

const myNull = null;
console.log(myNull);

let userName = prompt("Будь ласка, введіть ваше ім'я:");
alert("Привіт, " + userName + "! Ласкаво просимо!");

if (confirm("Ви підтверджуєте дію?")) {
    alert("Дякую за підтвердження!");
  } else {
    alert("Дію відмінено!");
  }

alert("Дія небезпечна")
if (confirm("Ви підтверджуєте дію?")) {
    alert("Дякую за підтвердження!");
  } else {
    alert("Дію відмінено!");
  }
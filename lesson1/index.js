// Module package CORE
// setTimeout ikkta parameter oladi: 1-function, 2- time oladi
//
setTimeout(function () {
    console.log("Ishga Tushdi");
}, 5000);
// manosi 5 soniyadan keyin functionni ishga tushir.

// let number = 0;  // global scope: raqamlar sonini 0dan boshlanishiga sababchi bo'ladi.
// setInterval(function () {
//     console.log('hisob', number);
//     number++;  // raqamlar soni qoshiladi
// }, 1000); // qancha soniyadan keyn kod execution bo'lishi

// Savol: Qaysi vaqt to'xtashini belgilasa bo'ladimi?

const fs = require("fs");
const data = fs.readFileSync("./input.txt", "utf8");
console.log(data);
 console.log("===============");

// malumotlarni o'zgartirish uchun quydagi syntaxdan foydalanamiz
fs.writeFileSync("./input.txt", `${data} \n\t\t by Steve`)
const new_data = fs.readFileSync("./input.txt", "utf8")
console.log(new_data);


// Model package EXTERNAL

// Module Package FILE

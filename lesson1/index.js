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

// Module package CORE
// setTimeout ikkta parameter oladi: 1-function, 2- time oladi
//
// setTimeout(function () {
//     console.log("Ishga Tushdi");
// }, 5000);
// manosi 5 soniyadan keyin functionni ishga tushir.

// let number = 0;  // global scope: raqamlar sonini 0dan boshlanishiga sababchi bo'ladi.
// setInterval(function () {
//     console.log('hisob', number);
//     number++;  // raqamlar soni qoshiladi
// }, 1000); // qancha soniyadan keyn kod execution bo'lishi

// Savol: Qaysi vaqt to'xtashini belgilasa bo'ladimi?

// const fs = require("fs");
// const data = fs.readFileSync("./input.txt", "utf8");
// console.log(data);
//  console.log("===============");

// // malumotlarni o'zgartirish uchun quydagi syntaxdan foydalanamiz
// fs.writeFileSync("./input.txt", `${data} \n\t\t by Steve`)
// const new_data = fs.readFileSync("./input.txt", "utf8")
// console.log(new_data);

// Model package EXTERNAL
// External modulelar oldindan install qilinishi shart bo'lgan modulelar hisoblanadi.
// syntax: npm install --save moment
const moment = require("moment");
const time1 = moment().format();
console.log(time1);
const moment2 = require("moment");
const time2 = moment().format("YYYY-MM-DD");
console.log(time2);

// Ma'lum bir muddatdan keyin vaqtni ko'rsatish uchun setInterval va quydagi functiondan foydalanamiz.
// setInterval(() => {
//     const time = moment().format();
//     console.log(`hozirgi vaqt:`, time);
// }, 5000);    // har 5 soniyadan keyin vaqtni aytadi.

// inquirer-> npm i inquirer.
// const inquirer = require('inquirer')
// inquirer.prompt([{type: "input", name: "raqam", message: "raqam kiriting!"}]).then((answer) => {
//     console.log("natija qiymati", answer.raqam);
// }).catch((err) => console.log(err))

// uuid - npm i uuid - random text yaratib beradi.
const { v4: uuid4} = require('uuid');
const random = uuid4();
console.log('tasodifiy matn:',random);

// chalk -> terminalda console.log ni o'zgartirib va xarxi rangda beradi.

const chalk = require("chalk");
const log = console.log;
log(chalk.blue("Hello " + random + chalk.magentaBright(" !" )))


// Module Package FILE




// npm = node package manager.
// nvm = node versial manager.

// Module Package
// VS codeda project boshlash uchun node package manager(npm)ni utilize qilish kerak. Buning uchun terminalda: npm init (agar project malumotini o'zimiz kirgizishni xoxlasak).
// Default malumotlarni kiritish uchun: npm init --yes,

// Fileni ishga tushirish uchun "node index.js" yozilishi kerak. Lekin buni o'zgartirish mumkin. package managerda 
/* 
"scripts": {
    "start": "node index.js"
}
*/
// Bu xolatda fileni ishga tushirish uchun endi npm start qilishimiz kerak.

// NodeJSda 3xil turdagi packagelar bor.
// 1) Module package CORE.
// 2) Module package EXTERNAL.
// 3) Module package FILE.

/* 
Core modullar NodeJSni o'zida install bo'lgan modullarga aytiladi. Ularga access qilish uchun terminalda: 1-node yoziladi 
(bu xolatda nodejsni enviromentiga kirib beradi. Va NodeJSni modullarini ko'rish uchun ikkimarta "tap" keyword bosiladi.
Bu modullar NodeJSda avtomatic install qilingan bo'ladi, bulardan foydalanish uchun ularni install qilish shart emas.
*/
// example modules: setTimeout(): bu module o'ziga 2ta parameter oladi. 1- function, 2- time(delaying time).
setTimeout(function() {
    console.log('Ishga tushdi');
}, 5000);  // 5 soniyadan keyin function ishga tushir degani.

// 2) setInterval() - bu loop tsikl hisoblanib, yozilgan functionni qayta qayta berilgan timedan keyin ishga tushiradi.
// let number = 0;
// setInterval(function() {
//     console.log("hisob", hisob);
// }, 1000)
// Xar bir soniyadan keyin numberga 1 qosh degani, kutilayotgan delay timeni o'zgartirish mumkin. buni to'xtatish uchun ctrl + c.

// 3) fs(file system) - Core packagelar install qilinmaydi, lekin ularni chaqirib olish kerak. Chaqirish uchun require() dan foydalaniladi.

// const fs = require("fs");  // fs objectlarini qo'lga olib beradi.
// fs.readFileSync('./input.txt', 'utf8'); // 2ta parameter pass qilinadi, 1- qaysi fileligi, 2- qaysi protocol bo'yicha olinishi va uni variablega tenglash kerak.

const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf8');

// "input.txt" Malumotlarini o'zgartirish uchun index.js file davomida :

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
fs.writeFileSync('./input.txt', `${data} \n\t\t by Steve`);
const new_data = fs.readFileSync("./input.txt", "utf8")
console.log(new_data);

// external package
// External modulla ishlatishdan oldin install qilinishi kerak bo'lgan module packagelar hisoblanadi.
// syntax: npm install package name --save 

// moment() -> JSda date/timeni ko'rsatish, o'zgartirish, tekshirish va taxlil qilish uchun ishlatiladigan Js library hisoblanadi.
const moment = require("moment");
const time = moment().format();
console.log(time);  // default time

// setInterval(() => {
//     const time2 = moment().format();
//     console.log("Current time is:", time2);
// }, 10000 )

// 2) inquirer() - Bu NodeJS bilan command line interface ilovalari yaratishuchun foydali bo'lgan NPM package hisobanadi: u option, list, checkbox, input etc.. larni o'z ichiga oladi.
// const inquirer = require("inquirer");
// inquirer
// .prompt([{type: "input", name: "raqam", message: "Istalgan raqamni kiriting!"}])
// .then((answer) => {
//     console.log('Kiritilgan raqam qiymati:', answer.raqam);
// })
// .catch((err) => console.log(err));

// 3) validator - malumotlarni tasdiqlash uchun ishlatiladi va boolean qiymat qaytaradi.
const validator = require("validator");
const email = validator.isEmail("hello@world.com");
console.log('my eamil is: ', email);

const num = validator.isInt("100");
console.log(num);

const ip = validator.isIP("112.212.144.218")
console.log(ip);

// 4) uuid = universal yagona bo'lgan aniqlovchi yaratish uchun ishlatiladi.
// tasodfiy string yaratish uchun ishlatiladi.

const {v4:uuid4} = require("uuid")
const random = uuid4();
console.log(random);

// 5) chalk -> o'ziga biriktirilgan elementlarni rangini o'zgartirib consoleda chiqarib beradi.
const chalk = require("chalk");
const log = console.log;
log(chalk.blue("hello") + "world" + chalk.red("!"));



// Module package FILE. 

const calculate = require('./hisob');

const natija = calculate.kopaytirish(80,20);
console.log('Natija:', natija);
console.log("+++++++++++++++++++");

const natija2 = calculate.ayirish(80,20);
console.log('Natija:', natija2);
console.log(require("module").wrapper);


const Account = require('./account')
Account.tellMeAboutClass(); 
Account.tellMeTime();

console.log("==========");
const myAccount = new Account('Steve', 200000, 1212345648856)
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

// Buggati  2,4 mln usd couldt'be bought

// ferrari could be bought
myAccount.withdrawMoney(400000);

myAccount.makeDeposit(200000);
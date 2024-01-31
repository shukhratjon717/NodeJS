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
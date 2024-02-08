const moment = require("moment")
const time = moment().format("YYYY-MM-DD");
console.log(time)

setInterval(function() {
const time = moment().format();
    console.log(`Hozirgi vaqt ${time}`);
}, 5000);

// const inquirer = require("inquirer");
// inquirer.prompt([{type: "input", name: "raqam", message: "raqamni kiriting!"}])
// .then(answer => {
//     console.log('kiritilgan raqam', answer.raqam)
// })
// .catch((err) => console.log(err));

const schedule = require("node-schedule");
// 1- * second, 2-minut ,3- soat, 4- hafta kuniga, 5- oy, 6-hafta kuniga
schedule.scheduleJob("*/5 * * * * *", function() {
    console.log("Ishga tushdi:", moment().format("HH:mm:ss"))
});

// batching/ crontab

// Single thread multi process nima?
 // Nodejs Single yoki Mater thread hisoblanadi lekin uni yordamchi threadlari ham bor.
 // yordamchi threadlar thread pool deb ataladi.
 // 
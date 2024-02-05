// Express framework and building a webserver with this framework
console.log("Web server is running")
const { log } = require("console");
 // to start, we have to install express (syntax: npm install express --save )then we have to call it 
 const express = require("express")
 // to get control of object of express, we have mt make an intance by creating
 const app = express();
const http = require("http")
 // bu jarayon 4ga bo'linadi
 // 1)  lirish code
 app.use(express.static("public"));   // bu harqanday browserdan public filega kirish mumkin degani, 
 //kelajakda CSS uchun kerak bo'ladigan filelar shu public folderga joylashadi
app.use(express.json());  // - bu jarayon json formatdagi datani (malumotlarni) object xolatiga aylantirib beradi. 
app.use(express.urlencoded({extended: true})); // HTML form dan kelgan malumotlarni xpress qaul qiladigan jarayon.

 // 2) Session code
 // 3)  Views code
 //Express uchun BSSR (backan side server rendering) backanddan fontend yasash uchun foydalaniladi. traditional way.
 // buning uchun biz EJSdan foydalanamiz. lekin oldin ejsni install qilamiz.
    
 app.set("views", "views"); // qanday folderdan malumotlar olishni kirgiziladi
 app.set("view engine", "ejs");  // views folderni run qilish uchun shlatiladigan engine qaysiligi ko'rsailadi

 // 4) Routerlarga shakillantiriladi // routing codes
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"});
})

app.get("/", function(req, res) {
    res.render("harid")
})
 const server = http.createServer(app) 
 const PORT = 3000
 server.listen(PORT, function() {
    console.log(`The server is running succesfully on port: ${PORT}`);
 })
 // serverni boshlash uchun http dan foydalanamiz

//  har bir o'zgarishdan keyin serverni o'chirib qayta ishlatishni oldini olish uchun "NODEMON" ishlatamiz.
// Syntax: npm install -g nodemon.
// npm start dan bowqa harqanday serverni ishlatish uchun run qoyamiz. ex: npm run dev
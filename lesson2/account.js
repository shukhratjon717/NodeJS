const moment = require("moment")


class Account {
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
    
        this.name = name;
        this.#amount = amount; 
        this.#account_id = account_id;
    } 


    tellMeBalance() {
        console.log(`Sizning hisobingizdagi qoldq:`,this.#amount);
        return this.amount;
    }

    withdrawMoney(amount) {
        if(this.#amount > amount) {
            // this.#amount = this.#amount - amount
            this.#amount -= amount
            console.log(`Hidobdan ${amount} pul yechildi va qoldiq ${this.#amount}$`);
        } else {
            console.log(`Sizning balansingiz yetarli emas: ${this.#amount}$`);
        }
    }

    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Hisobiniz toldiridi, hisobingiz ${this.#amount}$ tashkil etadi`); 
    }

    giveMeDetails() {
        console.log(`Salom hurmatli ${this.name} sizning hisbingiz ${this.#amount}$ ga teng`);
        console.log('Sizning hisob raqamingiz:', this.#account_id);
    }

    static tellMeAboutClass() {
        console.log('bu class accountlarni yasash uchun foydalaniladi');
    }

    static tellMeTime() {
        console.log(`hozirgi vaqt ${moment().format('YYYY MM DD HH:mm:ss')}`);
    }
}

module.exports = Account
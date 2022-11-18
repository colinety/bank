const config = {
    initialFrom: document.getElementById("initial-form"),
    bankPage: document.getElementById("bankPage"),
}

class BankAccount{
    constructor(firstName, lastName, email, type, money){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.type = type;
        this.money = money;
        this.initialDeposit = money;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}
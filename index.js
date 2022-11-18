const config = {
    initialForm: document.getElementById("initial-form"),
    bankPage: document.getElementById("bankPage"),
}

class BankAccount{
    constructor(firstName, lastName, email, type, accountNumber, money){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.type = type;
        this.accountNumber = accountNumber;
        this.money = money;
        this.initialDeposit = money;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function initializeUserAccount(){
    const form = document.getElementById("bank-form");
    let userBankAccount = new BankAccount(
        form.querySelectorAll(`input[name="userFirstName"]`).item(0).value,
        form.querySelectorAll(`input[name="userLastName"]`).item(0).value,
        form.querySelectorAll(`input[name="userEmail"]`)[0].value,
        form.querySelectorAll(`input[name="userAccountType"]:checked`).item(0).value,
        getRandomInteger(1, Math.pow(10, 8)),
        parseInt(form.querySelectorAll(`input[name="userFirstDeposit"]`).item(0).value),
    );
    
    console.log(userBankAccount);
}
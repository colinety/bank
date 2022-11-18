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

    //1ページ目を非表示にする
    config.initialForm.classList.add("d-none");

    //2ページ目を呼び出す
    config.bankPage.append(mainBankPage(userBankAccount));
}

function mainBankPage(bankAccount){
    let infoCon = document.createElement("div");
    infoCon.classList.add("pb-2", "text-right");

    let nameP = document.createElement("p");
    nameP.classList.add("py-1");

    let bankIdP = nameP.cloneNode(true);
    let initialDepositP = nameP.cloneNode(true);

    //オブジェクトの情報を挿入
    nameP.innerHTML = bankAccount.getFullName();
    bankIdP.innerHTML = bankAccount.accountNumber;
    initialDepositP.innerHTML = bankAccount.initialDeposit;

    infoCon.append(nameP, bankIdP, initialDepositP);

    let balanceCon = document.createElement("div");
    balanceCon.classList.add("d-flex", "bg-dnager", "py-1");
    balanceCon.innerHTML = 
    `
    <p class="col-8 text-left rme1p5">Available Balance</p>
    <p class="col-4 text-right rem1p5">$${bankAccount.money}</p>
    `;
    
    let menuCon = document.createElement("div");
    menuCon.classList.add("d-flex", "justify-content-center", "flex-wrap", "text-center", "py-3", "mx-0");
    menuCon.innerHTML = 
    `
    <div class="col-12 py-1 px-0">
        <div class="bg-blue hover p-3">
            <h5>WITHDRAWAL</h5>
            <i class="fas fa-wallet fa-3x"></i>
        </div>
    </div>
    <div class="col-12 py-1 px-0">
        <div class="bg-blue hover p-3">
            <h5>DEPOSIT</h5>
            <i class="fas fa-coins fa-3x"></i>
        </div>
    </div>
    <div class="col-12 py-1 px-0">
        <div class="bg-blue hover p-3">
            <h5>COME BACK LATER</h5>
            <i class="fas fa-home fa-3x"></i>
        </div>
    </div>
    `;

    let container = document.createElement("div");
    container.append(infoCon, balanceCon, menuCon);

    return container;
}
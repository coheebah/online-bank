alert("Welcome To Nelson Microfinance Bank. Beware of Fraud!");
alert("Ready For Transaction? Click 'OK' to Proceed!");
 
let balance = 0;
let history = [];
let historyVisible = false;

function deposit() {
  let amount = prompt("Enter deposit amount:");
  if (amount !== null && amount !== "") {
    amount = parseFloat(amount);
    //I used the isNaN, which means "Not-a-Number" because it's method will return true if a value is NaN.
    // I will convert whatever value my customer imput to a number before testing it
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      history.push(`Deposited $${amount.toFixed(2)}`);
      updateUI();
    } else {
      alert("Invalid amount Abeg");
    }
  }
}

//I have used the updateUI() method of the interface which updates the title and icon
// in the user interface to show the status of a the information that my code fetches on the background. It will 
//enable my customer or user get notification on a failed or a successful fetch. The amount !== null && amount !== "" is 
//a code or method that checks if the variable "amount" is not null and not an empty string.


function withdraw() {
  let amount = prompt("Enter withdrawal amount");
  if (amount !== null && amount !== "") {
    amount = parseFloat(amount);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      balance -= amount;
      history.push(`Withdrew $${amount.toFixed(2)}`);
      updateUI();
    } else {
      alert(" Oga Invalid amount or insufficient funds");
    }
  }
}

function transfer() {
  let amount = prompt("Enter transfer amount:");
  if (amount !== null && amount !== "") {
    amount = parseFloat(amount);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      let recipient = prompt("Enter recipient account number");
      if (recipient !== null && recipient !== "") {
        history.push(`Transferred $${amount.toFixed(2)} to account ${recipient}`);
        balance -= amount;
        updateUI();
      } else {
        alert("Invalid recipient account number");
      }
    } else {
      alert("Invalid amount or insufficient funds");
    }
  }
}


function toggleHistory() {
    historyVisible = !historyVisible;
    let historyList = document.getElementById("history");
    if (historyVisible) {
      historyList.style.display = "block";
    } else {
      historyList.style.display = "none";
    }
  }


function updateUI() {
  document.getElementById("balance").textContent = balance.toFixed(2);
  let historyList = document.getElementById("history");
  historyList.innerHTML = "";
  for (let i = history.length  -1; i >= 0; i--) {
    let item = document.createElement("li");
    item.textContent = history[i];
    historyList.appendChild(item);
  }
}
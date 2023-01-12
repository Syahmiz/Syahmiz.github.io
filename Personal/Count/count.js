let number = 0;
let innerNumber = 0;
let isSaved = true;
let myLeads = [];

const countTotal = document.getElementById("count-total");
const countNumber = document.getElementById("count-number");
const countSaved = document.getElementById("count-saved");
const resetButton = document.getElementById("reset");

innerNumber = parseInt(localStorage.getItem("totalNumber")) || 0;

let saveNumber = JSON.parse(localStorage.getItem("saveNumber"));
if (saveNumber) {
  myLeads = saveNumber;
  render(myLeads);
};

// render is for myLeads to list out the localStorage
function render(leads) {
  let listNumber = ''
  for ( let i = 0; i < leads.length; i++ ) {
    listNumber += leads[i];
  };
  countSaved.textContent += listNumber;
};

// to increase the number
function increment() {
  number += 1;
  innerNumber += 1;
  countNumber.textContent = number;

  isSaved = false;
}

// to decrease the number
function decrement() {
  if ( innerNumber < 1 ) {
    return 0;
  } else if ( number < 1 ) {
    return 0;
  } else {
    number -= 1;
    innerNumber -= 1;
    countNumber.textContent = number;
  };
  isSaved = false;
};

function save() {
  let countStr = number + " --- ";
  countSaved.textContent += countStr;

  number = 0;
  countNumber.textContent = 0;

  isSaved = true;

  // Saved output
  myLeads.push(countStr);
  localStorage.setItem("saveNumber", JSON.stringify(myLeads));

  // total
  localStorage.setItem("totalNumber", innerNumber);
}

function total() {
  if (isSaved) {
    countTotal.textContent = "Total: " + innerNumber;
  } else {
    return null;
  }
};

resetButton.addEventListener("click", function(){
  if(window.confirm("Are you sure you want to reset the data?")) {
    countSaved.textContent = "Saved: ";
    countTotal.textContent = "Total: ";
    countNumber.textContent = 0;

    number = 0;
    innerNumber = 0;

    localStorage.clear();
    myLeads = []

    isSaved = false;
  };
});
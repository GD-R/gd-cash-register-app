const billAmount = document.querySelector("#bill_amount");
const cashGiven = document.querySelector("#cash_given");
const checkBttn = document.querySelector("#check_button");
const errMsg = document.querySelector("#error_msg")
const noOfNotes = document.querySelectorAll(".no_of_notes");
const box_display = document.querySelector("#next_button");
const box = document.querySelector("#box");

const notesWehave = [2000, 500, 100, 20, 10, 5, 1];

box.style.display = "none";

box_display.addEventListener("click", function displayFun () {
  box.style.display = "block";
})

checkBttn.addEventListener("click", action);

function errorMessage(msg) {
  errMsg.style.display = "block";
  errMsg.innerHTML = msg;
}


function calculate (givenCash) {
  for(let i = 0; i < notesWehave.length; i++ ) {
    let notesToGive = Math.trunc(givenCash / notesWehave[i]);
    givenCash = givenCash % notesWehave[i];
    noOfNotes[i].innerHTML = notesToGive;
  }
}


function action() {
   errMsg.style.display = "none";
   if(Number(billAmount.value) >= 0){
      if(Number(cashGiven.value) >= Number(billAmount.value)) {
        let balanceAmount = Number(cashGiven.value) - Number(billAmount.value);
        calculate(balanceAmount);
      }
      else {
        errorMessage("Please Pay The Bill Amount");
      }
   }
   else {
     errorMessage("Bill Amoint should be greater than zero");
   }
}


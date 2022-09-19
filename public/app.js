function primenumber () {
var inputbox = document.getElementById("txt").value;
const ArrList = new Array (2, 3, 5, 7 , 11)



var numberList = document.getElementById("numberlist")
numberList.innerHTML = "Primtalen " + inputbox + " ";

for (var i = 0; i < inputbox; i++) {
    numberList.innerHTML += (ArrList[i]) + ", ";
};


}

function primenumber2() {
var inputbox = document.getElementById("txt").value;
const ArrList = new Array (2, 3, 5, 7 , 11)

var number = document.getElementById("number")
number.innerHTML = "Ditt tal är " + inputbox + " ";
inputbox -= 1;
number.innerHTML += "och är primtal " + ArrList[inputbox];


}

/*
if (number === 1) return false
if (number >= 2) {      // if not equal to 2, so the functon continues
 for (let i= 2; i < num; i++) {
  if (number % i === 0) { //check for prime numbers, % gives a rest or not after calculating, useful for checking if a number is even or not
                        // If there is any remain this function iterates over and over again until the limit is met

  return false;
   }
 }
 return true;
 */

  /*if (inputbox == 1) {
        Fibinacci = [1];
    */
function fibinacci () {
    var inputbox = document.getElementById("txt").value;
    const fibinaccilist = document.getElementById("fibnaccilist");
    var Fibinacci = (1,1);

    if (inputbox ==1) {
    Fibinacciv= [1]
    }

    if (inputbox ==2) {
        Fibinacci= [2]

    }

    for (var n=2; n <=inputbox; i++) {
    Fibinacci[n]= Fibinacci[n-1] + Fibinacci[n-2]
    }

    fibinaccilist.innerHTML = " " + inputbox + " ";
    inputbox -= 1;

    fibinaccilist.innerHTML <= Fibinacci[inputbox];

    
}

function fibinacci2 () {
    var inputbox = document.getElementById("txt").value;
    const fibinaccilist = document.getElementById("fibnaccilist");
    var Fibinacci = (1,1);

    if (inputbox ==1) {
    Fibinacci[1]
    Fibinaccilist.innerHTML = "Apa"
    }

    for (var n=2; n <=inputbox; i++) {
    fibinacci[n]= fibinacci[n-1] + fibinacci[n-2]

    }
}



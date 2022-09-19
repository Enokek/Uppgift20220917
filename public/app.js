function primenumber () {
var inputbox = document.getElementById("txt").value;
const ArrList = new Array (2, 3, 5, 7 , 11)

for (var i = 0; i < inputbox; i++) {
    console.log(ArrList[i]);
};



}

function primenumber2() {
var inputbox = document.getElementById("txt").value;
const ArrList = new Array (2, 3, 5, 7 , 11)

inputbox -= 1;
console.log(ArrList[inputbox]);

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

/* Uppgift A - Primtal
Beräkna ett visst antal primtal. 
Skapa ett UI som funkar för följande två scenarion:
1/Anger man 5, ska ge en lista med de fem första primtalen.
2/Anger man 5, ska man få se det femte primtalet.

-lös uppgiften först med svaren i console.log
-bygg gärna vidare på UI, så du kan ta bort console.log
-kanske en funktion som kollar om ett givet tal är ett primtal eller inte
-någon loop som letar fram ett visst önskat primtalet (ordningsföljden) i en talserie 1,2,3,4,5,6,7...n
-glöm inte commits!

*/



function fibinacci () {


}
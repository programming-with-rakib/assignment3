// https://github.com/programming-with-rakib/assignment3



/*
 * - 
 * - Kilometer To Meter
 * -
*/
function kilometerToMeter(kilometer){
    var convertToMeter = kilometer * 1000;
    return convertToMeter;
}
var meter = kilometerToMeter([10]);





/*
 * - 
 * - Budget Calculator
 * -
*/

function budgetCalculator(clock, phone, laptop){
    var total = clock * 50 + phone * 100 + laptop * 500;
    return total;

}
var totalCost = budgetCalculator(5, 3, 4);





/*
 * - 
 * - Hotel Cost
 * -
*/





/*
 * - 
 * - Mega Friend
 * -
*/
function megaFriend(str) {
    var wordLength = 0;
    var biggestWord;
    for (var i = 0; i < str.length; i++) {
      if (str[i].length > wordLength) {
        var wordLength = str[i].length;
        biggestWord = str[i];
      }
    }
    return biggestWord;
  }

var friend = megaFriend (['John Doe', 'Mary', 'Ray Villalobos', 'Smith', 'Joe Chelman']);



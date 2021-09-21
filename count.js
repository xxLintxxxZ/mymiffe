//LOGIC CHECKING //
//qtyWanted x rate < $30; if any player bid more than cashHeld, should "catch"
//* name, qty and rate to test
        //===============================//
        //===========DEMAND PHASE========//
        //===============================//
  const playerInfo = [
    {name: "don", qty: 2, rate: 6 , total: 0, cashHeld: 30,  sRate : 3},
    {name: "jane", qty: 5, rate: 2, total: 0,  cashHeld: 30, sRate : 5  },
    {name: "dean", qty: 6, rate: 5, total: 0, cashHeld: 30, sRate: 4 },
    {demand: ''}
  ]

  playerInfo[3].demand = playerInfo[0].qty + playerInfo[1].qty + playerInfo[2].qty;
  let d = playerInfo[0].qty + playerInfo[1].qty + playerInfo[2].qty;
  console.log(playerInfo) //test

  //console.log(playerInfo)  // checking to see array info 

// program to extract value as an array from an array of objects
/****************    RATE SORT ************************************/
/* below function is sorting the rate of the playerInfo array */
const rateSort = playerInfo.sort(function(a, b){return a.rate - b.rate});

console.log(rateSort) // from smallest to largest
//console.log(playerInfo) //array has been sorted changed from smallest rate to largest

const rateMax = playerInfo[2].rate  // 7 
const rateMedian = playerInfo[1].rate // 6
const rateMin = playerInfo[0].rate //5

console.log("Max Offer is $" + rateMax + " by " + playerInfo[2].name) 
console.log("Median Offer is $" + rateMedian + " by " + playerInfo[1].name)
console.log("Min Offer is $" + rateMin + " by " + playerInfo[0].name)

let totalAvail = 11 // a random no. 
console.log("Total available t-shirts in auction: "+ totalAvail)
console.log("Total t-shirts wanted by players: " + d) //9
//console.log(calcRemain(9,3)) // test
// Function to allocate t-shirts in the event of insufficient
const calcRemain = (x,y) => 
{
  if (x - y > 0)
      return y 
      else {
      return x} //return x not 0 ~
}

let p3qtyBought = (calcRemain(totalAvail, playerInfo[2].qty,)) 
//console.log(typeof (p2qtyBought) )
console.log(p3qtyBought)

let left1 = totalAvail - p3qtyBought;  //t-shirts avail in auction after firstPlayer
//console.log(left1)

let p2qtyBought = (calcRemain (left1,playerInfo[1].qty)) 
console.log(p2qtyBought)

let left2 = left1 - p2qtyBought // t-shirts avail in auction after 2ndPlayer
//console.log(left2)

let p1qtyBought = (calcRemain (left2,playerInfo[0].qty)) // t-shirts avail in auction after 1st and 2nd players
//console.log(last)

let last = left2 -p1qtyBought

// if (left1 is remaining t-shirts after allocated to player 2) // 
if (playerInfo[2].qty > totalAvail) {
  console.log("Insufficient t-shirts!")
}
console.log( playerInfo[2].name + ' has bought ' + p3qtyBought + " t-shirts") // Player has made the highest offer so he gets the qty
console.log("Remaining t-shirts after " + playerInfo[2].name +  " has bought : "+ left1)// left 1 are the remaining shirts for the 2 players

if (playerInfo[1].qty> left1) {
    console.log("Insufficient t-shirts!")}
    console.log( playerInfo[1].name + ' has bought ' + p2qtyBought + " t-shirts")
    console.log("Remaining t-shirts after " + playerInfo[1].name +  " has bought : "+ left2) //7
    
if (playerInfo[0].qty > left2) {
  console.log("Insufficient t-shirts!")
}
    console.log( playerInfo[0].name + ' has bought ' + p1qtyBought + " t-shirts")
    console.log("Remaining t-shirts after " + playerInfo[0].name +  " has bought : "+ last) 


  // Total Spent and Cash Left // 
  playerInfo[0].total = p1qtyBought * playerInfo[0].rate
  playerInfo[0].cashHeld = 30 - playerInfo[0].total 
  console.log(playerInfo[0].name + " has spent $" + playerInfo[0].total + " and has left $" + playerInfo[0].cashHeld )

  playerInfo[1].total = p2qtyBought * playerInfo[1].rate
  playerInfo[1].cashHeld = 30 - playerInfo[1].total 
  console.log(playerInfo[1].name + " has spent $" + playerInfo[1].total + " and has left $" + playerInfo[1].cashHeld )

  playerInfo[2].total = p3qtyBought * playerInfo[2].rate
  playerInfo[2].cashHeld = 30 - playerInfo[2].total 
  console.log(playerInfo[2].name + " has spent $" + playerInfo[2].total + " and has left $" + playerInfo[2].cashHeld )
 
            //===============================//
            //===========SUPPLY PHASE========//
            //===============================//

//sQty need not be defined in array initially
//const playerInfo = [
//   {name: "don", qty: 2, rate: 6 , total: 0, cashHeld: 30, sQty: 0, sRate : 3},
//   {name: "jane", qty: 5, rate: 2, total: 0,  cashHeld: 30, sQty: 0, sRate : 5  },
//   {name: "dean", qty: 6, rate: 5, total: 0, cashHeld: 30, sQty: 0, sRate: 4 },
//   {demand: ''}
//]
//Assume players sell all t-shirts bought 
playerInfo[2].sQty = p3qtyBought
playerInfo[1].sQty = p2qtyBought
playerInfo[0].sQty = p1qtyBought
console.log(playerInfo)

let s = playerInfo[0].sQty + playerInfo[1].sQty + playerInfo[2].sQty;
console.log(playerInfo) 

/****************    Selling Rate Sort  ************************************/
const sRateSort = playerInfo.sort(function(a, b){return a.sRate - b.sRate});
console.log(sRateSort) // from smallest to largest
//console.log(playerInfo) //array has been sorted changed from smallest rate to largest

const sRateMin = playerInfo[0].sRate // sell all qty from this 
const sRateMedian = playerInfo[1].sRate // sell remaining qty from this 
const sRateMax = playerInfo[2].sRate  // sell remaining qty after first 2 players


console.log("Min Offer is $" + sRateMin + " by " + playerInfo[0].name)
console.log("Median Offer is $" + sRateMedian + " by " + playerInfo[1].name)
console.log("Max Offer is $" + sRateMax + " by " + playerInfo[2].name) 

//Required items in marketplace//
let totalRequired = 9 // a random no. 
console.log("Total t-shirts wanted in marketplace: "+ totalRequired)
console.log("Total t-shirts on sale by players: " + s) //9

// const calcRemain = (x,y) => 
// {
//   if (x - y > 0)
//       return y 
//       else {
//       return x} //return x not 0 ~
// }

let p1qtySold = (calcRemain(totalRequired, playerInfo[0].sQty,)) 
//console.log(typeof (p2qtyBought) )
console.log(p1qtySold) //2
let sLeft1 = totalRequired - p1qtySold;  //t-shirts still wanted after firstPlayer sale 
console.log(sLeft1) //7

let p2qtySold = (calcRemain(sLeft1, playerInfo[1].sQty,)) 
console.log(p2qtySold) //6
let sLeft2 = sLeft1 - p2qtySold // t-shirts still wanted after 2ndPlayer sale
console.log(sLeft2) // 1

let p3qtySold = (calcRemain (sLeft2,playerInfo[2].sQty)) // t-shirts avail in auction after 1st and 2nd players
console.log(p3qtySold)  // 1
let sfinal = sLeft2 - p3qtySold 

//Remaining required //
if (playerInfo[0].sQty > totalRequired) {
  console.log("Insufficient t-shirts!")
}
console.log( playerInfo[0].name + ' has sold ' + p1qtySold + " t-shirts") // Player has made the lowest offer so he sells the qty
console.log("Remaining t-shirts wanted after " + playerInfo[0].name +  " has sold : "+ sLeft1)// left 1 are the remaining shirts for the 2 players

if (playerInfo[1].sQty> sLeft1) {
  console.log("Insufficient t-shirts!")}
  console.log( playerInfo[1].name + ' has sold ' + p2qtySold + " t-shirts") 
  console.log("Remaining t-shirts wanted after " + playerInfo[1].name +  " has sold : "+ sLeft2)

  
if (playerInfo[2].sQty > sLeft2) {
console.log("Too expensive t-shirts, not buying!") }
console.log( playerInfo[2].name + ' has sold ' + p3qtySold + " t-shirts") 
console.log("Remaining t-shirts (if any) wanted after " + playerInfo[2].name +  " has sold : "+ sfinal)

 //Total Earned and Cash Left // 
 playerInfo[0].earned = p1qtySold * playerInfo[0].sRate
 playerInfo[0].cashHeld = playerInfo[0].cashHeld + playerInfo[0].earned 
 console.log(playerInfo[0].name + " has earned $" + playerInfo[0].earned + " and has $" + playerInfo[0].cashHeld )

 playerInfo[1].earned = p2qtySold * playerInfo[1].sRate
 playerInfo[1].cashHeld = playerInfo[1].cashHeld + playerInfo[1].earned 
 console.log(playerInfo[1].name + " has earned $" + playerInfo[1].earned + " and has $" + playerInfo[1].cashHeld )

 playerInfo[2].earned = p3qtySold * playerInfo[2].sRate
 playerInfo[2].cashHeld = playerInfo[2].cashHeld + playerInfo[2].earned 
 console.log(playerInfo[2].name + " has earned $" + playerInfo[2].earned + " and has $" + playerInfo[2].cashHeld )


 const cashSort = playerInfo.sort(function(a, b){return a.cashHeld - b.cashHeld});
 //console.log(cashSort)
 
 console.log("The Winner is " + playerInfo[2].name + "!")
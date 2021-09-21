//LOGIC CHECKING //
//qtyWanted x rate < $30; if any player bid more than cashHeld, should "catch"
//* name, qty and rate to test
//===============================//
//===========DEMAND PHASE========//
//===============================//
  const playerInfo = [
    {name: "don", qty: 2, rate: 6 , total: 0, cashHeld: 30},
    {name: "jane", qty: 5, rate: 2, total: 0, cashHeld: 30},
    {name: "dean", qty: 6, rate: 5, total: 0, cashHeld: 30},
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

// to check if leftover t-shirts can satisfy demand 
const combinedQtyP1P2 = playerInfo[1].qty + playerInfo[0].qty 
//console.log(combinedQtyP1P2)

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

if (left1 > combinedQtyP1P2) {
    console.log("Insufficient t-shirts!")}
    console.log( playerInfo[1].name + ' has bought ' + p2qtyBought + " t-shirts")
    console.log("Remaining t-shirts after " + playerInfo[1].name +  " has bought : "+ left2) //7
    
if (left2 > playerInfo[0].qty) {
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

/*************** PLAYER ***********/   

 //===============================//
//===========SUPPLY PHASE========//
//===============================//

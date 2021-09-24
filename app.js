if (typeof $ == "undefined") {
    console.log("oops! I still have to link my jQuery properly!");
  } else {
    console.log("I did it! I linked jQuery and this js file properly!");
  }

// The name is not "hard coded - hence this html would not work"
  const playerInfo = [
    {name: "don", qty: 2, rate: 7 , total: 0, cashHeld: 30,  sRate : 0, qtyBought: 0, qtySold: 0},
    {name: "jane", qty: 5, rate: 5, total: 0,  cashHeld: 30, sRate : 0, qtyBought :0, qtySold: 0  },
    {name: "dean", qty: 6, rate: 4, total: 0, cashHeld: 30, sRate: 0, qtyBought: 0, qtySold: 0 },
  ]

  let d = playerInfo[0].qty + playerInfo[1].qty + playerInfo[2].qty;
  console.log(playerInfo) //test

  const calcRemain = (x,y) => 
{
  if (x - y > 0)
      return y 
      else {
      return x} //return x not 0 ~
}


        //===============================//
        //===========DEMAND PHASE========//
        //==============================//


        //form inputs are all strings!//
 const calBuy = () => {
    const $p1Qty = $('#p1Qty').val() *1  // IMPT! multiply by 1 to make it into integer, else stored as string
    const $p2Qty = $('#p2Qty').val() * 1
    const $p3Qty = $('#p3Qty').val() * 1 //get the input from submit button 
    console.log(typeof($p1Qty))  
    console.log(typeof($p2Qty)) 
    console.log($p1Qty) //test check
    playerInfo[0].qty = $p1Qty 
    playerInfo[1].qty = $p2Qty 
    playerInfo[2].qty = $p3Qty 
   // const $buyDemand = $p1Qty + $p2Qty +$p3Qty
    //console.log(typeof($buyDemand)) 
    const $p1Rate = $('#p1Rate').val() *1
    const $p2Rate = $('#p2Rate').val()  *1
    const $p3Rate = $('#p3Rate').val() *1 //get the input from submit button 
    console.log($p3Rate) // test check
    playerInfo[0].rate = $p1Rate 
    playerInfo[1].rate = $p2Rate 
    playerInfo[2].rate = $p3Rate 
    console.log($p1Rate) //test check
     playerInfo[0].total = $p1Qty * $p1Rate
     playerInfo[1].total = $p2Qty * $p2Rate
     playerInfo[2].total = $p3Qty * $p3Rate
    //playerInfo[3].demand = $buyDemand;
    console.log(playerInfo)
    console.log(playerInfo[0].total)
    
      
  $('#player1').text(playerInfo[0].total) 
  $('#player2').text(playerInfo[1].total)
  $('#player3').text(playerInfo[2].total) 

//calculate if player gets their bidded qty successfully
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


playerInfo[2].qtyBought  = calcRemain (totalAvail, playerInfo[2].qty) 
 //console.log(typeof (playerInfo[1].qtyBought) )
// console.log(p3qtyBought) // p3qtyBought now is playerInfo[2].qtyBought


// let p3qtyBought = calcRemain(totalAvail, playerInfo[2].qty)
//console.log(typeof (p2qtyBought) )
// console.log(p3qtyBought)

///Remain///
let left1 = totalAvail - playerInfo[2].qtyBought;  //t-shirts avail in auction after firstPlayer
//console.log(left1)
//playerInfo[2].qtyBought = p3QtyBought

playerInfo[1].qtyBought = calcRemain (left1,playerInfo[1].qty) *1
//console.log(playerInfo[1].qtyBought)
//playerInfo[1].qtyBought = playerInfo[1].qty  //p2qtyBought now is playerInfo[1].qtyBought

///Remain///
let left2 = left1 - playerInfo[1].qtyBought // t-shirts avail in auction after 2ndPlayer
//console.log(left2)


playerInfo[0].qtyBought = calcRemain (left2,playerInfo[0].qty) *1 // t-shirts avail in auction after 1st and 2nd players
//console.log(last)


///Remain///
let last = left2 - playerInfo[0].qtyBought

// if (left1 is remaining t-shirts after allocated to player 2) // 
if (playerInfo[2].qty > totalAvail) {
  console.log("Insufficient t-shirts!")
}
console.log( playerInfo[2].name + ' has bought ' + playerInfo[2].qtyBought  + " t-shirts") // Player has made the highest offer so he gets the qty
console.log("Remaining t-shirts after " + playerInfo[2].name +  " has bought : "+ left1)// left 1 are the remaining shirts for the 2 players

if (playerInfo[1].qty> left1) {
    console.log("Insufficient t-shirts!")}
    console.log( playerInfo[1].name + ' has bought ' + playerInfo[1].qtyBought + " t-shirts")
    console.log("Remaining t-shirts after " + playerInfo[1].name +  " has bought : "+ left2) //7
    
if (playerInfo[0].qty > left2) {
  console.log("Insufficient t-shirts!")
}
    console.log( playerInfo[0].name + ' has bought ' + playerInfo[0].qtyBought + " t-shirts")
    console.log("Remaining t-shirts after " + playerInfo[0].name +  " has bought : "+ last) 


  // Total Spent and Cash Left // 
  playerInfo[0].total = playerInfo[0].qtyBought * playerInfo[0].rate
  console.log( "testing", playerInfo[0].total)
  playerInfo[0].cashHeld = 30 - playerInfo[0].total 
  console.log(playerInfo[0].name + " has spent $" + playerInfo[0].total + " and has left $" + playerInfo[0].cashHeld )

  playerInfo[1].total = playerInfo[1].qtyBought * playerInfo[1].rate
  playerInfo[1].cashHeld = 30 - playerInfo[1].total 
  console.log(playerInfo[1].name + " has spent $" + playerInfo[1].total + " and has left $" + playerInfo[1].cashHeld )

  playerInfo[2].total = playerInfo[2].qtyBought * playerInfo[2].rate
  playerInfo[2].cashHeld = 30 - playerInfo[2].total 
  console.log(playerInfo[2].name + " has spent $" + playerInfo[2].total + " and has left $" + playerInfo[2].cashHeld )

    // $('#player1').text(playerInfo[0].qty) 
    // $('#player1').text(playerInfo[0].qty) 
    // $('#player1').text(playerInfo[0].qty) 
  
  };
 
          //===============================//
            //===========SUPPLY PHASE========//
            //===============================//

//sQty need not be defined in array initially
// const playerInfo = [
//   {name: "don", qty: 2, rate: 6 , total: 0, cashHeld: 30, sQty: 0, sRate : 3},
//   {name: "jane", qty: 5, rate: 2, total: 0,  cashHeld: 30, sQty: 0, sRate : 5  },
//   {name: "dean", qty: 6, rate: 5, total: 0, cashHeld: 30, sQty: 0, sRate: 4 },
//   {demand: ''}
// ]
//Assume players sell all t-shirts bought 

const sell =() => {
console.log(playerInfo)
//console.log(playerInfo[2].sQty)
//console.log(playerInfo[2].qtyBought)
playerInfo[2].sQty = playerInfo[2].qtyBought *1;
playerInfo[1].sQty = playerInfo[1].qtyBought;
playerInfo[0].sQty = playerInfo[0].qtyBought;
console.log(playerInfo[2].qtyBought)
console.log(playerInfo)

let s = playerInfo[0].sQty + playerInfo[1].sQty + playerInfo[2].sQty;
console.log(playerInfo) 


// const sellInput = () => {

  const qtyBoughtSort = playerInfo.sort(function(a, b){return a.qtyBought - b.qtyBought});
  console.log(playerInfo)
  const $p1Qty = $('#p1Qty').val() *1  // IMPT! multiply by 1 to make it into integer, else stored as string
  const $p2Qty = $('#p2Qty').val() * 1
  const $p3Qty = $('#p3Qty').val() * 1 //get the input from submit button 
  console.log(typeof($p1Qty))  
  console.log(typeof($p2Qty)) 
  //console.log($p1Qty) //test check
  playerInfo[0].qty = $p1Qty 
  playerInfo[1].qty = $p2Qty 
  playerInfo[2].qty = $p3Qty 
  console.log(playerInfo[0].name)
  console.log(playerInfo[1].name)
  console.log(playerInfo[2].name)


  playerInfo[0].sRate = $('#p1sRate').val() *1 //get the input from submit button 
  playerInfo[1].sRate = $('#p2sRate').val() *1 //get the input from submit button 
  playerInfo[2].sRate = $('#p3sRate').val() *1 //get the input from submit button 

  console.log(playerInfo)

  console.log(playerInfo[2].sRate) // test check

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

playerInfo[0].qtySold = calcRemain(totalRequired, playerInfo[0].sQty)
//console.log(typeof (p2qtyBought) )
console.log(playerInfo[0].qtySold) //2
let sLeft1 = totalRequired - playerInfo[0].qtySold;  //t-shirts still wanted after firstPlayer sale 
console.log(sLeft1) //7

playerInfo[1].qtySold = calcRemain(sLeft1, playerInfo[1].sQty)
console.log(playerInfo[1].qtySold) 
let sLeft2 = sLeft1 - playerInfo[1].qtySold // t-shirts still wanted after 2ndPlayer sale
console.log(sLeft2) // 1

playerInfo[2].qtySold  = calcRemain (sLeft2,playerInfo[2].sQty) // t-shirts avail in auction after 1st and 2nd players
console.log(playerInfo[2].qtySold) 
let sfinal = sLeft2 - playerInfo[2].qtySold 

//Remaining required //
if (playerInfo[0].sQty > totalRequired) {
  console.log("Insufficient t-shirts!")
}
console.log( playerInfo[0].name + ' has sold ' + playerInfo[0].qtySold + " t-shirts") // Player has made the lowest offer so he sells the qty
console.log("Remaining t-shirts wanted after " + playerInfo[0].name +  " has sold : "+ sLeft1)// left 1 are the remaining shirts for the 2 players

if (playerInfo[1].sQty> sLeft1) {
  console.log("Insufficient t-shirts!")}
  console.log( playerInfo[1].name + ' has sold ' + playerInfo[1].qtySold + " t-shirts") 
  console.log("Remaining t-shirts wanted after " + playerInfo[1].name +  " has sold : "+ sLeft2)

  
if (playerInfo[2].sQty > sLeft2) {
console.log("Too expensive t-shirts, not buying!") }
console.log( playerInfo[2].name + ' has sold ' + playerInfo[2].qtySold + " t-shirts") 
console.log("Remaining t-shirts (if any) wanted after " + playerInfo[2].name +  " has sold : "+ sfinal)

 //Total Earned and Cash Left // 
 playerInfo[0].earned = playerInfo[0].qtySold * playerInfo[0].sRate
 playerInfo[0].cashHeld = playerInfo[0].cashHeld + playerInfo[0].earned 
 console.log(playerInfo[0].name + " has earned $" + playerInfo[0].earned + " and has $" + playerInfo[0].cashHeld )

 playerInfo[1].earned = playerInfo[1].qtySold * playerInfo[1].sRate
 playerInfo[1].cashHeld = playerInfo[1].cashHeld + playerInfo[1].earned 
 console.log(playerInfo[1].name + " has earned $" + playerInfo[1].earned + " and has $" + playerInfo[1].cashHeld )

 playerInfo[2].earned = playerInfo[2].qtySold * playerInfo[2].sRate
 playerInfo[2].cashHeld = playerInfo[2].cashHeld + playerInfo[2].earned 
 console.log(playerInfo[2].name + " has earned $" + playerInfo[2].earned + " and has $" + playerInfo[2].cashHeld )


 const cashSort = playerInfo.sort(function(a, b){return a.cashHeld - b.cashHeld});
 //console.log(cashSort)
 
 console.log("The Winner is " + playerInfo[2].name + "!")
}



//playerInfo[2].qtyBought 

//* to create table info */
const buildBuyTable = () => {
  const $buyInfoTable = $("<table>").addClass("buyInfoTable");
  $buyInfoTable.html(
    `<thead>
      <tr>
        <th>Name</th>
        <th>Qty</th>
        <th>Buy Rate ($) </th>
        <th>Quantity Bought</th>   
        <th>Total Amount Spent ($)</th>
         
      </tr>
    </thead>`
  );

  for (let i of playerInfo) {
    console.log(i);
    const $infoRow = $("<tr>");
    const $nameCell = $("<td>").addClass("name").text(i.name);
    const $qtyCell = $("<td>").addClass("qty").text(i.qty);
    const $rateCell = $("<td>").addClass("rate").text(i.rate);
    const $qtyBoughtCell = $("<td>").addClass("qtyBought").text(i.qtyBought);
    const $totalSpentCell = $("<td>").addClass("total").text(i.total);
    $infoRow.append($nameCell, $qtyCell, $rateCell, $qtyBoughtCell, $totalSpentCell);
    $buyInfoTable.append($infoRow);
      }
    $("body").append($buyInfoTable);
};

const buildSellTable = () => {
  const $sellInfoTable = $("<table>").addClass("sellInfoTable");
  $sellInfoTable.html(
    `<thead>
      <tr>
        <th> Name </th>
        <th> Selling Rate ($) </th>
        <th> Quantity Sold</th>   
        <th> Total Amount Earned ($)</th>
        <th>T otal Amount Left ($)</th>
         
      </tr>
    </thead>`
  );

  for (let i of playerInfo) {
    console.log(i);
    const $infoRow = $("<tr>");
    const $nameCell = $("<td>").addClass("name").text(i.name);
    const $sellRateCell = $("<td>").addClass("sRate").text(i.sRate);
    const $qtySoldCell = $("<td>").addClass("qtySold").text(i.qtySold);
    const $totalEarnedCell = $("<td>").addClass("earned").text(i.earned);
    const $cashHeldCell = $("<td>").addClass("cashHeld").text(i.cashHeld);
    $infoRow.append($nameCell, $sellRateCell, $qtySoldCell, $totalEarnedCell, $cashHeldCell);
    $sellInfoTable.append($infoRow);
      }
    $("body").append($sellInfoTable);
};


//$space div 
const addh4 = (y) => {
  let $h4 = $('<h4>').text(y)
  $('body').append($h4) }

  //addh4(playerInfo[2].name + ' has bought ' + p3qtyBought + " t-shirts");
  addh4(playerInfo[2].qty);

  //$("$h2").hide();


  // function populateStorage() {
  //   localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  //   localStorage.setItem('font', document.getElementById('font').value);
  //   localStorage.setItem('image', document.getElementById('image').value);
  
  //   setStyles();
  // }
  
  $(() => {

    $("#buyForm").on("submit", (event) => {
      event.preventDefault();
      calBuy();
      buildBuyTable();
     
      //addh4(playerInfo[2].name + ' has bought ' + p3qtyBought + " t-shirts");
      $("#buyForm").css("display", "none") // should show this first
      $(".div_small").css("display", "none") 
      $("#sellForm").css("display", "block")


    });
   
    $("#sellForm").on("submit", (event) => {
      event.preventDefault();
      sell();
      buildSellTable();
     
      //addh4(playerInfo[2].name + ' has bought ' + p3qtyBought + " t-shirts");
      //$("#buyForm").css("display", "none") // should show this first
      $(".div_small").css("display", "none") 
      $("#sellForm").css("display", "inline-block")


    });
   
  })  // close document on ready
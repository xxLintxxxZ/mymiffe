if (typeof $ == "undefined") {
    console.log("oops! I still have to link my jQuery properly!");
  } else {
    console.log("I did it! I linked jQuery and this js file properly!");
  }

// The name is not "hard coded - hence this html would not work"
  const playerInfo = [
    {name: "player1", qty: 5, rate: 0 , total: ""},
    {name: "omg", qty: 3, rate: 0, total:""},
    {name: "player3", qty: 1, rate: 0, total: ""}
  ]


 //This should work
  // playerInfo[0].qty = 6
  // playerInfo[1].qty = 7
  // playerInfo[2].qty = 8

const getName = () => {
   const $p1name = $('#p1name').val()
   const $p2name = $('#p2name').val()  
   const $p3name = $('#p3name').val()    //get the input from submit button 
   console.log($p1name)
   playerInfo[0].name = $p1name
   playerInfo[1].name = $p2name
   playerInfo[2].name = $p3name
   $('#player1').text(playerInfo[0].name) 
   $('#player2').text(playerInfo[1].name)
   $('#player3').text(playerInfo[2].name) }


   const calBuy = () => {
    const $p1Qty = $('#p1Qty').val()
    const $p2Qty = $('#p2Qty').val()  
    const $p3Qty = $('#p3Qty').val()//get the input from submit button 
    console.log($p1Qty)  //test check
    playerInfo[0].qty = $p1Qty
    playerInfo[1].qty = $p2Qty
    playerInfo[2].qty = $p3Qty
    const $p1Rate = $('#p1Rate').val()
    const $p2Rate = $('#p2Rate').val()  
    const $p3Rate = $('#p3Rate').val()//get the input from submit button 
    console.log($p3Rate) // test check
    playerInfo[0].rate = $p1Rate
    playerInfo[1].rate = $p2Rate
    playerInfo[2].rate = $p3Rate
    console.log($p1Rate) //test check
    playerInfo[0].total = $p1Qty * $p1Rate
    playerInfo[1].total = $p2Qty * $p2Rate
    playerInfo[2].total = $p3Qty * $p3Rate
    console.log(playerInfo)
    console.log(playerInfo[0].total)
      
  $('#player1').text(playerInfo[0].total) 
  $('#player2').text(playerInfo[1].total)
  $('#player3').text(playerInfo[2].total)

    // $('#player1').text(playerInfo[0].qty) 
    // $('#player1').text(playerInfo[0].qty) 
    // $('#player1').text(playerInfo[0].qty) 
  
  }
console.log(playerInfo)

// playerInfo[0].name = $('#fname').val()
// console.log(playerInfo[0].name)
// console.log(playerInfo[1].name)
// console.log(playerInfo[2].name)


// To replace name of 'ostrich' to input obtained from user
// const addPlayerName = () => {
// const $addPlayer = $('<h3>').text('ostrich')  
// $('#tableEnd').append($addPlayer) 

// }

//* not showing data in the table, needs to troubleshoot
const buildTable = () => {
  const $buyInfoTable = $("<table>").addClass("buyInfoTable");
  $buyInfoTable.html(
    `<thead>
      <tr>
        <th>Name</th>
        <th>Qty</th>
        <th>Rate</th>
        <th>Total</th>    
      </tr>
    </thead>`
  );

  for (let i of playerInfo) {
    console.log(i);
    const $infoRow = $("<tr>");
    const $nameCell = $("<td>").addClass("name").text(i.name);
    const $qtyCell = $("<td>").addClass("qty").text(i.qty);
    const $rateCell = $("<td>").addClass("rate").text(i.rate);
    const $totalCell = $("<td>").addClass("total").text(i.total);
    $infoRow.append($nameCell, $qtyCell, $rateCell, $totalCell);
    $buyInfoTable.append($infoRow);
      }
    $("body").append($buyInfoTable);
};


const addh2 = () => {
  let $h2 = $('<h2>').text("Spacer")
  $('body').append($h2) }

  //$("$h2").hide();


  const buyingScreen = () => {
   window.location.href = "buy.html"
  }


  $(() => {

    //addPlayerName()
    addh2();
    getName();
    calBuy();
    buildTable();
    

  })  // close document on ready
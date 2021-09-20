if (typeof $ == "undefined") {
    console.log("oops! I still have to link my jQuery properly!");
  } else {
    console.log("I did it! I linked jQuery and this js file properly!");
  }


  const playerInfo = [
    {name: "player1", qty: 5},
    {name: "omg", qty: 3},
    {name: "player3", qty: 1 }
  ]

  // const buildTable = () => {
  //   const $infoTable = $("<table>").addClass("players-info");
  //   $infoTable.html(
  //     `<thead>
  //       <tr>
  //         <th>Name</th>
  //         <th>Qty</th>
  //       </tr>
  //     </thead>`
  //   );
  
    for (let i of playerInfo) {
      console.log(i);
    }
  // };


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


// playerInfo[0].name = $('#fname').val()
// console.log(playerInfo[0].name)
// console.log(playerInfo[1].name)
// console.log(playerInfo[2].name)


// To replace name of 'ostrich' to input obtained from user
// const addPlayerName = () => {
// const $addPlayer = $('<h3>').text('ostrich')  
// $('#tableEnd').append($addPlayer) 

// }

const addh2 = () => {
  let $h2 = $('<h2>').text("Spacer")
  $('body').append($h2) }

  $(() => {

    addh2()
    //addPlayerName()
    getName()

  })  // close document on ready
class Player {
  constructor() {
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;

  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", function (data) { playerCount = data.val(); })
  }

  updateCount(count) {
    database.ref('/').update({
      playerCount: count
    })
  }

  update() {


    /* players  
         player1
           name: ""*/
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance,
      rank: this.rank
    });
  }


  static getPlayerInfo() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();

    })
    console.log(allPlayers)
  }
  deletePlayerAll() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.remove();
  }
  getCarsAtEnd() {
    var carsAtEndInfoRef = database.ref('carsAtEnd');
    carsAtEndInfoRef.on("value", (data) => {
      this.rank = data.val();

    })
    console.log("cars at end are:"+carsAtEndInfoRef)
  }
  static updateCarsAtEnd(rank){
      database.ref('/').update({carsAtEnd:rank});
      console.log("rank is:"+rank);
  }
}




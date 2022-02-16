class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    //Actualiza el contador del jugador
    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        });
    }

    //Actualiza el contador s del jugador
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    //Actualiza los valores del jugador
    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    //Permite la obtención de los datos del jugador
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        });
    }    
}

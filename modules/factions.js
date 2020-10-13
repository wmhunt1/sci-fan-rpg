class Faction {
    constructor(name) {
        this.name = name;
    }
}
Character.prototype.gainRep = function (faction, value) {
    this.reputation.faction += value;
    console.log("Gained " + value + " reputation point(s) with " + faction.name)
    updateCharacter()
}
Character.prototype.loseRep = function (faction, value) {
    this.reputation.faction -= value;
    console.log("Lost " + value + " reputation point(s) with " + faction.name)
    updateCharacter()
}
let daleVillagers = new Faction("Dale Villagers");
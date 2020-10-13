//companions
//abraham arkwright
let abe = new Paladin("Abraham Arkwright")
abe.basics.level += 10;
abe.stats.currentHp += 100
abe.stats.maxHp += 100;
abe.stats.attack += 10;
abe.stats.defense += 10;
paladinArmor.equip(abe)
holySword.equip(abe)
shield.equip(abe)
//chirp-chirp
let chirp2 = new Rogue("Chirp-Chirp")
clothing.equip(chirp2)
dagger.equip(chirp2)
//ferra forgeheart
let ferra = new Cleric("Ferra Forgeheart");
clothing.equip(ferra)
shield.equip(ferra)
warHammer.equip(ferra)
//npcs
let ambrosius = new Character("Ambrosius the Sage");
let sheepscale = new Character("Sheepscale");
let sweetheart = new Character("Sweetheart the Ogre");

//npc management functions
function removeAllElements(array, elem) {
    var index = array.indexOf(elem);
    while (index > -1) {
        array.splice(index, 1);
        index = array.indexOf(elem);
    }
}
Character.prototype.addParty = function () {
    allyArray.push(this)
    alert(this.basics.name + " joins the party.")

}
Character.prototype.leaveParty = function () {
    removeAllElements(allyArray, this)
    alert(this.basics.name + " leaves the party.")
}
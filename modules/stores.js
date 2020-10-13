//have arrays for item types
let apothecaryArray = [potion]
let barArray = [beer];
let generalArray = [];
let magicArray = [spellbook, wand]
let smithyArray = [chainShirt, club, dagger, leather, longSword, shield, shortSword, warHammer]
//gold functions
let enoughGold = false;
Character.prototype.addGold = function (x) {
    this.inventory.gold += x;
    alert(this.basics.name + " gained " + x + " gold.")
}
Character.prototype.removeGold = function (x) {
    this.inventory.gold -= x;
    alert(this.basics.name + " loses " + x + " gold")
}
Character.prototype.checkGold = function (x) {
    if (this.inventory.gold >= x) {
        enoughGold = true;
    }
    else {
        alert(this.basics.name + " does not have enough gold.")
        enoughGold = false;
    }
}
//buy function
Item.prototype.buy = function (buyer) {
    item.quantity++;
    buyer.checkGold(item.price);
}
//sell function
Item.prototype.sell = function (seller) {
    item.quantity--;
    seller.addGold(item.value / 2);
}
//businesss
class Store {
    constructor() {
        this.name = "";
        this.owner = "";
        this.location = ""
        this.stock = "";
        this.use = ""
        this.useLetter = ""
        this.useFunction = ""
        this.whatTheyBuy = "";
        this.event1 = "";
        this.event2 = "";
    }
}
class General extends Store {
    constructor(name, owner, event1, event2) {
        super();
        this.name = name;
        this.stock = generalArray;
        this.owner = owner;
        this.use = "None";
        this.useLetter = "";
        this.useFunction = function () {

        }
        this.whatTheyBuy = "Anything"
        this.event1 = event1;
        this.event2 = event2;
    }
}
//subclasses for kinds of stores
class Inn extends Store {
    constructor(name, owner, cost, event1, event2) {
        super();
        this.name = name;
        this.stock = barArray;
        this.owner = owner;
        this.cost = cost;
        this.use = "(G)et a room?";
        this.useLetter = "G";
        this.useFunction = function getRoom() {
            let choice = prompt("Get a room for " + this.cost + " gold (Y/N)?")
            if (choice === "Y") {
                hero.checkGold(this.cost)
                if (enoughGold == true) {
                    hero.removeGold(this.cost)
                    hero.rest()
                    alert("The party spends the night at the " + this.name)
                }
                else {
                    //
                }
            }
            else {
                alert("You decide not to rent a room.")
            }

        }
        this.whatTheyBuy = "N/A"
        this.event1 = event1;
        this.event2 = event2;
    }
}
class Magic extends Store {
    constructor(name, owner, event1, event2) {
        super();
        this.name = name;
        this.stock = magicArray
        this.owner = owner;
        this.use = "None";
        this.useLetter = "";
        this.useFunction = function () {

        }
        this.whatTheyBuy = "Anything"
        this.event1 = event1;
        this.event2 = event2;
    }
}
class Smith extends Store {
    constructor(name, owner, event1, event2) {
        super();
        this.name = name;
        this.stock = smithyArray;
        this.owner = owner;
        this.use = "(I)mprove Weapon or Armor?";
        this.useLetter = "I";
        this.useFunction = function forge() {

        }
        this.whatTheyBuy = "Weapons and Armor";
        this.event1 = event1;
        this.event2 = event2;
    }
}
Store.prototype.buy = function () {

}
Store.prototype.sell = function () {

}
//enter store function
//maybe option for events
Store.prototype.enterStore = function (event, condition) {
    alert("You enter " + this.name)
    if (event === condition) {
        this.event1()
    }
    else {
    }
    let sChoice = prompt(this.owner + " Asks, would you like to (B)uy, (S)ell, or " + this.use)
    if (sChoice === "B") {
        this.buy()
    }
    else if (sChoice === "S") {
        this.sell()
    }
    else if (sChoice === this.useLetter) {
        this.useFunction()
    }
    else {
        alert("You leave.")
    }
}
//stores
//general
const triggShop = new General("Trigg Sprocket's General Goods and Sundries", "Trigg Sprocket")
//inns
const dreamingWorker = new Inn("Dreaming Worker Inn", "Sweetheart the Ogre.", 1, function () { welcomeDale.event3() }, "")
//smiths
const forgeheartSmithy = new Smith("Forgeheart Smithy", "Faldan Forgeheart.", function () {
    if (hero.journal.spokeWithFaldan === false) {
        goblinSlayer.event1()
    }
    else if (hero.journal.goblinSlayer === "Completed") { }
    else {
        if (hero.journal.minersRescued === false) {
            alert("Faldan asks if you're going to go rescue them.")
        }
        else {
            if (hero.journal.goblinBossDefeated === false) {
                alert("Faldans appreciates you rescuing the miners but still wants the goblins killed.")
            }
            else if (hero.journal.goblinSlayerReward === false) {
                goblinSlayer.event5()
                hero.journal.goblinSlayerReward = false
            }
            else { }
        }
    }
});
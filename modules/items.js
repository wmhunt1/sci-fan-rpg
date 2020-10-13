class Item {
    constructor() {
        this.name = "";
        this.type = "";
        this.damageType = "";
        this.value = "";
        this.effect = "";
        this.effectTxt = ""
        this.price = "";
        this.quantity = "";
    }
}
class Accessory extends Item {
    constructor(name, type, value, effect, effectTxt, price, quantity) {
        super();
        this.name = name;
        this.type = type;
        this.value = value;
        this.effect = effect;
        this.effectTxt = effectTxt;
        this.price = price;
        this.quantity = quantity;
    }
}
class Armor extends Item {
    constructor(name, type, value, effect, effectTxt, price, quantity) {
        super();
        this.name = name;
        this.type = type;
        this.value = value;
        this.effect = effect;
        this.effectTxt = effectTxt
        this.price = price;
        this.quantity = quantity;
    }
}
class Consumable extends Item {
    constructor(name, type, value, effect, effectTxt, price, quantity) {
        super();
        this.name = name;
        this.type = type;
        this.value = value;
        this.effect = effect;
        this.effectTxt = effectTxt;
        this.price = price;
        this.quantity = quantity;
    }
}
class Treasure extends Item {
    constructor(name, type, price, quantity) {
        super();
        this.name = name;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
    }
}
class Weapon extends Item {
    constructor(name, type, damageType, value, effect, effectTxt, price, quantity) {
        super();
        this.name = name;
        this.type = type;
        this.damageType = damageType;
        this.value = value;
        this.effect = effect;
        this.effectTxt = effectTxt;
        this.price = price;
        this.quantity = quantity;
    }
}
//equipable items
Accessory.prototype.equip = function (user) {
    user.accessory.shieldBonus = 0;
    user.accessory.name = this.name;
    user.accessory.type = this.type;
    user.accessory.effect = this.effectTxt;
    this.effect(user)
    console.log(user.basics.name + " equiped " + this.name)
    console.log(user)
    updateCharacter()
}
Armor.prototype.equip = function (user) {
    user.armor.protectionBonus = 0;
    user.armor.name = this.name;
    user.armor.protection = this.value;
    user.armor.effect = this.effectTxt;
    this.effect(user);
    console.log(user.basics.name + " equiped " + this.name)
    console.log(user)
    updateCharacter()
}
Weapon.prototype.equip = function (user) {
    user.weapon.name = this.name;
    user.weapon.damage = this.value;
    user.weapon.type = this.type;
    user.weapon.damageType = this.damageType;
    user.weapon.effect = this.effectTxt;
    this.effect(user);
    console.log(user.basics.name + " equiped " + this.name)
    console.log(user)
    updateCharacter()
}
//accessories
let holySymbol = new Accessory("Holy Symbol", "Holy Symbol", 1, function (user, value) { }, "The symbol of a god.", 0, 1)
let shield = new Accessory("Shield", "Shield", 0, function (user, value) { user.accessory.shieldBonus += 1 }, "Raises Shield Bonus", 0, 1)
let spellbook = new Accessory("Basic Spellbook", "Spellbook", 1, function (user, value) { }, "", 0, 1)
//armor
let chainShirt = new Armor("Chain Shirt", "Light", 1, function (user, value) { }, "", 0, 1);
let clothing = new Armor("Clothing", "Clothing", 0, function (user, value) { }, "", 0, 1);
let knittedSweater = new Accessory("Knitted Sweater", "Clothing", 1, function (user, value) { user.resistances.ice = true }, "A sweater knitted by Sheepscale.", 0, 1)
let leather = new Armor("Leather", "Light", 1, function (user, value) { }, "", 0, 1);
let paladinArmor = new Armor("Paladin's Armor", "Heavy", 5, function (user, value) { }, "", 0, 1);
//boots
//consumables
let beer = new Consumable("Beer", "Alcohol", 0, function (user, value) { }, "Basic Beer", 1, 1);
let potion = new Consumable("Potion", "Healing", 5, function (user, value) { user.heal(value); }, "Heals user for 5 HP", 10, 1);
//gloves
//weapons
let club = new Weapon("Club", "Melee", "Bludgeoning", 1, function (user, value) { }, "", 0, 1);
let dagger = new Weapon("Dagger", "Melee", "Slashing", 1, function (user, value) { }, "", 0, 1);
let holySword = new Weapon("Holy Sword", "Melee", "Slashing", 5, function (user, value) { }, "", 0, 1);
let longSword = new Weapon("Long Sword", "Melee", "Slashing", 3, function (user, value) { }, "", 0, 1);
let sling = new Weapon("Sling", "Ranged", "Bludgeoning", 1, function (user, value) { }, "", 0, 1);
let shortSword = new Weapon("Short Sword", "Melee", "Slashing", 2, function (user, value) { }, "", 0, 1);
let wand = new Weapon("Wand", "Magic", "Force", 1, function (user, value) { }, "", 0, 1);
let warHammer = new Weapon("Warhammer", "Melee", "Bludgeoning", 1, function (user, value) { }, "", 0, 2);
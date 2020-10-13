//combat elements
let turnArray = [];
let enemyArray = [];
let allyArray = [];
let enemyNumber = 0;
let hit = false;
//changes based on checkResist
let immune = false;
let resist = false;
let weak = false;
let skipTurn = false;
//resist prototype
//one for turn and one for abilities
Character.prototype.checkConditionAbility = function () {
    skipTurn = false;
    if (this.conditions.asleep) {
        skipTurn = true;
    }
    else if (this.conditions.burn) {
    }
    else if (this.conditions.confused) {
        skipTurn = true;
    }
    else if (this.conditions.paralyze) {
        skipTurn = true;
    }
    else if (this.conditions.poison) { }
    else {

    }
}
Character.prototype.checkCondition = function () {
    skipTurn = false;
    if (this.conditions.asleep) {
        skipTurn = true;
        alert(this.basics.name + " missed turn due to sleep")
    }
    else if (this.conditions.burn) {
        this.damage(1)
        alert(this.basics.name + " Took 1 damage due to burn.")
    }
    else if (this.conditions.confused) {
        alert(this.basics.name + " Attacked self due to confusion")
        this.attack(this)
        skipTurn = true;
    }
    else if (this.conditions.paralyze) {
        alert(this.basics.name + " Missed turn due to paralysis")
        skipTurn = true;
    }
    else if (this.conditions.poison) {
        this.damage(1)
        alert(this.basics.name + " Took 1 damage due to poison.")
    }
    else {

    }
}
Character.prototype.checkIfHit = function (target) {
    let hitChance = .5 - .1 * (target.stats.defense + target.stats.buff - target.stats.debuff);
    console.log(hitChance + " hit chance")
    let hitRoll = Math.random() + .1 * (this.stats.attack + this.stats.buff - this.stats.debuff);
    console.log(hitRoll + " hit roll")
    if (hitRoll >= hitChance) {
        hit = true;
    }
    else {
        hit = false;

    }
}
Character.prototype.checkImmune = function (target, damageType) {
    //add more as used
    if (target.immunities.fire == true && damageType === "Fire") {
        immune = true;
    }
    else if (target.immunities.force == true && damageType === "Force") {
        immune = true;
    }
    else if (target.immunities.radiant == true && damageType === "Radiant") {
        immune = true;
    }
    else if (target.immunities.piercing == true && this.weapon.damageType === "Piercing") {
        immune = true;
    }
    else if (target.immunities.slashing == true && this.weapon.damageType === "Slashing") {
        immune = true;
    }
    else {
        immune = false;
    }
}
Character.prototype.checkResist = function (target, damageType) {
    //add more as used
    if (target.resistances.fire == true && damageType === "Fire") {
        resist = true;
    }
    else if (target.immunities.force == true && damageType === "Force") {
        resist = true;
    }
    else if (target.immunities.radiant == true && damageType === "Radiant") {
        resist = true;
    }
    else if (target.resistances.piercing == true && damageType === "Piercing") {
        resist = true;
    }
    else if (target.resistances.slashing == true && damageType === "Slashing") {
        resist = true;
    }
    else {
        resist = false;
    }
}
Character.prototype.checkWeakness = function (target, damageType) {
    //add more as used
    if (target.weakness.fire == true && damageType === "Fire") {
        weak = true;
    }
    else if (target.weakness.force == true && damageType === "Force") {
        weak = true;
    }
    else if (target.immunities.radiant == true && damageType === "Radiant") {
        resist = true;
    }
    else if (target.weakness.piercing == true && damageType === "Piercing") {
        weak = true;
    }
    else if (target.weakness.slashing == true && damageType === "Slashing") {
        weak = true;
    }
    else {
        weak = false;
    }
}
Character.prototype.damageReduction = function (target, dmg, damageType) {
    if (target.basics.alive == true) {
        if (this.weapon.damage + this.weapon.damageBonus + this.weapon.tempBonus <= target.armor.protection + target.armor.protectionBonus + target.armor.tempBonus) {
            alert(this.basics.name + "'s attack bounces harmlessly off of " + target.basics.name + "'s " + target.armor.name)
        }
        else {
            this.checkResist(target, damageType)
            this.checkImmune(target, damageType)
            this.checkWeakness(target, damageType)
            if (resist == true) {
                alert(target.basics.name + "resisted the " + damageType + "and took " + dmg / 2 + " damage.")
                target.damage(dmg / 2)
                alert(target.basics.name + " loses " + dmg / 2 + " Hitpoints.")
            }
            else if (immune == true) {
                alert(target.basics.name + "is immune to " + damageType + " damage.")
            }
            else if (weak == true) {
                alert(target.basics.name + "is weak to " + damageType + " damage.")
                target.damage(2 * dmg)
                alert(target.basics.name + " loses " + 2 * dmg + " Hitpoints.")
            }
            else {
                alert(dmg + " " + damageType + " damage dealt to " + target.basics.name)
                target.damage(dmg)
                alert(target.basics.name + " loses " + dmg + " Hitpoints.")
            }
        }
    }
    else {
    }
}
//attack function
//add critical hit
Character.prototype.attack = function (target) {
    alert(this.basics.name + " attacks " + target.basics.name + " with their " + this.weapon.name)
    console.log(target.stats.currentHp)
    this.checkIfHit(target)
    if (hit = true) {
        let dmg = this.weapon.damage + this.weapon.damageBonus + this.weapon.tempBonus - target.armor.protection - target.armor.protectionBonus - target.armor.tempBonus;
        console.log(dmg)
        this.damageReduction(target, dmg, this.weapon.damageType)
    }
    else {
        alert(this.basics.name + " misses " + target.basics.name)
    }

    target.isAlive();
};
//isalive function
Character.prototype.isAlive = function () {
    if (this.stats.currentHp > 0) {
    }
    else if (this.basics.alive == false) {
        console.log(this.basics.name + " is already dead.")
    }
    else {
        alert(this.basics.name + " has died!");
        this.basics.alive = false;
        if (this.basics.ally == false) {
            enemyNumber--;
            console.log(hero.basics.xp)
            for (var i = 0; i < allyArray.length; i++) {
                allyArray[i].basics.xp += this.basics.xp;
            }
            console.log(hero.basics.xp)
        }
        else {

        }
    }
};
//levelup function
Character.prototype.levelUp = function () {
    console.log(this.basics.name + " has " + this.basics.xp + " total XP.")
    if (this.basics.level * 100 == this.basics.xp) {
        this.basics.level++;
        this.stats.currentHp += this.stats.baseHp;
        this.stats.maxHp += this.stats.baseHp;
        this.stats.attack += 1;
        this.stats.defense += 1;
        console.log(this.basics.name + " leveled up")
        console.log(this)
    }
    else {
        console.log(this.basics.name + " is not ready for level up")
    }
    updateCharacter()
}
Character.prototype.heal = function (cure) {
    this.stats.currentHp += cure;
    if (this.stats.currentHp > this.stats.maxHp) {
        this.stats.currentHp = this.stats.maxHp;
    }
    else {
        //nothing
    }
}
Character.prototype.damage = function (wound) {
    this.stats.currentHp -= wound;
}
Character.prototype.useSp = function (cost) {
    this.stats.currentSp -= cost;
    console.log(this.basics.name + " uses " + cost + " SP.")
}
//turn function
Character.prototype.reset = function () {
    this.stats.debuff = 0;
    this.stats.debuff = 0;
    this.weapon.tempBonus = 0;
    this.armor.tempBonus = 0;
    this.conditions.asleep = false;
    this.conditions.burn = false;
    this.conditions.confused = false;
    this.conditions.paralyze = false;
    this.conditions.poison = false;
}
Character.prototype.conditionRecover = function () {
    let recoverRoll = Math.random();
    if (recoverRoll >= .5) {
        console.log(this.basics.name + " recovered from conditions.")
        this.conditions.asleep = false;
        this.conditions.burn = false;
        this.conditions.confused = false;
        this.conditions.paralyze = false;
        this.conditions.poison = false;
    }
    else {

    }
}
Character.prototype.turn = function () {
    if (this.basics.alive == true) {
        this.checkCondition()
        if (skipTurn == true) { }
        else {
            alert("It is " + this.basics.name + "'s turn.")
            if (this.basics.ally == true) {
                let action = prompt("(A)ttack, use a (S)pecial Ability or use a (P)otion?");
                if (action === "A") {
                    let target = prompt("Choose target by number (starting from 0).");
                    if (enemyArray[target] === undefined) {
                        alert(this.basics.name + " attacks no one.")
                    }
                    
                    else {
                        this.action1(enemyArray[target]);
                    }
                }
                else if (action === "S") {
                    this.action2(this)
                }
                else if (action === "P") {
                    potion.use(this)
                }
                else {
                    alert("You chose not to do anything.")
                }
            }
            else {
                let target = Math.floor((Math.random() * allyArray.length))
                this.action1(allyArray[target]);
            }
        }
    }
    else {
        //so no turn
    }
    this.conditionRecover()
}
//combat function
function combat() {
    turnArray = allyArray.concat(enemyArray)
    turnArray.sort((a, b) => (a.stats.speed < b.stats.speed) ? 1 : (a.stats.speed === b.stats.speed) ? ((a.basics.name > b.basics.name) ? 1 : -1) : -1)
    console.log(turnArray)
    enemyNumber = enemyArray.length;
    console.log("You face " + enemyNumber + " enemies.")
    while (enemyNumber != 0 && hero.stats.currentHp > 0) {
        console.log(hero.stats.currentHp + " current HP for hero")
        for (i = 0; i < turnArray.length; i++) {
            if (turnArray[i].basics.alive != true) {
            }
            else {
                console.log(turnArray[i].basics.name + "'s turn.")
                turnArray[i].turn();
            }
        }
    }
    console.log("combat ended")

    if (hero.stats.currentHp > 0) {
        for (var i = 0; i < allyArray.length; i++) {
            allyArray[i].levelUp();
            allyArray[i].reset();
        }
        for (var i = 0; i < enemyArray.length; i++) {
            hero.addGold(enemyArray[i].inventory.gold)
        }
    }
    else {
        alert("You are defeated.")
    }
    updateCharacter()
}
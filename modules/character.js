let pet = "";
let familiar = "";
//character prototype
class Character {
    constructor(name) {
        //this works for future
        this.action1 = function (target) { this.attack(target) };
        this.action2 = function () { console.log("No special ability") };
        this.action3 = 0;
        this.action4 = 0;
        this.basics = {
            name: name,
            profession: "Freelancer",
            level: 1,
            xp: 0,
            type: "Humanoid",
            alive: true,
            ally: true,
        };
        this.stats = {
            baseHp: 10,
            currentHp: 10,
            maxHp: 10,
            currentSp: 2,
            maxSp: 2,
            attack: 1,
            defense: 1,
            speed: 1,
            buff: 0,
            debuff: 0,
        };
        //later move these to an equipment this
        this.weapon = {
            name: "None",
            type: "None",
            damage: 0,
            damageType: "None",
            damageBonus: 0,
            tempBonus: 0,
        };
        this.helmet = {
            name: "None",
            effect: "NA",
        }
        this.armor = {
            name: "None",
            type: "None",
            protection: 0,
            protectionBonus: 0,
            tempBonus: 0,
        }
        this.boots = {
            name: "None",
            effect: "NA",
        }
        this.gloves = {
            name: "None",
            effect: "NA",
        }
        this.accessory = {
            name: "None",
            type: "NA",
            effect: "NA",
            shieldBonus: 0
        }
        this.inventory = {
            gold: 0
        }
        this.journal = {
            entries: [],
            tollBridgeEncounter: false,
            metWithContact: false,
            goblinSlayer: false,
            spokeWithFaldan: false,
            koboldsRescued: false,
            minersRescued: false,
            goblinBossDefeated: false,
            goblinSlayerReward: false,
            birdWord: false,
            ghostInfo: false,
            discoveredBirds: false,
            birdCamp: false,
            rescuedBirds: false,
            birdReward: false,
            letterForAmbrosius: false,
            minotaurRescue: false,
            neKey: false,
            nwKey: false,
            swKey: false,
            seKey: false,
        }
        this.relationships = {
            //companions
            abe: 0,
            ferra: 0,
            //npcs
            ambrosius: 0,
            sheepscale: 0,
            sweetheart: 0,
        }
        this.reputation = {
            fame: 0,
            infamy: 0,
            daleVillage: 0,
        }
        this.skills = {
            agility: {
                rank: "Untrained",
                value: 0,
            },
            crafting: {
                rank: "Untrained",
                value: 0,
            },
            gathering: {
                rank: "Untrained",
                value: 0,
            },
            lore: {
                rank: "Untrained",
                value: 0,
            },
            magic: {
                rank: "Untrained",
                value: 0,
            },
            marksman: {
                rank: "Untrained",
                value: 0,
            },
            melee: {
                rank: "Untrained",
                value: 0,
            },
            perception: {
                rank: "Untrained",
                value: 0,
            },
            prayer: {
                rank: "Untrained",
                value: 0,
            },
            speech: {
                rank: "Untrained",
                value: 0,
            },
            survival: {
                rank: "Untrained",
                value: 0,
            },
            thievery: {
                rank: "Untrained",
                value: 0,
            },
            Unarmed: {
                rank: "Untrained",
                value: 0
            },
        }
        this.conditions = {
            asleep: false,
            confused: false,
            burn: false,
            paralyze: false,
            poison: false,
        }
        this.immunities = {
            //elemental
            fire: false,
            force: false,
            lightning: false,
            radiant: false,
            //physical
            bludgeoning: false,
            piercing: false,
            slashing: false
        }
        this.resistances = {
            //add more as used
            //elemental
            fire: false,
            force: false,
            ice: false,
            lightning: false,
            radiant: false,
            //physical
            bludgeoning: false,
            piercing: false,
            slashing: false
        }
        this.weakness = {
            //add more as used
            //elemental
            fire: false,
            force: false,
            ice: false,
            lightning: false,
            radiant: false,
            //physical
            bludgeoning: false,
            piercing: false,
            slashing: false
        }
    }
}
let hero = new Character("Hero");
Character.prototype.rest = function () {
    for (var i = 0; i < allyArray.length; i++) {
        allyArray[i].heal(allyArray[i].basics.maxHp)
        allyArray[i].basics.alive = true;
        allyArray[i].stats.currentSp = allyArray[i].stats.maxSp;
    }
}
Character.prototype.gainRel = function (person, value) {
    this.relationships.person += value;
    console.log("Gained " + value + " relationship point(s) with " + person.basics.name)
}
Character.prototype.loseRel = function (person, value) {
    this.relationships.person -= value;
    console.log("Lost " + value + " relationship point(s) with " + person.basics.name)
}
//eventually make this into options etc.
function createHero() {
    let heroName = document.getElementById("name").value
    if (heroName === "") {
        heroName = "Hero"
    }
    else { }
    let classChoice = document.getElementById("class").value;
    console.log(classChoice)
    if (classChoice === "artificer") {
        hero = new Artificer(heroName);
    }
    else if (classChoice === "barbarian") {
        hero = new Barbarian(heroName);
    }
    else if (classChoice === "bard") {
        hero = new Bard(heroName);
    }
    else if (classChoice === "cleric") {
        hero = new Cleric(heroName);
        holySymbol.equip(hero)
    }
    else if (classChoice === "druid") {
        hero = new Druid(heroName);
    }
    else if (classChoice === "fighter") {
        hero = new Fighter(heroName);
        shield.equip(hero)
    }
    else if (classChoice === "monk") {
        hero = new Monk(heroName);
    }
    else if (classChoice === "paladin") {
        hero = new Paladin(heroName);
        shield.equip(hero)
    }
    else if (classChoice === "ranger") {
        hero = new Ranger(heroName);
    }
    else if (classChoice === "rogue") {
        hero = new Rogue(heroName);
    }
    else if (classChoice === "sorcerer") {
        hero = new Sorcerer(heroName);
    }
    else if (classChoice === "warlock") {
        hero = new Warlock(heroName);
    }
    else if (classChoice === "wizard") {
        hero = new Wizard(heroName);
        spellbook.equip(hero)
    }
    else {
        hero = new Character(heroName);
    }
    // hero.basics.name = heroName;
    holySword.equip(hero)
    clothing.equip(hero)
    hero.inventory.gold = 10;
    allyArray.push(hero)
    //maybe everyone gets pet or ranger just buffs pet.
    if (hero.basics.profession === "Ranger") {
        let petName = prompt("As a Ranger you have a loyal animal companion. What is their name?")
        if (petName === "") {
            petName = "Doggo"
        }
        else { }
        pet = new Pet(petName)
        allyArray.push(pet)
    }
    else { }
    if (hero.basics.profession === "Warlock") {
        let familiarName = prompt("As a Warlock you have the service of a summoned familiar. What name did you use to summon them?")
        if (familiarName === "") {
            familiarName = "Ziggy"
        }
        else { }
        familiar = new Familiar(familiarName)
        allyArray.push(familiar)
    }
    else { }
    // alert("You are " + hero.basics.name + ", a " + hero.basics.profession + ". You have the opportunity to join The Birdwatchers of The Imperial Federation.")
    // alert("But first you must complete a task.")
    // alert("You task is go to The Village of Dale, located within The Valley of Dale, and speak with your contact at the local inn to receive further.")
    // alert("You went through The Dale Pass to enter the valley, the first steps on your journey.")
    // alert("On your way to the village you encounter a toll bridge, which appears to be guarded by several rough-looking individuals.")
    console.log(hero)
    valleyDale.enter()
    updateCharacter()
}
//for characteer sheet
document.getElementById("heroName").innerHTML = "Name: " + hero.basics.name;
document.getElementById("heroProf").innerHTML = "Class: " + hero.basics.profession;
document.getElementById("heroLevel").innerHTML = "Level: " + hero.basics.level;
document.getElementById("heroXp").innerHTML = "XP: " + hero.basics.xp;
document.getElementById("heroCurrentHp").innerHTML = "Current HP: " + hero.stats.currentHp;
document.getElementById("heroMaxHp").innerHTML = "Max HP: " + hero.stats.maxHp;
document.getElementById("heroCurrentSp").innerHTML = "Current SP: " + hero.stats.currentSp;
document.getElementById("heroMaxSp").innerHTML = "Max SP: " + hero.stats.maxSp;
document.getElementById("heroAttack").innerHTML = "Attack: " + hero.stats.attack;
document.getElementById("heroDefense").innerHTML = "Defense: " + hero.stats.defense;
document.getElementById("heroSpeed").innerHTML = "Speed: " + hero.stats.speed;
document.getElementById("heroWepName").innerHTML = "Name: " + hero.weapon.name;
document.getElementById("heroWepType").innerHTML = "Type: " + hero.weapon.type;
document.getElementById("heroWepDamage").innerHTML = "Damage: " + hero.weapon.damage;
document.getElementById("heroWepDamageType").innerHTML = "Damage Type: " + hero.weapon.damageType;
document.getElementById("heroWepDamageBonus").innerHTML = "Damage Bonus: " + hero.weapon.damageBonus;
document.getElementById("heroArmorName").innerHTML = "Name: " + hero.armor.name;
document.getElementById("heroArmorType").innerHTML = "Type: " + hero.armor.type;
document.getElementById("heroArmorProtection").innerHTML = "Protection: " + hero.armor.protection;
document.getElementById("heroArmorProtectionBonus").innerHTML = "Protection Bonus: " + hero.armor.protectionBonus;
document.getElementById("heroAccessName").innerHTML = "Name: " + hero.accessory.name;
document.getElementById("heroAccessType").innerHTML = "Type: " + hero.accessory.type;
document.getElementById("heroAccessEffect").innerHTML = "Effect: " + hero.accessory.effect;
document.getElementById("fame").innerHTML = "Fame: " + hero.reputation.fame;
document.getElementById("infamy").innerHTML = "Infamy: " + hero.reputation.infamy;
document.getElementById("daleVillageRep").innerHTML = "The Village of Dale: " + hero.reputation.daleVillage;
function updateCharacter() {
    document.getElementById("heroName").innerHTML = "Name: " + hero.basics.name;
    document.getElementById("heroProf").innerHTML = "Class: " + hero.basics.profession;
    document.getElementById("heroLevel").innerHTML = "Level: " + hero.basics.level;
    document.getElementById("heroXp").innerHTML = "XP: " + hero.basics.xp;
    document.getElementById("heroCurrentHp").innerHTML = "Current HP: " + hero.stats.currentHp;
    document.getElementById("heroMaxHp").innerHTML = "Max HP: " + hero.stats.maxHp;
    document.getElementById("heroCurrentSp").innerHTML = "Current SP: " + hero.stats.currentSp;
    document.getElementById("heroMaxSp").innerHTML = "Max SP: " + hero.stats.maxSp;
    document.getElementById("heroWepName").innerHTML = "Name: " + hero.weapon.name;
    document.getElementById("heroWepType").innerHTML = "Type: " + hero.weapon.type;
    document.getElementById("heroWepDamage").innerHTML = "Damage: " + hero.weapon.damage;
    document.getElementById("heroWepDamageType").innerHTML = "Damage Type: " + hero.weapon.damageType;
    document.getElementById("heroWepDamageBonus").innerHTML = "Damage Bonus: " + hero.weapon.damageBonus;
    document.getElementById("heroArmorName").innerHTML = "Name: " + hero.armor.name;
    document.getElementById("heroArmorType").innerHTML = "Type: " + hero.armor.type;
    document.getElementById("heroArmorProtection").innerHTML = "Protection: " + hero.armor.protection;
    document.getElementById("heroArmorProtectionBonus").innerHTML = "Protection Bonus: " + hero.armor.protectionBonus;
    document.getElementById("heroAccessName").innerHTML = "Name: " + hero.accessory.name;
    document.getElementById("heroAccessType").innerHTML = "Type: " + hero.accessory.type;
    document.getElementById("heroAccessEffect").innerHTML = "Effect: " + hero.accessory.effect;
    document.getElementById("fame").innerHTML = "Fame: " + hero.reputation.fame;
    document.getElementById("infamy").innerHTML = "Infamy: " + hero.reputation.infamy;
    document.getElementById("daleVillageRep").innerHTML = "The Village of Dale: " + hero.reputation.daleVillage;
}
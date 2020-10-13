function startGame()
{
    document.getElementById("Menu").style.display = "none";
    document.getElementById("Intro").style.display = "block";
    document.getElementById("Character").style.display = "none";
    document.getElementById("Arena").style.display = "none";
    document.getElementById("Downtime").style.display = "none";
    document.getElementById("Equipment").style.display = "none";
    document.getElementById("Factions").style.display = "none";
    document.getElementById("Inventory").style.display = "none";
    document.getElementById("Journal").style.display = "none";
    document.getElementById("Quest").style.display = "none";
    document.getElementById("Rest").style.display = "none";
    document.getElementById("Shopping").style.display = "none";
    document.getElementById("Skills").style.display = "none";
    document.getElementById("Training").style.display = "none";
    document.getElementById("Death").style.display = "none";
    document.getElementById("Gameover").style.display = "none";
    document.getElementById("Combat").style.display = "none";
}
//player stats
var hero =
{
    basics:
    {
        name: "name",
        class: "Freelancer",
        level: 1,
        lifes: 3,
    },
    stats:
    {
        current_hp: 100,
        max_hp: 100,
        current_ap: 1,
        max_ap: 1,
        current_ap: 1,
        current_sp: 2,
        max_sp: 2,
        player_atk: 1,
        player_def: 1,
        speed: 1,
        speed_boost: 0,
        xp: 100,
        xp_to_next_level: 100,
        player_buff: 0,
        player_debuff: 0,
    },
    equipment:
    {
        head_slot: "Peasant",
        head_armor: 0,
        torso_slot: "Peasant",
        torso_armor: 0,
        leg_slot: "Peasant",
        leg_armor: 0,
        hand_slot: "Peasant",
        hand_armor: 0,
        feet_slot: "Peasant",
        feet_armor: 0,
        melee_wep: "Stick",
        melee_wep_dmg: 1,
        ranged_wep: "Rock",
        ranged_wep_dmg: 1,
        magic_wep: "Scrap of Paper",
        magic_wep_dmg: 1,
        wepCost: 100,
        armorCost: 100,
        magicCost: 100,
        rangedCost: 100,
    },
    inventory:
    {
        gold: 100,
        homeowner: false,
        potion: 0,
        item:
        {
            name: "",
            description: "",
            effect: "",
            value: 0,
        }
    },
    journal:
    {
        day: 0,
        quests_completed: 0,
        bosses_defeated: 0,
        bandit_completed: 0,
        goblin_completed: 0,
        undead_completed: 0,
    },
    reputation:
    {
        fame: 0,
        infamy: 0
    },
    skills:
    {
        skill_level_array: ["Untrained", "Apprentice", "Journeyman", "Expert", "Master"],
        crafting: "Untrained",
        crafting_value: 0,
        crafting_training_cost: 100,
        gathering: "Untrained",
        gathering_value: 0,
        gathering_training_cost: 100,
        magic: "Untrained",
        magic_value: 0,
        magic_training_cost: 100,
        magicArray: ["(M)agic Bolt", "Charm Person, Detect Magic, (Ma)gic Missile", "Invisibility", "(Fi)re Ball, (Ha)ste and (Sl)ow: Increase your speed or decrease your enemy's speed."],
        marksman: "Untrained",
        marksman_value: 0,
        marksman_training_cost: 100,
        marksmanArray: ["(R)anged Attack", "(Ai)m", "(Ra)pid Shot."],
        melee: "Untrained",
        melee_value: 0,
        melee_training_cost: 100,
        meleeArray: ["Normal (A)ttack", "(Po)wer Attack","(Cl)eave: Attack twice"],
        prayer: "Untrained",
        prayer_value: 0,
        prayer_training_cost: 100,
        prayerArray: ["Nothing", "(He)al: gain 5 HP", "(Bl)essing and (Cu)rse: Buff yourself or debuff an enemy"],
        speech: "Untrained",
        speech_value: 0,
        speech_training_cost: 100,
        survival: "Untrained",
        survival_value: 0,
        survival_training_cost: 100,
        thievery: "Untrained",
        thievery_value: 0,
        thievery_training_cost: 100,
        thieveryArray: ["Nothing", "(St)eal: Steal and item or gold from an enemy. Requires SP but doesn't use your action."]
    },
    spells_known:
    {
        spell_name_array: [],
        spell_effect_array: []
    }
}
//couldn't get to work while in object
var total_armor = (hero.equipment.head_armor + hero.equipment.torso_armor + hero.equipment.leg_armor + hero.equipment.hand_armor + hero.equipment.feet_armor);
//hero update functions
function changeName()
{
    var chooseName = prompt("What is your Name?")
    hero.basics.name = chooseName;
    document.getElementById("Name").innerHTML = "Name: " + hero.basics.name;
}
function changeClass()
{

}
function createHero()
{
    changeName()
    quest()
    var tag = document.createElement("p")
    var text = document.createTextNode("Entry #" + entry + ": I am  " + hero.basics.name + " and I am on a quest to defeat the Dark Lord.");
    tag.appendChild(text);
    var element = document.getElementById("entries");
    element.appendChild(tag);
    entry += 1;
}
//level up functions
function LevelUp()
{
    var lp = 2;
    hero.basics.level += 1;
    hero.stats.xp_to_next_level = 100*hero.basics.level;
    document.getElementById("Level").innerHTML = "Level: " + hero.basics.level;
    while (lp > 0)
    {
        var lChoice = prompt("You have leveled up. Choose 2 level up bonus: 10 (H)P, 2 (S)P, 1 (A)ttack, or 1 (D)efense.")
        if (lChoice === "H")
        {
            hero.stats.max_hp += 10;
            document.getElementById("MHP").innerHTML = "Max HP: " + hero.stats.max_hp;
            lp -= 1;
        }
        else if (lChoice === "S")
        {
            hero.stats.max_sp += 2;
            document.getElementById("MSP").innerHTML = "Max SP: " + hero.stats.max_sp;
            lp -= 1;
        }
        else if (lChoice === "A")
        {
            hero.stats.player_atk += 1;
            document.getElementById("ATK").innerHTML = "Attack: " + hero.stats.player_atk;
            lp -= 1;
        }
        else if (lChoice === "D")
        {
            hero.stats.player_def += 1;
          
            document.getElementById("DEF").innerHTML = "Defense: " + hero.stats.player_def;
            lp -= 1;
        }
        else
        {

        }
    }
}
function Ready_for_level()
{
    if (hero.stats.xp >= hero.stats.xp_to_next_level)
    {
        LevelUp()
    }
    else
    {
        alert("Not enough XP for level UP")
    }
}
function gainLife()
{
    hero.basics.lifes += 1;
    document.getElementById("Life").innerHTML = "Lifes: " + hero.basics.lifes;
}
function loseLife()
{
    hero.basics.lifes -= 1;
    document.getElementById("Life").innerHTML = "Lifes: " + hero.basics.lifes;
}
function death()
{
    loseLife()
    if (hero.basics.lifes > 0)
    {
        healPlayer(1)
        document.getElementById("Menu").style.display = "block";
        document.getElementById("Intro").style.display = "none";
        document.getElementById("Character").style.display = "none";
        document.getElementById("Arena").style.display = "none";
        document.getElementById("Downtime").style.display = "none";
        document.getElementById("Equipment").style.display = "none";
        document.getElementById("Factions").style.display = "none";
        document.getElementById("Inventory").style.display = "none";
        document.getElementById("Journal").style.display = "none";
        document.getElementById("Quest").style.display = "none";
        document.getElementById("Rest").style.display = "none";
        document.getElementById("Shopping").style.display = "none";
        document.getElementById("Skills").style.display = "none";
        document.getElementById("Training").style.display = "none";
        document.getElementById("Death").style.display = "block";
        document.getElementById("Gameover").style.display = "none";
        document.getElementById("Combat").style.display = "none";
    }
    else 
    {
        document.getElementById("Menu").style.display = "none";
        document.getElementById("Intro").style.display = "none";
        document.getElementById("Character").style.display = "none";
        document.getElementById("Arena").style.display = "none";
        document.getElementById("Downtime").style.display = "none";
        document.getElementById("Equipment").style.display = "none";
        document.getElementById("Factions").style.display = "none";
        document.getElementById("Inventory").style.display = "none";
        document.getElementById("Journal").style.display = "none";
        document.getElementById("Quest").style.display = "none";
        document.getElementById("Rest").style.display = "none";
        document.getElementById("Shopping").style.display = "none";
        document.getElementById("Skills").style.display = "none";
        document.getElementById("Training").style.display = "none";
        document.getElementById("Death").style.display = "none";
        document.getElementById("Gameover").style.display = "block";
        document.getElementById("Combat").style.display = "none";
    }
}
function healPlayer(x)
{
    hero.stats.current_hp += x;
    document.getElementById("CHP").innerHTML = "Current HP: " + hero.stats.current_hp;
}
function dmgPlayer(x)
{
    hero.stats.current_hp -= x;
    document.getElementById("CHP").innerHTML = "Current HP: " + hero.stats.current_hp;
}
function addAP(x)
{
    hero.stats.current_ap += x;
}
function removeAP(x)
{
    hero.stats.current_ap -= x;
}
function addSP(x)
{
    hero.stats.current_sp += x;
    document.getElementById("CSP").innerHTML = "Current SP: " + hero.stats.current_sp;
}
function removeSP(x)
{
    hero.stats.current_sp -= x;
    document.getElementById("CSP").innerHTML = "Current SP: " + hero.stats.current_sp;
}
function addXP(x)
{
    hero.stats.xp += x;
    document.getElementById("XP").innerHTML = "XP: " + hero.stats.xp;
}
function addGold(x)
{
    hero.inventory.gold += x;
    document.getElementById("Gold").innerHTML = hero.inventory.gold + " Gold";
}
function removeGold(x)
{
    hero.inventory.gold -= x;
    document.getElementById("Gold").innerHTML = hero.inventory.gold + " Gold";
}
function addFame(x)
{
    hero.journal.fame += x;
    document.getElementById("Fame").innerHTML = "Fame: " + hero.reputation.fame;
}
function addInfamy(x)
{
    hero.journal.infamy += x;
    document.getElementById("Infamy").innerHTML = "Infamy: " + hero.reputation.infamy;
}
//enemy stats
var enemy =
    {
        number: 0,
        name: "N",
        class: "C",
        current_hp: 0,
        max_hp: 0,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "W",
        weapon_dmg: 0,
        def: 0,
        armor: "A",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 0,
        ranged_wep: "R",
        ranged: false,
        magic: false
    }
function arena_champion(x)
{   
    enemy =
    {
        number: x,
        name: "Arena Champion",
        class: "C",
        current_hp: 0,
        max_hp: 0,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "W",
        weapon_dmg: 0,
        def: 0,
        armor: "A",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 0,
        ranged_wep: "R",
        ranged: false,
        magic: false
    }
}   
function arena_rookie(x)
{   
    enemy =
    {
        number: x,
        name: "Rookie",
        class: "C",
        current_hp: 0,
        max_hp: 0,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "W",
        weapon_dmg: 0,
        def: 0,
        armor: "A",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 0,
        ranged_wep: "R",
        ranged: false,
        magic: false
    }
}   
function bandit(x)
{   
    enemy =
    {
        number: x,
        name: "Bandit",
        class: "C",
        current_hp: 5,
        max_hp: 5,
        current_ap: 0,
        max_ap: 0,
        atk: 1,
        weapon: "Dagger",
        weapon_dmg: 2,
        def: 1,
        armor: "Leather",
        armor_value: 1,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 5,
        ranged_wep: "Crossbow",
        ranged: true,
        magic: false
    }
}
function bandit_leader(x)
{   
    enemy =
    {
        number: x,
        name: "Bandit Leader",
        class: "C",
        current_hp: 20,
        max_hp: 20,
        current_ap: 0,
        max_ap: 0,
        atk: 5,
        weapon: "Sword",
        weapon_dmg: 5,
        def: 5,
        armor: "Chainmail",
        armor_value: 5,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 20,
        ranged_wep: "Crossbow",
        ranged: true,
        magic: false
    }
}
function bar_patron(x)
{   
    enemy =
    {
        number: x,
        name: "Bar Patron",
        class: "C",
        current_hp: 5,
        max_hp: 5,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "Broken Bottle",
        weapon_dmg: 1,
        def: 0,
        armor: "None",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 1,
        ranged_wep: "R",
        ranged: false,
        magic: false
    }
}
function goblin(x)
{   
    enemy =
    {
        number: x,
        name: "Goblin",
        class: "C",
        current_hp: 4,
        max_hp: 4,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "Club",
        weapon_dmg: 1,
        def: 1,
        armor: "None",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 5,
        ranged_wep: "Sling",
        ranged: true,
        magic: false
    }
}
function goblin_boss(x)
{   
    enemy =
    {
        number: x,
        name: "Goblin Boss",
        class: "C",
        current_hp: 10,
        max_hp: 10,
        current_ap: 0,
        max_ap: 0,
        atk: 2,
        weapon: "Axe",
        weapon_dmg: 2,
        def: 2,
        armor: "Leather Scraps",
        armor_value: 1,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 20,
        ranged_wep: "Sling",
        ranged: true,
        magic: false
    }
}
function goblin_shaman(x)
{   
    enemy =
    {
        number: x,
        name: "Goblin Shaman",
        class: "Caster",
        current_hp: 10,
        max_hp: 10,
        current_ap: 0,
        max_ap: 0,
        atk: 2,
        weapon: "Staff",
        weapon_dmg: 2,
        def: 0,
        armor: "Robes",
        armor_value: 1,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 20,
        ranged_wep: "Magic Bolt",
        ranged: true,
        magic: true
    }
}
function mimic(x)
{   
    enemy =
    {
        number: x,
        name: "Mimic",
        class: "C",
        current_hp: 0,
        max_hp: 0,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "W",
        weapon_dmg: 0,
        def: 0,
        armor: "A",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 0,
        ranged_wep: "R",
        ranged: false,
        magic: false
    }
}
function minotaur(x)
{   
    enemy =
    {
        number: x,
        name: "Minotaur",
        class: "C",
        current_hp: 0,
        max_hp: 0,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "W",
        weapon_dmg: 0,
        def: 0,
        armor: "A",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 0,
        ranged_wep: "R",
        ranged: false,
        magic: false
    }
}
function necromancer(x)
{
    enemy =
    {
        number: x,
        name: "Necromancer",
        class: "Caster",
        current_hp: 10,
        max_hp: 10,
        current_ap: 0,
        max_ap: 0,
        atk: 4,
        weapon: "Staff",
        weapon_dmg: 0,
        def: 0,
        armor: "Robes",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 0,
        ranged_wep: "Magic Bolt",
        ranged: true,
        magic: true
    }
}
function rat(x)
{
    enemy =
    {
        number: x,
        name: "Rat",
        class: "C",
        current_hp: 1,
        max_hp: 1,
        current_ap: 1,
        max_ap: 1,
        atk: 0,
        weapon: "Bite",
        weapon_dmg: 1,
        def: 0,
        armor: "Fur",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 2,
        ranged_wep: "R",
        ranged: false,
        magic: false
    }
}
function skeleton(x)
{
    enemy =
    {
        number: x,
        name: "Skeleton",
        class: "C",
        current_hp: 1,
        max_hp: 1,
        current_ap: 1,
        max_ap: 0,
        atk: 2,
        weapon: "Rusty Sword",
        weapon_dmg: 2,
        def: 0,
        armor: "Armor Scraps",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 0,
        ranged_wep: "Shortbow",
        ranged: true,
        magic: false
    }
}
function spider(x)
{
    enemy =
    {
        number: x,
        name: "spider",
        class: "C",
        current_hp: 1,
        max_hp: 1,
        current_ap: 1,
        max_ap: 0,
        atk: 0,
        weapon: "bite",
        weapon_dmg: 1,
        def: 0,
        armor: "carapace",
        armor_value: 0,
        speed: 1,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 2,
        ranged_wep: "R",
        ranged: false,
        magic: false
    }
}
function zombie(x)
{
    enemy =
    {
        number: x,
        name: "Zombie",
        class: "C",
        current_hp: 5,
        max_hp: 5,
        current_ap: 1,
        max_ap: 0,
        atk: 1,
        weapon: "Grasping hand",
        weapon_dmg: 1,
        def: 0,
        armor: "None",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        enemy_debuff: 0,
        xp_value: 0,
        ranged_wep: "R",
        ranged: false,
        magic: false
    }
}
//combat functions
var enemies_killed = 0;
function playerATK(x,y)
{
    alert ("You attack the " + enemy.name + " with your " + hero.equipment.melee_wep)
    console.log("player attacks")
    var player_hit_chance = .5 - .1*(enemy.def + enemy.enemy_buff - enemy.enemy_debuff);
    var player_hit_roll = Math.random() + .1*(hero.stats.player_atk + hero.stats.player_buff - hero.stats.player_debuff + hero.skills.melee_value+x)
    if (player_hit_roll > player_hit_chance)
    {
        if (enemy.armor_value + enemy.enemy_buff - enemy.enemy_debuff >= y*(hero.equipment.melee_wep_dmg + hero.stats.player_buff - hero.stats.player_debuff))
        {
            console.log("no damage")
            alert("The attack bounces harmeless off of the " + enemy.name + "'s " + enemy.armor)
        }
        else
        {
            dmg = y*(hero.equipment.melee_wep_dmg + hero.stats.player_buff - hero.stats.player_debuff - enemy.armor_value);
            enemy.current_hp -= dmg;
            console.log("player hits enemy")
            alert ("Enemy hit for " + dmg + " damage.")
        }
    }
    else
    {
        console.log("player missed enemy")
        alert ("You miss the " + enemy.name)
    }
    console.log(player_hit_roll)
    console.log(player_hit_chance)
    console.log(enemy.current_hp + " enemy hp")
}
function ranged_playerATK(x,y)
{
    alert ("You attack the " + enemy.name + " with your " + hero.equipment.ranged_wep)
    console.log("player attacks")
    var player_hit_chance = .5 - .1*(enemy.def + enemy.enemy_buff - enemy.enemy_debuff);
    var player_hit_roll = Math.random() + .1*x*(hero.stats.player_atk + hero.stats.player_buff - hero.stats.player_debuff + hero.skills.range_value)
    if (player_hit_roll > player_hit_chance)
    {
        if (enemy.armor_value + enemy.enemy_buff - enemy.enemy_debuff >= y*(hero.equipment.range_wep_dmg + hero.stats.player_buff - hero.stats.player_debuff))
        {
            console.log("no damage")
            alert("The attack bounces harmeless off of the " + enemy.name + "'s " + enemy.armor)
        }
        else
        {
            dmg = y*(hero.equipment.range_wep_dmg + hero.stats.player_buff - hero.stats.player_debuff - enemy.armor_value);
            enemy.current_hp -= dmg;
            console.log("player hits enemy")
            alert ("Enemy hit for " + dmg + " damage.")
        }
    }
    else
    {
        console.log("player missed enemy")
        alert ("You miss the " + enemy.name)
    }
    console.log(player_hit_roll)
    console.log(player_hit_chance)
    console.log(enemy.current_hp + " enemy hp")
}
function magic_playerATK(x)
{
    alert ("You attack the " + enemy.name + " with your " + hero.equipment.magic_wep)
    console.log("player attacks")
    var player_hit_chance = .5 - .1*(enemy.def + enemy.enemy_buff - enemy.enemy_debuff);
    var player_hit_roll = Math.random() + .1*x*(hero.stats.player_atk + hero.stats.player_buff - hero.stats.player_debuff + hero.skills.magic_value)
    if (player_hit_roll > player_hit_chance)
    {
        if (enemy.armor_value + enemy.enemy_buff - enemy.enemy_debuff >= y*(hero.equipment.magic_wep_dmg + hero.stats.player_buff - hero.stats.player_debuff))
        {
            console.log("no damage")
            alert("The attack bounces harmeless off of the " + enemy.name + "'s " + enemy.armor)
        }
        else
        {
            dmg = y*(hero.equipment.magic_wep_dmg + hero.stats.player_buff - hero.stats.player_debuff - enemy.armor_value);
            enemy.current_hp -= dmg;
            console.log("player hits enemy")
            alert ("Enemy hit for " + dmg + " damage.")
        }
    }
    else
    {
        console.log("player missed enemy")
        alert ("You miss the " + enemy.name)
    }
    console.log(player_hit_roll)
    console.log(player_hit_chance)
    console.log(enemy.current_hp + " enemy hp")
}
function magicMissile()
{
    if (hero.stats.current_sp > 0 && hero.skills.magic_value > 0)
    {
        alert ("You fire a magic missile at the " + enemy.name)
        removeSP(1)
        removeAP(1)
        console.log("player attacks")
        var player_hit_chance = .5 - .1*(enemy.def + enemy.enemy_buff - enemy.enemy_debuff);
        var player_hit_roll = Math.random() + .1*(hero.stats.player_atk + hero.stats.player_buff - hero.stats.player_debuff + hero.skills.magic_value)
        if (player_hit_roll > player_hit_chance)
        {   
            dmg = (hero.equipment.magic_wep_dmg + hero.stats.player_buff - hero.stats.player_debuff - enemy.armor_value);
            enemy.current -= dmg;
            console.log("player hits enemy")
            alert ("Enemy hit with the magic blast dealing " + dmg + " damage.")
        }
        else
        {
            console.log("player missed enemy")
            alert ("miss")
        }
        console.log(player_hit_roll)
        console.log(player_hit_chance)
        console.log(enemy.current_hp + " enemy hp")
    }
    else
    {
        alert ("You don't have enough SP.")
    }
}
function haste()
{
    if (hero.stats.current_sp > 2 && hero.skills.magic_value > 2)
    {
        alert ("You cast hase on yourself.")
        hero.stats.speed_boost += 1;
        removeSP(4)
        removeAP(1)
    }
    else
    {
        alert ("You don't have enough SP.")
    }
}
function slow()
{
    if (hero.stats.current_sp > 2 && hero.skills.magic_value > 2)
    {
        alert ("You cast slow on your enemies.")
        enemy.speed += 1;
        removeSP(4)
        removeAP(1)
    }
    else
    {
        alert ("You don't have enough SP.")
    }
}
function aim()
{
    if (hero.stats.current_sp > 0 && hero.skills.marksman_value > 0)
    {
        alert ("You use the Aim ability.")
        ranged_playerATK(2,1)
        removeSP(2)
        removeAP(1)
    }
    else
    {
        alert ("You don't have enough SP.")
    }
}
function rapidShot()
{
    if (hero.stats.current_sp > 1 && hero.skills.marksman_value > 1)
    {
        alert ("You use the Power Attack ability.")
        ranged_playerATK(1,1)
        checkifdead()
        ranged_playerATK(1,1)
        removeSP(2)
        removeAP(1)
    }
    else
    {
        alert ("You don't have enough SP.")
    }
}
function powerATK()
{
    if (hero.stats.current_sp > 0 && hero.skills.melee_value > 0)
    {
        alert ("You use the Power Attack ability.")
        playerATK(1,2)
        removeSP(2)
        removeAP(1)
    }
    else
    {
        alert ("You don't have enough SP.")
    }
}
function cleave()
{
    if (hero.stats.current_sp > 1 && hero.skills.melee_value > 1)
    {
        alert ("You use the Cleave ability.")
        playerATK(1,1)
        checkifdead()
        playerATK(1,1)
        removeSP(2)
        removeAP(1)
    }
    else
    {
        alert ("You don't have enough SP.")
    }
}
function heal()
{
    if (hero.stats.current_sp > 0 && hero.skills.prayer_value > 0)
    {
        alert ("You heal yourself.")
        healPlayer(5)
        removeSP(1)
        removeAP(1)
    }
    else
    {
        alert ("You don't have enough SP.")
    }
}
function blessing()
{
    if (hero.stats.current_sp > 0 && hero.skills.prayer_value > 0)
    {
        alert ("You bless yourself.")
        hero.stats.player_buff = 1;
        removeSP(1)
        removeAP(1)
    }
    else
    {
        alert ("You don't have enough SP.")
    }
}
function curse()
{
    if (hero.stats.current_sp > 0 && hero.skills.prayer_value > 0)
    {
        alert ("You curse your enemies.")
        enemy.enemy_debuff = 1;
        removeSP(1)
        removeAP(1)
    }
    else
    {
        alert ("You don't have enough SP.")
    }
}
function steal()
{
    if (hero.stats.current_sp > 0 && hero.skills.thievery_value > 0)
    {
        alert ("You attempt to steal something from the " + enemy.name)
        var stealchance = Math.random()
        if (1 >= stealchance && stealchance > .75)
        {
            alert ("You find " + enemy.xp_value*2 + " Gold")
            addGold(enemy.xp_value*2)
        }
        else if (.75 >= stealchance && stealchance > .5)
        {
            alert ("You find a potion.")
            addPotion(1)
        }
        else
        {
            alert("You don't find anything of value.")
        }
        removeSP(1)
    }
    else
    {
        alert ("You don't have enough SP.")
    }
}
function playerTurn()
{
    hero.stats.current_ap = hero.stats.max_ap
    while (hero.stats.current_ap > 0)
    {
        
        var action = prompt("Melee (A)ttack, (R)anged Attack, or (M)agic use a (Sk)ill Power or drink a (P)otion?")
        if (action === "A")
        {
            if (distance > 0)
            {
                alert ("You are out of melee range.")
            }
            else
            {
                playerATK(1,1)
                removeAP(1)
            }
        }
        else if (action === "R")
        {
            ranged_playerATK(1,1)
            removeAP(1)
        }
        else if (action === "M")
        {
            magic_playerATK(1,1)
            removeAP(1)
        }
        else if (action === "Sk")
        {
            var skill = prompt("Use which skill?")
            if (skill === "Ma")
            {
                magicMissile()
            }
            else if (skill === "Ha")
            {
                haste()
            }
            else if (skill === "Sl")
            {
                slow()
            }
            else if (skill === "Ai")
            {
                aim()
            }
            else if (skill === "Ra")
            {
                rapidShot()
            }
            else if (skill === "Po")
            {
                powerATK()
            }
            else if (skill === "Cl")
            {
                cleave()
            }
            else if (skill === "He")
            {
                heal()
            }
            else if(skill === "Bl")
            {
                blessing()
            }
            else if(skill === "Cu")
            {
                curse()
            }
            else if(skill === "St")
            {
                steal()
            }
            else
            {

            }
        }
        else if (action === "P")
        {
            drinkPotion()
            removeAP(1)
        }
        else
        {

        }
    }
}
function enemyATK()
{
    console.log("enemy attacks")
    alert("The " + enemy.name + " attacks with its " + enemy.weapon)
    var enemy_hit_chance = .5 - .1*(hero.stats.player_def + hero.stats.player_buff - hero.stats.player_debuff);
    var enemy_hit_roll = Math.random() + .1*(enemy.atk + enemy.enemy_buff - enemy.enemy_debuff)
    if (enemy_hit_roll > enemy_hit_chance)
    {
        if (total_armor +  hero.stats.player_buff - hero.stats.player_debuff >= enemy.weapon_dmg + enemy.enemy_buff - enemy.enemy_debuff)
        {
            console.log("no damage")
            alert("The " + enemy.name + "'s" + enemy.weapon + " bounces off of your armor.")
        }
        else
        {
            dmg = (enemy.weapon_dmg + enemy.enemy_buff - enemy.enemy_debuff- total_armor);
            dmgPlayer(dmg)
            console.log("enemy hits player")
            alert("player hit for " + dmg + " damage.")
        }
    }
    else
    {
        console.log("enemy missed player")
        alert ("The " + enemy.name + " misses you with its " + enemy.weapon)
    }
    console.log(enemy_hit_roll)
    console.log(enemy_hit_chance)
    console.log(hero.stats.current_hp + " player hp")
}
function ranged_enemyATK()
{
    console.log("enemy attacks")
    alert("The " + enemy.name + " makes a ranged attack with its " + enemy.ranged_wep)
    var enemy_hit_chance = .5 - .1*(hero.stats.player_def + hero.stats.player_buff - hero.stats.player_debuff);
    var enemy_hit_roll = Math.random() + .1*(enemy.atk + enemy.enemy_buff - enemy.enemy_debuff)
    if (enemy_hit_roll > enemy_hit_chance)
    {
        if (total_armor +  hero.stats.player_buff - hero.stats.player_debuff >= enemy.weapon_dmg + enemy.enemy_buff - enemy.enemy_debuff)
        {
            console.log("no damage")
            alert("The " + enemy.name + "'s" + enemy.weapon + " bounces off of your armor.")
        }
        else
        {
            dmg = (enemy.weapon_dmg + enemy.enemy_buff - enemy.enemy_debuff- total_armor);
            dmgPlayer(dmg)
            console.log("enemy hits player")
            alert("player hit for " + dmg + " damage.")
        }
    }
    else
    {
        console.log("enemy missed player")
        alert ("The " + enemy.name + " misses you with its " + enemy.ranged_wep)
    }
    console.log(enemy_hit_roll)
    console.log(enemy_hit_chance)
    console.log(hero.stats.current_hp + " player hp")
}
function enemyTurn()
{
    //attack for every enemy
    for (var i = 0; i < enemy.number; i++)
    {
        enemyATK()
    }
}
function ranged_enemyTurn()
{
    for (var i = 0; i < enemy.number; i++)
    {
        if (enemy.ranged != true)
        {
            alert ("The " + enemy.name + " is out of range.")
        }
        else
        {
            ranged_enemyATK()
        }
    }
}
function checkifdead()
{
    if (enemy.current_hp <= 0)
    {
        console.log("checking if dead.")
        enemy.number -= 1;
        enemies_killed += 1;
        enemy.current_hp = enemy.max_hp;
        console.log("a " + enemy.name + " dies")
        console.log("there are " + enemy.number + " " + enemy.name + "(s) left.")
        alert ("The " + enemy.name + " dies.")
        addXP(enemy.xp_value)
        alert ("You gain " + enemy.xp_value + " XP")
    }
    else
    {
        //so nothing happens
    }
    console.log("checked if dead")
}
//general combat function
var distance = 0;
function combat(x)
{
    console.log ("you face "+ enemy.number + " " + enemy.name + "(s)")
    distance = x;
    var turn = 0;
    while(hero.stats.current_hp > 0 && enemy.number > 0)
    {
        for (enemies_killed = 0; enemies_killed < enemy.number && hero.stats.current_hp > 0;)
        {
            turn += 1;
            console.log ("turn " + turn)
            
            while (distance > 0 && hero.stats.current_hp > 0 && enemy.number > 0 && distance --)
            {
                if ((hero.stats.speed + hero.stats.speed_boost) > enemy.speed || (hero.stats.speed + hero.stats.speed_boost) == enemy.speed)
                {
                    playerTurn()
                    checkifdead()
                    ranged_enemyTurn()
                }
                else
                {   
                    ranged_enemyTurn()
                    playerTurn()
                    checkifdead()
                }
                alert ("The " + enemy.name + "(s) move closer.")
                alert ("Your current HP is " + hero.stats.current_hp)
                alert ("There are " + enemy.number + " " + enemy.name + "(s) left.")
            }
            alert ("The " + enemy.name + "(s) are now in melee range.")
            while (distance == 0 && hero.stats.current_hp > 0 && enemy.number > 0)
            {
                if ((hero.stats.speed + hero.stats.speed_boost) > enemy.speed || (hero.stats.speed + hero.stats.speed_boost) == enemy.speed)
                {
                    playerTurn()
                    checkifdead()
                    enemyTurn()
                }
                else
                {   
                    enemyTurn()
                    playerTurn()
                    checkifdead()
                }
                    alert ("Your current HP is " + hero.stats.current_hp)
                    alert ("There are " + enemy.number + " " + enemy.name + "(s) left.")
            }
        }
    }
    if (hero.stats.current_hp > 0)
    {
        console.log("victory")
        alert ("victory.")
        quest()
    }
    else
    {
        console.log("death")
        alert ("death.")
    }
    hero.stats.player_buff = 0;
    hero.stats.player_debuff = 0;
    enemy.enemy_debuff = 0;
    enemy.enemy_debuff = 0;
    hero.stats.speed_boost = 0;
}
//arena functions
function betArena()
{
    var aChoice = prompt("Bet on a fight? (Y/N)")
    if (aChoice === "Y")
    {
        var bet = prompt("How much do you bet?")
        var bet_amount = parseInt(bet)
        if (bet_amount > hero.inventory.gold)
        {
            alert ("You don't have that much gold.")
        }
        else
        {
            var chance = Math.random()
            if (chance > .5)
            {
                alert ("Your fighter wins and you double your bet.")
                addGold(bet_amount*2)
            }
            else
            {
                alert ("Your fighter loses and you lose your bet.")
                removeGold(bet_amount)
            }
        }
    }
    else
    {
        alert ("You instead just watch the bout.")
    }
}
function fightArena()
{
    var aChoice = prompt("Who do you fight? (R)ookie or (C)hampion?")
    if (aChoice === "R")
    {
        arena_rookie(1)
        combat(1)
        if (hero.stats.current_hp > 0)
        {
            addXP(100)
            addGold(100)
        }
        else
        {
            alert ("You are defeated in the arena.")
            death()
        }
    }
    else if (aChoice = "C")
    {
        arena_champion(1)
        combat(1)
        if (hero.stats.current_hp> 0)
        {
            addXP(1000)
            addGold(1000)
        }
        else
        {
            alert ("You are defeated in the arena.")
            death()
        }
    }
    else
    {
        alert ("You chicken out.")
    }
}
//downtime functions
function bar_drink()
{
        var gossipArray = ["I once took an arrow to the knee.", "I saw a mudcrab the other day.", "I heard the brothel is run by succubi.", "The cake is a lie.", "Your waifu is shit.", "Snape kills Dumbledour", "Bruce Willis was dead at the end of Sixth Sense.", "My butthole itches."]
        var drinking = true;
        while (drinking != false && hero.stats.current_hp > 0)
        {
            var bChoice = prompt("Buy a (D)rink, listen to (G)ossip?, get in a bar (F)ight, or (L)eave")
            if (bChoice === "D")
            {
                if (hero.inventory.gold < 1)
                {
                    alert ("You cannot afford a drink.")
                }
                else
                {
                    removeGold(1)
                    alert ("You buy a drink.")
                    dmgPlayer(1)
                    alert ("You get drunk(er)")
                }
            }
            else if (bChoice === "G")
            {
                var gossip = Math.floor((Math.random() * gossipArray.length))
                alert (gossipArray[gossip])
            }
            else if (bChoice === "F")
            {
                alert ("You break a bottle and start a bar fight.")
                hero.equipment.melee_wep = "Broken Bottle";
                hero.equipment.melee_wep_dmg = 0;
                bar_patron(Math.floor(Math.random() * 10+1))
                combat(0)        
                if (enemy.number == 0)
                {
                    alert("You are the champion.")
                }
                else
                {
                    alert("You lose.")
                }

            }
            else if (bChoice === "L")
            {
                alert("You decide to leave the bar.")
                drinking = false;
            }
            else
            {
            }
        }
        if (hero.stats.current_hp == 0)
        {
            alert ("You are thrown unconcious out of the bar.")
            bad_Rest()
        }
        else
        {
            //
        }
}
//temple fuction
var stormon_worship = 0;
var sunshin_worship = 0;
//maybe abilities etc can be gained based off of praying
function temple()
{
    var wChoice = prompt("Which god do you worship? (Storm)on, (Sun)shin, or leave?")
    if (wChoice === "Storm")
    {
        alert ("You pray to Stormon the god of storms and battle and read from his holy book, 'The Book of Stormon'.")
        stormon_worship += 1;
    }
    else if (wChoice === "Sun")
    {
        alert ("You pray Sto Sunshine the god of light.")
        sunshin_worship += 1;
    }
    else
    {
        alert ("You decide not to pray like the edgy little athiest you are.")
    }
    alert("You leave the temple.")
}
//inventory functions
function addPotion(x)
    {
        hero.inventory.potion += x;
        document.getElementById("Potion").innerHTML = "Potion(s): " + hero.inventory.potion;
    }
function removePotion(x)
{
    hero.inventory.potion -= x;
    document.getElementById("Potion").innerHTML = "Potion(s): " + hero.inventory.potion;
}
function DrinkPotion()
{
    if ( hero.inventory.potion < 1)
    {
        alert ("You don't have any potions.")
    }
    else
    {
        removePotion(1)
        alert ("You drink a potion.")
        healPlayer(5)
    }
}
//quest functions
//random locations for quests
    //bars
    var barArray = ["Moes' Bar", "Rats in The Cellar Bar and Grill", "Drunken Lout"]
    var bar = Math.floor((Math.random() * barArray.length))
    //dungeons
    var dungeonArray = ["Abandoned Mine", "Cave"]
    var dungeon = Math.floor((Math.random() * dungeonArray.length))
    //graveyards
    var graveArray = ["Cemetary,", "Crypt", "Graveyard"]
    var grave = Math.floor((Math.random() * graveArray.length))
    //inns
    var innArray = ["Dreaming Worker", "A Place to Rest your Bread", "Motel Styx"]
    var inn = Math.floor((Math.random() * innArray.length))
    //places
    var placeArray = ["Cave","Field", "Forest", "Meadow", "Pond"]
    var place = Math.floor((Math.random() * placeArray.length))
    //towns
    var townArray = ["Towning Town", "Other Town"]
    var town = Math.floor((Math.random() * townArray.length))
    //villages
    var villageArray = ["Dale", "Vil"]
    var village = Math.floor((Math.random() * villageArray.length))
    //random objectives for quests
    //gather
    var collectArray = ["Flower", "Herb", "Mushroom"]
    var collect = Math.floor((Math.random() * collectArray.length))
    //item retreival
    var fetchArray = ["Missing Item", "Other Item"]
    var fetch = Math.floor((Math.random() * fetchArray.length))
    //rescue
    var rescueArray = ["Boy","Girl","Noble"]
    var rescue = Math.floor((Math.random() * rescueArray.length))
    //random treasure for dungeons etc.
    var treasureArray = ["An old coin", "a goblet", "a statuette", "some porn mags", "an ancient scroll"]
    var treasure = Math.floor((Math.random() * treasureArray.length))
    var treasure_value = Math.floor((Math.random() *10+10))
    //traps
    var trapArray = ["Pressure plate", "Dart", "Spike"]
    var trap = Math.floor((Math.random() * trapArray.length))
    var trap_damage = Math.floor((Math.random() *10+1))
    var entry = 1
    //journal functions
    function addJournal(x,y)
    {
        var tag = document.createElement("p")
        var text = document.createTextNode("Entry #" + entry + ": I took a quest to " + x + " " + y + " and was sucessful.");
        tag.appendChild(text);
        var element = document.getElementById("entries");
        element.appendChild(tag);
        entry += 1;
    }
    function addJournal_boss(x,y,z)
    {
        var tag = document.createElement("p")
        var text = document.createTextNode("Entry #" + entry + ": I took a quest to " + x + " " + y + " and was sucessful. There I defeated a " + z + ".");
        tag.appendChild(text);
        var element = document.getElementById("entries");
        element.appendChild(tag);
        entry += 1;
    }
    function questComplete(x,y)
    {
        addGold(x)
        addFame(y)
        hero.journal.quests_completed += 1;
        document.getElementById("QC").innerHTML = "Quests Completed " + hero.journal.quests_completed;
        alert ("You gain: " + x + " Gold and " + y + " Fame for completed the quest.")
    }
    function bossReward(x,y)
    {
        addGold(x)
        addFame(y)
        hero.journal.bosses_defeated += 1;
        document.getElementById("Boss").innerHTML = "Bosses Defeated: " + hero.journal.bosses_defeated;
        alert ("You gain: " + x + " Gold and " + y + " Fame for defeating the " + enemy.name)
    }
    //random encounter function based on level
    function randomEncounter()
    {
        var eRoll = Math.random()
        if (hero.basics.level > 100)
        {
            if (eRoll > .5)
            {

            }
            else
            {
                
            }
        }
        else if (hero.basics.level < 10 && hero.basics.level > 5)
        {
            if (eRoll > .5)
            {
                bandit(Math.floor(Math.random()*4+2))
            }
            else
            {
                goblin(Math.floor(Math.random()*4+2))
            }
        }
        else if (hero.basics.level < 5 && hero.basics.level > 0)
        {
            if (eRoll > .5)
            {
                rat(Math.floor(Math.random()*4+2))
            }
            else
            {
                spider(Math.floor(Math.random()*4+2))
            }
        }
    }
    //random puzzle
    var riddleArray = ["What has 4 legs, 2 legs, and then 3 legs?", "What's black and white and red all over?"]
    var riddle_answerArray = ["man", "newspaper"]
    var riddle = Math.floor((Math.random() * riddleArray.length))
    function randomPuzzle()
    {
        var pRoll = Math.random()
        if (pRoll > 0)
        {
            alert ("You encounter a door with a riddle on it.")
            alert ("The riddle is... " + riddleArray[riddle])
            var answer = prompt ("What is the answer? Hint: don't use capital letters.")
            if (answer == riddle_answerArray[riddle])
            {
                alert("You answer correctly and the door opens.")
            }
            else
            {
                randomEncounter()
                alert ("You got the wrong answer and are attacked by a group of " + enemy.number + " " + enemy.name + "(s).")
                combat(0)
                alert("Fortunately the door opens after the " + enemy.name + "(s) are defeated.")
            }
        }
        // else if (pRoll <= .75 && pRoll > .50)
        // {
        //     alert ("PH")
        // }
        // else if (pRoll <= .5 && pRoll > .25)
        // {
        //     alert ("PH")
        // }
        else
        {
            alert ("PH")
        }
    }
    //random dungeon
    function randomDungeon(x,y)
    {
        alert ("You arrive at the " + x)
        var rooms = y;
        var rooms_defeated = 0;
        while (hero.stats.current_hp > 0 && rooms_defeated < rooms)
        {
            for (var i = 1; i < (rooms + 1); i++)
            {
                alert ("You enter room: " + i)
                var room_content = Math.random()
                if (room_content > .8)
                {
                    var find_trap = 0;
                    checkThievery(1,find_trap)
                    if (find_trap == true)
                    {
                        alert ("You notice trigger and avoid a " + trapArray[trap])
                    }
                    else
                    {
                        alert ("You fail to notice and trigger a " + trapArray[trap] + " taking " + trap_damage + " damage.")
                        console.log(trap_damage)
                        dmgPlayer(trap_damage)
                        console.log(hero.stats.current_hp)
                    }
                }
                else if (room_content <= .8 && room_content > .6)
                {
                    randomEncounter()
                    alert ("You encounter a group of " + enemy.number + " " + enemy.name + "(s).")
                    combat(1)
                }
                else if (room_content <= .6 && room_content > .4)
                {
                    var openChest = prompt ("You discover a treasure chest. Open it? (Y/N)")
                    if (openChest === "Y")
                    {
                        var mimicChance = Math.random()
                        if (mimicChance > .75)
                        {
                            mimic(1)
                            alert ("The chest was actually a " + enemy.name)
                            combat(0)
                        }
                        else
                        {
                            //no mimic
                        }
                        console.log(hero.inventory.gold)
                        alert ("You find a " + treasureArray[treasure] + " worth " + treasure_value + " Gold.")
                        console.log(treasure_value)
                        addGold(treasure_value)
                        console.log(hero.inventory.gold)
    
                    }
                    else
                    {
                        alert ("You chose not to risk it.")
                    }
                }
                else if (room_content <= .4 && room_content > .2)
                {
                    randomPuzzle()
                }
                else 
                {
                    alert ("You travel through an empty room.")
                }
                alert ("You complete the room and travel to the next.")
                rooms_defeated ++;
            }
        }
    }
    //quest template
    function Template()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            // quest content
            //need if hp above 0 for each stage.
            if (hero.stats.current_hp > 0)
            {
                questComplete(x,y)
                //if no boss
                addJournal(x,y)
                // if boss
                bossReward(x,y)
                addJournal_boss(x)
            }
            else
            {
                death()
            }
        }
    }
    function mainQuest()
    {
        
    }
    function banditQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            bandit(Math.floor(Math.random() * 10+1))
            var bandits = enemy.number;
            alert ("You go to " + villageArray[village] + " and are pointed towards the. " + dungeonArray[dungeon] +  " that the bandits have claimed as their base.")
            alert ("You must kill " + enemy.number + " bandits")
            combat(1)
            if (hero.stats.current_hp > 0)
            {
                alert ("you find the bandit leader.")
                bandit_leader(1)
                combat(0)
            }
            else
            {

            }
            if (hero.stats.current_hp > 0)
            {
     
                questComplete((10*bandits),10)
                bossReward(20,20)
                addJournal_boss("kill", "bandits", "Bandit Leader")
                hero.journal.bandit_completed ++;
            }
            else
            {
                death()
            }
        }
    }
    function collectionQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            randomEncounter()
            alert("You take a quest to collect " + collectArray[collect] + "(s) at a " + placeArray[place])
            alert("You arrive at the " + placeArray[place])
            var items_collected = 1 + hero.skills.gathering_value;
            alert ("You search for " + collectArray[collect] + "(s).")
            var eChance = Math.random()
            if (eChance > .5)
            {
                alert("Your gathering is interrupted when you are attacked by " + enemy.number + " " + enemy.name + ("(s)."))
                combat(0) 
            }
            else
            {

            }
            alert ("You manage to collect " + items_collected + " " + collectArray[collect] + "(s)." )
            if (hero.stats.current_hp > 0)
            {
                questComplete(items_collected*5,0)
                addJournal("collect ",(collectArray[collect]))
            }
            else
            {
                death()
            }
        }
    }
    function dungeon_testQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            randomDungeon("dungeon", 4)
            if (hero.stats.current_hp > 0)
            {
                alert ("You completed the dungeon.")
                questComplete(10,1)
                addJournal("test a ","dungeon")
            }
            else
            {
                death()
            }
        }
    }
    function fetchQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            randomEncounter()
            alert("You take a quest to retrieve a " + fetchArray[fetch] + " that was left at a " + placeArray[place])
            alert("You arrive at the " + placeArray[place])
            alert ("You see  " + enemy.number + " " + enemy.name + "(s) holding the " + fetchArray[fetch])
            combat(1)
            if (hero.stats.current_hp > 0)
            {
                alert ("You retrieve the " + fetchArray[fetch] + " and return it to the owner.")
                questComplete(10,1)
                addJournal("find a ",(fetchArray[fetch]))
            }
            else
            {
                death()
            }
        }
    }
    function goblinQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            goblin(Math.floor(Math.random() * 10+1))
            var goblins = enemy.number;
            alert ("You go to " + villageArray[village] + " and are pointed towards the. " + dungeonArray[dungeon] +  " that the goblins have claimed as their lair.")
            alert ("You must kill " + enemy.number + " goblins")
            combat(1)
            if (hero.stats.current_hp > 0)
            {
                alert("you find the goblin boss.")
                goblin_boss(1)
                combat(1)
            }
            else
            {

            }
            if (hero.stats.current_hp > 0)
            {
                questComplete((5*goblins),5)
                bossReward(10,10)
                addJournal_boss("kill", "goblins", "Goblin Boss")
                hero.journal.goblin_completed ++;
            }
            else
            {
                death()
            }
        }
    }
    function ratQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            rat(Math.floor(Math.random() * 5+1))
            var rats = enemy.number;
            alert ("You go to " + barArray[bar] + " and head down the stairs into the cellar.")
            alert ("You must kill " + enemy.number + " rats")
            combat(2)
            if (hero.stats.current_hp > 0)
            {
                questComplete((2*rats),2)
                addJournal("kill","rats")
                console.log(rats)
            }
            else
            {
                death()
            }
        }
    }
    function rescueQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            randomEncounter()
            alert("You take a quest to rescue a " + rescueArray[rescue] + " that is being held at " + dungeonArray[dungeon] +  " by a group of " + enemy.name + "(s)")
            alert("You arrive at the " + dungeonArray[dungeon])
            var rChoice = prompt ("Will you pay the 100GP (R)ansom or (F)ight?")
            if (rChoice === "R" )
            {   
                if(hero.inventory.gold >= 100)
                {
                    removeGold(100)
                    alert("You pay the ransom to the " + enemy.name + "(s) and rescue the " + rescueArray[rescue])
                }
                else
                {
                    alert ("The " + enemy.name + "(s) attack because you didn't bring enough.")
                    combat(0)
                }
            }
            else
            {
                alert ("You decide to fight the " + enemy.name + "(s).")
                combat(0)
            }
            if (hero.stats.current_hp > 0)
            {
                alert ("You have sucessfully rescued the " + rescueArray[rescue] + " and return them home.")
                questComplete(10,1)
                //if no boss
                addJournal("rescue a ",(rescueArray[rescue]))
                // if boss
            }
            else
            {
                death()
            }
        }
    }
    function spiderQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            spider(Math.floor(Math.random() * 5+1))
            var spiders = enemy.number;
            alert ("You go to " + innArray[inn] + " and head up the stairs into the attic.")
            alert ("You must kill " + enemy.number + " spider")
            combat(1)
            if (hero.stats.current_hp > 0)
            {
                questComplete((2*spiders),2)
                addJournal("kill","spiders")
            }
            else
            {
                death()
            }
        }
    }
    function undeadQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            var undeadRoll = Math.random()
            if (undeadRoll > .5)
            {
                skeleton(Math.floor(Math.random() * 10+1))
            }
            else 
            {
                zombie(Math.floor(Math.random() * 10+1))
            }
            alert ("You arrive at the " + graveArray[grave] + " where you find " + enemy.number + " " + enemy.name + "(s)")
            var undead = enemy.number;
            combat(1)
            if (hero.stats.current_hp > 0)
            {
                questComplete(undead*10,undead)
                //if no boss
                addJournal("kill "," undead")
                hero.journal.undead_completed ++;
            }
            else
            {
                death()
            }
        }
    }
// rest functions
function player_rest()
{
    hero.stats.current_hp = hero.stats.max_hp;
    hero.stats.current_sp = hero.stats.max_sp;
    hero.journal.day =+ 1;
    document.getElementById("Day").innerHTML = "Day: " + hero.journal.day;
    document.getElementById("CHP").innerHTML = "Current HP: " + hero.stats.current_hp;
    document.getElementById("CSP").innerHTML = hero.stats.current_sp;
}
function bad_rest()
{
    hero.stats.current_hp = hero.stats.max_hp;
    hero.stats.current_sp = hero.stats.max_sp;
    hero.journal.day =+ 1;
    document.getElementById("Day").innerHTML = "Day: " + hero.journal.day;
    document.getElementById("CHP").innerHTML = "Current HP: " + hero.stats.current_hp;
}
function inn_rest()
{
    if (hero.inventory.gold < 10)
    {
        alert ("You cannot afford to stay at the inn.")
    }
    else
    {
        player_rest()
        removeGold(10)
        alert ("You spend the night at the Inn.")
    }
}
function home_rest()
{
    if (hero.inventory.homeowner != true)
    {
        alert("You don't have a house.")
    }
    else
    {
        player_rest()
        alert ("You sleep in your own bed.")
    }
}
function street_rest()
{
    alert ("You sleep on the street but it isn't very restful.")
    bad_rest()

}
//shopping functions
//apothecary functions
function apothecary()
{
    var dChoice = prompt("Buy (P)otion(s) or an (E)lixer of Life?")
    if (dChoice === "P")
    {
        if (hero.inventory.gold < 50)
        {
            alert ("You can't afford a potion")
        }
        else
        {
            addPotion(1)
            removeGold(50)
            alert ("You buy a potion")
        }
        
    }
    else if (dChoice === "E")
    {
        if (hero.inventory.gold < 1000)
        {
            alert ("You can't afford an Elixer of Life")
        }
        else
        {
            removeGold(1000)
            alert ("You buy and drink an Elixer of Life.")
            gainLife()
        }
    }
    else
    {
        alert ("You decide not to buy any potions. ")
    }
}

//blacksmith functions
function impWep(x)
{
    hero.equipment.melee_wep_dmg += x;
    alert ("Your weapon improves by " + x)
    hero.equipment.melee_wep = weaponArray[hero.equipment.melee_wep_dmg-1]
    alert ("Your weapon has been updgraded to a " + hero.equipment.melee_wep)
    document.getElementById("Mwep").innerHTML = "Melee Weapon: " + hero.equipment.melee_wep;
}
function impArmor(x)
{
    hero.equipment.torso_armor += x;
    alert ("Your armor improves by " + x)
    hero.equipment.torso_slot = armorArray[hero.equipment.torso_armor]
    alert("You armor has now been upgraded to " + hero.equipment.torso_slot)
    document.getElementById("Torso").innerHTML = "Torso: " + hero.equipment.torso_slot;
    document.getElementById("Totarm").innerHTML = "Total Armor: " + total_armor;
} 
var weaponArray = ["Stick","Club", "Dagger", "Shortsword", "Longsword", "Magic Sword", "Hero Sword"]
var armorArray = ["Peasant", "Leather", "Studded Leather", "Chain Mail", "Plate" ]
//armor
function armorer()
{
    var forge = prompt("Upgrade your armor? (Y/N)")
    alert ("Cost of forging is " + hero.equipment.armorCost + " Gold")
    if (forge === "Y")
    {
            if (hero.inventory.gold < hero.equipment.armorCost)
            {
                alert("You cannot afford to upgrade your armor.")
            }
            else
            {
                impArmor(1)
                removeGold(hero.equipment.armorCost)
                hero.equipment.armorCost *= 2;
            }
    }
    else
    {
            alert ("You choose not to do anything.")
    }
}
//weapons
function weapon_smith()
{
    var forge = prompt("Upgrade your weapon? (Y/N)")
    alert ("Cost of forging is " + hero.equipment.weaponCost + " Gold")
    if (forge === "Y")
    {
            if (hero.inventory.gold < hero.equipment.weaponCost)
            {
                alert("You cannot afford to upgrade your armor.")
            }
            else
            {
                impArmor(1)
                removeGold(hero.equipment.weaponCost)
                hero.equipment.weaponCost *= 2;
            }
    }
    else
    {
            alert ("You choose not to do anything.")
    }
}
//bowyerfunctions
function impRanged(x)
{
    hero.equipment.ranged_wep_dmg += x;
    alert ("Your ranged improves by " + x)
    hero.equipment.ranged_wep = rangedArray[hero.equipment.ranged_wep_dmg-1]
    alert("You weapon has now been upgraded to " + hero.equipment.ranged_wep)
    document.getElementById("Rwep").innerHTML = "Ranged Weapon: " + hero.equipment.ranged_wep;
} 
var rangedArray = ["Rock", "Sling", "Shortbow", "Longbow"]
function bowyer()
{
    alert ("Cost of upgrading your ranged weapon " + hero.equipment.rangedCost + " Gold")
    var fletch = prompt("Improve your ranged weapon? (Y/N)")
    if (fletch === "Y")
    {
            if (hero.inventory.gold < hero.equipment.rangedCost)
            {
                alert("You cannot afford to upgrade your spellbook.")
            }
            else
            {
                impRanged(1)
                removeGold(hero.equipment.rangedCost)
                hero.equipment.rangedCost *= 2;
            }
    }
    else
    {
            alert ("You choose not to do anything.")
    }
}
//enchanter functions
var spellbookArray = ["Scrap of Paper", "Phamplet", "Book", "Tome", "Grimoire"]
function impSpell(x)
{
    hero.equipment.magic_wep_dmg += x;
    alert ("Your spellbook improves by " + x)
    hero.equipment.magic_wep = spellbookArray[hero.equipment.magic_wep_dmg-1]
    alert ("Your spellbook has been updgraded to a " + hero.equipment.magic_wep)
    document.getElementById("Magwep").innerHTML = "Magic Weapon: " + hero.equipment.magic_wep;
}
function enchanter()
{   
    alert ("Cost of enchanting is " + hero.equipment.magicCost + " Gold")
    var enchant = prompt("Enchant your Spellbook? (Y/N)")
    if (enchant === "Y")
    {
            if (hero.inventory.gold < hero.equipment.magicCost)
            {
                alert("You cannot afford to upgrade your spellbook.")
            }
            else
            {
                impSpell(1)
                removeGold(hero.equipment.magicCost)
                hero.equipment.magicCost *= 2;
            }
    }
    else
    {
            alert ("You choose not to do anything.")
    }
}
 //realtor function
 function realtor()
 {
    if (hero.inventory.homeowner != false)
    {
        alert ("You already have a house.")
    }
    else
    {
        var hChoice = prompt ("Buy a house for 1000GP? (Y/N)")
        if (hChoice === "Y")
        {
                if (hero.inventory.gold < 1000)
                {
                    alert ("You can't afford a house.")
                }
                else
                {
                    removeGold(1000)
                    hero.inventory.homeowner = true;
                    alert ("You are now a proud homeowner.")
                }
        }
    
        {
            alert("You decide not to buy a house.")
        }
    }
 }
 //training functions
 function impCrafting(x)
{
    hero.skills.crafting_value += x;
    hero.skills.crafting = hero.skills.skill_level_array[hero.skills.crafting_value]
    alert ("Your Crafting skill has increased in proficiency to the " + hero.skills.crafting + " level.")
    document.getElementById("crafting").innerHTML = "Crafting: " + hero.skills.crafting;
}
function impGathering(x)
{
    hero.skills.gathering_value += x;
    hero.skills.gathering = hero.skills.skill_level_array[hero.skills.gathering_value]
    alert ("Your Gathering skill has increased in proficiency to the " + hero.skills.gathering + " level.")
    document.getElementById("gathering").innerHTML = "Gathering: " + hero.skills.gathering;
}
function impMagic(x)
{
    hero.skills.magic_value += x;
    hero.skills.magic = hero.skills.skill_level_array[hero.skills.magic_value]
    alert ("Your Magic skill has increased in proficiency to the " + hero.skills.magic + " level.")
    document.getElementById("magic").innerHTML = hero.skills.magic;
    alert ("You learn the " + hero.skills.magicArray[hero.skills.magic_value] + " skill power(s)")
    document.getElementById("magic").innerHTML = "Magic: " + hero.skills.magic;
    var tag = document.createElement("p")
    var text = document.createTextNode(hero.skills.magicArray[hero.skills.magic_value]);
    tag.appendChild(text);
    var element = document.getElementById("magic_known");
    element.appendChild(tag);
}
function impMarksman(x)
{
    hero.skills.marksman_value += x;
    hero.skills.marksman = hero.skills.skill_level_array[hero.skills.marksman_value]
    alert ("Your Marksman skill has increased in proficiency to the " + hero.skills.marksman + " level.")
    alert ("You learn the " + hero.skills.marksmanArray[hero.skills.marksman_value] + " skill power(s)")
    document.getElementById("marksman").innerHTML = "Marksman: " + hero.skills.marksman;
    var tag = document.createElement("p")
    var text = document.createTextNode(hero.skills.marksmanArray[hero.skills.marksman_value]);
    tag.appendChild(text);
    var element = document.getElementById("marksman_known");
    element.appendChild(tag);
}
 function impMelee(x)
{
    hero.skills.melee_value += x;
    hero.skills.melee = hero.skills.skill_level_array[hero.skills.melee_value]
    alert ("Your Melee skill has increased in proficiency to the " + hero.skills.melee + " level.")
    alert ("You learn the " + hero.skills.meleeArray[hero.skills.melee_value] + " skill power(s)")
    document.getElementById("melee").innerHTML = "Melee: " + hero.skills.melee;
    var tag = document.createElement("p")
    var text = document.createTextNode(hero.skills.meleeArray[hero.skills.melee_value]);
    tag.appendChild(text);
    var element = document.getElementById("melee_known");
    element.appendChild(tag);
}
function impPrayer(x)
{
    hero.skills.prayer_value += x;
    hero.skills.prayer = hero.skills.skill_level_array[hero.skills.prayer_value]
    alert ("Your Prayer skill has increased in proficiency to the " + hero.skills.prayer + " level.")
    alert ("You learn the " + hero.skills.prayerArray[hero.skills.prayer_value] + " skill power(s)")
    document.getElementById("prayer").innerHTML = "Prayer: " + hero.skills.prayer;
    var tag = document.createElement("p")
    var text = document.createTextNode(hero.skills.prayerArray[hero.skills.prayer_value]);
    tag.appendChild(text);
    var element = document.getElementById("prayer_known");
    element.appendChild(tag);
}
function impSpeech(x)
{
    hero.skills.speech_value += x;
    hero.skills.speech = hero.skills.skill_level_array[hero.skills.speech_value]
    alert ("Your Speech skill has increased in proficiency to the " + hero.skills.speech + " level.")
    document.getElementById("speech").innerHTML = "Speech: " + hero.skills.speech;
}
function impSurvival(x)
{
    hero.skills.survival_value += x;
    hero.skills.survival = hero.skills.skill_level_array[hero.skills.survival_value]
    alert ("Your Survival skill has increased in proficiency to the " + hero.skills.survival + " level.")
    document.getElementById("survival").innerHTML = "Survival: " + hero.skills.survival;
}
function impThievery(x)
{
    hero.skills.thievery_value += x;
    hero.skills.thievery = hero.skills.skill_level_array[hero.skills.thievery_value]
    alert ("Your Thievery skill has increased in proficiency to the " + hero.skills.thievery + " level.")
    alert ("You learn the " + hero.skills.thieveryArray[hero.skills.thievery_value] + " skill power(s)")
    document.getElementById("thievery").innerHTML = "Thievery: " + hero.skills.thievery;
    var tag = document.createElement("p")
    var text = document.createTextNode(hero.skills.thieveryArray[hero.skills.thievery_value]);
    tag.appendChild(text);
    var element = document.getElementById("thievery_known");
    element.appendChild(tag);
}
function trainCrafting()
{
    alert ("The cost of training is " + hero.skills.crafting_training_cost + " Gold.")
    var train = prompt("Train with the Crafting Trainer? (Y/N)")
    if (train === "Y")
    {
        if (hero.inventory.gold < hero.skills.crafting_training_cost)
            {
                alert("You cannot afford to train.")
            }
            else
            {
                removeGold(hero.skills.crafting_training_cost)
                impCrafting(1)
                hero.skills.crafting_training_cost *= 2; 
            }
    }
    else
    {
        alert ("Maybe later.")
    }
}
function trainGathering()
{
    alert ("The cost of training is " + hero.skills.gathering_training_cost + " Gold.")
    var train = prompt("Train with the Gathering Trainer? (Y/N)")
    if (train === "Y")
    {
        if (hero.inventory.gold < hero.skills.gathering_training_cost)
            {
                alert("You cannot afford to train.")
            }
            else
            {
                removeGold(hero.skills.gathering_training_cost)
                impGathering(1)
                hero.skills.gathering_training_cost *= 2; 
            }
    }
    else
    {
        alert ("Maybe later.")
    }
}
function trainMagic()
{
    alert ("The cost of training is " + hero.skills.magic_training_cost + " Gold.")
    var train = prompt("Train with the Magic Trainer? (Y/N)")
    if (train === "Y")
    {
        if (hero.inventory.gold < hero.skills.magic_training_cost)
            {
                alert("You cannot afford to train.")
            }
            else
            {
                removeGold(hero.skills.magic_training_cost)
                impMagic(1)
                hero.skills.magic_training_cost *= 2; 
            }
    }
    else
    {
        alert ("Maybe later.")
    }
}
function trainMarksman()
{
    alert ("The cost of training is " + hero.skills.marksman_training_cost + " Gold.")
    var train = prompt("Train with the Marksman Trainer? (Y/N)")
    if (train === "Y")
    {
        if (hero.inventory.gold < hero.skills.marksman_training_cost)
            {
                alert("You cannot afford to train.")
            }
            else
            {
                removeGold(hero.skills.marksman_training_cost)
                impMarksman(1)
                hero.skills.marksman_training_cost *= 2; 
            }
    }
    else
    {
        alert ("Maybe later.")
    }
}
function trainMelee()
{
    alert ("The cost of training is " + hero.skills.melee_training_cost + " Gold.")
    var train = prompt("Train with the Melee Trainer? (Y/N)")
    if (train === "Y")
    {
        if (hero.inventory.gold < hero.skills.melee_training_cost)
            {
                alert("You cannot afford to train.")
            }
            else
            {
                removeGold(hero.skills.melee_training_cost)
                impMelee(1)
                hero.skills.melee_training_cost *= 2; 
            }
    }
    else
    {
        alert ("Maybe later.")
    }
}
function trainPrayer()
{
    alert ("The cost of training is " + hero.skills.prayer_training_cost + " Gold.")
    var train = prompt("Train with the Prayer Trainer? (Y/N)")
    if (train === "Y")
    {
        if (hero.inventory.gold < hero.skills.prayer_training_cost)
            {
                alert("You cannot afford to train.")
            }
            else
            {
                removeGold(hero.skills.prayer_training_cost)
                impPrayer(1)
                hero.skills.prayer_training_cost *= 2; 
            }
    }
    else
    {
        alert ("Maybe later.")
    }
}
function trainSpeech()
{
    alert ("The cost of training is " + hero.skills.speech_training_cost + " Gold.")
    var train = prompt("Train with the Speech Trainer? (Y/N)")
    if (train === "Y")
    {
        if (hero.inventory.gold < hero.skills.speech_training_cost)
            {
                alert("You cannot afford to train.")
            }
            else
            {
                removeGold(hero.skills.speech_training_cost)
                impSpeech(1)
                hero.skills.speech_training_cost *= 2; 
            }
    }
    else
    {
        alert ("Maybe later.")
    }
}
function trainSurvival()
{
    alert ("The cost of training is " + hero.skills.survival_training_cost + " Gold.")
    var train = prompt("Train with the Survival Trainer? (Y/N)")
    if (train === "Y")
    {
        if (hero.inventory.gold < hero.skills.survival_training_cost)
            {
                alert("You cannot afford to train.")
            }
            else
            {
                removeGold(hero.skills.survival_training_cost)
                impSurvival(1)
                hero.skills.survival_training_cost *= 2; 
            }
    }
    else
    {
        alert ("Maybe later.")
    }   
}
function trainThievery()
{
    alert ("The cost of training is " + hero.skills.thievery_training_cost + " Gold.")
    var train = prompt("Train with the Thievery Trainer? (Y/N)")
    if (train === "Y")
    {
        if (hero.inventory.gold < hero.skills.thievery_training_cost)
            {
                alert("You cannot afford to train.")
            }
            else
            {
                removeGold(hero.skills.thievery_training_cost)
                impThievery(1)
                hero.skills.thievery_training_cost *= 2; 
            }
    }
    else
    {
        alert ("Maybe later.")
    }
}
//skill check function
function checkCrafting(x,y)
{
    if (hero.skills.crafting_value > x)
    {
        y = true;
        //success events
    }
    else
    {
        y = false;
        //failure events
    }
}
function checkGathering(x,y)
{
    if (hero.skills.gathering_value > x)
    {
        alert("you succeed at " + y)
        //success events
    }
    else
    {
        alert("you fail at " + y)
        //failure events
    }
}
function checkMagic(x,y)
{
    if (hero.skills.magic_value > x)
    {
        y = true;
        //success events
    }
    else
    {
        y = false;
        //failure events
    }
}
function checkMarksman(x,y)
{
    if (hero.skills.marksman_value > x)
    {
        y = true;
        //success events
    }
    else
    {
        y = false;
        //failure events
    }
}
function checkMelee(x,y)
{
    if (hero.skills.melee_value > x)
    {
        y = true;
        //success events
    }
    else
    {
        y = false;
        //failure events
    }
}
function checkPrayer(x,y)
{
    if (hero.skills.prayer_value > x)
    {
        y = true;
        //success events
    }
    else
    {
        y = false;
        //failure events
    }
}
function checkSpeech(x,y)
{
    if (hero.skills.speech_value > x)
    {
        y = true;
        //success events
    }
    else
    {
        y = false;
        //failure events
    }
}
function checkSurvival(x,y)
{
    if (hero.skills.survival_value > x)
    {
        y = true;
        //success events
    }
    else
    {
        y = false;
        //failure events
    }
}
function checkThievery(x,y)
{
    if (hero.skills.thievery_value > x)
    {
        y = true;
        //success events
    }
    else
    {
        y = false;
        //failure events
    }
}
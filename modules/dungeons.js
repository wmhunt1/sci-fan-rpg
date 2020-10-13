class Dungeon {
    constructor(name, encounter1, encounter2, encounter3, encounter4, encounter5, encounter6,
        encounter7, encounter8, encounter9, encounter10, encounter11, encounter12,
        encounter13, encounter14, encounter15) {
        this.name = name;
        this.encounter1 = encounter1;
        this.encounter2 = encounter2;
        this.encounter3 = encounter3;
        this.encounter4 = encounter4;
        this.encounter5 = encounter5;
        this.encounter6 = encounter6;
        this.encounter7 = encounter7;
        this.encounter8 = encounter8;
        this.encounter9 = encounter9;
        this.encounter10 = encounter10;
        this.encounter11 = encounter11;
        this.encounter12 = encounter12;
        this.encounter13 = encounter13;
        this.encounter14 = encounter14;
        this.encounter15 = encounter15;
    }
}
const daleManorDungeon = new Dungeon("Dale Manor")
const mineDungeon = new Dungeon("Dwarven Mines",
    //encounter 1
    function () {
        document.getElementById("mee").style.display = "block"

    },
    //encounter 2
    function () {
        alert("You encounter goblins guarding the entrance.")
        const goblin1 = new Goblin("Goblin 1")
        const goblin2 = new Goblin("Goblin 2")
        const goblin3 = new Goblin("Goblin 3")
        enemyArray = [goblin1, goblin2, goblin3]
        combat()
        if (hero.stats.currentHp > 0) {
            document.getElementById("em").style.display = "block";
        }
        else { }
    },
    //encounter 3
    function () {
        goblinSlayer.event2()
        document.getElementById("mi1").style.display = "block";
    },
    //encounter 4
    function () {
        alert("Inside the dungeon you are attacked by goblins that are forcing some kobolds to work.")
        const goblin1 = new Goblin("Goblin 1")
        const goblin2 = new Goblin("Goblin 2")
        const goblin3 = new Goblin("Goblin 3")
        enemyArray = [goblin1, goblin2, goblin3]
        combat()
        if (hero.stats.currentHp > 0) {
            document.getElementById("fk").style.display = "block";
            document.getElementById("mi2").style.display = "block";
        }
        else { }
    },//encounter 5
    function () {
        goblinSlayer.event3()
    },
    //encounter 6
    function () {
        alert("You encounter goblins guarding a makeshift prison cell.")
        const goblin1 = new Goblin("Goblin 1")
        const goblin2 = new Goblin("Goblin 2")
        const goblin3 = new Goblin("Goblin 3")
        enemyArray = [goblin1, goblin2, goblin3]
        combat()
        if (hero.stats.currentHp > 0) {
            document.getElementById("fm").style.display = "block";
        }
        else { }
    },
    //encounter 7
    function () {
        goblinSlayer.event4()
        document.getElementById("mi3").style.display = "block";
    },
    //encounter 8
    function () {
        alert("You encounter goblins guarding the foreman's office")
        const goblin1 = new Goblin("Goblin 1")
        const goblin2 = new Goblin("Goblin 2")
        const goblin3 = new Goblin("Goblin 3")
        enemyArray = [goblin1, goblin2, goblin3]
        combat()
        if (hero.stats.currentHp > 0) {
            document.getElementById("gBoss").style.display = "block";
        }
        else { }
    },
    //encounter 9
    function () {
        if (hero.journal.goblinBossDefeated === false) {
            alert("You discover the boss of the goblins.")
            const goblin1 = new Goblin("Goblin 1")
            const goblin2 = new Goblin("Goblin 2")
            const goblin3 = new Goblin("Goblin 3")
            enemyArray = [goblin1, goblin2, goblin3]
            combat()
            if (hero.stats.currentHp > 0) {
                hero.journal.goblinBossDefeated = true
                alert("You defeated the Goblin Boss and have secured the mine.")
            }
            else {
                alert("You were defeated by the goblin boss.")
            }
        }
        else {
            alert("You secured the mine so the miners and get back to work.")
        }
    }
)
const puzzleDungeon = new Dungeon("Puzzle Dungeon",
    //entry hall (and rest spot) 1
    function () { },
    //NE passage 2
    function () { },
    //NE Encounter 3
    function () { },
    //NE Puzzle 4
    function () {
        if (hero.journal.neKey === false) {
            alert("You enter a room with 4 pedestals on each side.")
            alert("On the left there are elemental symbols (in order) Air, Earth, Fire, and Water.")
            alert("On the right there is is a Coin, a Cup, a Sword, and a Wand.")
            alert("The items on the right can be moved. Which item corresponds to which element?")
            let airEle = prompt("Which item goes with Air?")
            let earthEle = prompt("Which item goes with Earth?")
            let fireEle = prompt("Which item goes with Fire?")
            let waterEle = prompt("Which item goes with Water?")
            if (airEle === "Sword" && earthEle === "Coin" && fireEle === "Wand" && waterEle === "Cup") {
                alert("You were correct and a key materializes in your hand.")
                hero.journal.neKey = true;
            }
            else (
                alert("Nothing Happens.")
            )
            //key obtained
        }
        else {
            alert("You have already solved this puzzle.")
        }
    },
    //NW passage 5
    function () { },
    //NW Encounter 6
    function () { },
    //NW Puzzle 7
    function () {
        if (hero.journal.nwKey === false) {

            //key obtained
        }
        else {
            alert("You have already solved this puzzle.")
        }
    },
    //SW Passage 8
    function () { },
    //SW Encounter 9
    function () { },
    //SW Puzzle 10
    function () {
        if (hero.journal.swKey === false) {

            //key obtained
        }
        else {
            alert("You have already solved this puzzle.")
        }
    },
    //SE Passage 11
    function () { },
    //SE Encounter 12
    function () { },
    //SE Puzzle 13
    function () {
        if (hero.journal.seKey === false) {

            //key obtained
        }
        else {
            alert("You have already solved this puzzle.")
        }
    },
    //boss room (condition for if you don't have keys) 14
    function () { },
    //treasure room 15
    function () { }
)
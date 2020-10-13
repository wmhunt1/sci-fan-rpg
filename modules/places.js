//for places other than dungeons or that aren't parts of quests.
class Place {
    constructor(name, enter, exit) {
        this.name = name;
        this.enter = enter;
        this.exit = exit;
    }
}
class Settlement extends Place {
    constructor(name, enter, exit) {
        super();
        this.name = name;
        this.enter = enter;
        this.exit = exit;
    }
}
Place.prototype.enterPlace = function () {
    alert("You enter " + this.name);
    this.enter()
}
Place.prototype.exitPlace = function () {
    alert("You leave " + this.name);
    this.exit()
}
//Valley of Dales and places in it.
const valleyDale = new Place("The Valley of Dale", function () {
    document.getElementById("Intro").style.display = "none"
    document.getElementById("characterCreation").style.display = "none";
    document.getElementById("Menu").style.display = "block";
    document.getElementById("mineDungeon").style.display = "none";
    document.getElementById("valleyDale").style.display = "block";
    document.getElementById("villageDale").style.display = "none";
},
    function () {
        alert("You cannot leave The Valley of Dale")
    }
)
//places
const dwarvenMine = new Place("The Dwarven Mine",
    function () {
        document.getElementById("Menu").style.display = "block";
        document.getElementById("mineDungeon").style.display = "block";
        document.getElementById("valleyDale").style.display = "none";
        mineDungeon.encounter1()
    },
    function () { valleyDale.enterPlace() }
)
const loggingCamp = new Place("Logging Camp")
const kenkuCamp = new Place("Kenku Camp",
function(){
    if (hero.journal.birdCamp === false)
    {
        birdWord.event4()
    }
    else
    {}
})
const witchCabin = new Place("Witch's Cabin",
//first time you meet Wyle and Kurek and are offered a potion 
)
const puzzleDungeon1 = new Place("Puzzle Dungeon",
//display for first parts of dungeon.
function(){ambrosiusTower.enterPlace()})
const tollBridge = new Place("The Toll bridge", function () { welcomeDale.event1() })
//settlements
const spiderCave = new Place("Spider Cave",
    function () {
        if (hero.journal.rescuedBirds === false)
        {
        birdWord.event5()
        }
        else{
            alert("No spiders are left")
        }
    })
const ambrosiusTower = new Place("Ambrosius's tower.", 
function(){},
function(){ambrosiusTower.enter()})
const villageDale = new Settlement("The Village of Dale.",
    function () {
        document.getElementById("valleyDale").style.display = "none";
        document.getElementById("villageDale").style.display = "block";
        if (hero.journal.metWithContact === false) {
            welcomeDale.event2()
        }
        else { }


    },
    function () { valleyDale.enter() }
);
const daleManor = new Place("Dale Manor","",function() {villageDale.enterPlace()})
const daleTemple = new Place("The Temple of Sunshin",
    function () {
        if (hero.journal.birdWord == true && hero.journal.ghostInfo == false) { birdWord.event2() }
        else { }
    })
const littleRoot = new Place("Littleroot Farm",
    function () {
        if (hero.journal.birdWord === true) {
            if (hero.journal.ghostInfo === true) {
                if (hero.journal.birdRescued === true) {
                   if (hero.journal.birdReward === true)
                   {}
                   else
                   {
                    birdWord.event6()
                   }
                }
                else {
                    birdWord.event3()
                }
            }
            else {
                birdWord.event1()
            }
        }
        else{
            alert("This")
        }
    }
)
//maybe move quest dialog etc into the quests. events and entries are seperate.
class Quest {
    constructor(name, reward, event1, event2, event3, event4, event5, event6) {
        this.name = name;
        this.reward = reward;
        this.status = "Incomplete";
        this.event1 = event1;
        this.event2 = event2;
        this.event3 = event3;
        this.event4 = event4;
        this.event5 = event5;
        this.event6 = event6;
    }
}
    Quest.prototype.addJournal = function()
{
    //add jounral entriees by this.event or entry.
}
    Quest.prototype.getQuest = function()
{
    //first journal entry or the true/false
}
    Quest.prototype.questReward = function ()
{
    hero.addGold(this.reward)
}
    Quest.prototype.completeQuest = function()
{
    this.stats = "Completed"
    alert("You have completed " + this.name)
    this.questReward()
}
//subclasses for kinds of quests
//first quest
const welcomeDale = new Quest("Welcome to Dale", 10,
    //tollroad event
    function () {
        if (hero.journal.tollBridgeEncounter == false) {
            alert("The rough-looking individuals wear scraps of what could have once been guard armor but now look more like common bandits than respectable guards. ")
            alert("One of the 'guards' approaches you.")
            alert("'guard': this is an official Dale Guard tollbridge and you have to pay the toll. The toll is 10 gold so fork it over.")
            alert("You notice that there are more 'guards' hidden in the treeline with crossbows pointed at you.")
            alert("You also see an unlucky victim of these guards off to the side of the river, beaten and bloodied. They apparently didn't or couldn't pay the toll.")
            let tChoice = prompt("Will you (P)ay the toll or try and (F)ight?")
            if (tChoice === "P") {
                hero.removeGold(10)
                alert("You hand over the gold without a fuss and prepare to cross the bridge.")
                alert("As you are about to cross out of the corner of your eye you see one of the 'guards' preparing to stab you.")
                alert("He stops as an armored knight charges the bandit(s), driving them off.")
                alert("The knight dismounts.")
            }
            else {
                const bandit1 = new Bandit("Bandit 1", "Shortsword");
                const bandit2 = new Bandit("Bandit 2", "Shortsword");
                const bandit3 = new Bandit("Bandit 3", "Shortsword");
                const bandit4 = new Bandit("Bandit 4", "Crossbow");
                const bandit5 = new Bandit("Bandit 5", "Crossbow");
                enemyArray = [bandit1, bandit2, bandit3, bandit4, bandit5];
                //combat()
                if (hero.stats.currentHp > 0) {
                    alert("You sucessfully drive off the bandits")
                    alert("An armored knight rides up to greet you.")
                    alert("The knight dismounts.")
                    alert("Knight: that was impressive.")
                    hero.gainRel(abe, 5)
                }
                else {
                    alert("The bandits are about to finish you off.")
                    alert("An armored knight charges the bandit(s), driving them off and saving your life.")
                    alert("The knight dismounts and helps your stand.")
                    alert("That was brave but foolish.")
                    hero.gainRel(abe, 1)
                }

            }
            alert("Knight: Those bandits are getting audicious, they claim to be the Dale Guard but they are mere brigands.")
            if (hero.stats.currentHp < hero.stats.maxHp) {
                alert("Knight: You are alright? The knight pats you on the back and you feel some healing energy flow into you,")
                hero.heal(10)
                hero.basics.alive = true;
            }
            else { }
            alert("Knight: I am Abraham Arkwright, a paladin and resident of Dale.")
            alert("Abraham is a middle-aged human male with salt and pepper hair with a somewhat roughly cut beard and steel-blue eyes.")
            alert("Abraham: You look like you can handle yourself but please allow me to escort you to the village.")
            hero.journal.tollBridgeEncounter = true;
            document.getElementById("villageDaleBtn").style.display = "block";
        }
        else {
            alert("The bridge is currently free of bandits.")
        }
    },
    //arriving at Dale event
    function () {
        alert("Abraham: Well we've arrived. If you're going to be staying here a while you should get a room over at the inn.")
        alert("Abraham:  *He points over to the inn, the sign says 'The Dreaming Worker Inn'*")
        alert("Abraham: Come talk to me if you need anything.")
    },
    //talking with Sweetheart event
    function () {
        alert("There are a few dwarves drinking and playing cards while a blonde woman with some elven heritage brings cleans.")
        alert("Barmaid: Good morning, I'm Faye, what can I get you?")
        alert(hero.basics.name + ": I'm looking for the innkeeper.")
        alert("Faye: *looks towards the kitchen* There's someone here to see you, Ma'am.")
        alert("Ma'am: I'll be out in a moment, dear.")
        alert("A moment later, a giant of a woman walks out wearing a pink dress with an apron. She has a matronly quality about her...she's also an ogre.")
        alert("Ma'am: Well hello there, I'm Sweetheart the Ogre, the owner of this establishment. What can I do for you?")
        alert(hero.basics.name + ": hello Sweetheart...")
        alert("Sweetheart: Please it's Sweetheart the Ogre, otherwise I'm doing to think you're flirting with me *she says with a wink*.")
        alert(hero.basics.name + ": alright Sweetheart the Ogre. *You discretly hand her a letter.")
        alert("Sweetheart: *takes the letter and reads it* Come speak with me in the kitchen for a moment.")
        alert("You follow her into the kitchen*")
        alert("Sweetheart: So you're, " + hero.basics.name + " our " + hero.basics.profession + ".")
        alert("Sweetheart: Before you start you're going to need to improve your relationship with the villagers.")
        alert("Sweetheart: To begin, I believe that Faldan Forgeheart over at the smithy is looking for help reclaiming the mine.")
        alert("Sweetheart: It would also get these drunken layabouts out of my inn *she says looking over at the Dwarves.")
        hero.journal.metWithContact = true;
        hero.journal.goblinSlayer = true;
        hero.journal.birdWord = true;
        hero.journal.minotaurRescue = true;
        welcomeDale.completeQuest()
        //other quests
    }
)
const birdWord = new Quest("Bird is The Word", 10,
    //event 1
    function () {
        //getting quest when you go to littleroot farm and find out about the scarecrow.
        //screaming about thieving birds
        //could look in chicken coup
        //Chris suggests you go ask the priest and priestess at the temple about putting him to rest
        //since she would prefer if it wasn't a forceful exorcism
        //maybe already know how if player is a cleric
        alert("Getting quest")
    },
    //event 2
    function () {
        //going to temple and scaring lucy revealing her wings
        //she and ray says tell you that something must be preventing him from passing on
        //could just do forced exorcism
        alert("Info from temple")
        hero.journal.ghostInfo = true;
    },
    //event 3
    function () {
        alert("Go to camp")
        //go back to Chris who says her mother's ring is missing but doesn't see how that would be a cause an issue
        //her son bo looks susipicous and when confronted says he'll tell you a secret.
        //he has a black birdy friend who likes shiny things, says she lives on other side of river
        document.getElementById("kenkuCamp").style.display = "block";
        hero.journal.discoveredBirds = true;
    },
    //event 4
    function () {
        alert("Go to Spider Cave")
        //camp is abandoned except for chirp-chirp who says tells you family was captured by spiders
        //chirp-chirp as temporary party member
        chirp2.addParty()
        document.getElementById("spiderCave").style.display = "block";
        hero.journal.birdCamp = true;
        
    },
    //event 5
    function () {
        const spider1 = new Spider("Spider 1", 1, 1)
        const spider2 = new Spider("Spider 2", 1, 1)
        const spider3 = new Spider("Spider 3", 1, 1)
        const spider4 = new Spider("Spider 4", 1, 1)
        const spider5 = new Spider("Spider 5", 1, 1)
        enemyArray = [spider1, spider2, spider3, spider4, spider5]
        combat()
        //kill spiders and free birds for ring
        //also a dead mage with letter for Ambrosius
        if (hero.currentHp > 0)
        {
        alert("Return to farm")
        hero.journal.birdRescued = true;
        hero.journal.letterForAmbrosius = true;
        document.getElementById("wizardTower").style.display = "block";
        }
        else{}
    },
    //event 6
    function () {
        //return ring to Chris and put father to rest.
        //can get job for birds
        chirp2.leaveParty()
        hero.journal.birdReward = true;
        birdWord.completeQuest()
    }
)
const hauntedManor = new Quest("The Haunte Manor", 10,
//kids going missing and going to manor to find them
)
//need to improve the dialog
const goblinSlayer = new Quest("Goblin Slayer", 20,
    //getting quest 1
    function () {
        alert("You enter the Forgeheart Smithy.")
        alert("Inside you see an old dwarf sitting in a rocking chair. One leg is replaced with a metal prosthetic.")
        alert("Faldan: *He looks at you* Lass, you have a customer.")
        alert("Surprisingly a young human woman with red hair walks out of the back.")
        alert("Ferra: How can I help you?")
        alert("You explain that you're actually here about the goblins.")
        alert("Faldan: *spits* Good, they've taken over my mine. I'll pay you " + this.reward + " if you get rid of them.")
        alert("Ferra: father, they can't kill all of those goblins by themselves. I'll go with them.")
        alert("Faldan: Very well, go with them.")
        alert("Ferra: Don't worry about me, I'm a cleric and strong from spending all day at the forge.")
        document.getElementById("dMine").style.display = "block";
        ferra.addParty()
        alert("*As you prepare to leave*")
        alert("Faldan: *looks you in the eye* If you get my little girl hurt I'll hunt you.")
        hero.journal.spokeWithFaldan = true;
        
    },
    //kobolds ask you to free others 2
    function () {
        alert("Before you enter the mine you notice some kobolds who ask you to free the other kobolds.")
    },
    //free kobolds 3
    function () {
        if (hero.journal.koboldsRescued === false) {
            alert("You free the kobolds who thank you and suggest meeting their master Sheepscale for a reward.")
            document.getElementById("sheepPasture").style.display = "block";
            hero.journal.koboldsRescued = true;
            hero.gainRel(ferra, 1)
        }
        else {
            alert("You already freed the kobolds.")
        }
    },
    //free dwarves 4
    function () {
        if (hero.journal.minersRescued === false) {
            alert("You free the miners.")
            document.getElementById("sheepPasture").style.display = "block";
            hero.journal.minersRescued = true;
            hero.gainRel(ferra, 5)
        }
        else {
            alert("You already freed the miners.")
        }
    },
    //get rewarded 5
    function () {
        alert("Faldan Rewards you.")
        alert("Ferra leaves the party")
        ferra.leaveParty()
        goblinSlayer.completeQuest()
    }
)
const littlerootWorkers = new Quest("Workers for Littleroot Farm", 10,
    function () {
        //get quest from chris to find workers
    },
    function () {
        //can get workers from dwarves, loggers, or birds
    },
    function () {
        //report to chris
    }
)
const minotaurRescue = new Quest("Of Minotaurs and Men", 10,
//being asked to find George
//tracking down george to giant cave
//encounter with giant
//returning with George for reward
)
const puzzleDungeonQuest1 = new Quest("A Puzzling Dungeon", 10,
//getting quest
//talking to wizard apprentice in dungeon
//leaving dungeon
)
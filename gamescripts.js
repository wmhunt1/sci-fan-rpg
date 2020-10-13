$("document").ready(function () {
    // your code here
});
function startGame() {
    //hides buttons until location discovered
    document.getElementById("Intro").style.display = "block";
    document.getElementById("characterCreation").style.display = "none";
    document.getElementById("Menu").style.display = "none";
    document.getElementById("valleyDale").style.display = "none";
    document.getElementById("villageDale").style.display = "none";
    document.getElementById("banditCamp").style.display = "none";
    document.getElementById("banditHideout").style.display = "none";
    document.getElementById("bbVillage").style.display = "none";
    document.getElementById("daleKeep").style.display = "none";
    document.getElementById("dMine").style.display = "none";
    document.getElementById("dOutpost").style.display = "none";
    document.getElementById("dMine").style.display = "none";
    document.getElementById("giantCave").style.display = "none";
    document.getElementById("gnollDen").style.display = "none";
    document.getElementById("goblinVillage").style.display = "none";
    document.getElementById("kenkuCamp").style.display = "none";
    document.getElementById("kurekHut").style.display = "none";
    document.getElementById("lakeDale").style.display = "none";
    document.getElementById("logCamp").style.display = "none";
    document.getElementById("ruins").style.display = "none";
    document.getElementById("sheepLair").style.display = "none";
    document.getElementById("sheepPasture").style.display = "none";
    document.getElementById("spiderCave").style.display = "none";
    document.getElementById("tradePost").style.display = "none";
    document.getElementById("villageDaleBtn").style.display = "none";
    document.getElementById("witchCottage").style.display = "none";
    document.getElementById("wizardTower").style.display = "none";
    //dungeons
    //mine dungeon
    document.getElementById("mineDungeon").style.display = "none";
    document.getElementById("mee").style.display = "none";
    document.getElementById("em").style.display = "none";
    document.getElementById("mi1").style.display = "none";
    document.getElementById("fk").style.display = "none";
    document.getElementById("mi2").style.display = "none";
    document.getElementById("fm").style.display = "none";
    document.getElementById("mi3").style.display = "none";
    document.getElementById("gBoss").style.display = "none";
    document.getElementById("puzzleDungeon1").style.display = "none";
}
function charCreation() {
    document.getElementById("Intro").style.display = "none";
    document.getElementById("characterCreation").style.display = "block";
}
function addText(x) {
    var tag = document.createElement("p")
    var text = document.createTextNode(x);
    tag.appendChild(text);
    var element = document.getElementById("gameText");
    element.appendChild(tag);
}
function combatTest() {
    const goblin1 = new Goblin("Goblin 1")
    const goblin2 = new Goblin("Goblin 2")
    const goblin3 = new Goblin("Goblin 3")
    //enemyArray = [goblin1]
    //enemyArray = [goblin1, goblin2]
    //enemyArray = [goblin1, goblin2, goblin3]
    const spider1 = new Spider("Spider 1", 1, 1)
    enemyArray = [spider1]
    combat()
}
startGame()
var charModal = document.getElementById("charModal");
// Get the button that opens the modal
var charBtn = document.getElementById("charBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
charBtn.onclick = function () {
    charModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    charModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == charModal) {
        charModal.style.display = "none";
    }
}
//equipment modal
var equipModal = document.getElementById("equipModal");
// Get the button that opens the modal
var equipBtn = document.getElementById("equipBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal
equipBtn.onclick = function () {
    equipModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    equipModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == equipModal) {
        equipModal.style.display = "none";
    }
}
//faction modal
var factionModal = document.getElementById("factionModal");
// Get the button that opens the modal
var factionBtn = document.getElementById("factionBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];
// When the user clicks on the button, open the modal
factionBtn.onclick = function () {
    factionModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    factionModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == factionModal) {
        factionModal.style.display = "none";
    }
}
//inventory modal
var invModal = document.getElementById("invModal");
// Get the button that opens the modal
var invBtn = document.getElementById("invBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];
// When the user clicks on the button, open the modal
invBtn.onclick = function () {
    invModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    invModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == invModal) {
        invModal.style.display = "none";
    }
}
//journal modal
var journalModal = document.getElementById("journalModal");
// Get the button that opens the modal
var journalBtn = document.getElementById("journalBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];
// When the user clicks on the button, open the modal
journalBtn.onclick = function () {
    journalModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    journalModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == journalModal) {
        journalModal.style.display = "none";
    }
}
function testFeature() {
}
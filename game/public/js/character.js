class Character {
    constructor(name) {
        this.actions = {
            action1: 1,
            action2: 2,
            action3: 3,
            action: 4
        };
        //rename to basics or description
        this.bio = {
            name: name
        };
        this.statBlock = {};
        this.equipment = {
            acessory: {},
            back: {},
            hands: {},
            head: {},
            feet: {},
            legs: {},
            mainHand: {},
            neck: {},
            offHand: {},
            ring1: {},
            ring2: {},
            torso: {},
        };
        this.inventory = {};
        this.journal = {};
        this.relationships = {};
        this.reputations = {};
        this.skills = {};
        this.conditions = {};
        this.immunities = {};
        this.resistances = {};
        this.weaknesses = {}
    }

}
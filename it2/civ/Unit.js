const hexH = 115; // høde bredde på hex-tile
const hexW = 100;
const hexD = 115 * 17 / 23; // forskyvning i høyde mellom rader


const UNITNAMES = ("farmer1,spear1,spear2,spear3,spear4,sword1,sword2,sword3,spear5," + "settler,horse1,horse2,spear6,mace,spear7,spear8,spear9,horse3," + "sword4,sword5,sword6,spearA,spearB,sword7,ladder,ram1,ram2," + "chariot1,chariot2,chariot3,chariot4,chariot5,ship1,ship2,ship3,ship4," + "ship5,ship6,sling,club,bow1,spearC,chariot6,axe,spearD," + "ship6,farmer2,trader,farmer3,spearD,spearE,sword8,sword9,camel," + "swordA,swordB,bow2,spearF,chariot7,farmer4,barb1,barb2,barb3," + "spearG,spearH,spearI,spearJ,swordC,swordD,swordE,spearK,farmer5," + "town1,town2,town3,town4,town5,explorer,catapult,knight,swordD").split(",");

const MOVECOST = "32112234"; // ocean,sea,grass,plain,swamp,forest,hill,mountain

const UnitDATA = {
    normal: { terrain: "00111110", move: 1 },
    boat: { terrain: "01000000", move: 4 },
    ship: { terrain: "11000000", move: 6 },
    horse: { terrain: "00111110", move: 3 },
    wagon: { terrain: "00110100", move: 2 },
    explorer: { terrain: "01111111", move: 2 }
};

const COMMANDS = {
    settler: "bgws", // build, go, wait,sleep
    normal: "bgws", // build, go, wait,sleep
    explorer: "gews" // go, explore, wait,sleep
};
const KeyCODE = {};
[..."abcdefghijklmnopqrstuvwxyz"].forEach((e, i) => KeyCODE[i + 65] = e);
// keyCode = { 65:"a",66:"b" ...}

const OFFSET = {};

UNITNAMES.forEach((e, i) => OFFSET[e] = { ix: i % 9, iy: Math.floor(i / 9) });

class Item {

    constructor({ x, y, ix, iy, klass }) {
        this.x = x;
        this.y = y;
        this.ix = ix;
        this.iy = iy;
        this.klass = klass;
        let div = document.createElement('div');
        div.className = klass;
        this.div = div;
    }

    render(px, py) {
        // div.style.backgroundImage = 'url("units.png")';  set in css
        // multiply by 100 because 64 * 911/586 ~ 100
        // the image is scaled from 586 to 911 pixels
        let div = this.div;
        let x = this.x - px;
        let y = this.y - py;
        div.style.top = -hexD + y * hexD + "px";
        div.style.left = -hexW * 7 + x * hexW + hexW * y / 2 + "px";
        div.style.backgroundPositionX = `-${this.ix * 100.7}px`;
        div.style.backgroundPositionY = `-${this.iy * 100}px`;
    }
}

class Town extends Item {
    constructor(info, getLand) {
        let { ix, iy } = OFFSET["town1"];
        let { x, y, klass, type = "normal" } = info;
        super({ x, y, ix, iy, klass });
        this.size = 1;
        this.name = "Oslo";
        this.workers = [];
        this.buildings = [];
        this.prod = 0;
        this.pop = 1000;
        this.food = 2000;
        this.status = "ok";
        getLand(this);
    }

    doCommand(key, div) {
        let k = KeyCODE[key];
        switch (k) {
            case "i":
                // inspect, inventory
                if (this.status === "ok") {
                    this.inspect(div);
                }
                break;
        }

        return;
    }

    inspect(div) {
        this.status = "inspect";
        let that = this;
        let box = document.createElement('div');
        box.className = "city-info";
        div.appendChild(box);
        box.innerHTML = `
        <ul>
          <li>pop: ${this.pop}
          <li>size: ${this.size}
          <li>workers: ${this.workers.length}
          <li>prod: ${this.prod}
          <li>food: ${this.food}
          <li>building: ${this.buildings.join()}
        </ul>
        `;

        // $FlowFixMe
        box.addEventListener("click", remove);
        function remove(e) {
            div.removeChild(box);
            that.status = "ok";
        }
    }
}

class Unit extends Item {

    constructor(name, info) {
        if (!OFFSET[name]) {
            name = "explorer"; // the given name is invalid - you get an explorer
        }
        let { ix, iy } = OFFSET[name];
        let { x, y, klass, type = "normal" } = info;
        super({ x, y, ix, iy, klass });
        this.name = name;
        this.moves = 0;
        this.done = false;
        this.sleeping = false;
        this.fortified = false;
        this.info = info;
        this.udata = UnitDATA[type];
        this.cando = COMMANDS[name] || COMMANDS[type] || "gws";
    }

    facing(dx, dy) {
        let s = dx;
        if (dx == 0) {
            s = dy;
        }
        this.div.style.transform = `scaleX(${-s})`;
    }

    build() {
        return;
    }

    // t is terrain type number
    canMove(t) {
        if (this.done) return false; // turn used up
        // if (this.moves < 1) return false; // not enuf moves left
        return this.udata.terrain.charAt(t) !== "0";
    }

    moveMe(t) {
        // assumes move is allowed - do accounting
        let cost = +MOVECOST.charAt(t);
        this.moves = Math.max(0, this.moves - cost);
        this.done = this.moves === 0;
    }

    get isActive() {
        return !(this.done || this.sleeping || this.fortified);
    }

    doCommand(key, next) {
        let k = KeyCODE[key];
        if (this.cando.includes(k)) {
            console.log(this.name, " does a ", k);
            switch (k) {
                case "w":
                    // wait 1 turn
                    this.done = true;
                    next();
                    return;
                case "s":
                    // sleep until enemy  or click
                    this.done = true;
                    this.sleeping = true;
                    next();
                    return;
                case "b":
                    this.build();
            }
        }
        return; // can't do that
    }

    newTurn() {
        this.moves = this.udata.move;
        this.done = false;
    }

    static get Units() {
        return UNITNAMES;
    }
}

class Settler extends Unit {
    constructor(info, builder) {
        super("settler", info);
        this.builder = builder;
    }

    build() {
        this.builder(this);
    }
}
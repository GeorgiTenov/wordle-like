

const words = [
    "abase", "abate", "abbey", "abbot", "abide", "ablet", "abode", "abort", "about", "above",
    "abuse", "abyss", "actor", "acute", "adapt", "adept", "admit", "adobe", "adopt", "adore",
    "adult", "affix", "afire", "again", "agent", "agile", "aging", "aglow", "agree", "ahead",
    "aider", "aisle", "alarm", "album", "alert", "alike", "alive", "allow", "aloft", "alone",
    "along", "aloof", "aloud", "alpha", "altar", "alter", "amber", "amend", "amuse", "angel",
    "anger", "angle", "angry", "ankle", "apple", "apply", "arena", "argue", "arise", "armed",
    "armor", "aroma", "array", "arrow", "arson", "aside", "askew", "asset", "atlas", "attic",
    "audio", "audit", "aunty", "avail", "avert", "avoid", "await", "awake", "award", "aware",
    "awful", "basal", "basin", "basis", "batch", "bathe", "beach", "beady", "beast", "begin",
    "being", "belly", "below", "bench", "berry", "birth", "black", "blade", "blame", "blank",
    "blast", "blaze", "bleak", "blend", "bless", "blimp", "blind", "blink", "bliss", "block",
    "blood", "bloom", "blown", "blunt", "blush", "board", "boast", "boney", "bonus", "boost",
    "booth", "bound", "bowel", "brace", "brain", "brake", "brand", "brass", "brave", "bread",
    "break", "breed", "brick", "bride", "brief", "bring", "brisk", "broad", "broil", "broke",
    "brood", "brook", "broom", "brush", "build", "bulky", "burst", "buyer", "cabin", "cable",
    "cagey", "camel", "canal", "candy", "cargo", "carol", "carry", "carve", "caste", "catch",
    "cause", "cease", "cedar", "chafe", "chain", "chair", "chalk", "chant", "chaos", "charm",
    "chart", "chase", "cheap", "cheat", "check", "cheek", "cheer", "chess", "chest", "chief",
    "child", "chill", "choir", "choke", "chunk", "cider", "claim", "class", "clean", "clear",
    "cliff", "cling", "cloak", "clock", "clone", "close", "cloth", "cloud", "clown", "clump",
    "coach", "coast", "color", "comet", "comic", "coral", "corer", "cough", "count", "court",
    "cover", "craft", "crash", "crate", "crave", "craze", "creak", "cream", "creep", "crept",
    "crisp", "crook", "cross", "crowd", "crown", "crush", "curve", "cycle", "dance", "dandy",
    "dared", "dated", "dealt", "death", "debut", "decry", "defer", "deity", "delay", "delta",
    "demon", "denim", "depth", "derby", "desks", "devil", "dined", "dodge", "donor", "doubt",
    "dozen", "draft", "drain", "drake", "drama", "drank", "drawn", "dream", "dress", "dried",
    "drill", "drink", "drive", "droid", "drown", "drunk", "dusty", "eager", "eagle", "early",
    "earth", "easel", "ebony", "edict", "eight", "elect", "elite", "elbow", "elder", "elope",
    "email", "embed", "emote", "empty", "enact", "ended", "entry", "equal", "equip", "erase",
    "error", "essay", "ethic", "event", "every", "exact", "exalt", "exist", "extra", "fable",
    "facet", "faith", "false", "fancy", "fatal", "fault", "favor", "feast", "fetch", "fiber",
    "field", "fiery", "fight", "final", "first", "fixed", "flame", "flank", "flash", "fleet",
    "flesh", "flick", "flint", "float", "flock", "flood", "floor", "flora", "flown", "fluid",
    "focus", "foggy", "force", "forge", "forte", "forth", "forty", "found", "frame", "fraud",
    "fresh", "front", "frost", "fruit", "fuzzy", "gamer", "gauge", "gears", "ghost", "giant",
    "given", "glade", "gland", "glare", "glass", "glide", "globe", "gloom", "glory", "glove",
    "gnome", "grace", "grade", "graft", "grain", "grant", "grasp", "grass", "grave", "great",
    "grief", "grill", "grind", "groan", "grove", "guard", "guess", "guest", "guide", "guild",
    "habit", "hairy", "halve", "happy", "hardy", "harsh", "haste", "hasty", "haunt", "hazel",
    "heard", "heart", "heavy", "hedge", "heron", "hitch", "hoard", "hobby", "honey", "honor",
    "horse", "hotel", "house", "hover", "human", "humor", "hurry", "ideal", "idiot", "image",
    "imply", "index", "inner", "input", "inset", "irony", "issue", "ivory", "jelly", "jewel",
    "joint", "jolly", "judge", "juice", "jumpy", "kneel", "knife", "knock", "known", "label",
    "labor", "latch", "later", "latte", "laugh", "layer", "learn", "leave", "ledge", "lemon",
    "light", "limit", "linen", "liver", "lobby", "local", "lodge", "logic", "loose", "lover",
    "lunar", "lunch", "lying", "magic", "major", "maker", "march", "marry", "match", "maybe",
    "mayor", "meant", "medal", "media", "medic", "melon", "mercy", "metal", "meter", "might",
    "minor", "model", "money", "month", "moral", "motor", "mount", "mouse", "mouth", "movie",
    "music", "naive", "nasty", "naval", "nerve", "never", "newer", "night", "noble", "noise",
    "north", "noted", "novel", "nurse", "nylon", "ocean", "offer", "often", "olive", "onion",
    "opera", "orbit", "organ", "other", "ought", "outer", "paint", "panel", "panic", "paper",
    "party", "pasta", "patch", "peace", "pearl", "pedal", "penal", "penny", "perch", "phase",
    "phone", "photo", "piano", "piece", "pilot", "pinch", "place", "plaid", "plane", "plant",
    "plate", "plead", "plumb", "plush", "point", "porch", "pound", "power", "press", "price",
    "pride", "prime", "print", "prior", "prize", "probe", "proof", "proud", "prowl", "punch",
    "pupil", "quake", "queen", "query", "quest", "quick", "quiet", "quilt", "quote", "radar",
    "radio", "raise", "rally", "ranch", "range", "rapid", "rarely", "reach", "react", "ready",
    "rebel", "refer", "relax", "reply", "reset", "retro", "rider", "ridge", "right", "risky",
    "rival", "river", "robot", "rocky", "rogue", "royal", "rugby", "ruler", "rumor", "safer",
    "sandy", "sauce", "scary", "scene", "scent", "scope", "score", "scout", "screw", "shade",
    "shady", "shaft", "shake", "shaky", "shame", "shape", "shark", "sharp", "sheer", "shelf",
    "shell", "shift", "shine", "shiny", "shirt", "shock", "shoot", "shore", "short", "shout",
    "shove", "shown", "sight", "silly", "since", "skate", "skier", "skill", "skirt", "slave",
    "sleek", "sleep", "slept", "slice", "slide", "slope", "smart", "smell", "smile", "smoke",
    "snake", "snare", "sneak", "sober", "solar", "solid", "solve", "space", "spare", "spark",
    "speak", "speed", "spend", "spice", "spike", "spine", "spite", "split", "spoil", "spoon",
    "sport", "spray", "stack", "stage", "stain", "stake", "stale", "stare", "start", "state",
    "steak", "steal", "steam", "steel", "steep", "steer", "stiff", "still", "stock", "stone",
    "store", "storm", "story", "stove", "strap", "straw", "strip", "stuck", "style", "sugar",
    "suite", "sunny", "super", "swear", "sweep", "sweet", "sword", "table", "taken", "taste",
    "teach", "tempo", "thank", "theme", "there", "these", "thick", "thief", "thing", "think",
    "third", "throw", "tiger", "tired", "title", "token", "total", "touch", "tough", "tower",
    "trace", "trade", "trail", "train", "trash", "treat", "trend", "tried", "trophy", "trust",
    "truth", "twice", "uncle", "union", "unite", "unity", "urban", "usage", "usual", "vague",
    "valid", "value", "vapor", "vault", "vivid", "vocal", "voice", "voter", "wagon", "waste",
    "watch", "water", "weary", "weigh", "weird", "whale", "wheat", "where", "whisk", "white",
    "whole", "width", "windy", "woman", "world", "worry", "worse", "worth", "wrist", "wrong",
    "yacht", "yield", "young", "youth", "zebra", "zesty", "zonal"
  ];

const container = document.getElementById("container");
const wordWas = document.querySelector("word");
const win = document.getElementById("win");

const WORD_LENGTH = 5;
const divs = [];
const TEST_WORD = words[Math.floor(Math.random() * words.length)];
let currentWord = "";
const fields = [];

const createLine = () => {
    for(var j=0;j<WORD_LENGTH;j++){
        let line = document.createElement("div");
        line.classList.add("line");
        for(var i=0;i<WORD_LENGTH;i++){
            let div = document.createElement("div");
            div.classList.add("child");
            line.appendChild(div);
            divs.push(div);
        }
    container.append(line);
}
};

const onKeyup = (e) => {
    const regex = /^[a-zA-Z]+$/;
    if(e.key.length > 1 || !regex.test(e.key)){
        return;
    }
    for(let div of divs){
        if(div.textContent == ''){
            fields.push(createField(div,e.key));
            div.textContent = e.key;
            currentWord += e.key;
            if(currentWord.length == WORD_LENGTH){
                if(isCurrentWordInWordsList()){
                    const holders = createHolders();
                    checkIfCharAtSameIndex(holders);
                }else{
                  clearCurrentFields();
                }
                currentWord = '';
                fields.length = 0;
                displayCorrectWord();
            }
            break;
        }
    }
}

const displayCorrectWord = () => {
    let areSomeEmpty = divs.some(div => div.textContent == '');
    if(!areSomeEmpty){
        word.style.display = 'flex';
        word.textContent = `The word is: ${TEST_WORD}`;
    }
}

const clearCurrentFields = () => {
    for(var i=0;i<fields.length;i++){
        fields[i].div.textContent = '';
    }
}

const isCurrentWordInWordsList = () =>{
    return words.some(word => word == currentWord);
}

const createField = (div, key) => {
    return new Field(div,key);
}

const checkIfCharAtSameIndex = (holders) => {
    let guessedCounter = 0;
    let splitedCurrentWord = currentWord.split('');
    let splittedWord = TEST_WORD.split('');
    for(var i=0;i<WORD_LENGTH;i++){
        let holder = holders.find(e => e.char == splitedCurrentWord[i]);
        if(splitedCurrentWord[i] === splittedWord[i]){
            holder.incrementTimes();
            holder.onRightPLace = true;
            fields[i].isCorrect = true;
            fields[i].div.style.backgroundColor = 'green';
            guessedCounter++;
        }else if(TEST_WORD.includes(splitedCurrentWord[i])){
            holder.incrementTimes();
            fields[i].div.style.backgroundColor = 'orange';
        }else{
            fields[i].div.style.backgroundColor = 'darkgrey';
        }
    }
    
    for(var i=0;i<fields.length;i++){
        let field = fields[i];
        let holder = holders.find(holder => holder.char == field.key);
        if(holder){
            let appeared = getCharAppearInWordList().find(e => e.char == holder.char);
            if(appeared.timesMet < holder.timesCharMet && !field.isCorrect){
                field.div.style.backgroundColor = 'darkgrey';
                holder.timesCharMet--;
            }
        }
    }
    if(guessedCounter == WORD_LENGTH){
        win.style.display = 'flex';
        window.removeEventListener("keyup",onKeyup);
        return;
    }
 
}

const createHolders = () =>{
    const arr = TEST_WORD.split("");
    const holders = [];
    for(e of arr){
        let contains = holders.some(holder => holder.char == e);
        if(!contains){
            holders.push(createHolder(e));
        }
    }
    return holders;
}

const createHolder = (char) => {
    return new Holder(char, 0);
}

const getCurrentWordCharsWithTimesMet = () =>{
    let chars = [];
    for(char of currentWord){
        chars.push({char:char, times:0, alreadyChecked: false});
    }
    return chars;
}

const charMetMoreThanPossible = (char, timesMet) =>{
    const charAppearanceObj = getCharAppearInWordList();
    let charMet = charAppearanceObj.find(e => e.char == char);
    if(charMet == undefined){
        return false;
    }
    return timesMet > charMet.timesMet; 
};

const getCharAppearInWordList = () => {
    let splittedWord = TEST_WORD.split('');
    const keyTimesArray = [];
    for(var i=0;i<WORD_LENGTH;i++){
        let timesCharMet = 0;
        for(var j=0;j<WORD_LENGTH;j++){
            if(splittedWord[i] == splittedWord[j]){
                timesCharMet++;
            }
        }
        if(!keyTimesArray.some(e => e.char == splittedWord[i])){
            keyTimesArray.push({char: splittedWord[i], timesMet: timesCharMet, alreadyChecked: false});
        }
    }
    return keyTimesArray;
}
window.addEventListener("keyup", onKeyup);
word.style.display = 'none';
win.style.display = 'none';

createLine();

class Holder{
    char
    timesCharMet
    onRightPLace
    constructor(char, timesCharMet){
        this.char = char;
        this.timesCharMet = timesCharMet;
    }
    incrementTimes = () => {this.timesCharMet++};
}

class Field{
    div
    key
    correct
    constructor(div,key){
        this.div = div;
        this.key = key;
    }
    setCorrect = (correct) => this.correct = correct;
}
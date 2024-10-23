function HouseKeeper(NumberofExp, name, cleaningRepertoire) {
    this.NumberofExp = NumberofExp; // Fixed the typo
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function(){
        alert("Cleaning the room....");
    }
}


const houseKeeper1 = new HouseKeeper(5, "Jane", ["kitchen", "bedroom"], ["bedroom"]);
console.log(houseKeeper1);
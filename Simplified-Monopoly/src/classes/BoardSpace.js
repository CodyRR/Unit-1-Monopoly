
export default class Space {
    constructor(name, spaceNum, spaceValueStart, spaceValueBought, isStartSpace, nextSpaceNum){

        this.name = name;
        this.spaceNum = spaceNum;
        this.owner = "Sale";
        this.color = "gray";
        this.spaceIsBought = false;
        this.spaceValueStart = spaceValueStart;
        this.spaceValueBought = spaceValueBought;
        this.isStartSpace = isStartSpace;
        if(isStartSpace){
            this.owner = "Start";
        }
        this.nextSpaceNum = nextSpaceNum;
        this.spaceIsOccupied = []
    }
}
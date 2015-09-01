
// ======= ======= ======= TARGET OBJECTS ======= ======= =======
// ======= ======= ======= TARGET OBJECTS ======= ======= =======
// ======= ======= ======= TARGET OBJECTS ======= ======= =======

function initTargets(items_Data, locators_Data, behaviors_Data, targets_Data) { 
    console.log("initTargets");

    var targetsArray = [];

	var se_left1 = new Target (
		/* targetKey:   */ 'se_left1', 
		/* targetName:  */ 'Scrims Slot', 
		/* offsetLoc:   */ [110,0,50,200,1], 
		/* onScreenLoc: */ [0,0,50,200,0], 
		/* guestList:   */ ['modifier1'], 
		/* occupier:    */ 0,
		targetsArray
	);

	var se_bottom1 = new Target (
		/* targetKey:   */ 'se_bottom1', 
		/* targetName:  */ 'Stand Clamp', 
		/* offsetLoc:   */ [655,400,200,200,1], 
		/* onScreenLoc: */ [0,0,200,200,0], 
		/* guestList:   */ ['stand'], 
		/* occupier:    */ 0,
		targetsArray
	);

	var pg_light = new Target (
		/* targetKey:   */ 'pg_light', 
		/* targetName:  */ 'Baby Stand Mount', 
		/* offsetLoc:   */ [555,270,80,80,1], 
		/* onScreenLoc: */ [0,0,80,80,0], 
		/* guestList:   */ ['light'], 
		/* occupier:    */ 0,
		targetsArray
	);

    return targetsArray;
}

function Target (targetKey, targetName, offsetLoc, onScreenLoc, guestList, occupier, targetsArray) {
    console.log(' Target');

    this.targetKey = targetKey;
    this.targetName = targetName;
    this.offsetLoc = offsetLoc;
    this.onScreenLoc = onScreenLoc;
    this.guestList = guestList;
    this.occupier = occupier;
    this.targetsArray = targetsArray;

    this.targetsArray.push(this);

}




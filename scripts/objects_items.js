
// ======= ======= ======= ITEM OBJECTS ======= ======= =======
// ======= ======= ======= ITEM OBJECTS ======= ======= =======
// ======= ======= ======= ITEM OBJECTS ======= ======= =======

function initItems(locators_Data, behaviors_Data, targets_Data) { 
    console.log("initItems");

    var itemsArray = [];

    // ======= demo items =======
	var button1 = new Item (
		/* itemKey:   */ 'button1', 
		/* itemName:  */ 'Button', 
		/* itemType:  */ 'demo', 
		/* itemClass: */ 'button', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['button1', 0, [1,2]],
		/* initLoc:   */ [0,0,0,0,1],
		/* dropLoc:   */ [0,0,0,0,1],
		/* itemTargets:   */ 0, 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C:  */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var toggle1 = new Item (
		/* itemKey:   */ 'toggle1', 
		/* itemName:  */ 'Toggle', 
		/* itemType:  */ 'demo', 
		/* itemClass: */ 'toggle', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['toggle1', 0, [1,2]],
		/* initLoc:   */ [0,0,0,0,1],
		/* dropLoc:   */ [0,0,0,0,1],
		/* itemTargets:   */ 0, 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C:  */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var setting1 = new Item (
		/* itemKey:   */ 'setting1', 
		/* itemName:  */ 'setting', 
		/* itemType:  */ 'demo', 
		/* itemClass: */ 'setting', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['setting1', 0, [1,2,3,4,5,6,7]],
		/* initLoc:   */ [0,0,0,0,1],
		/* dropLoc:   */ [0,0,0,0,1],
		/* itemTargets:   */ 0, 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C:  */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var slider1 = new Item (
		/* itemKey:   */ 'slider1', 
		/* itemName:  */ 'slider', 
		/* itemType:  */ 'demo', 
		/* itemClass: */ 'slider', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['slider1', 0, [1,2,3,4,5,6,7]],
		/* initLoc:   */ [0,0,0,0,1],
		/* dropLoc:   */ [0,0,0,0,1],
		/* itemTargets:   */ 0, 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C:  */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var dragger1 = new Item (
		/* itemKey:   */ 'dragger1', 
		/* itemName:  */ 'dragger', 
		/* itemType:  */ 'demo', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['dragger1', 0, [1,2,3,4,5,6,7]],
		/* initLoc:   */ [0,0,0,0,1],
		/* dropLoc:   */ [0,0,0,0,1],
		/* itemTargets:   */ 0, 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C:  */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var trackpad1 = new Item (
		/* itemKey:   */ 'trackpad1', 
		/* itemName:  */ 'Trackpad', 
		/* itemType:  */ 'demo', 
		/* itemClass: */ 'trackpad', 
		/* itemState: */ 'default', 
		/* frameset:  */ 0,
		/* initLoc:   */ [0,0,0,0,1],
		/* dropLoc:   */ [0,0,0,0,1],
		/* itemTargets:   */ 0, 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C:  */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

    // ======= lights =======
	var f150 = new Item (
		/* itemKey:   */ 'f150', 
		/* itemName:  */ 'Fresnel 150W', 
		/* itemType:  */ 'light', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['f150', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ [targets_Data.se_left1, targets_Data.se_bottom1],
		/*   locators_T:  */ [[0,0,0,0,1], [0,0,0,0,1]],
		/*   behaviors_T: */ 0,
		/* itemControls:  */ ['spotFlood'],
		/*   locators_C:  */ [[0,0,0,0,1]],
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var f300 = new Item (
		/* itemKey:   */ 'f300', 
		/* itemName:  */ 'Fresnel 300W', 
		/* itemType:  */ 'light', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['f300', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ [targets_Data.se_left1, targets_Data.se_bottom1],
		/*   locators_T:  */ [[0,0,0,0,1], [0,0,0,0,1]],
		/*   behaviors_T: */ 0,
		/* itemControls:  */ ['spotFlood'],
		/*   locators_C:  */ [[0,0,0,0,1]],
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var f650 = new Item (
		/* itemKey:   */ 'f650', 
		/* itemName:  */ 'Fresnel 650W', 
		/* itemType:  */ 'light', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['f650', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ [targets_Data.se_left1], 	// activate for setup only  ...  , targets_Data.se_bottom1
		/*   locators_T:  */ [[110,0,50,200,0]],			// locators > host  ...  , [675,440,200,200,1]
		/*   behaviors_T: */ 0,
		/* itemControls:  */ ['spotFlood', 'dimmer'],						// string is replaced by itemObject after all items created
		/*   locators_C:  */ [[240,0,110,270,1], [140,0,110,270,1]],
		/*   behaviors_C: */ [behaviors_Data.bh_setting2, behaviors_Data.bh_setting2],
		itemsArray 
	);

	var f1000 = new Item (
		/* itemKey:   */ 'f1000', 
		/* itemName:  */ 'Fresnel 1000W', 
		/* itemType:  */ 'light', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['f1000', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ [targets_Data.se_left1, targets_Data.se_bottom1],
		/*   locators_T:  */ [[0,0,0,0,1], [0,0,0,0,1]],
		/*   behaviors_T: */ 0,
		/* itemControls:  */ ['spotFlood'],
		/*   locators_C:  */ [[0,0,0,0,1]],
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var LED = new Item (
		/* itemKey:   */ 'LED', 
		/* itemName:  */ 'LED', 
		/* itemType:  */ 'light', 
		/* itemClass: */ 'slider', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['LED', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ ['dimmer'], 
		/*   locators_C:  */ [[100,100,100,100,1]],
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var softlight = new Item (
		/* itemKey:   */ 'softlight', 
		/* itemName:  */ 'softlight', 
		/* itemType:  */ 'light', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['softlight', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ ['dimmer'], 
		/*   locators_C:  */ [[100,100,100,100,1]],
		/*   behaviors_C: */ 0,
		itemsArray 
	);

    // ======= controls =======
	var spotFlood = new Item (
		/* itemKey:   */ 'spotFlood', 
		/* itemName:  */ 'Spot/Flood', 
		/* itemType:  */ 'control', 
		/* itemClass: */ 'setting', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['spotFlood', 0, [0,1,2,3,4,5,6]],
		/* initLoc:   */ [10,10,20,20,1],	// offset xywh
		/* dropLoc:   */ [0,0,0,0,1],
		/* itemTargets:   */ 0, 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C:  */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var dimmer = new Item (
		/* itemKey:   */ 'dimmer', 
		/* itemName:  */ 'dimmer', 
		/* itemType:  */ 'control', 
		/* itemClass: */ 'setting', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['dimmer', 0, [0,1,2,3,4,5,6]],
		/* initLoc:   */ [10,10,20,20,1],
		/* dropLoc:   */ [0,0,0,0,1],
		/* itemTargets:   */ 0, 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C:  */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

    // ======= modifiers =======
	var scrim1 = new Item (
		/* itemKey:   */ 'scrim1', 
		/* itemName:  */ 'scrim1', 
		/* itemType:  */ 'modifier1', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['scrim1', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ [targets_Data.se_left1], 
		/*   locators_T:  */ 0,			// !locators > guest
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C   */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var scrim2 = new Item (
		/* itemKey:   */ 'scrim2', 
		/* itemName:  */ 'scrim2', 
		/* itemType:  */ 'modifier1', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['scrim2', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ [targets_Data.se_left1], 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C   */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var scrim3 = new Item (
		/* itemKey:   */ 'scrim3', 
		/* itemName:  */ 'scrim3', 
		/* itemType:  */ 'modifier1', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['scrim3', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ [targets_Data.se_left1], 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C   */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var toughspun = new Item (
		/* itemKey:   */ 'toughspun', 
		/* itemName:  */ 'Toughspun', 
		/* itemType:  */ 'modifier1', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['diff1', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ [targets_Data.se_left1], 
		/*   locators_T:  */ 0,			// !locators > guest
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C   */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var opal = new Item (
		/* itemKey:   */ 'opal', 
		/* itemName:  */ 'Opal', 
		/* itemType:  */ 'modifier1', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['diff2', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ [targets_Data.se_left1], 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C   */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var halfWhite = new Item (
		/* itemKey:   */ 'halfWhite', 
		/* itemName:  */ 'HalfWhite', 
		/* itemType:  */ 'modifier1', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['diff3', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ [targets_Data.se_left1], 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C   */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var toughWhite = new Item (
		/* itemKey:   */ 'toughWhite', 
		/* itemName:  */ 'ToughWhite', 
		/* itemType:  */ 'modifier1', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['diff4', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ [targets_Data.se_left1], 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C   */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	var rolux = new Item (
		/* itemKey:   */ 'rolux', 
		/* itemName:  */ 'Rolux', 
		/* itemType:  */ 'modifier1', 
		/* itemClass: */ 'dragger', 
		/* itemState: */ 'default', 
		/* frameset:  */ ['diff5', 0, [0]],
		/* initLoc:   */ [0,0,0,0,0], 
		/* dropLoc:   */ [0,0,0,0,0],
		/* itemTargets:   */ [targets_Data.se_left1], 
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* itemControls:  */ 0, 
		/*   locators_C   */ 0,
		/*   behaviors_C: */ 0,
		itemsArray 
	);

	// howIdidIt1, treeDiag1, pageObject, itemObjects, locsBhvrs, locators, behaviors, canvases1, canvases2, framesets, imagesNames

	var howIdidIt1 = new Item ('howIdidIt1',  'howIdidIt1',  'graphic', 'button', 'default', ['howIdidIt1', 0, [0]], [0,0,0,0,0], [0,0,0,0,0], 0,0,0,0,0,0, itemsArray);
	var treeDiag1 = new Item ('treeDiag1',  'treeDiag1',  'graphic', 'button', 'default', ['treeDiag1', 0, [0]], [0,0,0,0,0], [0,0,0,0,0], 0,0,0,0,0,0, itemsArray);
	var pageObject = new Item ('pageObject',  'pageObject',  'graphic', 'button', 'default', ['pageObject', 0, [0]], [0,0,0,0,0], [0,0,0,0,0], 0,0,0,0,0,0, itemsArray);
	var itemObjects = new Item ('itemObjects',  'itemObjects',  'graphic', 'button', 'default', ['itemObjects', 0, [0]], [0,0,0,0,0], [0,0,0,0,0], 0,0,0,0,0,0, itemsArray);
	var locsBhvrs = new Item ('locsBhvrs',  'locsBhvrs',  'graphic', 'button', 'default', ['locsBhvrs', 0, [0]], [0,0,0,0,0], [0,0,0,0,0], 0,0,0,0,0,0, itemsArray);
	var locators = new Item ('locators',  'locators',  'graphic', 'button', 'default', ['locators', 0, [0]], [0,0,0,0,0], [0,0,0,0,0], 0,0,0,0,0,0, itemsArray);
	var behaviors = new Item ('behaviors',  'behaviors',  'graphic', 'button', 'default', ['behaviors', 0, [0]], [0,0,0,0,0], [0,0,0,0,0], 0,0,0,0,0,0, itemsArray);
	var canvases1 = new Item ('canvases1',  'canvases1',  'graphic', 'button', 'default', ['canvases1', 0, [0]], [0,0,0,0,0], [0,0,0,0,0], 0,0,0,0,0,0, itemsArray);
	var canvases2 = new Item ('canvases2',  'canvases2',  'graphic', 'button', 'default', ['canvases2', 0, [0]], [0,0,0,0,0], [0,0,0,0,0], 0,0,0,0,0,0, itemsArray);
	var framesets = new Item ('framesets',  'framesets',  'graphic', 'button', 'default', ['framesets', 0, [0]], [0,0,0,0,0], [0,0,0,0,0], 0,0,0,0,0,0, itemsArray);
	var imagesNames = new Item ('imagesNames',  'imagesNames',  'graphic', 'button', 'default', ['imagesNames', 0, [0]], [0,0,0,0,0], [0,0,0,0,0], 0,0,0,0,0,0, itemsArray);
	var selfie = new Item ('selfie',  'selfie',  'graphic', 'button', 'default', ['selfie', 0, [0]], [0,0,0,0,0], [0,0,0,0,0], 0,0,0,0,0,0, itemsArray);

    return itemsArray;
}

function Item (itemKey, itemName, itemType, itemClass, itemState, frameset, initLoc, dropLoc, itemTargets, locators_T, behaviors_T, itemControls, locators_C, behaviors_C, itemsArray) {
    console.log(' Item');

    this.itemKey = itemKey;
    this.itemName = itemName;
    this.itemType = itemType;
    this.itemClass = itemClass;
    this.itemState = itemState;
    this.frameset = frameset;
    this.initLoc = initLoc;
    this.dropLoc = dropLoc;
    this.itemTargets = itemTargets;
    this.locators_T = locators_T;
    this.behaviors_T = behaviors_T;
    this.itemControls = itemControls;
    this.locators_C = locators_C;
    this.behaviors_C = behaviors_C;
    this.itemsArray = itemsArray;

    this.itemsArray.push(this);

}


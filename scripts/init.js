

function initDemo() {
    console.log("initDemo");

    // ======= first page ======
    var nextPageKey = 'db_10000';

    // var locatorsArray = initLocators();
    var locators_Data = {};

    var behaviorsArray = initBehaviors(locators_Data);
    var behaviors_Data = { int_distance:behaviorsArray[0], labels_onOff:behaviorsArray[1], bh_setting1:behaviorsArray[2], bh_slider1:behaviorsArray[3], bh_dragger1:behaviorsArray[4], bh_dragger2:behaviorsArray[5], trackpad_canvasBg:behaviorsArray[6], moveScrim:behaviorsArray[7], moveDiff:behaviorsArray[8], canvas_AB:behaviorsArray[9], dragger_arc:behaviorsArray[10], threeWay:behaviorsArray[11], bh_setting2:behaviorsArray[12], graphic:behaviorsArray[13], swapLight:behaviorsArray[14] };

    var targetsArray = initTargets(locators_Data, behaviors_Data);
    var targets_Data = { se_left1:targetsArray[0], se_bottom1:targetsArray[1], pg_light:targetsArray[2] };

    var itemsArray = initItems(locators_Data, behaviors_Data, targets_Data);
    var items_Data = { button1:itemsArray[0], toggle1:itemsArray[1], setting1:itemsArray[2], slider1:itemsArray[3], dragger1:itemsArray[4], trackpad1:itemsArray[5], f150:itemsArray[6], f300:itemsArray[7], f650:itemsArray[8], f1000:itemsArray[9], LED:itemsArray[10], softlight:itemsArray[11], spotFlood:itemsArray[12], dimmer:itemsArray[13], scrim1:itemsArray[14], scrim2:itemsArray[15], scrim3:itemsArray[16], toughspun:itemsArray[17], opal:itemsArray[18], halfWhite:itemsArray[19], toughWhite:itemsArray[20], rolux:itemsArray[21], howIdidIt1:itemsArray[22], treeDiag1:itemsArray[23], pageObject:itemsArray[24], itemObjects:itemsArray[25], locsBhvrs:itemsArray[26], locators:itemsArray[27], behaviors:itemsArray[28], canvases1:itemsArray[29], canvases2:itemsArray[30], framesets:itemsArray[31], imagesNames:itemsArray[32], selfie:itemsArray[33] };

    var textArray = initTexts();
    var text_Data = { t_intensity:textArray[0], t_int_power:textArray[1], t_int_distance:textArray[2], t_scrims:textArray[3], t_spotFlood:textArray[4], t_quality:textArray[5], t_qual_hardSoft:textArray[6], t_diffusion:textArray[7], t_qual_hard_near:textArray[8], t_qual_hard_far:textArray[9], t_qual_soft_near:textArray[10], t_qual_soft_far:textArray[11], t_position:textArray[12], t_keyShadows:textArray[13], t_backAngle:textArray[14], t_threePoint:textArray[15], t_intro:textArray[16] };

    var pagesArray = initPages(locators_Data, behaviors_Data, targets_Data, items_Data, text_Data);

    // ======= list-making utility (targets, items, pages) =======
    // makeConnector('behaviors', behaviorsArray); // 'behaviors', behaviorsArray   'items', itemsArray   'text', textArray

    // ======= replace string labels with actual objects =======
    assignItemObjects(itemsArray);
    assignPageObjects(pagesArray, itemsArray);

    // ======= load first page =======
    getSelectedPage(nextPageKey, pagesArray);

}

// ======= called by init() ======= ======= ======= ======= ======= ======= =======
function getSelectedPage(nextPageKey, pagesArray) {
    console.log("getSelectedPage");

    var tempClickTrail = [];

    for (var i = 0; i < pagesArray.length; i++) {
        if (nextPageKey == pagesArray[i].pageKey) {
            pagesArray[i].makePage(nextPageKey, tempClickTrail);
            break;
        }
    }
}

// ======= check object utilities ======= ======= =======
function assignItemObjects(itemsArray) {
    console.log("assignItemObjects");

    var tempItemArray = [];

    // ------- get each item -------
    for (var i = 0; i < itemsArray.length; i++) {
        nextItem = itemsArray[i].itemKey;
        nextControls = itemsArray[i].itemControls;

        // ------- get each control item if any -------
        if (nextControls.length > 0) {
            for (var j = 0; j < nextControls.length; j++) {
                nextControlString = nextControls[j];
                // console.log("   item/control: " + nextItem + '/' + nextControlString);

                // ------- check: items or pages? -------
                for (var k = 0; k < itemsArray.length; k++) {
                    checkItem = itemsArray[k].itemKey;
                    if (checkItem == nextControlString) {
                        // console.log("   checkItem: " + checkItem);
                        tempItemArray.push(itemsArray[k]);
                        break;
                    }
                }
            }
        }

        // ------- replace string names with pageObjects or itemObjects -------
        if (tempItemArray.length > 0) {
            itemsArray[i].itemControls = tempItemArray;
        }
        // console.log("tempItemArray: " + tempItemArray);
        tempItemArray = [];
    }
}

function assignPageObjects(pagesArray, itemsArray) {
    console.log("assignPageObjects");

    var tempPageArray = [];
    var tempItemArray = [];

    // ------- get each page -------
    for (var i = 0; i < pagesArray.length; i++) {
        nextPage = pagesArray[i].pageName;
        nextMenu = pagesArray[i].items_Menu;
        nextGroup = pagesArray[i].items_Group;

        // ------- get each menu item if any -------
        if (pagesArray[i].items_Menu.length > 0) {
            // console.log(' ');
            // console.log("-- nextPage: " + nextPage);
            for (var j = 0; j < pagesArray[i].items_Menu.length; j++) {
                nextItem = pagesArray[i].items_Menu[j];
                console.log("   nextItem: " + nextItem);

                // ------- check: items are pages? -------
                for (var k = 0; k < pagesArray.length; k++) {
                    checkPage = pagesArray[k].pageName;
                    checkItem = pagesArray[k].itemKey;
                    if (checkPage == nextItem) {
                        tempPageArray.push(pagesArray[k]);
                        break;
                    } else if (checkItem == nextItem) {
                        tempItemArray.push(pagesArray[k]);
                        break;
                    }
                }
            }
            // console.log("   tempPageArray: " + tempPageArray);
            // console.log("   tempItemArray: " + tempItemArray);
        }

        // ------- replace string names with pageObjects or itemObjects -------
        if (tempPageArray.length > 0) {
            pagesArray[i].items_Menu = tempPageArray;
        } else if (tempItemArray.length > 0) {
            console.log('ALERT: itemObject/pageObject conflict');
        }
        tempPageArray = [];
        tempItemArray = [];
    }
}

function makeConnector(whichArray, objectArray) {
    console.log("makeConnector");

    // targets, items, pages

    var objectString = '';

    if (whichArray == 'pages') {
        var connectorString = 'var pages_Data = { ';
    } else if (whichArray == 'items') {
        var connectorString = 'var items_Data = { ';
    } else if (whichArray == 'targets') {
        var connectorString = 'var targets_Data = { ';
    } else if (whichArray == 'behaviors') {
        var connectorString = 'var behaviors_Data = { ';
    } else if (whichArray == 'text') {
        var connectorString = 'var text_Data = { ';
    }

    for (var i = 0; i < objectArray.length; i++) {
        nextArray = objectArray[i];
        if (whichArray == 'pages') {
            nextName = objectArray[i].pageName;
            nextArray = 'pagesArray';
            nextobjectList = 'pages_Data.';
        } else if (whichArray == 'items') {
            nextName = objectArray[i].itemKey;
            nextArray = 'itemsArray';
            nextobjectList = 'items_Data.';
        } else if (whichArray == 'targets') {
            nextName = objectArray[i].targetName;
            nextArray = 'targetsArray';
            nextobjectList = 'targets_Data.';
        } else if (whichArray == 'behaviors') {
            nextName = objectArray[i].bName;
            nextArray = 'behaviorsArray';
            nextobjectList = 'behaviors_Data.';
        } else if (whichArray == 'text') {
            nextName = objectArray[i].textName;
            nextArray = 'textArray';
            nextobjectList = 'text_Data.';
        }

        connectorString = connectorString + nextName + ':' + nextArray + '[' + i + '], ';
        objectString = objectString + nextobjectList + nextName + ', ';
    }
    console.log("connectors: " + connectorString);
    console.log("objectString: " + objectString);
}




/* ======= object connector lists ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= =======

// targets
targets_Data.se_left1, targets_Data.se_bottom1

// items
items_Data.button1, items_Data.toggle1, items_Data.setting1, items_Data.slider1, items_Data.dragger1, items_Data.trackpad1, items_Data.f150, items_Data.f350, items_Data.f650, items_Data.f1K, items_Data.LED, items_Data.softlight, items_Data.spotFlood, items_Data.dimmer, items_Data.scrim1, items_Data.scrim2, items_Data.scrim3, items_Data.diff1, items_Data.diff2, items_Data.diff3, items_Data.diff4, items_Data.diff5, items_Data.howIdidIt1, items_Data.treeDiag1, items_Data.pageObject, items_Data.itemObjects, items_Data.locsBhvrs, items_Data.locators, items_Data.behaviors, items_Data.canvases1, items_Data.canvases2, items_Data.framesets, items_Data.imagesNames, items_Data.selfie,

// behaviors
behaviors_Data.int_distance, behaviors_Data.labels_onOff, behaviors_Data.bh_setting1, behaviors_Data.bh_slider1, behaviors_Data.bh_dragger1, behaviors_Data.trackpad_canvasBg, behaviors_Data.moveScrim, behaviors_Data.moveDiff, behaviors_Data.canvas_AB, behaviors_Data.dragger_arc, behaviors_Data.threeWay, behaviors_Data.bh_setting2, behaviors_Data.graphic, behaviors_Data.swapLight

// text
text_Data.t_spotFlood, text_Data.t_scrims, text_Data.t_threePoint, text_Data.t_keyShadows, text_Data.t_int_distance


 ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= */


// ======= ======= ======= utilities ======= ======= ======= utilities ======= ======= ======= utilities ======= ======= ======= //
// ======= ======= ======= utilities ======= ======= ======= utilities ======= ======= ======= utilities ======= ======= ======= //
// ======= ======= ======= utilities ======= ======= ======= utilities ======= ======= ======= utilities ======= ======= ======= //



// ======= cleanup parent div container ======= ======= ======= ======= ======= ======= ======= 
function cleanUpContainer(whichContainer) {
    // console.log("cleanUpContainer");

    // remove elements from specific container
    if (whichContainer) {
        if (whichContainer.hasChildNodes()) {
            while (whichContainer.firstChild) {
                whichContainer.removeChild(whichContainer.firstChild);
            }
        }   
    }
}


// ======= cleanup child div container  ======= ======= ======= ======= ======= ======= ======= 
function cleanUpDiv(whichDiv) {
    console.log("cleanUpDiv");

    // check if whichDiv is itemName OR HTMLelement (get div HTMLelement via name if required)
    if (!whichDiv.id) {
        var whichDiv = document.getElementById(whichDiv);
    }

    // remove existing div to allow for new div and item
    whichDiv.parentNode.removeChild(whichDiv);

}


// ======= cleanup by class  ======= ======= ======= ======= ======= ======= ======= 
function cleanUpClass(whichClass) {
    // console.log("cleanUpClass");

    // remove class of elements
    if (whichClass) {
        var whichElements = document.getElementsByClassName(whichClass);        
        for (var i = 0; i < whichElements.length ; i++) {                   
            nextElement = whichElements[i];
            nextId = nextElement.id;
            cleanUpContainer(nextElement);
            nextElement.classList.remove(whichClass);
            i = i - 1;  // NOTE: this line due to removal of class causes iteration to skip next item!
        }
    }
}


// ======= events ======= ======= ======= ======= ======= ======= ======= 
function addEventSimple(obj,evt,fn) {
    // console.log('addEventSimple');
    if (obj.addEventListener)
        obj.addEventListener(evt,fn,false);
    else if (obj.attachEvent)
        obj.attachEvent('on'+evt,fn);
}


function removeEventSimple(obj,evt,fn) {
    // console.log('removeEventSimple');
    if (obj.removeEventListener)
        obj.removeEventListener(evt,fn,false);
    else if (obj.detachEvent)
        obj.detachEvent('on'+evt,fn);
}


// ======= check object utilities ======= ======= =======
function checkClickTrail(pageObject) {
    console.log("-- checkClickTrail");
    if (pageObject.clickTrail.length > 0) {
        var clickTrailNames = '';
        for (var i = 0; i < pageObject.clickTrail.length; i++) {
            nextPage = pageObject.clickTrail[i].pageName;
            if (clickTrailNames == '') {
                clickTrailNames = clickTrailNames + nextPage;
            } else {
                clickTrailNames = clickTrailNames + ', ' + nextPage;
            }
        }
    }
    console.log("   clickTrailNames1: " + clickTrailNames);
}

function checkPages(pageArray) { 
    console.log("-- checkPages");
    console.log("   page count: " + pageArray.length);

    for (var i = 0; i < pageArray.length; i++) {
        pageName = pageArray[i].pageName;
        console.log("   pageName: " + pageName);
    }
}

function checkText(textArray) { 
    console.log("-- checkText");
    console.log("   text count: " + textArray.length);

    for (var i = 0; i < textArray.length; i++) {
        textName = textArray[i].textName;
        console.log("   textName: " + textName);
    }
}

function checkBoxpaths(boxpathArray) { 
    console.log("-- checkBoxpaths");
    console.log("   path count: " + boxpathArray.length);

    for (var i = 0; i < boxpathArray.length; i++) {
        pathName = boxpathArray[i].pathName;
        console.log("   pathName: " + pathName);
    }
}

function checkActors(actorArray) { 
    console.log("-- checkActors");
    console.log("   actor count: " + actorArray.length);

    for (var i = 0; i < actorArray.length; i++) {
        actorName = actorArray[i].actorName;
        console.log("   actorName: " + actorName);
    }
}


// // ======= ======= ======= ARCHIVE ======= ======= ======= =======
// // ======= ======= ======= ARCHIVE ======= ======= ======= =======
// // ======= ======= ======= ARCHIVE ======= ======= ======= =======
// // ======= ======= ======= ARCHIVE ======= ======= ======= =======




    // console.log("pageKey: " + this.pageKey);
    // console.log("pageName: " + this.pageName);
    // console.log("prevPage: " + this.prevPage);
    // console.log("behaviors: " + this.behaviors);
    // console.log("item_Setup: " + this.item_Setup);
    // console.log("items_Menu: " + this.items_Menu);
    // console.log("items_Group: " + this.items_Group);
    // console.log("items_Actor: " + this.items_Actor);
    // console.log("lineup_S: " + this.lineup_S);
    // console.log("lineup_M: " + this.lineup_M);
    // console.log("lineup_G: " + this.lineup_G);
    // console.log("boxpaths_A: " + this.boxpaths_A);
    // console.log("targets:  " + this.targets);
    // console.log("textObject: " + this.textObject);
    // console.log("canvasL: " + this.canvasL);
    // console.log("canvasR: " + this.canvasR);
    // console.log("canvasM: " + this.canvasM);


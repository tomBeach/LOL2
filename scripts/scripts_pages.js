

// ======= setParams ======= ======= ======= ======= ======= ======= =======
Page.prototype.makePage = function(thisPageKey, tempClickTrail) {
    console.log(' ');
    console.log('-- -- makePage -- --');
    console.log(" PAGE NAME: " + this.pageName);
    console.log(" thisPageKey: " + thisPageKey);

    // ======= clean off prev page items ======= ======= =======
    var titleContainer = document.getElementById("titleText");
    var instrContainer = document.getElementById("instrText");
    var occupyContainer = document.getElementById("occupier");
    var menuContainer = document.getElementById("menu");
    var groupContainer = document.getElementById("group");
    var setupContainer = document.getElementById("setup");
    var actorsContainer = document.getElementById("actors");
    var targetsContainer = document.getElementById("targets");
    var controlsContainer = document.getElementById("controls");
    var trackpadContainer = document.getElementById("trackpad");
    var canvasContainer = document.getElementById("canvasFrames");

    cleanUpContainer(titleContainer);
    cleanUpContainer(instrContainer);
    cleanUpContainer(occupyContainer);
    cleanUpContainer(menuContainer);
    cleanUpContainer(groupContainer);
    cleanUpContainer(setupContainer);
    cleanUpContainer(actorsContainer);
    cleanUpContainer(targetsContainer);
    cleanUpContainer(controlsContainer);
    cleanUpContainer(trackpadContainer);
    cleanUpContainer(canvasContainer);

    // ======= init components =======
    this.initPageParams();
    this.activateNextPrev();
    this.initCanvas();

    // ======= make nav bars ======= ======= =======
    var navLinksArray = this.buildNavLinks(thisPageKey);
    this.makeNavBars(navLinksArray, thisPageKey);

    // ======= update clickTrail =======
    this.clickTrail = tempClickTrail;
    this.clickTrail.push(this);

    // ======= place menu/group/actor/text items =======
    this.placeAllItems();
    this.placeTargets();
    this.placeText();

    // ======= audio =======
    if (this.pageKey == 'db_50000') {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'YoungFrankenstien.wav');
        console.log('  === AUDIO ===  ' + audioElement);
        audioElement.play();
    }
}


// ======= initCanvas ======= ======= ======= ======= ======= ======= =======
Page.prototype.initCanvas = function() {
    console.log('initCanvas');

    var canLw = parseInt(this.canLw);
    var canLh = parseInt(this.canLh);
    var canMw = parseInt(this.canMw);
    var canMh = parseInt(this.canMh);
    var imageIndexString, groupCount, frameIndexL;

    // ======= show/hide canvases =======
    if (this.pageKey == 'db_00000') {
        $('#canvasL').hide();
        $('#canvasM').hide();
    } else {
        if (this.canvasL == 0) {
            $('#canvasL').fadeOut(500);
        } else {
            $("#canvasL").css("display", "inline");
            $('#canvasL').fadeIn(500);
        }
        if (this.canvasM == 0) {
            $('#canvasM').fadeOut(500);
        } else {
            $("#canvasM").css("display", "inline");
            $('#canvasM').fadeIn(500);
        }
    }

    // ======= 2way/3way groups have 2/3-digit indexes =======
    var checkGroupFrames = this.canvasL[1];
    if (Array.isArray(checkGroupFrames)) {
        groupCount = checkGroupFrames.length;
    } else {
        groupCount = 1;
    }

    // ======= canvasL init frame =======
    if (this.canvasL != 0) {
        var canvasL = document.getElementById("canvasL");
        var contextL = canvasL.getContext("2d");

        this.imagePoolL = makeImagePool2(this.canvasL, groupCount);

        if (groupCount == 1) {
            frameIndexL = this.canvasL[1];
            nextImageElementL = this.imagePoolL[frameIndexL];
        } else if (groupCount == 2) {
            frameIndexL1 = this.canvasL[1][0];
            frameIndexL2 = this.canvasL[1][1];
            nextImageElementL = this.imagePoolL[frameIndexL1][frameIndexL2];
        } else if (groupCount == 3) {
            frameIndexL1 = this.canvasL[1][0];
            frameIndexL2 = this.canvasL[1][1];
            frameIndexL3 = this.canvasL[1][2];
            nextImageElementL = this.imagePoolL[frameIndexL1][frameIndexL2][frameIndexL3];
        }

        nextImageElementL.onload = function() {  // ...then set the onload handler...
            console.log("-- canvasL LOADED --");
            contextL.drawImage(nextImageElementL, 0, 0, 720, 405, 0, 0, canLw, canLh);
        };

    }

    // ======= canvasM init frame =======
    if (this.canvasM != 0) {
        var canvasM = document.getElementById("canvasM");
        var contextM = canvasM.getContext("2d");

        this.imagePoolM = makeImagePool2(this.canvasM, groupCount);

        if (groupCount == 1) {
            frameIndexM = this.canvasM[1];
            nextImageElementM = this.imagePoolM[frameIndexM];
        } else if (groupCount == 2) {
            frameIndexM1 = this.canvasM[1][0];
            frameIndexM2 = this.canvasM[1][1];
            nextImageElementM = this.imagePoolM[frameIndexM1][frameIndexM2];
        } else if (groupCount == 3) {
            frameIndexM1 = this.canvasM[1][0];
            frameIndexM2 = this.canvasM[1][1];
            frameIndexM3 = this.canvasM[1][2];
            nextImageElementM = this.imagePoolM[frameIndexM1][frameIndexM2][frameIndexM3];
        }

        nextImageElementM.onload = function() {  // ...then set the onload handler...
            console.log("-- canvasM LOADED --");
            contextM.drawImage(nextImageElementM, 0, 0, 720, 405, 0, 0, canMw, canMh);
        };

    }

    // ======= makeImagePool =======
    function makeImagePool2(canvasFrameset, groupCount) {
        console.log('makeImagePool2');

        var imageName, imageIndex, framesetX, framesetY, framesetZ, nextIndexX, nextIndexY, imageElement, imageString;
        var imagePath = canvasFrameset[0];

        // ======= strip folder name =======
        var folderFlag = imagePath.indexOf('/');
        if (folderFlag > 0) {
            imageName = imagePath.substring(folderFlag + 1, imagePath.length);
        } else {
            imageName = canvasFrameset[0];
        }

        // ======= 1 dimension framesets =======
        if (groupCount == 1) {
            imageIndexX = canvasFrameset[1];
            framesetX = canvasFrameset[2];

            // ======= make image array (1D) =======
            var imagePool = new Array();
            for (i = 0; i < framesetX.length; i++) {
                imagePool[i] = 0;
            }

            // ======= load image array (1D) =======
            for (var i = 0; i < framesetX.length; i++) {
                nextIndex = framesetX[i];
                imageString = ('images/' + imagePath + '_' + nextIndex + '.png');
                imageElement = document.createElement("img");
                imageElement.id = imageName + '_' + nextIndex;
                imageElement.setAttribute('src', imageString);
                imagePool[nextIndex] = imageElement;
            }

        // ======= 2 dimension framesets =======
        } else if (groupCount == 2) {
            imageIndexX = canvasFrameset[1][0];
            imageIndexY = canvasFrameset[1][1];
            framesetX = canvasFrameset[2][0];
            framesetY = canvasFrameset[2][1];

            // ======= make image array (2D) =======
            var imagePool = new Array();
            for (i = 0; i < framesetX.length; i++) {
                imagePool[i] = new Array();
                for (j = 0; j < framesetY.length; j++) {
                    imagePool[i][j] = 0;
                }
            }

            // ======= load image array (2D) =======
            for (var i = 0; i < imagePool.length; i++) {
                nextIndexX = framesetX[i];
                nextImageArray= imagePool[nextIndexX];
                for (var j = 0; j < nextImageArray.length; j++) {
                    nextIndexY = framesetY[j];
                    imageString = ('images/' + imagePath + '_' + nextIndexX + nextIndexY + '.png');
                    imageElement = document.createElement("img");
                    imageElement.id = imageName + '_' + nextIndexX + nextIndexY;
                    imageElement.setAttribute('src', imageString);
                    imagePool[nextIndexX][nextIndexY] = imageElement;
                }
            }

        // ======= 3 dimension framesets =======
        } else if (groupCount == 3) {
            imageIndexX = canvasFrameset[1][0];
            imageIndexY = canvasFrameset[1][1];
            imageIndexZ = canvasFrameset[1][2];
            framesetX = canvasFrameset[2][0];
            framesetY = canvasFrameset[2][1];
            framesetZ = canvasFrameset[2][2];

            // ======= make image array (3D) =======
            var imagePool = new Array();
            for (i = 0; i < framesetX.length; i++) {
                imagePool[i] = new Array();
                for (j = 0; j < framesetY.length; j++) {
                    imagePool[j] = new Array();
                    for (k = 0; k < framesetZ.length; k++) {
                        imagePool[i][j][k] = 0;
                    }
                }
            }


            // ======= load images into array structure =======
            for (var i = 0; i < imagePool.length; i++) {
                nextIndexX = framesetX[i];
                nextImageArray= imagePool[nextIndexX];
                for (var j = 0; j < nextImageArray.length; j++) {
                    nextIndexY = framesetY[j];
                    nextImageArrayZ = nextImageArray[j];
                    for (var k = 0; k < nextImageArrayZ.length; k++) {
                        nextIndexZ = framesetZ[k];
                        imageString = ('images/' + imagePath + '_' + nextIndexX + nextIndexY + nextIndexZ + '.png');
                        imageElement = document.createElement("img");
                        imageElement.id = imageName + '_' + nextIndexX + nextIndexY + nextIndexZ;
                        imageElement.setAttribute('src', imageString);
                        imagePool[nextIndexX][nextIndexY][nextIndexZ] = imageElement;
                    }
                }
            }
        }

        return imagePool;
    }
}


// ======= page params ======= ======= ======= ======= ======= ======= =======
Page.prototype.initPageParams = function() {
    console.log('initPageParams');

    // nav container
    this.navContainerW = 720;

    // grid padding
    this.gridPad = 10;

    // canvasL
    this.canLx = 10;
    this.canLy = 240;
    this.canLw = 720;
    this.canLh = 405;
    this.canLmid = 340;        // middle column

    // canvasM
    this.canMx = 740;
    this.canMy = 75;
    this.canMw = 240;
    this.canMh = 135;

    // tracker
    this.trackerW = 24;
    this.trackerH = 24;
    this.trackpadW = 160;
    this.trackpadH = 90;

    // interactive objects (behaviors)
    this.screenActor = initScreenActor(this);
    this.screenTarget = initScreenTarget(this);

}


// ======= place all items ======= ======= ======= ======= ======= ======= =======
Page.prototype.placeAllItems = function() {
    console.log("placeAllItems");

    // itemGroup, groupArray, locatorArray, behaviorArray
    var itemContainer;

    if (this.items_Setup != 0) {
        iconFlag = false;
        this.toggleText();
        this.placeSetupItem();
    }
    if (this.items_Menu != 0) {
        iconFlag = true;
        itemContainer = document.getElementById('menu');
        this.placeItemCollection(itemContainer, iconFlag, this.items_Menu, this.locators_M, this.behaviors_M);
    }
    if (this.items_Group != 0) {
        iconFlag = true;
        itemContainer = document.getElementById('group');
        this.placeItemCollection(itemContainer, iconFlag, this.items_Group, this.locators_G, this.behaviors_G);
    }
    if (this.items_Actor != 0) {
        iconFlag = false;
        itemContainer = document.getElementById('actors');
        this.placeItemCollection(itemContainer, iconFlag, this.items_Actor, this.locators_A, this.behaviors_A);
    }
}


// ======= place item collection ======= ======= ======= ======= ======= ======= =======
Page.prototype.placeItemCollection = function(whichContainer, iconFlag, groupArray, locatorArray, behaviorArray) {
    console.log("placeItemCollection");

    var nextX, nextY, nextW, nextH
    var nextActor, nextActorElement, nextLocator, nextBehavior;
    var nextName, nextClass, nextState, nextGroup, nextImage, nextFrameIndex;

    // ======= place each item from current collection (menu, group, actor) =======
    for (var i = 0; i < groupArray.length; i++) {
        nextActor = groupArray[i];
        nextLocator = locatorArray[i];
        nextBehavior = behaviorArray[i];

        // ======= item object params (group/actors) =======
        if (!nextActor.pageName) {
            nextKey = nextActor.itemKey;
            nextName = nextActor.itemName;
            nextClass = nextBehavior.bClass;
            nextState = nextActor.itemState;
            nextImage = nextActor.frameset[0];
            nextFrameIndex = nextActor.frameset[1];
            nextFrameset = nextActor.frameset[2];
            if (nextClass == 'trackpad') {
                nextLocator = nextBehavior.boxXYWH;
            }

        // ======= page object params (menu) =======
        } else {
            nextKey = nextActor.pageKey;
            nextName = nextActor.pageName;
        }

        // ======= 3way items have class/group/box arrays =======
        if (Array.isArray(nextClass)) {
            for (var j = 0; j < nextClass.length; j++) {
                checkItem = nextBehavior.bGroup[j];
                if (checkItem == nextName) {
                    nextClass = nextClass[j];
                    break;
                }
            }
        }

        // ======= get location info from page =======
        if (Array.isArray(nextLocator)) {
            nextX = nextLocator[0];
            nextY = nextLocator[1];
            nextW = nextLocator[2];
            nextH = nextLocator[3];
            nextS = nextLocator[4];
        } else {

        // ======= get location info from grid =======
            var nextXYWHS = this.makeGrid();
            nextX = nextXYWHS[0];
            nextY = nextXYWHS[1];
            nextW = nextXYWHS[2];
            nextH = nextXYWHS[3];
            nextS = nextXYWHS[4];
        }

        // ======= all item params =======
        nextZ = 3;
        nextType = 'img';
        nextPosition = 'absolute';
        nextDisplay = 'block';
        urlString = "url('images/" + nextImage + "_0.png') 0 0";

        // ======= make trackpad =======
        if (nextClass == 'trackpad') {
            whichContainer = document.getElementById('trackpad');

            // ======= trackpad container =======
            trackpad = this.makeElement2(whichContainer, 'trackpad', 0, nextClass, nextPosition, nextDisplay, nextX, nextY, nextW, nextH, nextZ, iconFlag, urlString);

            // ======= tracker icon =======
            var nextClass = 'tracker';
            var trackerW = this.trackerW;
            var trackerH = this.trackerH;
            var trackpadCenterX = nextW/2;
            var trackpadCenterY = nextH/2;
            var trackerCenterX = trackerW/2;
            var trackerCenterY = trackerH/2;
            var nextX = (trackpadCenterX - trackerCenterX);
            var nextY = (trackpadCenterY - trackerCenterY);
            var nextZ = 9;
            var urlString = '';

           // ======= tracker div =======
            tracker = this.makeElement2(whichContainer, nextKey, 0, nextClass, nextPosition, nextDisplay, nextX, nextY, trackerW, trackerH, nextZ, iconFlag, urlString);

            trackpad.appendChild(tracker);
            whichContainer.appendChild(trackpad);
            document.body.appendChild(whichContainer);
            this.activateActor(tracker, 'tracker');

            // ======= store tracker position =======
            trackerX = nextX + trackpadCenterX - trackerCenterX;
            trackerY = nextY + trackpadCenterY - trackerCenterY;
            nextActor.initLoc = [trackerX, trackerY, this.trackerW, this.trackerH, 1];
            nextActor.dropLoc = [trackerX, trackerY, this.trackerW, this.trackerH, 1];

        // ======= make item/actor =======
        } else {

            if (Array.isArray(nextFrameset)) {
                iconFlag = true;
            }

            // ======= make item element =======
            nextActorElement = this.makeElement2(whichContainer, nextKey, 0, nextClass, nextPosition, nextDisplay, nextX, nextY, nextW, nextH, nextZ, iconFlag, urlString);

            // ======= set inic/drop XYWHS for item =======
            nextActor.initLoc = [nextX, nextY, nextW, nextH, nextS];
            nextActor.dropLoc = [nextX, nextY, nextW, nextH, nextS];

            // ======= activate actor (except graphics) =======
            if (nextClass != 'graphic') {
                this.activateActor(nextActorElement, nextClass);
            }
        }
    }
}


// ======= page params ======= ======= ======= ======= ======= ======= =======
Page.prototype.makeElement2 = function(whichContainer, elKey, elIndex, elClass, elPosition, elDisplay, elX, elY, elW, elH, elZ, iconFlag, urlString) {
    console.log("makeElement2");
    console.log("  elClassA: " + elClass);
    console.log("  iconFlag: " + iconFlag);

    // if (elClass.indexOf('icon') > 0) {
    //     iconFlag = true;
    //     elClass = elClass.substring(0, (elClass.indexOf('icon') - 1));
    //     console.log("  elClassB: " + elClass);
    // }

    newDiv = document.createElement('div');
    newDiv.id = elKey;
    newDiv.classList.add(elClass);
    // if (iconFlag == true) {
    //     newDiv.classList.add('icon');
    // }
    newDiv.style.position = elPosition;
    newDiv.style.display = elDisplay;
    newDiv.style.zIndex = elZ;

    newDiv.style.left = elX + 'px';
    newDiv.style.top = elY + 'px';
    newDiv.style.width = elW + 'px';
    newDiv.style.height = elH + 'px';
    newDiv.style.background = urlString;
    newDiv.style.backgroundSize =  elW + 'px ' + elH + 'px';        // bgSize goes AFTER bg!!! [Chrome bug]

    whichContainer.appendChild(newDiv);
    document.body.appendChild(whichContainer);
    return newDiv;
}


// ======= placeSetupItem ======= ======= ======= ======= ======= ======= =======
Page.prototype.placeSetupItem = function() {
    console.log("placeSetupItem");

    var setupItem, setupLocator, setupBehavior, setupElement;
    var setupKey, setupClass, setupState, setupGroup, setupImage, setupFrameIndex;
    var setupContainer = document.getElementById('setup');

    // ======= page object data =======
    setupItem = this.items_Setup;
    setupLocator = this.locators_S;
    setupTargets = this.targets_S;
    setupControls = this.controls_S;

    // ======= setup object data =======
    setupKey = setupItem.itemKey;
    setupClass = 'setup';
    setupState = setupItem.itemState;
    setupImage = setupItem.frameset[0];
    setupFrameIndex = 0;        // setupItem defaults to 0
    setupFrameset = setupItem.frameset[2];

    // ======= setupItem XYWHS =======
    setupX = setupLocator[0];
    setupY = setupLocator[1];
    setupW = setupLocator[2];
    setupH = setupLocator[3];
    setupS = setupLocator[4];
    setupZ = 2;

    // ======= set initLoc and temp dropLoc from page locator =======
    setup.initLoc = [setupX, setupY, setupW, setupH, setupS];
    setup.dropLoc = [setupX, setupY, setupW, setupH, setupS];

    // ======= setup element params =======
    setupPosition = 'absolute';
    setupDisplay = 'block';
    urlString = "url('images/" + setupImage + "_0.png') 0 0";

    // ======= make setup element =======
    this.makeElement2(setupContainer, setupKey, setupFrameIndex, setupClass, setupPosition, setupDisplay, setupX, setupY, setupW, setupH, setupZ, iconFlag, urlString);

    // ======= make target elements =======
    if (setupTargets != 0) {
        this.placeChildItems(setupTargets, setupItem, 'targets');
    }

    // ======= make control elements =======
    if (setupControls != 0) {
        this.placeChildItems(setupControls, setupItem, 'controls');
    }
}


// ======= placeChildItems ======= ======= ======= ======= ======= ======= =======
Page.prototype.placeChildItems = function(childItemsArray, setupItem, childType) {
    console.log("placeChildItems");

    for (var i = 0; i < childItemsArray.length; i++) {
        nextChild = childItemsArray[i];
        if (childType == 'targets') {
            var whichContainer = document.getElementById('targets');
            nextChild.occupier = 0;
            itemName = nextChild.targetKey;
            itemClass = 'target';
            itemXYWHS = setupItem.locators_T[i];
            srcString = '';
            urlString = '';
            itemZ = 3;
        } else {
            var whichContainer = document.getElementById('controls');
            itemName = nextChild.itemKey;
            itemImage = nextChild.frameset[0];
            itemClass = 'setting';
            itemXYWHS = setupItem.locators_C[i];
            srcString = '';
            urlString = "url('images/" + itemImage + "_0.png') 0 0";
            itemZ = 4;
        }
        itemType = 'div';
        itemPosition = 'absolute';
        itemDisplay = 'block';
        itemX = itemXYWHS[0] + setupX;
        itemY = itemXYWHS[1] + setupY;
        itemW = itemXYWHS[2];
        itemH = itemXYWHS[3];
        itemS = itemXYWHS[4];

        // ======= make target element =======
        itemElement = this.makeElement2(whichContainer, itemName, 0, itemClass, itemPosition, itemDisplay, itemX, itemY, itemW, itemH, itemZ, iconFlag, urlString);

        // ======= store absolute target location in target object =======
        if (childType == 'targets') {
            nextChild.onScreenLoc[0] = itemX;
            nextChild.onScreenLoc[1] = itemY;
            this.activateTarget(itemElement, 'target');

        // ======= set initLoc and dropLoc from setup item XY plus offsets =======
        } else {
            nextChild.initLoc = [itemX, itemY, itemW, itemH, itemS];
            nextChild.dropLoc = [itemX, itemY, itemW, itemH, itemS];
            itemElement.classList.add('anim');
            this.activateActor(itemElement, itemClass);
        }
    }
}


/// ======= page params ======= ======= ======= ======= ======= ======= =======
Page.prototype.placeTargets = function() {
    console.log('placeTargets');

    var nextTarget, nextBehavior, targetKey, targetElement;
    var targetClass, targetXYWHS, targetX, targetY, targetW, targetH, targetS;
    var targetsContainer = document.getElementById('targets');

    for (var i = 0; i < this.targets_T.length; i++) {
        nextTarget = this.targets_T[i];
        nextBehavior = this.behaviors_T[i];
        targetName = nextTarget.targetKey;
        nextTarget.occupier = 0;

        targetClass = 'button';
        targetXYWHS = this.locators_T[i];
        targetX = targetXYWHS[0];
        targetY = targetXYWHS[1];
        targetW = targetXYWHS[2];
        targetH = targetXYWHS[3];
        targetS = targetXYWHS[4];

        // ======= make target element =======
        targetElement = this.makeElement2(targetsContainer, targetName, 0, 'target', 'absolute', 'block', targetX, targetY, targetW, targetH, 2, '');
        targetElement.style.pointerEvents = 'all';

        targetsContainer.appendChild(targetElement);
        document.body.appendChild(targetsContainer);
        this.activateTarget(targetElement, 'target');

        // ======= store absolute target location in target object =======
        nextTarget.onScreenLoc[0] = targetX;
        nextTarget.onScreenLoc[1] = targetY;
    }
}


// ======= placeText ======= ======= ======= ======= ======= ======= =======
Page.prototype.placeText = function() {
    console.log("placeText");

    var titleTextDiv = document.getElementById("titleText");
    var instrTextDiv = document.getElementById("instrText");

    // ======= get textObject title text or title string =======
    titleText = this.pageText.pgTopic;
    instrText = this.pageText.pgText;

    if (titleText) {
        titleTextDiv.innerHTML = titleText;
    }
    if (instrText) {
        instrTextDiv.innerHTML = instrText;
    }

}


// ======= swapTargetItems ======= ======= ======= ======= ======= ======= =======
Page.prototype.swapTargetItems = function(newTargetItem, whichTarget) {
    console.log('swapTargetItems');

    // ======= return occupier (if present) to group =======
    if (whichTarget.occupier != 0) {
        this.returnOccupier(whichTarget.occupier);
    }

    // ======= set newTargetItem as current occupier =======
    whichTarget.occupier = newTargetItem;
    var occupierContainer = document.getElementById("occupier");
    var occupierName = newTargetItem.itemName;
    var occupierX = (whichTarget.onScreenLoc[0] - 20);
    var occupierY = (whichTarget.onScreenLoc[1] - 20);
    occupierContainer.innerHTML = occupierName;
    occupierContainer.style.left = occupierX + 'px';
    occupierContainer.style.top = occupierY + 'px';

}



// ======= return occupier to group======= ======= ======= ======= =======
Page.prototype.returnOccupier = function(returnItem) {
    console.log("returnOccupier");

    var nextKey = returnItem.itemKey;
    var nextClass = returnItem.itemClass;
    var actorImage = returnItem.frameset[0];
    var actorsContainer = document.getElementById("actors");
    var urlString = "url('images/" + actorImage + "_0.png') 0 0";

    var nextX = returnItem.initLoc[0];
    var nextY = returnItem.initLoc[1];
    var nextW = returnItem.initLoc[2];
    var nextH = returnItem.initLoc[3];
    var nextZ = 3;

    // ======= make icon or image =======
    returnItemElement = this.makeElement2(actorsContainer, nextKey, 0, nextClass, 'absolute', 'block', nextX, nextY, nextW, nextH, nextZ, iconFlag, urlString);

    returnItemElement = document.getElementById(nextKey);
    returnItem.dropLoc = [nextX, nextY, nextW, nextH, nextS];
    this.activateActor(returnItemElement, nextClass);

}


// ======= place item collection ======= ======= ======= ======= ======= ======= =======
Page.prototype.toggleText = function() {
    console.log("toggleText");
        var titleTextDiv = document.getElementById("titleText");
        var instrTextDiv = document.getElementById("instrText");
        if (titleTextDiv.textContent != '') {
            titleTextDiv.textContent = '';
        }
        if (instrTextDiv.textContent != '') {
            instrTextDiv.textContent = '';
        }

}

// ======= activate actor ======= ======= ======= ======= =======
Page.prototype.activateTarget = function(whichElement, whichClass) {
    console.log('activateTarget: ' + whichElement.id + ' / ' + whichClass);
    // if (typeof element == 'string')
    //     element = document.getElementById(element);
    whichElement.onmouseover = this.screenTarget.targetMouseOver;     // onmouseover
    whichElement.onmouseout = this.screenTarget.targetMouseOut;       // onmouseout
}


// ======= activate actor ======= ======= ======= ======= =======
Page.prototype.activateActor = function(whichElement, whichClass) {
    console.log('activateActor: ' + whichElement.id + ' / ' + whichClass);
    // if (typeof element == 'string')
    //     element = document.getElementById(element);
    whichElement.onmouseover = this.screenActor.actorMouseOver;     // onmouseover
    whichElement.onmouseout = this.screenActor.actorMouseOut;       // onmouseout
    whichElement.onmousedown = this.screenActor.actorSelect;        // onmousedown
}


// ======= activate nextPrev links ======= ======= ======= ======= =======
Page.prototype.activateNextPrev = function() {
    console.log("activateNextPrev");

    var pageObject = this.pageObject;
    var prevLink = document.getElementById("prevLink");
    var nextLink = document.getElementById("nextLink");

    prevLink.href = '#';
    prevLink.onclick = function() { pageObject.getPrevPage(event); };
    nextLink.href = '#';
    nextLink.onclick = function() { pageObject.getNextPage(event); };
}


// ======= High End Utilities ======= ======= ======= ======= ======= ======= ======= ======= =======
// ======= High End Utilities ======= ======= ======= ======= ======= ======= ======= ======= =======
// ======= High End Utilities ======= ======= ======= ======= ======= ======= ======= ======= =======




// ======= return page names array ======= ======= ======= ======= =======
Page.prototype.getKeysNnames = function(whichPagesArray) {
    console.log("getKeysNnames");

    var nextPageKey, nextPageName;
    var keysArray = [];
    var namesArray = [];

    for (var i = 0; i < whichPagesArray.length; i++) {
        nextPageKey = whichPagesArray[i].pageKey;
        nextPageName = whichPagesArray[i].pageName;
        keysArray.push(nextPageKey);
        namesArray.push(nextPageName);
    }
    return [keysArray, namesArray];
}


// ======= get Page ======= ======= ======= ======= =======
Page.prototype.getPage = function(whichPageKey) {
    console.log("getPage");

    for (var i = 0; i < this.pagesArray.length; i++) {
        if (whichPageKey == this.pagesArray[i].pageKey) {
            return this.pagesArray[i];
            break;
        }
    }
}


// ======= return pageKey ======= ======= ======= ======= =======
Page.prototype.getPageKey = function(whichPageObject) {
    console.log("getPageKey");

    var whichPageKey = whichPageObject.pageKey;
    for (var i = 0; i < this.pagesArray.length; i++) {
        if (whichPageKey == this.pagesArray[i].pageKey) {
            return this.pagesArray[i].pageKey;
            break;
        }
    }
}


// ======= get title and instruction text ======= ======= ======= ======= =======
Page.prototype.getPageText = function() {
    console.log("getPageText");

    var textName = this.pageText;

    for (var i = 0; i < textArray.length; i++) {
        nextTextObject = textArray.i;
        if (nextTextObject.textKey == textName) {
            titleText = nextTextObject.pgTopic      // title = Topic
            instrText = nextTextObject.pgText      // instr = Text
        }
    }
    return [titleText, instrText];
}


// ======= MOUSEDOWN event Button (menu icon) ======= ======= ======= ======= =======
Page.prototype.makeNextPage = function(nextPageKey) {
    console.log("-- makeNextPage");

    var tempClickTrail = this.clickTrail;
    this.clickTrail = [];

    for (var i = 0; i < this.pagesArray.length; i++) {
        if (nextPageKey == this.pagesArray[i].pageKey) {

            // ======= next pageObject found =======
            this.pagesArray[i].makePage(nextPageKey, tempClickTrail);
        }
    }
}


// ======= MOUSEDOWN event on navBar ======= ======= ======= =======
Page.prototype.initNextNavPage = function(event) {
    console.log("initNextNavPage");

    var tempClickTrail = this.clickTrail;
    this.clickTrail = [];

    // ======= get selected page key from end of eventString =======
    var eventString = String(event.target);
    var strStart = eventString.indexOf("#") + 1;
    var strEnd = eventString.length;
    var nextPageKey = eventString.substr(strStart, strEnd);

    // search for page object that matches key
    for (var i = 0; i < this.pagesArray.length; i++) {
        if (nextPageKey == this.pagesArray[i].pageKey) {

            // if pageObject found make next page
            this.pagesArray[i].makePage(nextPageKey, tempClickTrail);
            break;
        }
    }
}


// ======= prevPage from clickTrail ======= ======= ======= ======= =======
Page.prototype.getPrevPage = function(event) {
    console.log("-- getPrevPage");

    // checkClickTrail(this);

    if (this.clickTrail.length > 0) {
        var trailLength = this.clickTrail.length;
        var prevPage = this.clickTrail[trailLength - 2];
        if (!prevPage) {
            prevPage = this.clickTrail[trailLength - 1];
        }
        var removePage1 = this.clickTrail.pop();       // remove current/prev pages from clickTrail
        var removePage2 = this.clickTrail.pop();
        var prevPageKey = this.getPageKey(prevPage);

        // checkClickTrail(this);

        this.makeNextPage(prevPageKey);
    } else {
        console.log("NO PREV PAGE");
    }
}


// ======= nextPage from node tree ======= ======= ======= ======= =======
Page.prototype.getNextPage = function(event) {
    console.log("getNextPage");

    var eventString = String(event.target);
    var thisPageKey = this.pageKey;
    var prefix = thisPageKey.substring(0, 3);       // prefix (indicates Area)
    var thisPageKey = thisPageKey.substring(3);     // prefix removed

    var cL, checkPage, thisPageArray, checkPageKey, nextPageKey;

    // ======= parse non-Area page key ======= ======= =======
    if (!isNaN(thisPageKey.charAt(0))) {

        var A = thisPageKey.charAt(0);
        var B = thisPageKey.charAt(1);
        var C = thisPageKey.charAt(2);
        var D = thisPageKey.charAt(3);
        var E = thisPageKey.charAt(4);

        // ======= determine start search level =======
        if (E == '0') {
            if (D == '0') {
                if (C == '0') {
                    if (B == '0') {
                        cL = 1;
                    } else {
                        cL = 2;
                    }
                } else {
                    cL = 3;
                }
            } else {
                cL = 4;
            }
        } else {
            cL = 4
        }

        // ======= check next level up =======
        thisPageArray = [A, B, C, D, E];
        thisPageArray[cL] = parseInt(thisPageArray[cL]) + 1;
        checkPageKey = prefix + thisPageArray[0] + thisPageArray[1] + thisPageArray[2] + thisPageArray[3] + thisPageArray[4];

        // ======= search loop ======= ======= ======= ======= =======
        for (var i = 0; i < 7; i++) {
            checkPage = this.getPage(checkPageKey);
            if (checkPage) {
                this.makeNextPage(checkPageKey);
                break;
            } else {
                thisPageArray[cL] = 0;
                cL = cL - 1;
                thisPageArray[cL] = parseInt(thisPageArray[cL]) + 1;
                checkPageKey = prefix + thisPageArray[0] + thisPageArray[1] + thisPageArray[2] + thisPageArray[3] + thisPageArray[4];
            }
        }

    // ======= parse Area page key ======= ======= =======
    } else {
        if (thisPageKey == 'STUDIO') {
            nextPageKey = 'st_10000';
        } else if (thisPageKey == 'SETUP') {
            nextPageKey = 'se_10000';
        } else if (thisPageKey == 'SHOP') {
            nextPageKey = 'sh_10000';
        }
        this.makeNextPage(nextPageKey);
    }
}


// ======= buildNavLinks ======= ======= ======= ======= ======= ======= =======
Page.prototype.buildNavLinks = function(thisPageKey) {
    console.log('buildNavLinks');

    var prevLevelArray = [];
    var thisLevelArray = [];
    var nextLevelArray = [];
    var navArrays = [prevLevelArray, thisLevelArray, nextLevelArray];
    var areaLevelArray = ['sh_SHOP', 'se_SETUP', 'st_STUDIO', 'LOCATION_1', 'LOCATION_2'];
    var sL, cL, nextPage, checkPage, nextKey, checkPageKey, checkPageArray, searchLevelArray;

    // ======= get prefix / numeric components ======= ======= =======
    var nextAreaKey = thisPageKey;
    var prefix = thisPageKey.substring(0, 3);
    var thisPageKey = thisPageKey.substring(3);

    // ======= set search level (current page) ======= ======= =======
    if (!isNaN(thisPageKey.charAt(0))) {

        var A = thisPageKey.charAt(0);  // .toString();
        var B = thisPageKey.charAt(1);  // .toString();
        var C = thisPageKey.charAt(2);  // .toString();
        var D = thisPageKey.charAt(3);  // .toString();
        var E = thisPageKey.charAt(4);  // .toString();

        if (E == 0) {
            if (D == 0) {
                if (C == 0) {
                    if (B == 0) {
                        sL = 1;
                        cL = 1;
                    } else {
                        sL = 2;
                        cL = sL + 1;
                    }
                } else {
                    sL = 3;
                    cL = sL + 1;
                }
            } else {
                sL = 4;
                cL = sL + 1;
            }
        } else {
            sL = 5;
            cL = sL;
        }

        thisPageArray = [A, B, C, D, E];
        checkPageKey = prefix + A + B + C + D + E;

        if (sL == 1) {
            searchLevelArray = [0, sL, (sL + 1)]
        } else if (sL == 5) {
            searchLevelArray = [(sL - 1), sL, 0]
        } else {
            searchLevelArray = [(sL - 1), sL, (sL + 1)]
        }

        // ======= make prev, this, next level arrays =======
        checkPageArray = [thisPageArray[0], thisPageArray[1], thisPageArray[2], thisPageArray[3], thisPageArray[4]];
        for (var i = 0; i < navArrays.length; i++) {
            nextArray = navArrays[i];
            nextSearchLevel = searchLevelArray[i];
            if (nextSearchLevel != 0) {
                for (var k = 1; k < 10; k++) {
                    checkPageArray[nextSearchLevel - 1] = k;
                    checkPageArray[nextSearchLevel] = 0;
                    checkPageKey = prefix + checkPageArray[0] + checkPageArray[1] + checkPageArray[2] + checkPageArray[3] + checkPageArray[4];
                    checkPage = this.getPage(checkPageKey)
                    if (checkPage) {
                        nextArray.push(checkPage.pageKey);
                    }
                }
            }
            navArrays[i] = nextArray;
            checkPageArray[nextSearchLevel - 1] = thisPageArray[nextSearchLevel - 1];
        }
    }
    return [navArrays, areaLevelArray];
}


// ======= makeNavBars ======= ======= ======= ======= ======= ======= =======
Page.prototype.makeNavBars = function(navLinksArray, thisPageKey) {
    console.log("makeNavBars");

    var nextPage, nextKey, nextName, navContainer;
    var newUl, newLi, newA, newLiWidth;

    var pageObject = this.pageObject;
    var areaArray = navLinksArray[1];
    var prevThisNext = navLinksArray[0];
    var prevLevelArray = prevThisNext[0];
    var thisLevelArray = prevThisNext[1];
    var nextLevelArray = prevThisNext[2];

    var navContainer1 = document.getElementById("prevNav");
    var navContainer2 = document.getElementById("thisNav");
    var navContainer3 = document.getElementById("nextNav");
    var navContainerArray = [navContainer1, navContainer2, navContainer3];
    navIndex = -1;


    // ====== make links for prev/this/next level pages =======
    for (var i = 0; i < prevThisNext.length; i++) {
        nextNavArray = prevThisNext[i];

        if (i == 0) {
            // navContainer = document.getElementById("prevNav");
            whichNav =  "prevNav";
        } else if (i == 1) {
            // navContainer = document.getElementById("thisNav");
            whichNav =  "thisNav";
        } else if (i == 2) {
            // navContainer = document.getElementById("nextNav");
            whichNav =  "nextNav";
        }

        // ======= make ul/li/a elements for navbar =======
        if (nextNavArray.length > 0) {

            navIndex++;
            navContainer = navContainerArray[navIndex];

            // remove existing nav elements if present
            if (navContainer.hasChildNodes()) {
                while (navContainer.firstChild) {
                    navContainer.removeChild(navContainer.firstChild);
                }
            }

            // create ul element for miniNav and append ul element to 'miniNav' div
            newUl = document.createElement('ul');
            newUl.className = whichNav;
            navContainer.appendChild(newUl);

            // traverse menu items array (note: items are strings!!!)
            for (var j = 0; j < nextNavArray.length; j++) {
                if (nextNavArray[j] == this.pageKey) {
                    nextName = this.pageName;
                    nextKey = 'thisPage';
                } else {
                    nextPage = this.getPage(nextNavArray[j]);
                    nextName = nextPage.pageName;
                    nextKey = nextPage.pageKey;
                }

                // ======= calculate element size =======
                totalMarginsW = nextNavArray.length * 2;    // 1px left, 1px right
                totalLinksW = this.navContainerW - totalMarginsW;          // nav container 800px
                linksPercent = totalLinksW/this.navContainerW * 100;       // % available for links

                // ======= create li element for ul list ======= =======
                newLiWidth = (linksPercent / nextNavArray.length);  // - 1;
                newLi = document.createElement("li");
                newLi.className = whichNav;
                newLi.style.width = newLiWidth + '%';

                // ======= create 'a' link for each list item ======= =======
                newA = document.createElement('a');
                newA.href = '#' + nextKey;
                newA.textContent = nextName;
                newA.onclick = function() { pageObject.initNextNavPage(event); };
                newA.classList.add(whichNav);
                if (nextKey == 'thisPage') {
                    newA.classList.add('thisPage');
                }

                // ======= append 'a' element to li ======= =======
                newLi.appendChild(newA);

                // ======= append li to navContainer div ======= =======
                newUl.appendChild(newLi);

            }

        // ======= create place holder div for missing higher/lower levels =======
        } else {
            // newDiv = document.createElement('div');
            // newDiv.style.height = 24 + 'px';
            // newDiv.textContent = whichNav;
            // newDiv.classList.add('emptyNav');
            // navContainer.appendChild(newDiv);
        }
    }
}






// ======= ARCHIVE =======

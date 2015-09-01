

function initScreenTarget(pageObject) {
    console.log("initScreenTarget");

    // ======= screenActor ======= ======= ======= ======= =======
    var screenTarget = {
        target_id: undefined,
        target_element: undefined,

        // ======= MOUSE_OVER ======= ======= ======= ======= ======= 
        targetMouseOver: function (newEvent) {
            console.log('targetMouseOver');
            if (screenTarget.actor_element)
                screenTarget.releaseTarget();

            screenTarget.target_element = this;         // store element

            if (pageObject.items_Setup != 0) {
                var setupItem = pageObject.items_Setup;
                var setupItemTargets = setupItem.itemTargets;
                for (var i = 0; i < setupItemTargets.length; i++) {
                    nextTargetKey = setupItemTargets[i].targetKey;
                    if (nextTargetKey == newEvent.target.id) {
                        nextTargetName = setupItemTargets[i].targetName;
                        break;
                    }
                }
            } else {
                for (var i = 0; i < pageObject.targets_T.length; i++) {
                    nextTargetKey = pageObject.targets_T[i].targetKey;
                    if (nextTargetKey == newEvent.target.id) {
                        nextTargetName = pageObject.targets_T[i].targetName;
                        break;
                    }
                }
            }

            this.classList.add('over');
            document.getElementById("tooltips").innerHTML = nextTargetName;
        },

         // ======= MOUSE_OVER ======= ======= ======= ======= ======= 
        targetMouseOut: function (newEvent) {
            console.log('targetMouseOut');
            if (screenTarget.actor_element)
                screenTarget.releaseTarget();

            screenTarget.target_element = this;         // store element
            this.classList.remove('over');
            document.getElementById("tooltips").innerHTML = '';
        }
    }  
    return screenTarget;
}


function initScreenActor(pageObject) {
    console.log("initScreenActor");

    // ======= screenActor ======= ======= ======= ======= =======
    var screenActor = {
        actor_id: undefined,
        actor_index: undefined,
        actor_element: undefined,
        actor_object: undefined,
        actor_control: undefined,
        actor_behavior: undefined,
        actor_locator: undefined,
        start_mouseX: 0,         // mouse loc on MOUSE_DOWN
        start_mouseY: 0,
        start_elementX: 0,      // actor loc on MOUSE_DOWN
        start_elementY: 0,
        drag_elementX: 0,                  // actor loc while MOUSE_MOVE
        drag_elementY: 0,
        drag_elementW: 0,                  // actor loc while MOUSE_MOVE
        drag_elementH: 0,
        itemsArray: [pageObject.items_Menu, pageObject.items_Group, pageObject.items_Actor],
        targets: 0,
        target_behavior: 0,
        canvasL: undefined,
        canvasM: undefined,
        canvasLimg: undefined,
        canvasMimg: undefined,
        zLevel: 3,

        // ======= ======= setup_Item ======= =======
        // ======= ======= setup_Item ======= =======
        // ======= ======= setup_Item ======= =======
        setActorObject: function (selectedElement) {
            console.log('setActorObject');

            if (pageObject.items_Setup != 0) {

                // set targets to setupItem targets =======
                if (pageObject.targets_S != 0) {
                    screenActor.targets = pageObject.items_Setup.itemTargets;
                    screenActor.target_behavior = pageObject.behavior_ST[0];
                }

                // ======= check for controls =======
                setupItem = pageObject.items_Setup;
                if (pageObject.controls_S != 0) {

                    // ======= loop through page controls =======
                    for (var i = 0; i < pageObject.controls_S.length; i++) {
                        nextPageControl = pageObject.controls_S[i];
                        pageControlName = nextPageControl.itemKey;

                        // ======= check setupItem controls for match =======
                        for (var j = 0; j < setupItem.itemControls.length; j++) {
                            nextSetupControl = setupItem.itemControls[j];
                            setupControlName = nextSetupControl.itemKey;
                            setupControlLocator = setupItem.locators_C[j];
                            setupControlBehavior = setupItem.behaviors_C[j];
                            if (setupControlName == pageControlName) {
                                screenActor.actor_object = nextSetupControl;
                                screenActor.actor_locator = setupControlLocator;
                                screenActor.actor_behavior = setupControlBehavior;
                                screenActor.canvasL = pageObject.canvasL;
                                screenActor.canvasM = pageObject.canvasM;
                                return nextSetupControl; 
                                break;
                            }

                        }
                    }

                } else {
                    var actorObject = screenActor.setActorObject2(selectedElement);
                }
            } else {
                var actorObject = screenActor.setActorObject2(selectedElement);
            }
        },
        
        // ======= ======= menu/group/actor items ======= =======
        // ======= ======= menu/group/actor items ======= =======
        // ======= ======= menu/group/actor items ======= =======
        setActorObject2: function (selectedElement) {
            console.log('setActorObject2');

            // itemsArray: [pageObject.items_Menu, pageObject.items_Group, pageObject.items_Actor],
            var arrayIndex = -1;
            for (var i = 0; i < screenActor.itemsArray.length; i++) {
                arrayIndex++;
                nextItemArray = screenActor.itemsArray[i];
                if (nextItemArray != 0) {
                    for (var i = 0; i < nextItemArray.length; i++) {
                        nextItem = nextItemArray[i];
                        nextKey = nextItemArray[i].itemKey;
                        if (selectedElement.id == nextKey) {
                            screenActor.actor_object = nextItem;       // set Actor
                            screenActor.canvasL = pageObject.canvasL;
                            screenActor.canvasM = pageObject.canvasM;
                            if (arrayIndex == 0) {
                                screenActor.actor_behavior = pageObject.behaviors_M[i];
                                screenActor.actor_locator = pageObject.locators_M[i];
                            } else if (arrayIndex == 1) {
                                screenActor.actor_behavior = pageObject.behaviors_G[i];
                                screenActor.actor_locator = pageObject.locators_G[i];
                            } else if (arrayIndex == 2) {
                                screenActor.actor_behavior = pageObject.behaviors_A[i];
                                screenActor.actor_locator = pageObject.locators_A[i];
                            }
                            if ((screenActor.targets == 0) && (pageObject.targets_T != 0)) {
                                screenActor.target_behavior = pageObject.behaviors_T[i];
                                screenActor.targets = pageObject.targets_T;
                            }
                            return nextItem;
                            break;
                        }
                    }
                }
            }
        },
        
        // ======= MOUSE_OVER ======= MOUSE_OVER ======= MOUSE_OVER ======= MOUSE_OVER ======= 
        actorMouseOver: function (newEvent) {
            console.log('-- actorMouseOver');
            if (screenActor.actor_element)
                screenActor.releaseActor();

            screenActor.actor_element = this;                       // set Element
            var actorObject = screenActor.setActorObject(this);     // set Actor (via setActorObject/setActorObject2)

            // ======= non-targets =======
            if (itemClass != 'target') {
                var nextFrameset = screenActor.actor_object.frameset;
                var itemKey = screenActor.actor_object.itemKey;
                var itemName = screenActor.actor_object.itemName;
                var itemType = screenActor.actor_object.itemType;
                var itemClass = screenActor.actor_object.itemClass;
                var itemState = screenActor.actor_object.itemState;
                var itemLoc = screenActor.actor_locator;
                var classList = String(screenActor.actor_element.classList);

                if (Array.isArray(nextFrameset)) {
                    var spriteImage = screenActor.actor_object.frameset[0];
                    var spriteIndex = screenActor.actor_object.frameset[1];
                    var spriteHeight = screenActor.actor_object.initLoc[3];
                    if (itemClass == 'toggle') {
                        if (itemState == 'default') {
                            var spriteOffset = -spriteHeight;
                        } else {
                            var spriteOffset = -(spriteHeight * 3);
                        }
                    } else  {
                        var spriteOffset = -spriteHeight;
                    }
                    if (classList.indexOf('icon') >= 0) {
                        var urlString = "url('images/" + spriteImage + "_" + spriteIndex + ".png') 0 " + spriteOffset + "px";
                    }
                    this.style.background = urlString;
                }
            }

            // ======= all actors (including targets) =======
            this.classList.add('over');
            document.getElementById("tooltips").innerHTML = itemName;
        },

        // ======= MOUSE_OUT ======= MOUSE_OUT ======= MOUSE_OUT ======= MOUSE_OUT ======= 
        actorMouseOut: function (newEvent) {
            console.log('actorMouseOut');
            if (screenActor.actor_element)
                screenActor.releaseActor();

            var nextFrameset = screenActor.actor_object.frameset;
            var itemClass = screenActor.actor_object.itemClass;
            var itemState = screenActor.actor_object.itemState;
            var classList = String(screenActor.actor_element.classList);
            var itemLoc = screenActor.actor_locator;

            // ======= image-change icons =======
            if (Array.isArray(nextFrameset)) {
                var spriteImage = screenActor.actor_object.frameset[0];
                var spriteIndex = screenActor.actor_object.frameset[1];
                if (Array.isArray(spriteIndex)) {
                    spriteIndex = 0;
                }
                var spriteHeight = screenActor.actor_object.initLoc[3];
                if (itemClass == 'toggle') {
                    if (itemState == 'default') {
                        var spriteOffset = 0;
                    } else {
                        var spriteOffset = -(spriteHeight * 2);
                    }
                } else  {
                    var spriteOffset = 0;
                }
                if (classList.indexOf('icon') >= 0) {
                    var urlString = "url('images/" + spriteImage + "_" + spriteIndex + ".png') 0 " + spriteOffset + "px";
                }
                this.style.background = urlString;
                // this.style.backgroundSize =  itemLoc[2] + 'px ' + itemLoc[3] + 'px'; 
            }

            // ======= div-change icons =======
            this.classList.remove('over');
            this.classList.remove('selected');
            document.getElementById("tooltips").innerHTML = "";
        },
        

        // ======= MOUSE_DOWN ======= MOUSE_DOWN ======= MOUSE_DOWN ======= MOUSE_DOWN ======= 


        actorSelect: function (newEvent) { 
            console.log(' ');
            console.log('-- actorSelect');

            var evt = newEvent || window.event;
            var itemKey = screenActor.actor_object.itemKey;
            var thisActor = screenActor.actor_object;
            var itemName = screenActor.actor_object.itemName;
            var itemClass = screenActor.actor_object.itemClass;
            var itemState = screenActor.actor_object.itemState;
            var classList = String(screenActor.actor_element.classList);
            var nextFrameset = screenActor.actor_object.frameset;
            var actorBehavior = screenActor.actor_behavior;
            var itemLoc = screenActor.actor_locator;

            screenActor.start_mouseX = evt.clientX;
            screenActor.start_mouseY = evt.clientY;
            screenActor.start_elementX = this.offsetLeft;
            screenActor.start_elementY = this.offsetTop;
            screenActor.canvasLimg = document.createElement("img");
            screenActor.canvasMimg = document.createElement("img");

            // ======= image-change icons =======
            if (Array.isArray(nextFrameset)) {
                var spriteImage = screenActor.actor_object.frameset[0];
                var spriteIndex = screenActor.actor_object.frameset[1];
                if (Array.isArray(spriteIndex)) {
                    spriteIndex = 0;
                }
                var spriteHeight = screenActor.actor_object.initLoc[3];

                // ======= button =======
                if (itemClass == 'button') {
                    var spriteOffset = -(spriteHeight * 2);
                    var nextAction = actorBehavior.initAction;
                    var paramsArray = [0, pageObject, thisActor, actorBehavior, 0, 0, 0, 0, 0, 0]
                    actorBehavior.callAction(nextAction, paramsArray);

                // ======= toggle =======
                } else if (itemClass == 'toggle') {
                    var nextAction = actorBehavior.initAction;
                    var paramsArray = [0, pageObject, thisActor, actorBehavior, 0, 0, 0, 0, 0, 0]
                    actorBehavior.callAction(nextAction, paramsArray);
                    if (itemState == 'default') {
                        screenActor.actor_object.itemState = 'selected';
                        var spriteOffset = -(spriteHeight * 2);
                    } else {
                        screenActor.actor_object.itemState = 'default';
                        var spriteOffset = 0;
                    }

                // ======= other =======
                } else {
                    var spriteOffset = -spriteHeight;
                }
                if (classList.indexOf('icon') >= 0) {
                    var urlString = "url('images/" + spriteImage + "_" + spriteIndex + ".png') 0 " + spriteOffset + "px";
                }
    	        this.style.background = urlString;
                // this.style.backgroundSize =  itemLoc[2] + 'px ' + itemLoc[3] + 'px'; 
            }
            this.classList.remove('over');
            this.classList.add('selected');
            addEventSimple(document, 'mousemove', screenActor.dragActor); 
            addEventSimple(document, 'mouseup', screenActor.dropActor);
            document.getElementById("tooltips").innerHTML = itemName;
            return false;
        },


        // ======= MOUSE_MOVE ======= MOUSE_MOVE ======= MOUSE_MOVE ======= MOUSE_MOVE ======= 


        dragActor: function (newEvent) {
            console.log('dragActor');

            var thisActor = screenActor.actor_object;
            var actorBehavior = screenActor.actor_behavior;      // from pageObject
            var actorCanvasL = screenActor.canvasL;              // from pageObject
            var actorCanvasM = screenActor.canvasM;              // from pageObject

            var itemClass = thisActor.itemClass;
            var classList = String(screenActor.actor_element.classList);
            var frameIndex = thisActor.frameset[1];
            console.log('  frameIndex: ' + frameIndex);
            screenActor.actor_element.style.zIndex = 99;

            var evt = newEvent || window.event;
            var dXYWH = actorBehavior.moveActor(evt.clientX, evt.clientY, screenActor.start_mouseX, screenActor.start_mouseY, thisActor, screenActor.canvasL, screenActor.canvasM);

            // ======= dX, dY, deltaW, deltaH, frameIndex, mouse/element offsets =======
            var dX = dXYWH[0];
            var dY = dXYWH[1];
            var dW = dXYWH[2];
            var dH = dXYWH[3];
            var frameIndex = dXYWH[4];
            var offsetX = (screenActor.start_mouseX - (screenActor.start_elementX + screenActor.actor_element.parentNode.offsetLeft));
            var offsetY = (screenActor.start_mouseY - (screenActor.start_elementY + screenActor.actor_element.parentNode.offsetTop));

            // ======= nextAction =======
            var nextAction = actorBehavior.initAction;
            if ((screenActor.canvasL != 0) || (screenActor.canvasM != 0)) {
                var paramsArray = [frameIndex, pageObject, thisActor, actorBehavior, dX, dY, (screenActor.start_mouseX - offsetX), (screenActor.start_mouseY - offsetY), screenActor.canvasLimg, screenActor.canvasMimg];
                actorBehavior.callAction(nextAction, paramsArray);
            }

            // ======= update element loc/image =======
            if (itemClass == 'setting') {
                screenActor.updateFrameIndex(frameIndex);
            } else {
                screenActor.updateActor(dX, dY, dW, dH);  
                screenActor.updateFrameIndex(frameIndex);
                screenActor.checkTargets(screenActor.drag_elementX, screenActor.drag_elementY, frameIndex, pageObject, thisActor, dX, dY, (screenActor.start_mouseX - offsetX), (screenActor.start_mouseY - offsetY), actorCanvasL);
            }
        },

        checkTargets: function (drag_elementX, drag_elementY, frameIndex, pageObject, thisActor, dX, dY, offsetX, offsetY, actorCanvasL) {
            console.log('checkTargets');
            console.log('  screenActor.target_behavior: ' + screenActor.target_behavior);
            var overlap = 10;
            for (var i = 0; i < screenActor.targets.length; i++) {
                var nextTarget = screenActor.targets[i];
                var targetXYWH = nextTarget.onScreenLoc;
                if (drag_elementX < (targetXYWH[0] + targetXYWH[2] - overlap) && drag_elementY > (targetXYWH[1] + overlap) && drag_elementX > (targetXYWH[0] + overlap) && drag_elementY < (targetXYWH[1] + targetXYWH[3] - overlap)) {

                    console.log('======= hit!!! ======= hit!!! =======');
                    var targetKey = nextTarget.targetKey;
                    var targetElement = document.getElementById(targetKey);
                    actorBehavior = screenActor.target_behavior;
                    var nextAction = actorBehavior.initAction;
                    if ((screenActor.canvasL != 0) || (screenActor.canvasM != 0)) {
                        var paramsArray = [frameIndex, pageObject, thisActor, actorBehavior, dX, dY, offsetX, offsetY, screenActor.canvasLimg, screenActor.canvasMimg]
                        actorBehavior.callAction(nextAction, paramsArray);
                    }
                    cleanUpDiv(screenActor.actor_element);
                    targetElement.classList.add('occupied');
                    screenActor.actor_element.classList.remove('over');
                    screenActor.actor_element.classList.remove('occupied');
                    screenActor.actor_element.classList.remove('selected');
                    removeEventSimple(document, 'mouseover', screenActor.dragActor);
                    removeEventSimple(document, 'mousemove', screenActor.dragActor);
                    removeEventSimple(document, 'mouseup', screenActor.dropActor);
                    screenActor.actor_object.dropLoc = [targetXYWH[0], targetXYWH[1], targetXYWH[2], targetXYWH[3]];
                    pageObject.swapTargetItems(screenActor.actor_object, nextTarget); 
                    break;
                }
            }
        },
        
        updateActor: function (dx, dy, newW, newH) {
            console.log('updateActor');
            screenActor.actor_element.style.left = screenActor.start_elementX + dx + 'px';
            screenActor.actor_element.style.top = screenActor.start_elementY + dy + 'px';
            screenActor.drag_elementX = screenActor.start_elementX + dx;
            screenActor.drag_elementY = screenActor.start_elementY + dy;
        },

        updateFrameIndex: function (frameIndex) {
            console.log('updateFrameIndex');
            var nextFrameset = screenActor.actor_object.frameset;
            var classList = String(screenActor.actor_element.classList);
            var itemLoc = screenActor.actor_locator;
            if (Array.isArray(nextFrameset)) {
                var spriteImage = screenActor.actor_object.frameset[0];
                var spriteHeight = screenActor.actor_object.initLoc[3];
                var spriteOffset = -spriteHeight;
                if (classList.indexOf('icon') >= 0) {
                    var urlString = "url('images/" + spriteImage + "_" + frameIndex + ".png') 0 " + spriteOffset + "px";
                } else if (classList.indexOf('anim') >= 0) {
                    var urlString = "url('images/" + spriteImage + "_" + frameIndex + ".png') 0 0";
                }
                screenActor.actor_object.frameset[1] = frameIndex;
            }
            screenActor.actor_element.style.background = urlString;
            // this.style.backgroundSize =  itemLoc[2] + 'px ' + itemLoc[3] + 'px'; 
        },
        
        // ======= MOUSE_UP ======= MOUSE_UP ======= MOUSE_UP ======= MOUSE_UP ======= 
        dropActor: function(newEvent) {
            console.log('dropActor');

            var thisActor = screenActor.actor_object;
            var itemClass = screenActor.actor_object.itemClass;
            var classList = String(screenActor.actor_element.classList);
            var itemState = screenActor.actor_object.itemState;
            var actorBehavior = screenActor.actor_behavior;
            var nextFrameset = screenActor.actor_object.frameset;
            var itemLoc = screenActor.actor_locator;

            // ======= slider / dragger =======
            if ((itemClass == 'slider') || (itemClass == 'dragger')) {
                screenActor.actor_object.dropLoc[0] = screenActor.drag_elementX;
                screenActor.actor_object.dropLoc[1] = screenActor.drag_elementY;

            // ======= trackpad =======
            } else if (itemClass == 'trackpad') {
                var offsetX = screenActor.actor_element.parentNode.offsetLeft;
                var offsetY = screenActor.actor_element.parentNode.offsetTop;
                screenActor.actor_object.dropLoc[0] = screenActor.drag_elementX + offsetX;
                screenActor.actor_object.dropLoc[1] = screenActor.drag_elementY + offsetY;
            }

            // ======= image-change icons =======
            if (Array.isArray(nextFrameset)) {
                var spriteImage = screenActor.actor_object.frameset[0];
                var spriteIndex = screenActor.actor_object.frameset[1];
                var spriteHeight = screenActor.actor_object.initLoc[3];

                // ======= toggle =======
                if (itemClass == 'toggle') {
                    if (itemState == 'default') {
                        var spriteOffset = -spriteHeight;
                    } else {
                        var spriteOffset = -(spriteHeight * 3);
                    }

                // ======= button =======
                } else if (itemClass == 'button') {
                    var nextAction = actorBehavior.initAction;
                    var paramsArray = [0, pageObject, thisActor, actorBehavior, 0, 0, 0, 0, 0, 0]
                    actorBehavior.callAction(nextAction, paramsArray);
                    // actorBehavior.toggleLabels();
                    var spriteOffset = -spriteHeight;
                } else  {
                    var spriteOffset = -spriteHeight;
                }
                if (classList.indexOf('icon') >= 0) {
                    var urlString = "url('images/" + spriteImage + "_" + spriteIndex + ".png') 0 " + spriteOffset + "px";
                } else {
                    var urlString = "url('images/" + spriteImage + "_0.png') 0 0";
                }
                screenActor.actor_element.style.background = urlString;
                screenActor.actor_element.style.backgroundSize =  itemLoc[2] + 'px ' + itemLoc[3] + 'px'; 
            }

            removeEventSimple(document, 'mousemove', screenActor.dragActor);
            removeEventSimple(document, 'mouseup', screenActor.releaseActor);

            screenActor.actor_element.classList.remove('selected');
            screenActor.actor_element.classList.add('over');
            screenActor.actor_element.style.zIndex = 3;
        },
        
        releaseActor: function(newEvent) {
            console.log('releaseActor');
            screenActor.actor_element.style.zIndex = 3;
            screenActor.actor_element.classList.remove('selected');
            removeEventSimple(document, 'mouseup', screenActor.releaseActor);
        }

    }
    return screenActor;
}



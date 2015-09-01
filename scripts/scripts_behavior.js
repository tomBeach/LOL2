
function Behavior(bName, bClass, bGroup, boxXYWH, groupKeys, initAction, behaviorsArray) {
    console.log(" Behavior");

    this.bName = bName;
    this.bClass = bClass;
    this.bGroup = bGroup;
    this.boxXYWH = boxXYWH;
    this.groupKeys = groupKeys;
    this.initAction = initAction;
    this.behaviorsArray = behaviorsArray;
    this.behaviorsArray.push(this);
}



// ======= moveActor ======= ======= ======= ======= ======= ======= ======= moveActor ======= ======= ======= 
// ======= moveActor ======= ======= ======= ======= ======= ======= ======= moveActor ======= ======= ======= 
// ======= moveActor ======= ======= ======= ======= ======= ======= ======= moveActor ======= ======= ======= 

Behavior.prototype.moveActor = function(moveMouseX, moveMouseY, startMouseX, startMouseY, whichActor, canvasL, canvasM) { 
    console.log("moveActor");

    var dX, dY, dW, dH, deltaX, deltaY, frameIndex, actorScale;
    var groupIndex, groupKey, bClass, boxXYWH;
    var actorName = whichActor.itemKey;
    var bClass = this.bClass;

    if (Array.isArray(bClass)) {
        var groupArray = this.getGroupBehaviors(actorName);
        var groupIndex = groupArray[0];
        var bClass = groupArray[1];
        var bGroup = groupArray[2];
        var boxXYWH = groupArray[3];
        var groupKey = groupArray[4];
        var frameset = canvasL[2][groupIndex];
    } else {
        var boxXYWH = this.boxXYWH;
        if (Array.isArray(canvasL[2])) {
            var frameset = canvasL[2];
        } else {
            if (Array.isArray(whichActor.frameset)) {
                var frameIndex = whichActor.frameset[1];
                var frameset = whichActor.frameset[2];
            }
        }
    }

    var boxX = boxXYWH[0];     // 100
    var boxY = boxXYWH[1];
    var boxW = boxXYWH[2];     // 200
    var boxH = boxXYWH[3];
    var scale = boxXYWH[4];

    var dropLoc = whichActor.dropLoc;
    var dropX = dropLoc[0];         // 100
    var dropY = dropLoc[1];
    var dropW = dropLoc[2];
    var dropH = dropLoc[3];
    var dropS = dropLoc[4];

    var minX = -(dropX - boxX);
    var maxX = (boxX + boxW) - dropX;
    var minY = -(dropY - boxY);
    var maxY = (boxY + boxH) - dropY;
    var deltaXorY, whichBox, frameIndex, whichScale, deltaW, deltaH;

    // ======= math for active actor bClass =======
    if ((bClass == 'settingH') || (bClass == 'sliderH')) {
        var dX = moveMouseX - startMouseX;
        var dY = 0;
        if (dX < minX) {
            dX = minX;
        }
        if (dX > maxX) {
            dX = maxX;
        }
        deltaXorY = (dropX - boxX) + dX;
        whichBox = boxW;
        
    } else if ((bClass == 'settingV') || (bClass == 'sliderV')) {
        var dX = 0;
        var dY = moveMouseY - startMouseY;
        if (dY < minY) {
            dY = minY;
        }
        if (dY > maxY) {
            dY = maxY;
        }
        deltaXorY = (dropY - boxY) + dY;
        whichBox = boxH;
        
    } else if ((bClass == 'sliderD1') || (bClass == 'dragger')) {
        // ------- move with X and Y -------
        if (bClass == 'dragger') {
            var dX = moveMouseX - startMouseX;
            var dY = moveMouseY - startMouseY;
        // ------- move on slope -------
        } else {
            var slope = 4;
            var dX = moveMouseX - startMouseX;
            var dY = -(dX/slope);
        }
        if (dX < minX) {
            dX = minX;
        }
        if (dX > maxX) {
            dX = maxX;
        }
        if (dY < minY) {
            dY = minY;
        }
        if (dY > maxY) {
            dY = maxY;
        }
        deltaXorY = (dropX - boxX) + dX;
        whichBox = boxW;
        
    } else if (bClass == 'trackpad') {
        var dX = moveMouseX - startMouseX;
        var dY = moveMouseY - startMouseY;
        if (dX < minX) {
            dX = minX;
        }
        if (dX > (maxX - dropW)) {
            dX = maxX - dropW;
        }
        if (dY < minY) {
            dY = minY;
        }
        if (dY > (maxY - dropH)) {
            dY = maxY - dropH;
        }
        deltaXorY = (dropX - boxX) + dX;
        whichBox = boxW;
    }

    // ======= choose frame based on percentage XorY movement =======
    if (frameset) {
        framePercent = Math.round((deltaXorY / whichBox) * (frameset.length - 1));
        frameIndex = frameset[framePercent];
    } else {
        frameIndex = 0;
    }

    // ======= change scale if required =======
    whichScale = ((deltaXorY / whichBox) * scale) + 1;
    deltaW = Math.round(dropW * whichScale);
    deltaH = Math.round(dropH * whichScale);

    return [dX, dY, deltaW, deltaH, frameIndex];
}


// ======= callAction ======= ======= ======= ======= ======= ======= ======= callAction ======= ======= ======= 
// ======= callAction ======= ======= ======= ======= ======= ======= ======= callAction ======= ======= ======= 
// ======= callAction ======= ======= ======= ======= ======= ======= ======= callAction ======= ======= ======= 

Behavior.prototype.callAction = function(initAction, paramsArray) { 
    console.log("callAction");

    // paramsArray: frameIndex, pageObject, actorObject, behaviorObject, dX, dY, startMouseX, startMouseY

    // ======= callAction behaviors =======
    var behaviors = {

        labels_onOff: 
        function(paramsArray) {
            // console.log("labels_onOff"); 
            var pageObject = paramsArray[1];
            var titleTextDiv = document.getElementById("titleText"); 
            var titleText = pageObject.pageName;
            if (titleTextDiv.textContent == '') {
                titleTextDiv.textContent = titleText;
            } else {
                titleTextDiv.textContent = '';
            }
         },

        action_canvas_A: 
        function(paramsArray, behaviorsArray) {
            // console.log("action_canvas_A");
            var pageObject = paramsArray[1];
            var canvasFramesetL = pageObject.canvasL;
            var canvasFramesetM = pageObject.canvasM;
            if (canvasFramesetL != 0) {
                updateCanvas(paramsArray, behaviorsArray, 'canvasL');
            }
            if (canvasFramesetM != 0) {
                updateCanvas(paramsArray, behaviorsArray, 'canvasM');
            }
        },

        action_canvas_AB:
        function(paramsArray, behaviorsArray) {
            // console.log("action_canvas_AB");
            var pageObject = paramsArray[1];
            var canvasFramesetL = pageObject.canvasL;
            var canvasFramesetM = pageObject.canvasM;
            if (canvasFramesetL != 0) {
                canvas_AB(paramsArray, canvasFramesetL, 'canvasL');
            }
            if (canvasFramesetM != 0) {
                canvas_AB(paramsArray, canvasFramesetM, 'canvasM');
            }
            
        },

        action_canvas_ABC:
        function(paramsArray, behaviorsArray) {
            // console.log("action_canvas_ABC");
            var pageObject = paramsArray[1];
            var canvasFramesetL = pageObject.canvasL;
            var canvasFramesetM = pageObject.canvasM;
            if (canvasFramesetL != 0) {
                updateCanvas(paramsArray, behaviorsArray, 'canvasL');
            }
            if (canvasFramesetM != 0) {
                updateCanvas(paramsArray, behaviorsArray, 'canvasM');
            }
        },
        
        trackpad_canvasBg:
        function(paramsArray) {
            // console.log("trackpad_canvasBg");
            moveCanvasBg2(paramsArray);
        },
        
        incCanvasIndex: 
        function(paramsArray, behaviorsArray) { 
            console.log("incCanvasIndex");
            var pageObject = paramsArray[1];
            var actorObject = paramsArray[2];
            var whichActor = actorObject.itemKey;

            // ======= count actor choices to assign index =======
            for (var i = 0; i < pageObject.items_Actor.length; i++) {
                nextActor = pageObject.items_Actor[i];
                if (nextActor.itemKey == whichActor) {
                    frameIndex = i + 1;
                    break;
                }
            }

            var canvasFramesetL = pageObject.canvasL;
            var canvasFramesetM = pageObject.canvasM;
            if (canvasFramesetL != 0) {
                frameIndex2 = canvasFramesetL[2][frameIndex];
                paramsArray[0] = frameIndex2;
                updateCanvas(paramsArray, behaviorsArray, 'canvasL');
            }
            if (canvasFramesetM != 0) {
                frameIndex2 = canvasFramesetM[2][frameIndex];
                paramsArray[0] = frameIndex2;
                updateCanvas(paramsArray, behaviorsArray, 'canvasM');
            }
        },

        bh_setting1: function() { console.log("bh_setting1 SPECIAL ACTION!"); },
        bh_slider1: function() { console.log("bh_slider1"); },
        bh_dragger: function() { console.log("bh_dragger"); },
        graphic: function() { console.log("graphic"); }
    }

    behaviors[initAction](paramsArray, this.behaviorsArray);

}


// ======= utilities ======= ======= ======= ======= ======= ======= ======= utilities ======= ======= ======= 
// ======= utilities ======= ======= ======= ======= ======= ======= ======= utilities ======= ======= ======= 
// ======= utilities ======= ======= ======= ======= ======= ======= ======= utilities ======= ======= ======= 

Behavior.prototype.getBehaviorObject = function(whichBehavior) { 
    console.log("getBehaviorObject");

    // ======= get behavior =======
    for (var i = 0; i < behaviorsArray.length; i++) {
        if (whichBehavior == behaviorsArray[i].bName) {
            console.log("   whichBehavior: " + whichBehavior);
            return behaviorsArray[i];
            break;
        }
    }
}


Behavior.prototype.getGroupBehaviors = function() { 
    // console.log("getGroupBehaviors1");

    // ======= labels_onOff =======
    for (var i = 0; i < this.behaviorsArray.length; i++) {
        if (behaviorsArray[i].bName == 'threeWay') {
            checkBehavior = behaviorsArray[i];
            checkClass = checkBehavior.bClass;
            checkGroup = checkBehavior.bGroup;
            checkBoxXYWH = checkBehavior.boxXYWH;
            checkGroupKeys = checkBehavior.groupKeys;
            for (var j = 0; j < checkGroup.length; j++) {
                nextActor = checkGroup[j];
                nextGroupKey = checkGroupKeys[j];
                if (nextActor == whichActor) {
                    actorClass = checkClass[j];
                    actorGroup = checkGroup[j];
                    actorBoxXYWH = checkBoxXYWH[j];
                    actorGroupKey = checkGroupKeys[j];
                    return [j, actorClass, actorGroup, actorBoxXYWH, actorGroupKey];
                    break;
                }
            }
        }
    }
}

Behavior.prototype.toggleLabels = function() { 
    console.log("toggleLabels");

    var titleTextDiv = document.getElementById("titleText"); 
    if (titleTextDiv.textContent == '') {
        titleTextDiv.textContent = 'labels on';
    } else {
        titleTextDiv.textContent = '';
    }
}



// ======= actions ======= ======= ======= ======= ======= ======= ======= actions ======= ======= ======= 
// ======= actions ======= ======= ======= ======= ======= ======= ======= actions ======= ======= ======= 
// ======= actions ======= ======= ======= ======= ======= ======= ======= actions ======= ======= ======= 

// ======= canvas_AB ======= ======= ======= ======= ======= ======= =======
function canvas_AB(paramsArray, canvasFrameset, whichCanvas) { 
    console.log("canvas_AB");

    // frameIndex, pageObject, actorObject, behaviorObject, dX, dY, startMouseX, startMouseY
    var pageObject = paramsArray[1];
    var actorObject = paramsArray[2];
    var behaviorObject = paramsArray[3];
    var dX = paramsArray[4];
    var dY = paramsArray[5];
    var startMouseX = paramsArray[6];
    var startMouseY = paramsArray[7];
    var imageName = canvasFrameset[0];

    if (Array.isArray(canvasFrameset)) {
        var imageName = canvasFrameset[0];
        var framesetX = canvasFrameset[2][0];
        var framesetY = canvasFrameset[2][1];
    } else {
        console.log("-- FRAMESET ISSUE --");
    }

    // trackpad or box
    var tpadX = behaviorObject.boxXYWH[0];
    var tpadY = behaviorObject.boxXYWH[1];
    var tpadW = behaviorObject.boxXYWH[2];
    var tpadH = behaviorObject.boxXYWH[3];

    // tracker or actor
    var trX = (startMouseX - tpadX) + dX;   // mouseX input
    var trY = (startMouseY - tpadY) + dY;   // mouseY input
    var trW = 24;
    var trH = 24;

    // tracker min/max (PERFECT!!!)
    var trMinX = startMouseX - tpadX;
    var trMaxX = (tpadX + tpadW) - (startMouseX - tpadX) - trW;
    var trMinY = startMouseY - tpadY;
    var trMaxY = (tpadY + tpadH) - (startMouseY - tpadY) - trH;

    // tracker XY percentage of trackpad WH
    var iRangeX = 342;                  // ???
    var iRangeY = 256;                  // ???
    var deltaX = trX / (tpadW - trW);   // percent trackpadX
    var deltaY = trY / (tpadH - trH);   // percent trackpadY

    if (framesetX) {
        framePercentX = Math.round(deltaX * (framesetX.length - 3));
        framePercentY = Math.round(deltaY * (framesetY.length - 3));
        frameIndexX = parseInt(framesetX[framePercentX]);
        frameIndexY = parseInt(framesetY[framePercentY]);
    } else {
        frameIndexX = 0;
        frameIndexY = 0;
    }

    if (whichCanvas == 'canvasL') {
        var canvas = document.getElementById("canvasL");
        var context = canvasL.getContext("2d");
        var canvasW = parseInt(pageObject.canLw);
        var canvasH = parseInt(pageObject.canLh);
        var canvasImageArray = pageObject.imagePoolL;
        var canvasImage = canvasImageArray[frameIndexX][frameIndexY];
    } else {
        var canvas = document.getElementById("canvasM");
        var context = canvasM.getContext("2d");
        var canvasW = parseInt(pageObject.canMw);
        var canvasH = parseInt(pageObject.canMh);
        var canvasImage = pageObject.imagePoolM[frameIndexX][frameIndexY];
    }

    context.clearRect(0, 0, canvasW, canvasH);
    context.drawImage(canvasImage, 0, 0, 720, 405, 0, 0, canvasW, canvasH);
    canvasImage = null;

}


// ======= updateCanvas ======= ======= ======= ======= ======= ======= =======
function updateCanvas(paramsArray, behaviorsArray, whichCanvas) {
    console.log("updateCanvas");

    var multiObjectFlag = false;
    var frameIndex = paramsArray[0];
    var pageObject = paramsArray[1];
    var actorObject = paramsArray[2];
    var canvasLimg = paramsArray[8];
    var canvasMimg = paramsArray[9];

    // ======= set imagePool to take image elements from =======
    if (whichCanvas == 'canvasL') {
        var canvasFrameset = pageObject.canvasL;
    } else {
        var canvasFrameset = pageObject.canvasM;
    }

    // ======= object animates while moving =======
    if (Array.isArray(canvasFrameset)) {
        var imageName = canvasFrameset[0];
        var checkGroupFrames = canvasFrameset[1];

        // ======= multiple object canvas control =======
        if (Array.isArray(checkGroupFrames)) {
            multiObjectFlag = true;
            var actorName = actorObject.itemKey;
            var groupArray = getGroupBehaviors(actorName, behaviorsArray);
            var groupIndex = groupArray[0];
            var bClass = groupArray[1];
            var bGroup = groupArray[2];
            var boxXYWH = groupArray[3];
            var groupKey = groupArray[4];

            // ======= set frameIndex at proper key =======
            canvasFrameset[1][groupIndex] = frameIndex;
            var frameA = canvasFrameset[1][0];
            var frameB = canvasFrameset[1][1];
            var frameC = canvasFrameset[1][2];
            var frameset = canvasFrameset[2][groupIndex];

        // ======= single object canvas control =======
        } else {
            var frameset = canvasFrameset[2];
        }

    // ======= object does not animate (moves only) =======
    } else {
        var imageName = canvasFrameset;
        var frameset = 1;
    }

    // ======= Left canvas =======
    if (whichCanvas == 'canvasL') {
        var sourceW = 720;
        var sourceH = 405;
        var canvasW = parseInt(pageObject.canLw);
        var canvasH = parseInt(pageObject.canLh);
        var canvasL = document.getElementById("canvasL");
        var context = canvasL.getContext("2d");
        var canvasImage = pageObject.imagePoolL[frameIndex];

    // ======= Monitor canvas =======
    } else {
        var sourceW = 720;
        var sourceH = 405;
        var canvasW = parseInt(pageObject.canMw);
        var canvasH = parseInt(pageObject.canMh);
        var canvasM = document.getElementById("canvasM");
        var context = canvasM.getContext("2d");
        var canvasImage = pageObject.imagePoolM[frameIndex];
    }

    if (multiObjectFlag == false) {
        var imageString = ('images/' + imageName + '_' + frameIndex + '.png');   //  + '.png'
    } else {
        var imageString = ('images/' + imageName + '_' + frameA + frameB + frameC + '.png');   //  + '.png'
    }

    context.clearRect(0, 0, canvasW, canvasH);
    context.drawImage(canvasImage, 0, 0, 720, 405, 0, 0, canvasW, canvasH);
}


// ======= moveCanvasBg2 ======= ======= ======= ======= ======= ======= =======
function moveCanvasBg2(paramsArray) {
    console.log("moveCanvasBg2");

    // frameIndex, pageObject, actorObject, behaviorObject, dX, dY, startMouseX, startMouseY, canvasFrameset, whichCanvas
    var frameIndex = paramsArray[0];
    var pageObject = paramsArray[1];
    var actorObject = paramsArray[2];
    var behaviorObject = paramsArray[3];
    var dX = paramsArray[4];
    var dY = paramsArray[5];
    var startMouseX = paramsArray[6];
    var startMouseY = paramsArray[7];
    var whichCanvas = 'canvasL';
    var imageName = pageObject.canvasL[0];
    var frameset = pageObject.canvasL[2];

    var canvasImage = document.createElement("img");
    var imageString = ('images/' + imageName + '_' + frameIndex + '.png');   //  + '.png'
    canvasImage.id = imageName;
    canvasImage.setAttribute('src', imageString); 
    canvasImage.style.display = 'none';
    document.body.appendChild(canvasImage);

    // trackpad
    var tpadX = behaviorObject.boxXYWH[0];
    var tpadY = behaviorObject.boxXYWH[1];
    var tpadW = behaviorObject.boxXYWH[2];
    var tpadH = behaviorObject.boxXYWH[3];

    // tracker
    var trX = (startMouseX - tpadX) + dX;   // mouseX input
    var trY = (startMouseY - tpadY) + dY;   // mouseY input
    var trW = 24;
    var trH = 24;

    // tracker min/max (PERFECT!!!)
    var trMinX = startMouseX - tpadX;
    var trMaxX = (tpadX + tpadW) - (startMouseX - tpadX) - trW;
    var trMinY = startMouseY - tpadY;
    var trMaxY = (tpadY + tpadH) - (startMouseY - tpadY) - trH;

    // canvas
    if (whichCanvas == 'canvasL') {
        var canvasX = pageObject.canLx;
        var canvasY = pageObject.canLy;
        var canvasW = pageObject.canLw;
        var canvasH = pageObject.canLh;
        var canvasL = document.getElementById("canvasL");
        var context = canvasL.getContext("2d");
    } else {
        var canvasX = pageObject.canMx;
        var canvasY = pageObject.canMy;
        var canvasW = pageObject.canMw;
        var canvasH = pageObject.canMh;
        var canvasM = document.getElementById("canvasM");
        var context = canvasM.getContext("2d");
    }

    // image
    var imageW = canvasImage.width;
    // var imageW = 640;
    var imageH = canvasImage.height;
    var stretchW = canvasW/imageW;
    var stretchH = canvasH/imageH;

    // tracker XY percentage of trackpad WH
    var iRangeX = 342;                  // ???
    var iRangeY = 256;                  // ???
    var deltaX = trX / (tpadW - trW);   // percent trackpadX
    var deltaY = trY / (tpadH - trH);   // percent trackpadY
    var imageX = iRangeX * deltaX;
    var imageY = iRangeY * deltaY;

    var iXYstring = "image: " + Math.ceil(imageX) + " / " + Math.ceil(imageY);

    // contextM.save();
    context.clearRect(0, 0, canvasW, canvasH);
    // context.drawImage(canvasImage, 342, 0, 576, 324, 0, 0, 576, 324)
    // context.drawImage(canvasImage, imageX, 0, 576, 324, 0, 0, 576, 324)
    context.drawImage(canvasImage, imageX, imageY, canvasW, canvasH, 0, 0, canvasW, canvasH);
    // contextM.fillText(iXYstring);

}

// ======= getGroupBehaviors ======= ======= ======= ======= ======= ======= =======
function getGroupBehaviors(whichActor, behaviorsArray) { 
    // console.log("getGroupBehaviors");

    // ======= labels_onOff =======
    for (var i = 0; i < behaviorsArray.length; i++) {
        if (behaviorsArray[i].bName == 'threeWay') {
            checkBehavior = behaviorsArray[i];
            checkGroup = checkBehavior.bGroup;
            for (var j = 0; j < checkGroup.length; j++) {
                nextActor = checkGroup[j];
                nextName = nextActor;
                if (nextName == whichActor) {
                    checkClass = checkBehavior.bClass[j];
                    checkGroup = checkBehavior.bGroup[j];
                    checkBoxXYWH = checkBehavior.boxXYWH[j];
                    checkGroupKey = checkBehavior.groupKeys[j];
                    return [j, checkClass, checkGroup, checkBoxXYWH, checkGroupKey];
                    break;
                }
            }
        }
    }
}


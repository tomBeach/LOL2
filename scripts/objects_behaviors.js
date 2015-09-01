

// ======= ======= ======= BEHAVIOR OBJECTS ======= ======= =======
// ======= ======= ======= BEHAVIOR OBJECTS ======= ======= =======
// ======= ======= ======= BEHAVIOR OBJECTS ======= ======= =======


function initBehaviors() { 
    console.log("initBehaviors");

    var behaviorsArray = [];

    // ======= int_distance =======
    var int_distance = new Behavior (
        /*    bName: */ 'int_distance',
        /*   bClass: */ 'sliderD1',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [280,240,330,70, 1],
        /* groupKey: */ 'A',
        /* initAction: */ 'action_canvas_A',
        behaviorsArray
    );

    // ======= labels_onOff =======
    var labels_onOff = new Behavior (
        /*    bName: */ 'labels_onOff',
        /*   bClass: */ 'button',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [0,0,0,0,1],
        /* groupKey: */ 'A',
        /* initAction: */ 'labels_onOff',
        behaviorsArray
    );

    // ======= setting1 =======
	var bh_setting1 = new Behavior (
        /*    bName: */ 'bh_setting1',
        /*   bClass: */ 'settingH',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [400, 300, 100, 1, 1],
        /* groupKey: */ 'A',
        /* initAction: */ 'bh_setting1',
        behaviorsArray
    );

    // ======= slider1 =======
    var bh_slider1 = new Behavior (
        /*    bName: */ 'bh_slider1',
        /*   bClass: */ 'sliderH',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [400, 400, 300, 1, 1],
        /* groupKey: */ 'A',
        /* initAction: */ 'bh_slider1',
        behaviorsArray
    );

    // ======= dragger1 =======
    var bh_dragger1 = new Behavior (
        /*    bName: */ 'bh_dragger1',
        /*   bClass: */ 'dragger',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [400, 500, 200, 100, 1],
        /* groupKey: */ 'A',
        /* initAction: */ 'bh_dragger',
        behaviorsArray
    );

    var bh_dragger2 = new Behavior (
        /*    bName: */ 'bh_dragger2',
        /*   bClass: */ 'dragger',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [400, 240, 520, 360, 1], 
        /* groupKey: */ 'A',
        /* initAction: */ 'bh_dragger',
        behaviorsArray
    );

    var trackpad_canvasBg = new Behavior (
        /*    bName: */ 'trackpad_canvasBg',
        /*   bClass: */ 'trackpad',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [100, 100, 160, 90, 1],
        /* groupKey: */ 'A',
        /* initAction: */ 'trackpad_canvasBg',
        behaviorsArray
    );
    var moveScrim = new Behavior (
        /*    bName: */ 'moveScrim',
        /*   bClass: */ 'dragger',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [600,220,380,500,1],
        /* groupKey: */ 'A',
        /* initAction: */ 'incCanvasIndex',
        behaviorsArray
    );
    var moveDiff = new Behavior (
        /*    bName: */ 'moveDiff',
        /*   bClass: */ 'dragger',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [500,220,480,500,1],
        /* groupKey: */ 'A',
        /* initAction: */ 'incCanvasIndex',
        behaviorsArray
    );
    var canvas_AB = new Behavior (
        /*    bName: */ 'canvas_AB',
        /*   bClass: */ 'dragger',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [455,240,100,80,1],
        /* groupKey: */ 'A',
        /* initAction: */ 'action_canvas_AB',
        behaviorsArray
    );
    var dragger_arc = new Behavior (
        /*    bName: */ 'dragger_arc',
        /*   bClass: */ 'dragger',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [0,0,0,0,1],
        /* groupKey: */ 'A',
        /* initAction: */ 0,
        behaviorsArray
    );

    // ======= threeWay =======
    var threeWay = new Behavior (
        /*    bName: */ 'threeWay',
        /*   bClass: */ ['settingH', 'sliderV', 'sliderH',],
        /*   bGroup: */ ['LED', 'f150', 'f650'],
        /*  boxXYWH: */ [[100,400,200,200,1],  [100,200,100,100,1], [450,200,200,200,1]],
        /* groupKey: */ ['A', 'B', 'C'],
        /* initAction: */ 'action_canvas_ABC',
        behaviorsArray
    );

    // ======= setting2 =======
	var bh_setting2 = new Behavior (
        /*    bName: */ 'bh_setting2',
        /*   bClass: */ 'settingH',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [890,240,110,270,1],
        /* groupKey: */ 'A',
        /* initAction: */ "action_canvas_A",
        behaviorsArray
    );

    // ======= graphic =======
    var graphic = new Behavior (
        /*    bName: */ 'graphic',
        /*   bClass: */ 'graphic',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [100, 100, 100, 100, 1],
        /* groupKey: */ 'A',
        /* initAction: */ 'graphic',
        behaviorsArray
    );

    // ======= new =======
    var swapLight = new Behavior (
        /*    bName: */ 'swapLight',
        /*   bClass: */ 'dragger',
        /*   bGroup: */ [],
        /*  boxXYWH: */ [540, 240, 280, 360, 1],
        /* groupKey: */ 'A',
        /* initAction: */ 'incCanvasIndex',
        behaviorsArray
    );

    return behaviorsArray;
}

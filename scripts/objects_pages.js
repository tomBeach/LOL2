

// ======= ======= ======= PAGE OBJECTS ======= ======= =======
// ======= ======= ======= PAGE OBJECTS ======= ======= =======
// ======= ======= ======= PAGE OBJECTS ======= ======= =======

// int_distance, int_scrims, int_spotFlood, int_power, int_LEDs, qual_hardSoft, qual_shadows, qual_distance, qual_diffusion
// KBF_ratio, key_angle, back_angle, fill_ratio


function initPages(locators_Data, behaviors_Data, targets_Data, items_Data, text_Data) { 
    console.log("initPages");

    var pagesArray = [];

	var intro = new Page (
		/* pageKey:     */ 'db_00000', 
		/* pageName:    */ 'LOL', 
		/* pageText:    */ text_Data.t_intro,
		/* clickTrail:  */ [],
		/* blank: */ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,pagesArray
	);
	
	var intensity = new Page (
		/* pageKey:     */ 'db_10000', 
		/* pageName:    */ 'Intensity', 
		/* pageText:    */ text_Data.t_intensity,
		/* clickTrail:  */ [],
		/* blank: */ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,pagesArray
	);

	var int_power = new Page (
		/* pageKey:     */ 'db_11000', 
		/* pageName:    */ 'Power', 
		/* pageText:    */ text_Data.t_int_power,
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ [items_Data.f150, items_Data.f300, items_Data.f650, items_Data.f1000],
		/*   locators_A:  */ [[740,240,80,80,1], [740,340,80,80,1], [740,440,80,80,1], [740,540,80,80,1]],
		/*   behaviors_A: */ [behaviors_Data.bh_dragger2, behaviors_Data.bh_dragger2, behaviors_Data.bh_dragger2, behaviors_Data.bh_dragger2], 	
		/* targets_T:     */ [targets_Data.pg_light],
		/*   locators_T:  */ [[555,270,80,80,1]],
		/*   behaviors_T: */ [behaviors_Data.swapLight],
		/* canvasL:       */ ['st_int_power', 0, [0,1,2,3,4]],
		/* canvasM:       */ ['mn_int_power', 0, [0,1,2,3,4]],
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var int_distance = new Page (
		/* pageKey:     */ 'db_12000', 
		/* pageName:    */ 'Distance', 
		/* pageText:    */ text_Data.t_int_distance,
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ [items_Data.f650],
		/*   locators_A:  */ [[610,240,100,75,1]],
		/*   behaviors_A: */ [behaviors_Data.int_distance],
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['st_int_distance', 0, [6,5,4,3,2,1,0]],
		/* canvasM:       */ ['mn_int_distance', 0, [0,1,2,3,4,5,6]],
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var int_scrims = new Page (
		/* pageKey:     */ 'db_13000', 
		/* pageName:    */ 'Scrims', 
		/* pageText:    */ text_Data.t_scrims,
		/* clickTrail:  */ [],

		/* items_Setup:   */ items_Data.f650,
		/*   locators_S:  */ [630,240,350,270,1],
		/*   targets_S:   */ [targets_Data.se_left1],
		/*   behavior_ST: */ [behaviors_Data.moveScrim],
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ [items_Data.scrim1, items_Data.scrim2, items_Data.scrim3],
		/*   locators_A:  */ [[620,500,100,100,1], [740,500,100,100,1], [860,500,100,100,1]], 		// grid(HLT)  horizontal/left/top
		/*   behaviors_A: */ [behaviors_Data.bh_dragger2, behaviors_Data.bh_dragger2, behaviors_Data.bh_dragger2],
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['st_scrims', 0, [0,1,2,3]],
		/* canvasM:       */ ['mn_scrims', 0, [0,1,2,3]],
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var int_spotFlood = new Page (
		/* pageKey:     */ 'db_14000', 
		/* pageName:    */ 'Spot Flood', 
		/* pageText:    */ text_Data.t_spotFlood,
		/* clickTrail:  */ [],

		/* items_Setup:   */ items_Data.f650,
		/*   locators_S:  */ [630,240,350,270,1],
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ [items_Data.spotFlood],
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ 0,
		/*   locators_A:  */ 0,
		/*   behaviors_A: */ 0,
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['st_spotFlood', 0, [0,1,2,3,4,5,6]],
		/* canvasM:       */ ['mn_spotFlood', 0, [0,1,2,3,4,5,6]],
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var quality = new Page (
		/* pageKey:     */ 'db_20000', 
		/* pageName:    */ 'Quality', 
		/* pageText:    */ text_Data.t_quality,
		/* clickTrail:  */ [],
		/* blank: */ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,pagesArray

	);

	var qual_hardSoft = new Page (
		/* pageKey:     */ 'db_21000', 
		/* pageName:    */ 'Hard and Soft', 
		/* pageText:    */ text_Data.t_qual_hardSoft,
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ [items_Data.f650, items_Data.softlight],
		/*   locators_A:  */ [[740,240,80,80,1], [740,340,80,80,1]],
		/*   behaviors_A: */ [behaviors_Data.bh_dragger2, behaviors_Data.bh_dragger2],
		/* targets_T:     */ [targets_Data.pg_light],
		/*   locators_T:  */ [[555,270,80,80,1]],
		/*   behaviors_T: */ [behaviors_Data.swapLight],
		/* canvasL:       */ ['st_qual', 0, [0,1,5]],
		/* canvasM:       */ ['mn_qual', 0, [0,1,5]],
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var qual_diffusion = new Page (
		/* pageKey:     */ 'db_22000', 
		/* pageName:    */ 'Diffusion', 
		/* pageText:    */ text_Data.t_diffusion,
		/* clickTrail:  */ [],

		/* items_Setup:   */ items_Data.f650,
		/*   locators_S:  */ [630,240,350,270,1],
		/*   targets_S:   */ [targets_Data.se_left1],
		/*   behavior_ST: */ [behaviors_Data.moveDiff],
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ [items_Data.toughspun, items_Data.opal, items_Data.halfWhite, items_Data.toughWhite, items_Data.rolux],
		/*   locators_A:  */ [[400,500,100,100,1], [520,500,100,100,1], [640,500,100,100,1], [760,500,100,100,1], [880,500,100,100,1]], 		// grid(HLT)  horizontal/left/top
		/*   behaviors_A: */ [behaviors_Data.bh_dragger2, behaviors_Data.bh_dragger2, behaviors_Data.bh_dragger2, behaviors_Data.bh_dragger2, behaviors_Data.bh_dragger2],
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['st_qual_diff', 0, [0,1,2,3,4,5]],
		/* canvasM:       */ ['mn_qual_diff', 0, [0,1,2,3,4,5]],
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var qual_hard_near = new Page (
		/* pageKey:     */ 'db_23000', 
		/* pageName:    */ 'Hard Light 1', 
		/* pageText:    */ text_Data.t_qual_hard_near,
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ [items_Data.dragger1],
		/*   locators_A:  */ [[555,240,80,80,1]],
		/*   behaviors_A: */ [behaviors_Data.canvas_AB],
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['st_shadow_hard_near/st_shadow_hard_near', [0,0], [[6,5,4,3,2,1,0], [0,1,2,3,4,5,6]]],
		/* canvasM:       */ 0,
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var qual_hard_far = new Page (
		/* pageKey:     */ 'db_24000', 
		/* pageName:    */ 'Hard Light 2', 
		/* pageText:    */ text_Data.t_qual_hard_far,
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ [items_Data.dragger1],
		/*   locators_A:  */ [[555,240,80,80,1]],
		/*   behaviors_A: */ [behaviors_Data.canvas_AB],
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['st_shadow_hard_far/st_shadow_hard_far', [0,0], [[6,5,4,3,2,1,0], [0,1,2,3,4,5,6]]],
		/* canvasM:       */ 0,
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var qual_soft_near = new Page (
		/* pageKey:     */ 'db_25000', 
		/* pageName:    */ 'Soft Light 1', 
		/* pageText:    */ text_Data.t_qual_soft_near,
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ [items_Data.dragger1],
		/*   locators_A:  */ [[555,240,80,80,1]],
		/*   behaviors_A: */ [behaviors_Data.canvas_AB],
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['st_shadow_soft_near/st_shadow_soft_near', [0,0], [[6,5,4,3,2,1,0], [0,1,2,3,4,5,6]]],
		/* canvasM:       */ 0,
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var qual_soft_far = new Page (
		/* pageKey:     */ 'db_26000', 
		/* pageName:    */ 'Soft Light 2', 
		/* pageText:    */ text_Data.t_qual_soft_far,
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ [items_Data.dragger1],
		/*   locators_A:  */ [[555,240,80,80,1]],
		/*   behaviors_A: */ [behaviors_Data.canvas_AB],
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['st_shadow_soft_far/st_shadow_soft_far', [0,0], [[6,5,4,3,2,1,0], [0,1,2,3,4,5,6]]],
		/* canvasM:       */ 0,
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var position = new Page (
		/* pageKey:     */ 'db_30000', 
		/* pageName:    */ 'Position', 
		/* pageText:    */ text_Data.t_position,
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ 0,
		/*   locators_A:  */ 0,
		/*   behaviors_A: */ 0,
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ 0,
		/* canvasM:       */ 0,
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var keyShadows = new Page (
		/* pageKey:     */ 'db_31000', 
		/* pageName:    */ 'Key Shadows', 
		/* pageText:    */ text_Data.t_keyShadows,
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ [items_Data.f650],		// 3D light-for-stand
		/*   locators_A:  */ [[555,240,80,80,1]],
		/*   behaviors_A: */ [behaviors_Data.canvas_AB],	// X:Akey, Y:Bkey
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['st_KBangles_K/st_KBangles_K', [0,0], [[6,5,4,3,2,1,0], [0,1,2,3,4,5,6]]],
		/* canvasM:       */ ['mn_KBangles_K/mn_KBangles_K', [0,0], [[6,5,4,3,2,1,0], [6,5,4,3,2,1,0]]],
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var backAngle = new Page (
		/* pageKey:     */ 'db_32000', 
		/* pageName:    */ 'Backlight Angle', 
		/* pageText:    */ text_Data.t_backAngle,
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ [items_Data.f650],		// 3D light-for-stand
		/*   locators_A:  */ [[555,240,80,80,1]],
		/*   behaviors_A: */ [behaviors_Data.canvas_AB],	// X:Akey, Y:Bkey
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['st_KBangles_B/st_KBangles_B', [0,0], [[0,1,2,3,4,5,6], [0,1,2,3,4,5,6]]],
		/* canvasM:       */ ['mn_KBangles_B/mn_KBangles_B', [0,0], [[0,1,2,3,4,5,6], [0,1,2,3,4,5,6]]],
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var threePoint = new Page (
		/* pageKey:     */ 'db_33000', 
		/* pageName:    */ 'Three Point Ltg', 
		/* pageText:    */ text_Data.t_threePoint,
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ [items_Data.LED, items_Data.f150, items_Data.f650],
		/*   locators_A:  */ [[100,400,80,80,1], [100,200,80,80,1], [450,200,80,80,1]],
		/*   behaviors_A: */ [behaviors_Data.threeWay, behaviors_Data.threeWay, behaviors_Data.threeWay], 	// key:Akey, back:Bkey, fill:Ckey
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['3pt/3pt0', [0,0,0], [[1,2,3], [1,2,3,4,5,6,7], [1,2,3,4,5,6,7]]],
		/* canvasM:       */ ['3pt/3pt0', [0,0,0], [[1,2,3], [1,2,3,4,5,6,7], [1,2,3,4,5,6,7]]],
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var int_LEDs = new Page (
		/* pageKey:     */ 'db_15000', 
		/* pageName:    */ 'LEDs', 
		/* pageText:    */ text_Data.t_LEDs,
		/* clickTrail:  */ [],

		/* items_Setup:   */ items_Data.LED,
		/*   locators_S:  */ [630,240,350,270,1],
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S: */ ['LED_bright'],
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ 0,
		/*   locators_G:  */ 0,
		/*   behaviors_G: */ 0,

		/* items_Actor:   */ 0,
		/*   locators_A:  */ 0,
		/*   behaviors_A: */ 0,
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['st_LED_bright', 0, [1,2,3,4,5,6,7]],
		/* canvasM:       */ ['mn_LED_bright', 0, [1,2,3,4,5,6,7]],
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var db_demo1 = new Page (
		/* pageKey:     */ 'db_41000', 
		/* pageName:    */ 'db Demo', 
		/* pageText:    */ 't_db_demo1',
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ [items_Data.button1, items_Data.toggle1, items_Data.setting1, items_Data.slider1, items_Data.dragger1],
		/*   locators_G:  */ [[100, 300, 180, 60, 1], [100, 400, 60, 60, 1], [400, 300, 180, 60, 1], [400, 400, 60, 60, 1], [400, 500, 60, 60, 1]],
		/*   behaviors_G: */ [behaviors_Data.labels_onOff, behaviors_Data.labels_onOff, behaviors_Data.bh_setting1, behaviors_Data.bh_slider1, behaviors_Data.bh_dragger1],

		/* items_Actor:   */ 0,
		/*   locators_A:  */ 0,
		/*   behaviors_A: */ 0,
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ 0,
		/* canvasM:       */ 0,
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);

	var db_demo2 = new Page (
		/* pageKey:     */ 'db_42000', 
		/* pageName:    */ 'db Demo 2', 
		/* pageText:    */ 't_db_demo2',
		/* clickTrail:  */ [],

		/* items_Setup:   */ 0,
		/*   locators_S:  */ 0,
		/*   targets_S:   */ 0,
		/*   behavior_ST: */ 0,
		/*   controls_S:  */ 0,
		/*   behavior_SC: */ 0,
		/* items_Menu:    */ 0,
		/*   locators_M:  */ 0,
		/*   behaviors_M: */ 0,
		/* items_Group:   */ [items_Data.trackpad1],
		/*   locators_G:  */ [[100, 100, 160, 90, 1]],
		/*   behaviors_G: */ [behaviors_Data.trackpad_canvasBg],

		/* items_Actor:   */ 0,
		/*   locators_A:  */ 0,
		/*   behaviors_A: */ 0,
		/* targets_T:     */ 0,
		/*   locators_T:  */ 0,
		/*   behaviors_T: */ 0,
		/* canvasL:       */ ['AlleyCat', 0, [1]],
		/* canvasM:       */ 0,
		/* imagePoolL:    */ 0,
		/* imagePoolM:    */ 0,
		pagesArray
	);


	// howIdidIt1, treeDiag1, pageObject, itemObjects, locsBhvrs, locators, behaviors, canvases1, canvases2, framesets, imagesNames

	// var howIdidIt1 = new Page ( 'db_50000', 'How I Did It', 't_howIdidIt1', [], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [items_Data.howIdidIt1], [[50,240,576,342,1]], [behaviors_Data.graphic], 0, 0, 0, 0, 0, 0, 0, pagesArray );

	// var treeDiag1 = new Page ( 'db_51000', 'Contents', 't_treeDiag1', [], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [items_Data.treeDiag1], [[100,240,750,500,1]], [behaviors_Data.graphic], 0, 0, 0, 0, 0, 0, 0, pagesArray );

	// var pageObject = new Page ( 'db_52000', 'Pages', 't_pageObject', [], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [items_Data.pageObject], [[100,240,210,281,1]], [behaviors_Data.graphic], 0, 0, 0, 0, 0, 0, 0, pagesArray );

	// var itemObjects = new Page ( 'db_53000', 'Items', 't_itemObjects', [], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [items_Data.pageObject, items_Data.itemObjects], [[100,240,210,281,1], [195,260,193,543,1]], [behaviors_Data.graphic, behaviors_Data.graphic], 0, 0, 0, 0, 0, 0, 0, pagesArray );

	// var locsBhvrs = new Page ( 'db_54000', 'Actions', 't_locsBhvrs', [], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [items_Data.pageObject, items_Data.itemObjects, items_Data.locsBhvrs], [[100,240,210,281,1], [195,260,193,543,1], [250,300,299,459,1]], [behaviors_Data.graphic, behaviors_Data.graphic, behaviors_Data.graphic], 0, 0, 0, 0, 0, 0, 0, pagesArray );

	// var locators = new Page ( 'db_55000', 'Locators', 't_locators', [], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [items_Data.locators], [[195,240,618,469,1]], [behaviors_Data.graphic], 0, 0, 0, 0, 0, 0, 0, pagesArray );

	// var behaviors = new Page ( 'db_56000', 'Behaviors', 't_behaviors', [], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [items_Data.behaviors], [[60,240,686,375,1]], [behaviors_Data.graphic], 0, 0, 0, 0, 0, 0, 0, pagesArray );

	// var canvases2 = new Page ( 'db_57000', 'Canvases', 't_canvases2', [], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [items_Data.canvases2], [[100,240,576,342,1]], [behaviors_Data.graphic], 0, 0, 0, 0, 0, 0, 0, pagesArray );

	// var framesets = new Page ( 'db_58000', 'Framesets', 't_framesets', [], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [items_Data.canvases2, items_Data.framesets], [[100,240,576,342,1], [150,240,691,200,1]], [behaviors_Data.graphic, behaviors_Data.graphic], 0, 0, 0, 0, 0, 0, 0, pagesArray );

	// var imagesNames = new Page ( 'db_59000', 'Framesets2', 't_imagesNames', [], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [items_Data.canvases2, items_Data.framesets, items_Data.imagesNames], [[100,240,576,342,1], [150,240,691,200,1], [120,440,702,242,1]], [behaviors_Data.graphic, behaviors_Data.graphic, behaviors_Data.graphic], 0, 0, 0, 0, 0, 0, 0, pagesArray );

	// var selfie = new Page ( 'db_61000', 'Selfie', 't_selfie', [], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [items_Data.selfie], [[50,240,576,342,1]], [behaviors_Data.graphic], 0, 0, 0, 0, 0, 0, 0, pagesArray );



		// /* items_Actor:   */ [items_Data.treeDiag1, items_Data.canvases1, items_Data.canvases2, items_Data.framesets, items_Data.imagesNames, items_Data.itemObjects, items_Data.locators, items_Data.locsBhvrs],
		// /*   locators_A:  */ [[50,50,0,0,1], [100,100,0,0,1], [150,100,0,0,1], [200,100,0,0,1], [250,100,0,0,1], [300,100,0,0,1], [350,100,0,0,1], [400,100,0,0,1]],
		// /*   behaviors_A: */ [behaviors_Data.graphic, behaviors_Data.graphic, behaviors_Data.graphic, behaviors_Data.graphic, behaviors_Data.graphic, behaviors_Data.graphic, behaviors_Data.graphic, behaviors_Data.graphic],

    return pagesArray;
}

function Page (pageKey, pageName, pageText, clickTrail, items_Setup, locators_S, targets_S, behavior_ST, controls_S, behavior_SC, items_Menu, locators_M, behaviors_M, items_Group, locators_G, behaviors_G, items_Actor, locators_A, behaviors_A, targets_T, locators_T, behaviors_T, canvasL, canvasM, imagePoolL, imagePoolM, pagesArray) {
    console.log('Page');

    this.pageKey = pageKey;
    this.pageName = pageName;
    this.pageText = pageText;
    this.clickTrail = clickTrail;
    this.items_Setup = items_Setup;
    this.locators_S = locators_S;
    this.targets_S = targets_S;
    this.behavior_ST = behavior_ST;
    this.controls_S = controls_S;
    this.behavior_SC = behavior_SC;
    this.items_Menu = items_Menu;
    this.locators_M = locators_M;
    this.behaviors_M = behaviors_M;
    this.items_Group = items_Group;
    this.locators_G = locators_G;
    this.behaviors_G = behaviors_G;
    this.items_Actor = items_Actor;
    this.locators_A = locators_A;
    this.behaviors_A = behaviors_A;
    this.targets_T = targets_T;
    this.locators_T = locators_T;
    this.behaviors_T = behaviors_T;
    this.canvasL = canvasL;
    this.canvasM = canvasM;
    this.imagePoolL = imagePoolL;
    this.imagePoolM = imagePoolM;
    this.pagesArray = pagesArray;
    this.pageObject = this;

    this.pagesArray.push(this);

}

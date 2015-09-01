# LOL
Working repo for LOL in WDI class...

LOL is "Lighting on Location" -- the prototype app for an on-line training simulator, intended to teach the craft of lighting for film and video production.  The initial 6/25 version is a single-page app using raw javascript and minimal css techniques to manage DOM interactivity.  Most interactions use clicking and/or dragging to influence the behaviors of other DOM elements, and to display corresponding images in "studio" and "video monitor" HTML5 canvases.  Movement in 3D space is achieved through a hack that displays 2D frames (from a rendered 3D frame sequence) that are selected based on the x/y location of the controlling element.  

Examples: 1) moving a "Fresnel 650" light object closer to the subject displays a sequence of frames on the canvas in which light intensity increases and the light "cone" narrows onto the subject; 2) clicking-and-dragging on a "spot/flood" control widens or narrows the light beam by selectively displaying corresponding frames in the canvas.

Goals:
1) refactor code with extensive use of callbacks to more effectively compartmentalize processes
2) include jQuery functions to simplify DOM management
3) use backbone.js to package functions more effectively into MV* patterns
4) redesign layout to update the look-and-feel
5) add actual instructional text

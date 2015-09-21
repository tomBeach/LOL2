// ======= ======= ======= init ======= ======= =======
function init() {
    console.log("init");

    // ======= ======= ======= DataObject ======= ======= =======
    // ======= ======= ======= DataObject ======= ======= =======
    // ======= ======= ======= DataObject ======= ======= =======

    function NavData(whichPage) {
        console.log('NavData');
        this.name = whichPage;
        this.linkDataArray = [
            {linkEl: null,
            linkId: "profile",
            linkTitle: "profile",
            linkText: "Full-stack web developer with a passion for highly interactive products that focus on education and training. Strong desire to synthesize complex data and innovative content into accessible, engaging and experiential applications. Empathetic outlook that is client focused, collaborative and fueled by curiosity.",
            linkColor: "#5B2971",
            linkLeft: 0,
            linkTop: 0
            },

            {linkEl: null,
            linkId: "client",
            linkTitle: "client",
            linkText: "My approach to client goals...",
            linkColor: "#2D882D",
            linkLeft: 0,
            linkTop: 0
            },

            {linkEl: null,
            linkId: "design",
            linkTitle: "design",
            linkText: "My design process...",
            linkColor: "#55AA55",
            linkLeft: 0,
            linkTop: 0
            },

            {linkEl: null,
            linkId: "code",
            linkTitle: "code",
            linkText: "Developing database structures, data models, object classes, inheritance, logic...",
            linkColor: "#116611",
            linkLeft: 0,
            linkTop: 0
            },

            {linkEl: null,
            linkId: "stoxx",
            linkTitle: "stoxx",
            linkText: "There are lots of apps online for tracking and managing investment portfolios.  Like many of them, the Stoxx project loads current data from an external api and presents it in user-generated categories.  d3 is used to generate the historical price graphs.",
            linkColor: "#ff9100",
            linkLeft: 0,
            linkTop: 0
            },

            {linkEl: null,
            linkId: "pixmix",
            linkTitle: "pixmix",
            linkText: "This app allows the user to sort and categorize photos into user-defined groups and categories.  Photos are displayed in batches by group or as single images in a bootstrap image player.",
            linkColor: "#ffa000",
            linkLeft: 0,
            linkTop: 0
            },

            {linkEl: null,
            linkId: "loclight",
            linkTitle: "lighting on location",
            linkText: "Location lighting is one of the most complex and misunderstood elements of film-making.  Lighting on Location uses 3D user-controlled animation sequences to illustrate the basic concepts of lighting in real world locations.  This prototype version demonstrates use of modifiers, positioning and instrument selection to control the qualty, quantity and texture manipulation in a lighting studio.  Single-page app programmed with object oriented javascript.  ",
            linkColor: "#ffaf00",
            linkLeft: 0,
            linkTop: 0
            },

            {linkEl: null,
            linkId: "blackjack",
            linkTitle: "blackjack",
            linkText: "This single-page-app simulates a blackjack game with up to three players competing against the dealer.  It features an object-oriented design and animated graphics to enhance the experience of a 'real' card game -- though players need to bring their own dollars!",
            linkColor: "#ff8400",
            linkLeft: 0,
            linkTop: 0
            },

            {linkEl: null,
            linkId: "handoff",
            linkTitle: "handoff",
            linkText: "A demo for a mobile-first workflow-tracking app for nurses in hospital clinical settings...",
            linkColor: "#ffbe00",
            linkLeft: 0,
            linkTop: 0
            }
        ];

    }

    // ======= ======= ======= DisplayObject ======= ======= =======
    // ======= ======= ======= DisplayObject ======= ======= =======
    // ======= ======= ======= DisplayObject ======= ======= =======

    function Display(whichDisplay) {
        console.log('Display');
        this.name = whichDisplay;
        this.logoElementObject = null;
        this.navLinksArray = homeNavData.linkDataArray;
        // console.dir(this.pageData);
    }

    // ======= ======= ======= initMenuDisplay ======= ======= =======
    Display.prototype.initMenuDisplay = function() {
        console.log("initMenuDisplay");

        // == hide static menu items
        $("#hiddenBannerRow").css("visibility", "hidden");

    }

    // ======= ======= ======= initNavDivs ======= ======= =======
    Display.prototype.initNavDivs = function() {
        console.log("initNavDivs");

        var self = this;
        var logoIdsArray = ["logo3", "logo3_h"];

        // == logo elements used for page positioning
        logoIdsArray.forEach(function(id, index) {
            logoElement = document.getElementById(id);
            logoLocL = logoElement.getBoundingClientRect().left;
            logoLocT = logoElement.getBoundingClientRect().top;
            logoElementObject = { "linkEl": logoElement, "linkId": $("#" + id), "linkTitle": null, "linkText": null, "linkColor": "white", "linkLeft": logoLocL, "linkTop": logoLocT };
            if (index == 0) {
                self.logoElementObject = logoElementObject;
            }
            self.navLinksArray.push(logoElementObject);
        })

        // == menu divs used for nav links
        var itemLoc = {};
        $(".navLink").each(function(index) {
            elementId = $(this).attr("id");
            for (var i = 0; i < self.navLinksArray.length; i++) {
                nextLinkId = self.navLinksArray[i].linkId;
                if (nextLinkId == elementId) {
                    self.navLinksArray[i].linkEl = $(this);
                    self.navLinksArray[i].left = $(this).offset().left;
                    self.navLinksArray[i].top = $(this).offset().top;
                }
            }
        });
    }

    // ======= ======= ======= initEventListeners ======= ======= =======
    Display.prototype.initEventListeners = function() {
        console.log("initEventListeners");

        var self = this;

        // == window scroll event listener
        $(window).on('scroll', function(event) {
            homeDisplay.updateScrollDisplay();
        });

        for (var i = 0; i < this.navLinksArray.length; i++) {
            nextElement = this.navLinksArray[i].linkEl;

            $(nextElement).on("mousedown", function(event) {
                linkElement = $(event.target);
                linkElement.addClass("clicked");
            });
            $(nextElement).on("mouseup", function(event) {
                targetPageId = event.target.id;
                linkElement = $(event.target);
                linkElement.removeClass("clicked");
                self.loadNewPage(targetPageId);
            });
            $(nextElement).on("mouseover", function(event) {
                targetPageId = event.target.id;
                self.updateLinkDisplay(targetPageId);
            });
            $(nextElement).on("mouseout", function(event) {
                targetPageId = event.target.id;
                linkElement = $(event.target);
                linkElement.removeClass("clicked");
                self.updateLinkDisplay("mouseout");
            });
        }
    }

    // ======= ======= ======= updateLinkDisplay ======= ======= =======
    Display.prototype.updateLinkDisplay = function(targetPageId) {
        console.log("updateLinkDisplay");

        var self = this;

        if ((targetPageId == "logo3") || (targetPageId == "logo3_h")) {
             targetPageId = "mouseout";
        } else {
             for (var i = 0; i < (this.navLinksArray.length - 2); i++) {
                 nextLinkId = this.navLinksArray[i].linkId;
                 if (nextLinkId == targetPageId) {
                     nextElement = this.navLinksArray[i].linkEl;
                     nextColor = this.navLinksArray[i].linkColor;
                     nextLinkText = this.navLinksArray[i].linkText;
                     nextLinkTitle = this.navLinksArray[i].linkTitle;
                     break;
                 }
             }
         }

        if (targetPageId != "mouseout") {
            nextElement.css("background-color", nextColor);
            $("#linkTitle").text(nextLinkTitle);
            $("#linkText").text(nextLinkText);
            $("#linkTitle").css("color", nextColor);
            $("#linkText").css("color", nextColor);
        } else {
            nextElement.css("background-color", "white");
            $("#linkTitle").text("");
            $("#linkText").text("");
        }
    }

    // ======= ======= ======= loadNewPage ======= ======= =======
    Display.prototype.loadNewPage = function(targetPage) {
        console.log("loadNewPage");

        // == return to home location if clicking on logo
        if ((targetPage == "logo3") || (targetPage == "logo3_h")) {
             targetPage = "home";
             scrollLoc = 0;

        // == scroll to page target location for links
        } else {
            var linkString = "#" + targetPage + "-page";
            var position = $(linkString).position();
            var scrollLoc = position.top;
        }

        $("html, body").animate({
            scrollTop: scrollLoc
        });
    }

    // ======= ======= ======= updateScrollDisplay ======= ======= =======
    Display.prototype.updateScrollDisplay = function() {
        console.log("updateScrollDisplay");

        var $window = $(window);
        scrollTop = $window.scrollTop();
        console.log("  scrollTop: " + scrollTop);
        var logoElement = document.getElementById("logo3");
        var logoLocT = logoElement.getBoundingClientRect().top;

        if (scrollTop >= this.logoElementObject.linkTop - 10) {
            $("#hiddenBannerRow").css("visibility", "visible");
            $("#bannerRow").css("visibility", "hidden");
        } else if (scrollTop < this.logoElementObject.linkTop) {
            $("#hiddenBannerRow").css("visibility", "hidden");
            $("#bannerRow").css("visibility", "visible");
        }

    }

    // ======= ======= ======= init Display ======= ======= =======
    // ======= ======= ======= init Display ======= ======= =======
    // ======= ======= ======= init Display ======= ======= =======

    window.scrollTo(0, 0);

    var homeNavData = new NavData("homeNavData");
    var homeDisplay = new Display("homeDisplay");		// constructor
    homeDisplay.initNavDivs();
    homeDisplay.initMenuDisplay();
    homeDisplay.initEventListeners();

    initSvgObjects();

    var bootstrap3_enabled = (typeof $().emulateTransitionEnd == 'function');
    console.log("bootstrap3_enabled: " + bootstrap3_enabled);

}

/* ======= ======= ======= ARCHIVE ======= ======= =======


*/

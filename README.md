# Lighting on Location (demo)

####Background
This project was developed as a prototype framework for creating highly interactive online instructional applications.  It combines two of my great passions -- lighting for film production, and online educational applications.  My interest in lighting comes from the many years I spent in video production as a writer/producer and lighting crew member (in roles that ranged from grip to gaffer to lighting director).  I've spent much of my career in educational settings (high school technology education and film school co-curricular director), and am intrigued by the ongoing possibilities of online education.

The code for Lighting on Location is quite primitive (no jquery or libraries) and in desperate need of refactoring.  It also uses a large number of graphics files to simulate 3D environments, and suffers from the lack of a pre-loading function (hence the "flickering" in animations when first using some of the draggable tools).  I used Blender to create the 3D animations, and though it has baking options that would enable real-time "walk-throughs", the need to modify lighting effects in real time negated the baking solution.  

I am displaying it here to show the difference between by "pre-GA" and "post-GA" approaches to coding -- GA meaning General Assembly, and pre- and post- meaning before and after I took the Web Development Immersive course last year.  I intend to refactor this project with pre-loaders and support from libraries and frameworks, and also plan to add actual instructional content... eventually.

####Design
Object structures were developed to manage the various combinations of graphics and interactions used.

######Page Objects
Though it is a single-page application, the Page Object works as a conceptual organizer.  It is the largest data structure and contains the interactive components for each "page".  Most of these components are interactive (called "items"), and are grouped into five categories: setup, group, target, actor, menu.  

######Item Objects
This structure stores image file names and positioning information ("initLoc" and "dropLoc", for example, are arrays of x, y, width and height information which identify the starting screen location and image size when a page is loaded, then after user manipulation).  Items may have their own child items (such as a light with an on/off switch).

Setup items have multiple layers of functionality (a lighting instrument graphic that has a user-operated spot/flood control, for example).  Group items are collections of multiple items that may be selected individually (e.g. lights of varying intensities).  Target items are graphics at specific screen locations that respond to other items that are dragged to the target location.  

Actors offer one of five different functionalities: 

  • toggle -- a toggle switch between two states
  
  • slider -- draggable on horizontal or vertical axis
  
  • dragger -- draggable anywhere within a confining rectangle
  
  • setting -- a dragger or slider that controls the behavior of another item and changes its own state as it is "moved"
  
  • trackpad -- a dragger that directly controls the position of a secondary item
  
(Menu items are for future versions where navigation between instructional lessons will be required.)

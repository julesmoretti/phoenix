'use strict';
var allFour = [ 'shift', 'ctrl', 'alt', 'cmd' ];
var allThree = [ 'ctrl', 'alt', 'cmd' ];
var twoLeft = [ 'ctrl', 'alt' ];
var twoRight = [ 'shift', 'ctrl', 'alt' ];
var commands = [ 'shift', 'ctrl', 'alt', 'cmd' ];
var altCommands = [ 'cmd' ];

var gridMove = function(numbOfCol, numbOfRow, colIndex, rowIndex) {
    var currentScreen = Window.focused().screen().flippedVisibleFrame();
    Window.focused().setFrame({
      "x": (currentScreen.width / numbOfCol * colIndex) + currentScreen.x,
      "y": (currentScreen.height / numbOfRow * rowIndex) + currentScreen.y,
      "width": currentScreen.width / numbOfCol,
      "height": currentScreen.height / numbOfRow
    });
}

var moveAccross = function() {
  if ( Screen.all().length > 1 ) {
    var win = Window.focused();
    var currentScreen = win.screen();
    var nextScreen = currentScreen.next().flippedVisibleFrame();
    Window.focused().setFrame({
      "x": nextScreen.x,
      "y": nextScreen.y,
      "width": nextScreen.width,
      "height": nextScreen.height,
    });
  }
}

var gridExpand = function(direction) {
    var focusedWindow = Window.focused().frame();
    var currentScreen = Window.focused().screen().flippedVisibleFrame();

    Phoenix.log('focusedWindow | '+JSON.stringify(focusedWindow)+'');
    Phoenix.log('currentScreen | '+JSON.stringify(currentScreen)+'');

    if (direction === 'left') {
      Window.focused().setFrame({
        "x": currentScreen.x,
        "y": focusedWindow.y,
        "width": focusedWindow.width + focusedWindow.x - currentScreen.x,
        "height": focusedWindow.height,
      });
    } else if (direction === 'right') {
      Window.focused().setFrame({
        "x": focusedWindow.x,
        "y": focusedWindow.y,
        "width": currentScreen.width - focusedWindow.x + currentScreen.x,
        "height": focusedWindow.height,
      });
    }
}

var screenSaver = function() {
  // App.launch('itunes');
  App.launch('ScreenSaverEngine');
}

// start screen saver
Key.on('down', allFour, function(){
  setTimeout(screenSaver, 200);
});


// move screen accross
Key.on('left', twoLeft, function(){ moveAccross() });
Key.on('right', twoLeft, function(){ moveAccross() });

// Expand
Key.on('left', allFour, function(){ gridExpand( 'left' ) });
Key.on('right', allFour, function(){ gridExpand( 'right' ) });

// full size
Key.on('up', allFour, function(){ gridMove( 1, 1, 0, 0) });


// halves
Key.on('up', allThree, function(){ gridMove( 1, 2, 0, 0) });
Key.on('down', allThree, function(){ gridMove( 1, 2, 0, 1) });
Key.on('left', allThree, function(){ gridMove( 2, 1, 0, 0) });
Key.on('right', allThree, function(){ gridMove( 2, 1, 1, 0) });


// quarters
Key.on('-', allThree, function(){ gridMove( 2, 2, 0, 0) });
Key.on('=', allThree, function(){ gridMove( 2, 2, 1, 0) });
Key.on('[', allThree, function(){ gridMove( 2, 2, 0, 1) });
Key.on(']', allThree, function(){ gridMove( 2, 2, 1, 1) });


// thirds
Key.on('keypad7', allThree, function(){ gridMove( 3, 1, 0, 0) });
Key.on('keypad8', allThree, function(){ gridMove( 3, 1, 1, 0) });
Key.on('keypad9', allThree, function(){ gridMove( 3, 1, 2, 0) });

Key.on('keypad4', allThree, function(){ gridMove( 3, 2, 0, 0) });
Key.on('keypad5', allThree, function(){ gridMove( 3, 2, 1, 0) });
Key.on('keypad6', allThree, function(){ gridMove( 3, 2, 2, 0) });
Key.on('keypad1', allThree, function(){ gridMove( 3, 2, 0, 1) });
Key.on('keypad2', allThree, function(){ gridMove( 3, 2, 1, 1) });
Key.on('keypad3', allThree, function(){ gridMove( 3, 2, 2, 1) });


// eighth
Key.on('j', allThree, function(){ gridMove( 4, 1, 0, 0) });
Key.on('k', allThree, function(){ gridMove( 4, 1, 1, 0) });
Key.on('l', allThree, function(){ gridMove( 4, 1, 2, 0) });
Key.on(';', allThree, function(){ gridMove( 4, 1, 3, 0) });

Key.on('7', allThree, function(){ gridMove( 4, 2, 0, 0) });
Key.on('8', allThree, function(){ gridMove( 4, 2, 1, 0) });
Key.on('9', allThree, function(){ gridMove( 4, 2, 2, 0) });
Key.on('0', allThree, function(){ gridMove( 4, 2, 3, 0) });
Key.on('u', allThree, function(){ gridMove( 4, 2, 0, 1) });
Key.on('i', allThree, function(){ gridMove( 4, 2, 1, 1) });
Key.on('o', allThree, function(){ gridMove( 4, 2, 2, 1) });
Key.on('p', allThree, function(){ gridMove( 4, 2, 3, 1) });


// sixth
Key.on('keypad7', twoLeft, function(){ gridMove( 6, 1, 0, 0) });
Key.on('keypad8', twoLeft, function(){ gridMove( 6, 1, 1, 0) });
Key.on('keypad9', twoLeft, function(){ gridMove( 6, 1, 2, 0) });
Key.on('keypad7', twoRight, function(){ gridMove( 6, 1, 3, 0) });
Key.on('keypad8', twoRight, function(){ gridMove( 6, 1, 4, 0) });
Key.on('keypad9', twoRight, function(){ gridMove( 6, 1, 5, 0) });

Key.on('keypad4', twoLeft, function(){ gridMove( 6, 2, 0, 0) });
Key.on('keypad5', twoLeft, function(){ gridMove( 6, 2, 1, 0) });
Key.on('keypad6', twoLeft, function(){ gridMove( 6, 2, 2, 0) });
Key.on('keypad1', twoLeft, function(){ gridMove( 6, 2, 0, 1) });
Key.on('keypad2', twoLeft, function(){ gridMove( 6, 2, 1, 1) });
Key.on('keypad3', twoLeft, function(){ gridMove( 6, 2, 2, 1) });

Key.on('keypad4', twoRight, function(){ gridMove( 6, 2, 3, 0) });
Key.on('keypad5', twoRight, function(){ gridMove( 6, 2, 4, 0) });
Key.on('keypad6', twoRight, function(){ gridMove( 6, 2, 5, 0) });
Key.on('keypad1', twoRight, function(){ gridMove( 6, 2, 3, 1) });
Key.on('keypad2', twoRight, function(){ gridMove( 6, 2, 4, 1) });
Key.on('keypad3', twoRight, function(){ gridMove( 6, 2, 5, 1) });

Phoenix.notify('Phoenix config reloaded');

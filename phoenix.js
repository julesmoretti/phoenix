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
			"height": nextScreen.height
		});
	}
}


// move screen accross
Key.on('left', twoLeft, function(){ moveAccross() });
Key.on('right', twoLeft, function(){ moveAccross() });


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


// var ze = function(numbOfCol, numbOfRow, colIndex, rowIndex) {
// 	Phoenix.log( 'ze - Called' );

// 	var win = Window.focused();
// 	var oldScreen = win.screen();
// 	var newScreen = oldScreen.next();
// 	Phoenix.log( 'ze - Called // ' + JSON.stringify( oldScreen.flippedVisibleFrame() ) + " // " + JSON.stringify( newScreen.flippedVisibleFrame() ));
// }
// Key.on('down', allFour, function(){ ze( 2, 2, 1, 1) });
//
//
// var gridMove = function(numbOfCol, numbOfRow, colIndex, rowIndex) {
// 	if (Window.focused()) {
// 		var win = Window.focused();
// 		var size = win.size();
// 		var frame = win.screen().flippedVisibleFrame();
// 		var topNav = 23;

// 		win.setFrame({
// 			"y": (size.height * rowIndex) + topNav,
// 			"x": size.width * colIndex,
// 			"width": frame.width / numbOfCol,
// 			"height": ( frame.height ) / numbOfRow
// 		});

// 		Phoenix.log( '-------------------------' );
// 		Phoenix.log( 'window - ' + JSON.stringify(win ));
// 		Phoenix.log( 'window - screen - hash - ' + JSON.stringify(win.screen().hash() ));
// 		Phoenix.log( 'window - size - ' + JSON.stringify( size ));
// 		Phoenix.log( 'window - flippedframe - ' + JSON.stringify( frame ));
// 		Phoenix.log( 'window - screen - visible - ' + JSON.stringify(win.screen().visibleFrame() ));
// 		Phoenix.log( 'spaces - ' + JSON.stringify(Space.all() ));
// 		Phoenix.log( 'screens all - ' + JSON.stringify(Screen.all() ));

// 		for ( var i = 0; i < Screen.all().length; i++ ) {
// 			Phoenix.log( 'screens # - ' + i + " - "+ JSON.stringify(Screen.all()[i].frame() ));
// 		}

// 		Phoenix.log( 'screens all - 1st - hash - ' + JSON.stringify(Screen.all()[0].hash() ));
// 		Phoenix.log( 'screens main - ' + JSON.stringify(Screen.main() ));
// 		Phoenix.log( 'screens main identifier - ' + JSON.stringify(Screen.main().identifier() ));
// 		Phoenix.log( JSON.stringify(Screen.main().visibleFrame() ));
// 		Phoenix.log( JSON.stringify(Screen.main().flippedFrame() ));
// 		Phoenix.log( JSON.stringify(win.screen().flippedFrame() ));
// 		Phoenix.log( JSON.stringify(win.size() ));
// 	}
// }

// Thank you for the swift response. So here are the steps so far:

// 1:
// `Window#maximise()` does not work so instead I used `Window.focused().maximise();` which works.

// 2:
// For 2 I used the following method:
// ```
// var tempSize = Window.focused().size();
// Window.focused().setSize({ width: tempSize.width / numbOfCol, height: tempSize.height / numbOfRow });
// Window.focused().setTopLeft({x: tempSize.width / numbOfCol * colIndex, y: (tempSize.height / numbOfRow * rowIndex) + 23});
// ```

// 3:
// I use implemented what you mentioned with the following
// ```
// var tempSize = Window.focused().screen().flippedVisibleFrame();

// Phoenix.log( 'tempTest - frame - ' , JSON.stringify( tempSize ) );
// Window.focused().setSize({ width: tempSize.width / numbOfCol, height: tempSize.height / numbOfRow });
// Window.focused().setTopLeft({x: tempSize.width / numbOfCol * colIndex, y: (tempSize.height / numbOfRow * rowIndex ) + tempSize.y});
// ```

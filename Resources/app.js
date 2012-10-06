/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}

// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		// Android uses platform-specific properties to create windows.
		// All other platforms follow a similar UI pattern.
		if (osname === 'android') {
			Window = require('ui/handheld/android/ApplicationWindow');
		}
		else {
			Window = require('ui/handheld/ApplicationWindow');
		}
	}
	//new Window().open();
	Ti.UI.setBackgroundColor('#000');
	var winRoot = Ti.UI.createWindow({
	  backgroundColor: 'black',
	  exitOnClose: true,
	  fullscreen: false,
	  title: 'GangUp Demo'
	});
	var win1 = Titanium.UI.createWindow({
	    backgroundColor: 'red',
	    title: ''
	});
	var win3 = Titanium.UI.createWindow({
	    	backgroundColor: 'blue',
	    	title: 'Blue Window'
	});
	var nav = Titanium.UI.iPhone.createNavigationGroup({
	   window: win1,
	   height:height-43-20
	});
	
	winRoot.open();
	// generate random number, used to make each row appear distinct for this example
	function randomInt(max){
	  return Math.floor(Math.random() * max) + 1;
	}
	
	var IMG_BASE = 'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/';
	var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;
	
	var tableData = [];
	
	for (var i=1; i<=20; i++){
	  var row = Ti.UI.createTableViewRow({
	    className:'forumEvent', // used to improve table performance
	    selectedBackgroundColor:'white',
	    rowIndex:i, // custom property, useful for determining the row during events
	    height:110
	  });
	  
	  var imageAvatar = Ti.UI.createImageView({
	    image: IMG_BASE + 'custom_tableview/user.png',
	    left:10, top:5,
	    width:50, height:50
	  });
	  row.add(imageAvatar);
	  
	  var labelUserName = Ti.UI.createLabel({
	    color:'#576996',
	    font:{fontFamily:'Arial', fontSize:defaultFontSize+6, fontWeight:'bold'},
	    text:'Fred Smith ' + i,
	    left:70, top: 6,
	    width:200, height: 30
	  });
	  row.add(labelUserName);
	  
	  var labelDetails = Ti.UI.createLabel({
	    color:'#222',
	    font:{fontFamily:'Arial', fontSize:defaultFontSize+2, fontWeight:'normal'},
	    text:'Replied to post with id ' + randomInt(1000) + '.',
	    left:70, top:44,
	    width:360
	  });
	  row.add(labelDetails);
	  
	  var imageCalendar = Ti.UI.createImageView({
	    image:IMG_BASE + 'custom_tableview/eventsButton.png',
	    left:70, bottom: 2,
	    width:32, height: 32
	  });
	  row.add(imageCalendar);
	  
	  var labelDate = Ti.UI.createLabel({
	    color:'#999',
	    font:{fontFamily:'Arial', fontSize:defaultFontSize, fontWeight:'normal'},
	    text:'on ' + randomInt(30) + ' Nov 2012',
	    left:105, bottom:10,
	    width:200, height:20
	  });
	  row.add(labelDate);
	  //row.addEventListener('click',function(e){
		//nav.open(win3, {animated:true});	
	  //});
	  
	  tableData.push(row);
	}
	
	var tableView = Ti.UI.createTableView({
	  backgroundColor:'white',
	  data:tableData//,
	  //height:height-108,
	  //top:43
	});
	var refresh = Titanium.UI.createButton({
	    systemButton: Titanium.UI.iPhone.SystemButton.REFRESH,
	});
	
	var add = Titanium.UI.createButton({
	    systemButton: Titanium.UI.iPhone.SystemButton.ADD,
	});
	
	var info = Titanium.UI.createButton({
	    systemButton: Titanium.UI.iPhone.SystemButton.INFO_LIGHT
	});
	
	flexSpace = Titanium.UI.createButton({
	    systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	
	var toolbar = Titanium.UI.iOS.createToolbar({
	    items:[refresh, flexSpace, add, flexSpace, info],
	    bottom:0,
	    borderTop:true,
	    borderBottom:false
	});

	

	//win.open();
	

	win1.add(tableView); 
	winRoot.add(toolbar);	
	winRoot.add(nav);	
	//winRoot.open();
	//nav.open(win3, {animated:true});
})();



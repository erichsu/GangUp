function FirstView() {
	//create object instance, a parasitic subclass of Observable
	
	// Ti.UI.createAlertDialog({title: '007! Skyfall~',message: 'In 30 mins:\nMiramar', buttonNames:['Cancel', 'GangUp']}).show();
	// return Ti.UI.createImageView({image: 'desktop.png'});
	
	var self = Ti.UI.createView();
	var height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	//Here's the first window...
	var IMG_BASE = 'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/';
	var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;
	
	var CustomTitleWindow = require('ui/common/CustomTitleWindow');
	var first = new CustomTitleWindow({
		title : "Gang Up",
		backgroundImage : 'iphone/background_w_bar_shadow.png',
		translucent : true
	});

	var FirstViewTitleBar = require('ui/common/FirstViewTitleBar');
	titleBar = FirstViewTitleBar.createCustomTitleBar();
	first.titleControl = titleBar;
	
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window : first
	});
	
	var CustomTableRow1 = require('ui/common/CustomTableRow1');
	var topRow = new CustomTableRow1();

	var tableData = [];
	var nameData = ['Hanako', 'Zoe Lee', 'Akiko', 'Ann', 'Yamato'];
	var eventData = ['Flower viewing at Ali Mountain', 'Study in Library', 'Movie watching in Beijing', 'Dating in Gothan', 'Go to beach for sunbathe']
	for (var i = 0; i < 5; i++) {
		var row = Ti.UI.createTableViewRow({
			className : 'forumEvent', // used to improve table performance
			// selectedBackgroundColor : 'white',
			rowIndex : i, // custom property, useful for determining the row during events
			height : 60
		});
		
		var imageBackground = Ti.UI.createView({
			backgroundImage: 'iphone/notePaperRow.png',
			left: 0,
			height: 60
		});
		row.add(imageBackground);

		var imageAvatar = Ti.UI.createImageView({
			image : 'iphone/head_' + i + '.png' ,//IMG_BASE + 'custom_tableview/user.png',
			right : 15,
			top : 7,
			width : 47,
			height : 47,
			borderWidth: 4,
			borderColor: 'white'
		});
		row.add(imageAvatar);

		var labelEventName = Ti.UI.createLabel({
			color : '#576996',
			font : {
				fontFamily : 'Arial',
				fontSize : defaultFontSize + 6,
				fontWeight : 'bold'
			},
			text : eventData[i],
			left : 30,
			top : 6,
			width : 200,
			height : 30,

		});
		row.add(labelEventName);

		var labelHost = Ti.UI.createLabel({
			color : '#222',
			font : {
				fontFamily : 'Arial',
				fontSize : 11,
				fontWeight : 'normal'
			},
			text : 'Hosted by ' + nameData[i],
			left : 30,
			top : 30,
			width : 360
		});
		row.add(labelHost);

		var labelDate = Ti.UI.createLabel({
			color : '#999',
			font : {
				fontFamily : 'Arial',
				fontSize : defaultFontSize,
				fontWeight : 'normal'
			},
			text : i*5 + 1 + ' Nov 2012',
			left : 30,
			bottom : 0,
			width : 200,
			height : 20
		});
		row.add(labelDate);

		tableData.push(row);
	}

	var firstSection = Ti.UI.createTableViewSection({
		rows : [topRow]
	});
	
	var secondSection = Ti.UI.createTableViewSection({
		rows : tableData
	});
	
	var lastSection = Ti.UI.createTableViewSection({
		rows : [Ti.UI.createTableViewRow({
			height: 26,
			children: [Ti.UI.createView({left:2, width:298, height:26, backgroundImage: 'iphone/paperCutEdge_w_bg.png'})]
		})]
	});

	var tableView = Ti.UI.createTableView({
		backgroundColor : 'transparent',
		// data : [firstSection, secondSection, lastSection],
		data : [firstSection],
		separatorColor : 'transparent',
		top : 54,
		height : '79%',
		width : '95%'
	});
	tableView.addEventListener("click", function(e) {
		// var DetailWindow = require('ui/common/DetailWindow');
		// navGroup.open(new DetailWindow());
		var MapWindow = require('ui/common/MapWindow');
		navGroup.open(new MapWindow());
	});
	first.add(tableView);
	// first.add(Ti.UI.createLabel({text:'There\'re no events now.\nCreate a new event,\nand invite your friends.'}));

	var refresh = Titanium.UI.createButton({
		style : Ti.UI.iPhone.SystemButtonStyle.PLAIN,
		width : 20,
		height : 20,
		left : '5%',
		image : 'iphone/refresh.png',
		backgroundSelectedColor: 'white'
	});

	var add = Ti.UI.createButton({
		style : Ti.UI.iPhone.SystemButtonStyle.PLAIN,
		width : 26,
		height : 26,
		image : 'iphone/add.png',
		backgroundSelectedColor: 'white'
	})
	add.addEventListener('click', function(e) {
		var CustomTitleWindow = require('ui/common/CustomTitleWindow');
		var win = new CustomTitleWindow({
			modal : true,
			navBarHidden : true
		});
		var AddingEventView = require('ui/common/AddingEventView');
		var view = new AddingEventView();
		win.add(view);
		win.open();
	});

	var info = Titanium.UI.createButton({
		style : Ti.UI.iPhone.SystemButtonStyle.PLAIN,
		width : 20,
		height : 20,
		right : '5%',
		image : 'iphone/gear.png',
		backgroundSelectedColor: 'white'
	});
	

	flexSpace = Titanium.UI.createButton({
		systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});

	var toolbar = Ti.UI.createView({
		bottom : 0,
		height : 38,
		backgroundImage : 'iphone/toolbar.png',
	});
	toolbar.add(refresh, add, info);

	first.add(toolbar);

	self.add(navGroup);
	return self;
}

// generate random number, used to make each row appear distinct for this example
function randomInt(max) {
	return Math.floor(Math.random() * max) + 1;
}

module.exports = FirstView;

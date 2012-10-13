//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
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
	// generate random number, used to make each row appear distinct for this example
	function randomInt(max) {
		return Math.floor(Math.random() * max) + 1;
	}
	
	var CustomTableRow1 = require('ui/common/CustomTableRow1');
	var topRow = new CustomTableRow1();

	var tableData = [];

	for (var i = 1; i <= 10; i++) {
		var row = Ti.UI.createTableViewRow({
			className : 'forumEvent', // used to improve table performance
			backgroundColor: 'white',
			selectedBackgroundColor : 'white',
			rowIndex : i, // custom property, useful for determining the row during events
			height : 110
		});

		var imageAvatar = Ti.UI.createImageView({
			image : IMG_BASE + 'custom_tableview/user.png',
			left : 10,
			top : 5,
			width : 50,
			height : 50
		});
		row.add(imageAvatar);

		var labelEventName = Ti.UI.createLabel({
			color : '#576996',
			font : {
				fontFamily : 'Arial',
				fontSize : defaultFontSize + 6,
				fontWeight : 'bold'
			},
			text : 'Event ' + i,
			left : 70,
			top : 6,
			width : 200,
			height : 30,

		});
		row.add(labelEventName);

		var labelDetails = Ti.UI.createLabel({
			color : '#222',
			font : {
				fontFamily : 'Arial',
				fontSize : defaultFontSize + 2,
				fontWeight : 'normal'
			},
			text : 'Replied to post with id ' + randomInt(1000) + '.',
			left : 70,
			top : 44,
			width : 360
		});
		row.add(labelDetails);

		var imageCalendar = Ti.UI.createImageView({
			image : IMG_BASE + 'custom_tableview/eventsButton.png',
			left : 70,
			bottom : 2,
			width : 32,
			height : 32
		});
		row.add(imageCalendar);

		var labelDate = Ti.UI.createLabel({
			color : '#999',
			font : {
				fontFamily : 'Arial',
				fontSize : defaultFontSize,
				fontWeight : 'normal'
			},
			text : 'on ' + randomInt(30) + ' Nov 2012',
			left : 105,
			bottom : 10,
			width : 200,
			height : 20
		});
		row.add(labelDate);
		//row.addEventListener('click',function(e){
		//nav.open(win3, {animated:true});
		//});

		tableData.push(row);
	}

	var firstSection = Ti.UI.createTableViewSection({
		rows : [topRow]
	});
	
	var secondSection = Ti.UI.createTableViewSection({
		rows : tableData
	});

	var tableView = Ti.UI.createTableView({
		// backgroundColor:'white',
		backgroundColor : 'transparent',
		// backgroundImage : 'iphone/notePaper.png',
		data : [firstSection, secondSection],
		separatorColor : 'transparent',
		top : 54,
		height : '79%',
		width : '95%'
	});
	first.add(tableView);

	//Here's the nav group that will hold them both...
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window : first
	});

	//When the label on the first window receives a touch, open the second
	tableView.addEventListener("click", function(e) {
		var DetailWindow = require('ui/common/DetailWindow');
		var detailWindow = new DetailWindow();
		navGroup.open(detailWindow);
	});

	var refresh = Titanium.UI.createButton({
		style : Ti.UI.iPhone.SystemButtonStyle.PLAIN,
		width : 20,
		height : 20,
		left : '5%',
		image : 'iphone/refresh.png'
	});

	var add = Ti.UI.createButton({
		style : Ti.UI.iPhone.SystemButtonStyle.PLAIN,
		width : 26,
		height : 26,
		image : 'iphone/add.png'
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
		image : 'iphone/gear.png'
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

module.exports = FirstView;

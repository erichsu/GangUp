var IMG_BASE = 'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/';
var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;
var height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

exports.createCustomTitleBar = function() {
	var titleBar = Ti.UI.createView({
		width: width,
		opacity : 0.4
	});

	var imageUserAvatar = Ti.UI.createImageView({
		image : 'iphone/head_0.jpg',//'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/174304_1194226359_6065833_n.jpg',//'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc6/186407_100000118735875_223633739_n.jpg',
		left : 15,
		top : 11,
		width : 23,
		height : 23
	});

	var labelUserName = Ti.UI.createLabel({
		color : '#fff',
		font : {
			fontFamily : 'Arial',
			fontSize : defaultFontSize + 6
		},
		text : 'Roy Lee',
		left : 45,
		top : 6,
		width : 200,
		height : 30
	});

	var notification = Ti.UI.createView({
		top : 0,
		right : 0,
		height : 40,
		width : 32,
		backgroundImage : 'iphone/ribbon.png'
	});

	var badge = Ti.UI.createLabel({
		text : "1",
		textAlign : "center",
		height : 16,
		width : 16,
		font : {
			fontWeight : "light",
			fontSize : 11
		},
		backgroundColor : "#790000",
		borderColor : "white",
		color : "white",
		borderRadius : 7,
		borderWidth : 1.5,
		top : 1,
		left : 2
	});
	// notification.add(badge);
	notification.addEventListener('click', function(e) {
		var winNotify = Ti.UI.createWindow({
			bottom : 436
		});

		var NotificationView = require('ui/common/NotificationView');
		winNotify.add(new NotificationView(Ti.UI.createImageView({
			image : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/174304_1194226359_6065833_n.jpg',//IMG_BASE + 'custom_tableview/user.png',
			left : 0,
			top : 11,
			width : 23,
			height : 23
		}), Ti.UI.createLabel({
			color : 'white',
			font : {
				fontFamily : 'Arial',
				fontSize : defaultFontSize + 6
			},
			text : 'Reed Yeh',
			left : 30,
			top : 6,
			width : 200,
			height : 30
		})));
		winNotify.open({
			bottom : 0
		});
	});

	titleBar.add(notification);
	titleBar.add(imageUserAvatar);
	titleBar.add(labelUserName);
	return titleBar;
}
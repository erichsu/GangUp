//NotificationView Component Constructor
function NotificationView(imageUserAvatar, labelUserName) {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	var background = Ti.UI.createView({
		opacity: 0.8,
		backgroundColor: 'black'
	});
	
	var winRoot = Ti.UI.createWindow();
	
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window: winRoot
	});
	
	var notifyTitleBar = Ti.UI.createView();
	notifyTitleBar.add(imageUserAvatar);
	notifyTitleBar.add(labelUserName);
	
	var tableView = Ti.UI.createTableView({
		top: 0,
		height: '90%',
		data: [Ti.UI.createTableViewRow()]
	});
	tableView.addEventListener('click', function(e){
		var ReadInvitationView = require('ui/common/ReadInvitationView');
		var win = Ti.UI.createWindow();
		win.add(new ReadInvitationView());
		win.navGroup = navGroup;
		navGroup.open(win);
	});
	
	var ribbon = Ti.UI.createImageView({
		width: 32,
		height: 40,
		image: 'iphone/ribbon.png',
		bottom: 10,
		right: 5
	})
	ribbon.addEventListener('click', function(e){
		self.parent.close({
			bottom:436
		});
	})
	
	winRoot.setTitleControl(notifyTitleBar);
	winRoot.add(tableView);
	
	self.add(background);
	self.add(navGroup);
	self.add(ribbon);
	return self;
}

module.exports = NotificationView;
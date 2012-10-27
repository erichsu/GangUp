//ReadInvitationView Component Constructor
function ReadInvitationView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	var titleLabel = Ti.UI.createLabel({
		text: '007! Skyfall~',
		font: {fontSize: 25, fontWeight: 'bold'},
		left: 10, top: 5
	});
	var hostLabel = Ti.UI.createLabel({
		text: 'Hosted by Roy',
		color: '#576996',
		font: {fontSize: 12},
		left: 10, top: 30,
	});
	
	var locationLabel = Ti.UI.createLabel({
		text: 'Taipei Miramar Cinemas',
		font: {fontSize: 16},
		left: 10, top: 5,
	});
	var locationDetailLabel = Ti.UI.createLabel({
		text:'6F., No.22, Jingye 3rd Rd., Zhongshan Dist., Taipei City',
		color: '#576996',
		font: {fontSize: 12},
		left: 10, top: 30,
		width: '80%'
	});
	
	var dateLabel = Ti.UI.createLabel({
		text: 'Sun, Oct 28',
		font: {fontSize: 12},
		right: 10, top: 5,
	});
	var timeLabel = Ti.UI.createLabel({
		text: '4:00 PM',
		font: {fontSize: 16},
		left: 10, top: 5,
	});
	
	var titleRow = Ti.UI.createTableViewRow({
		className:'forumEvent',
		selectedBackgroundColor:'white',
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
		// borderColor: 'transparent'
	});
	titleRow.add([titleLabel, hostLabel]);
	
	// TODO:get the title from FB event
	
	var locationRow = Ti.UI.createTableViewRow({
		className:'forumEvent', // used to improve table performance
		selectedBackgroundColor:'white',
		// borderColor: 'transparent'
		// rowIndex:1, // custom property, useful for determining the row during events
		// title:L('event_location')
	});
	locationRow.add([locationLabel, locationDetailLabel]);
	locationRow.addEventListener('click', function(e){
		var CustomTitleWindow = require('ui/common/CustomTitleWindow');
		var win = new CustomTitleWindow();
		// var SelectLocationView = require('ui/common/SelectLocationView');
		// win.add(new SelectLocationView());
		self.parent.navGroup.open(win);
	});
	
	var datetimeRow = Ti.UI.createTableViewRow({
		className:'forumEvent', // used to improve table performance
		selectedBackgroundColor:'white',
		// rowIndex:1, // custom property, useful for determining the row during events
		// title:L('event_datetime')
	});
	datetimeRow.add([dateLabel, timeLabel]);
	
	var description = Ti.UI.createTableViewRow({
		className:'forumEvent', // used to improve table performance
		selectedBackgroundColor:'white',
		title:L('event_description'),
		// rowIndex:1 // custom property, useful for determining the row during events
		// hasDetail: true,
		// rightImage: Ti.UI.iPhone.SystemIcon.MORE
		hasChild: true
	});
	
	var tableView = Ti.UI.createTableView({
		top: 0,
		style: Ti.UI.iPhone.TableViewStyle.GROUPED,
		height: '90%',
		data: [titleRow, locationRow, datetimeRow, description]
	});
	
	// Toolbar
	var acceptButton = Ti.UI.createButton({
		title: 'Accept',
		style: Ti.UI.iPhone.SystemButtonStyle.DONE
	});
	acceptButton.addEventListener('click', function(e){
		self.parent.navGroup.parent.parent.close({
			bottom:436
		});
	});
	
	var rejectButton = Ti.UI.createButton({
		title: 'Reject',
		style: Ti.UI.iPhone.SystemButtonStyle.BORDERED
	});
	
	var flexSpace = Titanium.UI.createButton({
	    systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	
	var toolBar = Ti.UI.iOS.createToolbar({
		items: [rejectButton, flexSpace, acceptButton],
		bottom: '10%',
		barColor: '#4d2c14'
	});
	
	self.add(tableView);
	self.add(toolBar);
	return self;
}

module.exports = ReadInvitationView;
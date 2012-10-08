//ReadInvitationView Component Constructor
function ReadInvitationView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	var title = Ti.UI.createTableViewRow({
		className:'forumEvent', // used to improve table performance
		selectedBackgroundColor:'white',
		// rowIndex:1, // custom property, useful for determining the row during events
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
		title: L('event_title')
	});
	// TODO:get the title from FB event
	
	var location = Ti.UI.createTableViewRow({
		className:'forumEvent', // used to improve table performance
		selectedBackgroundColor:'white',
		// rowIndex:1, // custom property, useful for determining the row during events
		title:L('event_location')
	});
	location.addEventListener('click', function(e){
		var SelectLocationView = require('ui/common/SelectLocationView');
		var win = Ti.UI.createWindow();
		win.add(new SelectLocationView());
		self.parent.navGroup.open(win);
	});
	
	var datetime = Ti.UI.createTableViewRow({
		className:'forumEvent', // used to improve table performance
		selectedBackgroundColor:'white',
		// rowIndex:1, // custom property, useful for determining the row during events
		title:L('event_datetime')
	});
	
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
		data: [title, location, datetime, description]
	});
	
	// Toolbar
	var acceptButton = Ti.UI.createButton({
		title: 'Accept',
		style: Ti.UI.iPhone.SystemButtonStyle.DONE
	});
	
	var rejectButton = Ti.UI.createButton({
		title: 'Reject',
		style: Ti.UI.iPhone.SystemButtonStyle.BORDERED
	});
	
	var flexSpace = Titanium.UI.createButton({
	    systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	
	var toolBar = Ti.UI.iOS.createToolbar({
		items: [rejectButton, flexSpace, acceptButton, flexSpace],
		bottom: '10%'
	});
	
	self.add(tableView);
	self.add(toolBar);
	return self;
}

module.exports = ReadInvitationView;
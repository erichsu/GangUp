//AddingEventView Component Constructor
function AddingEventView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'#fff'
	});
	
	var CustomTitleWindow = require('ui/common/CustomTitleWindow');
	var winRoot = new CustomTitleWindow();
	
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window: winRoot
	});
	
	
	var title = Ti.UI.createTableViewRow({
		className:'forumEvent', // used to improve table performance
		selectedBackgroundColor:'white',
		rowIndex:1, // custom property, useful for determining the row during events
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	title.add(Ti.UI.createTextField({
		left:10,
		height: 44, // TODO: use auto height, but not work.
		width: 280,
		hintText:L('event_title')
	}));
	
	var location = Ti.UI.createTableViewRow({
		className:'forumEvent', // used to improve table performance
		selectedBackgroundColor:'white',
		rowIndex:1, // custom property, useful for determining the row during events
		title:L('event_location')
		// height:110
	});
	location.addEventListener('click', function(e){
		var CustomTitleWindow = require('ui/common/CustomTitleWindow');
		var win = new CustomTitleWindow();
		var SelectLocationView = require('ui/common/SelectLocationView');
		win.add(new SelectLocationView());
		navGroup.open(win);
	});
	
	var datetime = Ti.UI.createTableViewRow({
		className:'forumEvent', // used to improve table performance
		selectedBackgroundColor:'white',
		rowIndex:1, // custom property, useful for determining the row during events
		title:L('event_datetime')
		// height:110
	});
	datetime.addEventListener('click', function(e){
		var CustomTitleWindow = require('ui/common/CustomTitleWindow');
		var win = new CustomTitleWindow();
		var SelectDateTimeView = require('ui/common/SelectDateTimeView');
		win.add(new SelectDateTimeView());
		navGroup.open(win);
	});
	
	var attendee = Ti.UI.createTableViewRow({
		className: 'forumEvent',
		selectedBackgroundColor: 'white',
		rowIndex: 2,
		title: 'Attendee'
	});
	attendee.addEventListener('click', function(e){
		Ti.Contacts.showContacts({
			cancel: function(){},
			selectedPerson: function(){},
			selectedProperty: function(){}
		});
	});
	
	var description = Ti.UI.createTableViewRow({
		className:'forumEvent', // used to improve table performance
		selectedBackgroundColor:'white',
		title:L('event_description'),
		rowIndex:1 // custom property, useful for determining the row during events
	});
	var HintTextArea = require('ui/common/util/HintTextArea');
	description.add(HintTextArea.createHintTextArea({
		left:10,
		top: 5,
		height: 132, // TODO: use auto height, but not work.
		width: 280,
		font: {fontSize:18},
		hintText:L('event_description')
	}));
	
	var sections = [];
	
	for (var i=0; i < 3; i++) {
	  sections[i] = Ti.UI.createTableViewSection();
	  switch(i) {
	  	case 0:
	  	sections[i].add(title);
	  	sections[i].add(location);
	  	break;
	  	
	  	case 1:
	  	sections[i].add(datetime);
	  	sections[i].add(attendee);
	  	break;
	  	
	  	case 2:
	  	sections[i].add(description);
	  	break;
	  	
	  	default:
	  	break;
	  }
	}
	
	var tableView = Ti.UI.createTableView({
		style: Ti.UI.iPhone.TableViewStyle.GROUPED,
		data: sections
	});
	
	winRoot.add(tableView);
	
	var cancel = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.CANCEL,
		// backgroundFocusedColor: 'red',
		// backgroundColor:'yellow',
		// backgroundDisabledColor: 'white',
		// backgroundSelectedColor: 'green'
	});
	cancel.addEventListener('click', function(e){
		self.parent.close();
	});
	winRoot.setLeftNavButton(cancel);
	
	var done = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.DONE,
		
	})
	winRoot.setRightNavButton(done);
	// done.addEventListener

	self.add(navGroup);
	return self;
}

module.exports = AddingEventView;
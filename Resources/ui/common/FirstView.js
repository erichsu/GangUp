//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	var height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	//Here's the first window...
	var IMG_BASE = 'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/';
	var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;
	var first = Ti.UI.createWindow({
	  backgroundColor:"#fff",
	  title:"Gang Up",
	});
	 
	var titleBar = Ti.UI.createView({
		width:width,
	});
	
	var imageUserAvatar = Ti.UI.createImageView({
	    image: IMG_BASE + 'custom_tableview/user.png',
	    left:0, top:10,
	    width:24, height:24
	  });
	
	var labelUserName = Ti.UI.createLabel({
		color:'#576996',
	    font:{fontFamily:'Arial', fontSize:defaultFontSize+6},
	    text:'Fred Smith',
	    left:30, top: 6,
	    width:200, height: 30
	  });
	
	var notification = Ti.UI.createView({
		top: 0,
		right: 0,
		height: 40,
		width: 32,
		backgroundImage: 'iphone/ribbon.png'
	});
	
	var badge = Ti.UI.createLabel({
		text: "3",
		textAlign: "center",
		height: 16,
		width: 16,
		font: {
		    fontWeight: "light",
		    fontSize: 11
		},
		backgroundColor: "#790000",
		borderColor: "white",
		color: "white",
		borderRadius: 7,
		borderWidth: 1.5,
		top: 1,
		left: 2
	});
	notification.add(badge);
	notification.addEventListener('click',function(e){
		// TODO: add buble dialog
		var winNotify = Ti.UI.createWindow({
			bottom: 436
		});
		
		var NotificationView = require('ui/common/NotificationView');
		winNotify.add(new NotificationView(
			Ti.UI.createImageView({
			    image: IMG_BASE + 'custom_tableview/user.png',
			    left:0, top:10,
			    width:24, height:24
			  }), 
			Ti.UI.createLabel({
				color:'#576996',
			    font:{fontFamily:'Arial', fontSize:defaultFontSize+6},
			    text:'Fred Smith',
			    left:30, top: 6,
			    width:200, height: 30
			  })));
		winNotify.open({bottom:0});
	});
	
	titleBar.add(notification);
	titleBar.add(imageUserAvatar);
	titleBar.add(labelUserName);
	
	titleBar.backgroundColor = 'gray';
	first.titleControl = titleBar;
	// generate random number, used to make each row appear distinct for this example
	function randomInt(max){
	  return Math.floor(Math.random() * max) + 1;
	}
	
	var tableData = [];
	
	for (var i=1; i<=10; i++){
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
	  
	  var labelEventName = Ti.UI.createLabel({
	    color:'#576996',
	    font:{fontFamily:'Arial', fontSize:defaultFontSize+6, fontWeight:'bold'},
	    text:'Event ' + i,
	    left:70, top: 6,
	    width:200, height: 30
	  });
	  row.add(labelEventName);
	  
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
	first.add(tableView);
	
	//Here's the nav group that will hold them both...
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
	  window:first,
	  height:height-43-20
	});

	//When the label on the first window receives a touch, open the second
	tableView.addEventListener("click", function(e) {
		var DetailWindow = require('ui/common/DetailWindow');
		var detailWindow = new DetailWindow();
	  	navGroup.open(detailWindow);
	});
	
	var refresh = Titanium.UI.createButton({
	    systemButton: Titanium.UI.iPhone.SystemButton.REFRESH,
	});
	
	var add = Titanium.UI.createButton({
	    systemButton: Titanium.UI.iPhone.SystemButton.ADD,
	});
	add.addEventListener('click', function(e){
		var win = Ti.UI.createWindow({
			modal:true,
			navBarHidden:true
		});
		var AddingEventView = require('ui/common/AddingEventView');
		var view = new AddingEventView();
		win.add(view);
		win.open();
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
	self.add(navGroup);
	self.add(toolbar);
	return self;
}

module.exports = FirstView;

function MapWindow() {
	var CustomTitleWindow = require('ui/common/CustomTitleWindow');
	var self = new CustomTitleWindow({
	});
	
	// var titleControl = Ti.UI.iOS.createToolbar({
		// // items: []
	// });
	
	var tableData = [];
	var IMG_BASE = 'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/';
	var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;
	// generate random number, used to make each row appear distinct for this example
	function randomInt(max){
	  return Math.floor(Math.random() * max) + 1;
	}
	
	var invitedNumber = 3;
	var points = [];
	var nameData = ['Roy', 'Charles', 'Eric', 'Reed'];
	var etaData = ['0', '3', '5', '30'];
	var dstData = ['0', '0.5', '1', '6'];
	var latData = [0.0005, 0.0027, -0.0062, -0.0472];
	var longData = [0.0002, -0.0036, -0.0054, 0.0305];
	for (var i=0 ; i<=invitedNumber ; i++){
		
		// var rnd = Math.random() % 100 *0.005;
		// console.log(rnd);
		points[i] = Titanium.Map.createAnnotation({
			// latitude: 25.082936 + Math.pow(-1, i) * Math.random() % 100 *0.005,
			// longitude: 121.557326 + Math.pow(-1, i) * Math.random() % 100 *0.005,
			latitude: 25.082936 + latData[i],
			longitude: 121.557326 + longData[i],
			title: nameData[i], 
			// subtitle: "ya~", 
			pincolor:Titanium.Map.ANNOTATION_GREEN,
			animate:true,
			myid:i
		});
		
	  var row = Ti.UI.createTableViewRow({
	    className:'forumEvent', // used to improve table performance
	    selectedBackgroundColor:'white',
	    rowIndex:i, // custom property, useful for determining the row during events
	    height:75
	  });
	  
	  var imageAvatar = Ti.UI.createImageView({
	    image: 'head_' + i + '.jpg',//IMG_BASE + 'custom_tableview/user.png',
	    left:10, top:5,
	    width:50, height:50
	  });
	  row.add(imageAvatar);
	  
	  var labelAttendee = Ti.UI.createLabel({
	    color:'#576996',
	    font:{fontFamily:'Arial', fontSize:defaultFontSize+6, fontWeight:'bold'},
	    text:nameData[i],
	    left:10, top: 57,
	    width:100, height: 15
	  });
	  row.add(labelAttendee);
	  
	  
	  var labelETA = Ti.UI.createLabel({
	    color:'#222',
	    font:{fontFamily:'Arial', fontSize:defaultFontSize + 2, fontWeight:'normal'},
	    text:'ETA : ' + etaData[i] + ' min',
	    left:90, top:0,
	    width:100, height:20
	  });
	  row.add(labelETA);
	    
	  
	  var labelDistance = Ti.UI.createLabel({
	    color:'#0F2D00',
	    font:{fontFamily:'Arial', fontSize:defaultFontSize + 1, fontWeight:'normal'},
	    text: "away from destination : " + dstData[i] + ' km',
	    left:90, top:25,
	    height:20
	  });
	  row.add(labelDistance);
	  
	  var labelLastUpdateTime = Ti.UI.createLabel({
	    color:'#1E78F0',
	    font:{fontFamily:'Arial', fontSize:defaultFontSize, fontWeight:'normal'},
	    text: "last update time : " + Date(),
	    left:90, top:50,
	    height:20
	  });
	  row.add(labelLastUpdateTime);
	  
	  row.addEventListener('click',function(e){
	  	mapView.setLocation({
	  		latitude: points[e.index].getLatitude(),
	  		longitude:points[e.index].getLongitude(),
	  		animate:true,
    		// latitudeDelta:0.01,
    		// longitudeDelta:0.01
    		});
    	// points[e.index].fireEvent('click');
	  	});
	  	
	  	// var annot = Ti.Map.createAnnotation();
	  	// annot.fireEvent('click');

	  	tableData.push(row);
	}
	
	var tableView = Ti.UI.createTableView({
	  backgroundColor:'white',
	  data:tableData,
	  height: invitedNumber * 70 <= 220 ? invitedNumber * 70 : 220,
	  top:0
	});
	
	//var mountainView = Titanium.Map.createAnnotation({
	   // latitude:33.74511,
	    //longitude:-84.38993,
	    //title:"title",
	    //subtitle:'subtitle',
	    //pincolor:Titanium.Map.ANNOTATION_PURPLE,
	    //animate:true,
	    //myid:1 // Custom property to uniquely identify this annotation.
	//});

	var mapView = Titanium.Map.createView({
	    mapType: Titanium.Map.STANDARD_TYPE,
	    region: {latitude:25.082936, longitude:121.557326, 
	            latitudeDelta:0.005, longitudeDelta:0.005},
	    animate:true,
	    regionFit:true,
	    userLocation:true,
	    top: tableView.getHeight()
	});
	mapView.addAnnotation(Titanium.Map.createAnnotation({
			latitude: 25.082936,
			longitude: 121.557326,
			title: "Destination", 
			subtitle: "Miramar", 
			pincolor:Titanium.Map.ANNOTATION_RED,
			animate:true,
			// myid:i
	}));
	mapView.addAnnotations(points);
	
	
	var ChatView = require('ui/common/ChatView');
	var chatView = new ChatView();
	var buttonBar = Ti.UI.createButtonBar({
		labels: [{image: 'iphone/group.png'}, {image: 'iphone/chat.png'}],
		style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
		backgroundColor: '#4d2c14',
		// width: ''
	});
	buttonBar.addEventListener('click', function(e){
		switch (e.index){
			case 0:
				// console.log(chatView.children[1].items.toString());
				chatView.children[1].items[3].blur();
				chatView.hide();
				tableView.show();
				mapView.show();
			break;
			case 1:
				chatView.show();
				tableView.hide();
				mapView.hide();
			break;
			default:
			break;
		}
	});
	self.setTitleControl(buttonBar);
	
	// var trackButton = Ti.UI.createButton({
		// style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
		// {image: 'iphone/location-arrow.png'},
		// // width: 16, height: 16
	// });
	// trackButton.addEventListener('click', function(e){
	// });
	var trackButton = Ti.UI.createButtonBar({
		labels:[{image: 'iphone/location-arrow.png'}],
		backgroundColor: '#4d2c14',
		trackState: 0
	});
	trackButton.addEventListener('click', function(e){
		trackButton.trackState = trackButton.trackState?0:1;
		trackButton.backgroundColor = trackButton.trackState?'brown':'#4d2c14';
		
	});
	
	self.setRightNavButton(trackButton);
	
	self.add(chatView);
	self.add(tableView);
	self.add(mapView);
	
	return self;
}

module.exports = MapWindow;
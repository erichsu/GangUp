function DetailWindow() {
	var CustomTitleWindow = require('ui/common/CustomTitleWindow');
	var self = new CustomTitleWindow({
		title:"Details"
	});
	
	var tableData = [];
	var IMG_BASE = 'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/';
	var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;
	// generate random number, used to make each row appear distinct for this example
	function randomInt(max){
	  return Math.floor(Math.random() * max) + 1;
	}
	
	var invitedNumber = 4;
	var points = [];
	
	for (var i=0 ; i<=invitedNumber ; i++){
		
		points[i] = Titanium.Map.createAnnotation({
			latitude:50.74511 + i * 2,
			longitude:-84.38993 - i * 2,
			title: "friend #" + i, 
			subtitle: "ya~", 
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
	    image: IMG_BASE + 'custom_tableview/user.png',
	    left:10, top:5,
	    width:50, height:50
	  });
	  row.add(imageAvatar);
	  
	  var labelAttendee = Ti.UI.createLabel({
	    color:'#576996',
	    font:{fontFamily:'Arial', fontSize:defaultFontSize+6, fontWeight:'bold'},
	    text:'friend' + i,
	    left:10, top: 57,
	    width:100, height: 15
	  });
	  row.add(labelAttendee);
	  
	  var labelETA = Ti.UI.createLabel({
	    color:'#222',
	    font:{fontFamily:'Arial', fontSize:defaultFontSize + 2, fontWeight:'normal'},
	    text:'ETA : ' + i + ' hr',
	    left:90, top:0,
	    width:100, height:20
	  });
	  row.add(labelETA);
	    
	  var labelDistance = Ti.UI.createLabel({
	    color:'#0F2D00',
	    font:{fontFamily:'Arial', fontSize:defaultFontSize + 1, fontWeight:'normal'},
	    text: "away from destination : " + i + ' km',
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
    		latitudeDelta:0.05,
    		longitudeDelta:0.05
    		});	
	  	});

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
	    region: {latitude:33.74511, longitude:-84.38993, 
	            latitudeDelta:0.05, longitudeDelta:0.05},
	    animate:true,
	    regionFit:true,
	    userLocation:true,
	    top: tableView.getHeight()
	});
	
	mapView.setAnnotations(points);
	
	self.add(tableView);
	self.add(mapView);
	
	return self;
}

module.exports = DetailWindow;
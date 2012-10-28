function CustomTableRow1() {
	var row = Ti.UI.createTableViewRow({
		className : 'forumEvent', // used to improve table performance
		selectedBackgroundColor : 'transparent',
		height : 239,
	});
	
	var imageBackground = Ti.UI.createView({
		backgroundImage: 'iphone/paperFirst_w_shadow.png',
		top: 0,
		height : 241,
		width: 300
	});
	row.add(imageBackground);
	 
	var imageHost = Ti.UI.createImageView({
		borderColor: 'white',
		borderWidth: 3,
		image : 'iphone/roy.jpg',//'iphone/host.jpg',
		right : 20,
		top : 13,
		width : 47,
		height : 47
	});
	var imagePaperClip = Ti.UI.createImageView({
		image : 'iphone/paperclip.png',
		right : 6,
		top : -1,
		width: 40,
		height: 40
	});
	row.add(imageHost, imagePaperClip);

	var labelEventName = Ti.UI.createLabel({
		color : '#576996',
		font : {
			fontFamily : 'Arial',
			fontSize : 20,
			fontWeight : 'bold'
		},
		text : '007! Skyfall~',
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
		text : 'Hosted by \nRoy Lee',
		textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
		right : 20,
		top : 65
	});
	
	row.add(labelHost);

	var labelDate = Ti.UI.createLabel({
		color : '#222',
		font : {
			fontFamily : 'Arial',
			fontSize : 14,
			fontWeight : 'normal'
		},
		text : '28 Oct 2012',
		left : 35,
		top : 70,
		width : 200,
		height : 20
	});
	row.add(labelDate);
	
	var labelTime = Ti.UI.createLabel({
		color : '#222',
		font : {
			fontFamily : 'Arial',
			fontSize : 19,
			fontWeight : 'normal'
		},
		text : '4:00 PM',
		left : 30,
		top : 55,
		width : 200,
		height : 20
	});
	row.add(labelTime);
	
	var imageTape = Ti.UI.createImageView({
		image: 'iphone/tape.png',
		left : 130,
		top : 62,
		width: 45
	});
	
	var imagePreview = Ti.UI.createImageView({
		borderColor: 'white',
		borderWidth: 4,
		backgroundColor: 'gray',
		image: 'http://taipeipackage.com/images/Content/6273_1.jpg',
		left : 68,
		top : 96,
		width: 170,
		height: 132
	});
	row.add(imagePreview, imageTape);
	
	
	row.add(imagePaperClip);
	return row;
}

module.exports = CustomTableRow1;
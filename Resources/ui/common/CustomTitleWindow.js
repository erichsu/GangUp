function CustomTitleWindow(opts) {
	var win = Ti.UI.createWindow(opts);
	win.setBarColor('#4d2c14');
	win.setBarImage('iphone/titlebar.png');
	return win;
}

module.exports = CustomTitleWindow;
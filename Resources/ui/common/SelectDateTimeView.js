//SelecDateTimeView Component Constructor
function SelecDateTimeView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	var rowStartTime = Ti.UI.createTableViewRow({
		title: 'Start',
		height: 44,
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.BLUE
	});
	var rowEndTime = Ti.UI.createTableViewRow({
		title: 'End',
		height: 44,
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.BLUE
	})
	
	var tableView = Ti.UI.createTableView({
		top: 0,
		style: Ti.UI.iPhone.TableViewStyle.GROUPED,
		// height: '40%',
		data: [rowStartTime, rowEndTime]
	});
	
	var datePicker = Ti.UI.createPicker({
		type: Ti.UI.PICKER_TYPE_DATE_AND_TIME,
		top: '40%'
	});
	
	datePicker.addEventListener('change',function(e){
	
	})
	
	
	self.add(tableView);
	self.add(datePicker);
	return self;
}

module.exports = SelecDateTimeView;
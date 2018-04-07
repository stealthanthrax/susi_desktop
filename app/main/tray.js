const path = require('path');
const electron = require('electron');

const {Menu, Tray} = electron;

const APP_ICON = path.join(__dirname, '../resources', 'tray');

const iconPath = () => {
	return APP_ICON + (process.platform === 'win32' ? '.ico' : '.png');
};

function createTray(onToggle, onClose) {
	// Passing the icon path to the constructor
	const trayIcon = new Tray(iconPath());
	const contextMenu = Menu.buildFromTemplate([
		{
			label: 'Toggle Show/Hide',
			click: onToggle
		},

		{
			type: 'separator'
		},

		{
			label: 'Quit',
			click: onClose
		}
	]);
	trayIcon.on('click', onToggle);

	trayIcon.setTitle('SUSI AI');
	trayIcon.setToolTip('SUSI AI');
	trayIcon.setContextMenu(contextMenu);

	return trayIcon;
}

exports.create = createTray;

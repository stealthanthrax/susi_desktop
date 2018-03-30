/* global require __dirname:true */
const path = require('path');
const menubar = require('menubar');

const mainURL = 'file://' + path.join(__dirname, '../renderer', 'index.html');
const iconUrl = path.join(__dirname, '../resources', 'tray.png');

const prop = {
    width: 600,
    height: 700,
    index: mainURL,
    icon: iconUrl
};

const mb = menubar(prop);

mb.on('ready', () => {
console.log('app is ready');
});

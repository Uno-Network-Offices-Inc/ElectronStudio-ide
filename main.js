const { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname);

function createWindow () {
    let win = new BrowserWindow({
    width: 990,
    height: 600,
    resizable: true,
    frame: true,
    //icon:"./icon.png",
    title: "Electron Studio",
    minWidth: 798,
    minHeight: 600,
	backgroundColor: '#black'
  });

  //win.maximize();
  win.removeMenu();
  win.loadFile( __dirname + '/screens/IDE.Screen/ide.screen.html' );

}

app.whenReady().then(createWindow);

const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron')
const path = require('path')
const url = require('url')


let win

function createWindow() {
	win = new BrowserWindow({ 
		width: 800, 
		height: 450, 
		frame: false, 
		alwaysOnTop: true,
	})
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (win === null) {
		createWindow()
	}
})
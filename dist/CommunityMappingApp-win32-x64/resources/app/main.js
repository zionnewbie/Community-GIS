const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Create the main window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Load the index.html file
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'public', 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  win.webContents.openDevTools(); // Open DevTools, remove if not needed
}

// When the app is ready, create the window
app.whenReady().then(createWindow);

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: path.join(C:,Users,LOQ,Downloads,document (1).ico) // Path to your icon file
  });
  
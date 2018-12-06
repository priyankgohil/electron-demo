const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");
const {appUpdater} = require('./autoupdater');

let mainWindow;

/* Handling squirrel.windows events on windows
only required if you have build the windows with target squirrel. For NSIS target you don't need it. */
// if (require('electron-squirrel-startup')) {
//     app.quit();
// }

// Funtion to check the current OS. As of now there is no proper method to add auto-updates to linux platform.
function isWindowsOrmacOS() {
    return process.platform === 'darwin' || process.platform === 'win32';
}

function createWindow() {
    mainWindow = new BrowserWindow({width: 900, height: 680});

    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );

    // mainWindow.loadURL("https://github.com");

    const page = mainWindow.webContents;

    page.once('did-frame-finish-load', () => {
        const checkOS = isWindowsOrmacOS();
        if (checkOS && !isDev) {
            // Initate auto-updates on macOs and windows
            appUpdater();
        }});

    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

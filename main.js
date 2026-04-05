const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

let splash;
let mainWindow;

function createSplash() {
  splash = new BrowserWindow({
    width: 400,
    height: 500,
    frame: false,
    transparent: true,
    resizable: false,
    alwaysOnTop: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  splash.loadFile("splash.html");
  splash.once("ready-to-show", () => splash.show());

  // Wait 4.2 seconds (matches splash animation) before opening main window
  setTimeout(() => {
    createMainWindow();
    if (splash) splash.close();
  }, 4200);
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
    minWidth: 1100,
    minHeight: 700,
    backgroundColor: "#ffffff",
    autoHideMenuBar: true,
    icon: path.join(__dirname, "assets", "icon.ico"),
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  mainWindow.loadFile("app.html");
  mainWindow.once("ready-to-show", () => mainWindow.show());
}

app.whenReady().then(() => {
  createSplash();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createSplash();
  });
});

// Asset loader for renderer (works in dev and packaged)
ipcMain.handle("get-asset", (event, fileName) => {
  const assetPath = path.join(process.resourcesPath, "assets", fileName);
  if (fs.existsSync(assetPath)) return assetPath;
  return path.join(__dirname, "assets", fileName); // fallback dev
});

// Fallback: Data URL for images
ipcMain.handle("get-asset-dataurl", async (event, fileName) => {
  try {
    const possiblePaths = [
      path.join(process.resourcesPath, "assets", fileName),
      path.join(__dirname, "assets", fileName)
    ];
    const assetPath = possiblePaths.find(p => fs.existsSync(p));
    const buf = await fs.promises.readFile(assetPath);
    const ext = path.extname(fileName).slice(1).toLowerCase();
    const mime = {
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      svg: "image/svg+xml",
      gif: "image/gif"
    }[ext] || "application/octet-stream";
    return `data:${mime};base64,${buf.toString("base64")}`;
  } catch (err) {
    console.error("get-asset-dataurl error", err);
    throw err;
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getAsset: (fileName) => ipcRenderer.invoke("get-asset", fileName),
  getAssetDataURL: (fileName) => ipcRenderer.invoke("get-asset-dataurl", fileName)
});

const { contextBridge, ipcRenderer } = require('electron');

// Expondo APIs seguras para o contexto da web
contextBridge.exposeInMainWorld('api', {
  send: (channel, data) => {
    // Apenas canais seguros
    let validChannels = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    let validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      // Removendo qualquer listener existente antes de adicionar um novo
      ipcRenderer.removeAllListeners(channel);
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
});

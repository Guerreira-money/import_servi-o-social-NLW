//Aqui, faço a importaçao de dois modulos usando a sintaxe Common.js
//O app que controla o ciclo de vida de eventos do aplicativo
//E o BrowserWindow, que cria e gerencia janelas do aplicativo

const { app, BrowserWindow } = require('electron')
const path = require('path');
// Função para criar a janela

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
       
    })
    //Abrir a janela com o arquivo html. Se quiser que abra com uma url, basta trocar loadFile para
    //loadURL('https://')

    win.loadFile(path.join(__dirname,'quiz.html'));
}

//Chamar a função quando o aplicativo estiver pronto

app.whenReady().then(() => {
createWindow()

//condiçao para ativaçao da janela
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

})
    //fechar todas as janelas
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


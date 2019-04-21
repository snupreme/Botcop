const electron = require('electron')
const { app, BrowserWindow} = electron

app.on('ready', () => {
    let win = new BrowserWindow({width:800, height: 600, backgroundColor: '#3498db', titleBarStyle: 'hiddenInset', title: 'BotCop', darkTheme:true, autoHideMenuBar: true})
    win.loadURL('file://' + __dirname + '/index.html')
    
})



exports.openWindow = () => {
    let win = new BrowserWindow({width:1000, height: 400, backgroundColor: '#3498db', titleBarStyle: 'hiddenInset', title: 'BotCop', darkTheme:true, autoHideMenuBar: true})
    win.loadURL('https://tweetdeck.twitter.com/#')
}

exports.openTime = () => {
    let win = new BrowserWindow({width:450, height: 340, backgroundColor: '#3498db', titleBarStyle: 'hiddenInset', title: 'BotCop', darkTheme:true, autoHideMenuBar: true, opacity: .99})
    win.loadURL('https://time.is/')
}

exports.openPaypal = () => {
    let win = new BrowserWindow({width:400, height: 400, backgroundColor: '#3498db', titleBarStyle: 'hiddenInset', title: 'BotCop', darkTheme:true, autoHideMenuBar: true})
    win.loadURL('https://www.paypal.com/signin')
}
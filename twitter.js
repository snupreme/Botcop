
const remote = require('electron').remote
const main = remote.require('./index.js')

function twitter () {
    var button = document.createElement('button')
    button.textContent = 'Open TwitterDeck'
    button.addEventListener('click', () => {
    main.openWindow()
    })
    document.body.appendChild(button)
}
twitter()


 function getAccurateTime() {
     var time = document.createElement('button')
     time.textContent = 'Get Accurate Time'
     time.addEventListener('click', () => {
     main.openTime()
     })
     document.body.appendChild(time)
}
getAccurateTime()

function getPaypal() {
    var paypal = document.createElement('button')
    paypal.textContent = 'Login to Paypal'
    paypal.addEventListener('click', () => {
    main.openPaypal()
    })
    document.body.appendChild(paypal)
}
getPaypal()








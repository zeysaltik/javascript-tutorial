// console.log("1. işlem")
// setTimeout(() => {
//     console.log("2. işlem")
// }, 2000)
// console.log("3. işlem")

//! callback fonksiyonu
// function sayHello(name, callback) { 
//     console.log(`Hello ${name}`)
//     callback()
// }

// function goodbye() {
//     console.log("Görüşmek üzere")
// }

// sayHello("Zeynep", goodbye)

//! Ajax ve Http İstekleri
// let myList

// const xhr = new XMLHttpRequest()
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
// xhr.onload = function () {
//     const response = xhr.responseText
//     if (xhr.status === 200) {
//         myList = JSON.parse(response)
//         console.log(JSON.parse(response))
//     } else {
//         console.log("Hata oluştu:" + xhr.status)
//     }
// }
// xhr.send()
// console.log(myList);

//! Promise

function getRandomNumber() {
    new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 100)
        if (number % 2 === 0) {
            resolve()
        } else {
            console.log(number, "Tek sayı")
        }
    })
}
getRandomNumber().then((number) => console.log("Çözümlendi:" + number))
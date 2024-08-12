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

// //! Promise
// function getRandomNumber() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const number = Math.floor(Math.random() * 100)
//             if (number % 2 === 0) {
//                 resolve(number)
//             } else {
//                 reject(`Hata: ${number} sayısı tek bir sayıdır.`)
//             }
//         }, 1000)
//     })
// }

// getRandomNumber()
//     .then((number) => console.log("çözümlendi:" + number))
//     .catch((error) => console.log(error))

 //! Fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch((error) => console.log(error))

//! Async ve Await
// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data) 
// }

const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
} 

getData()
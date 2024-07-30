let meyve = ["elma", "armut", "muz", "portakal", "karpuz"]

// console.log(meyve[1])
// console.log(meyve[2])
// console.log(meyve[3])
// console.log(meyve[4])

for (let i = 0; i < meyve.length; i++){
    console.log(meyve[i])
}

for (let i = 0; i < 100; i = i +2) {
    console.log(i);    
}


let sayilar = [1, 2, 3, 4, 5, 6, 7]
// console.log(sayilar[0] + sayilar[1] + sayilar[2] + sayilar[3] + sayilar[4] + sayilar[5] + sayilar[6]);

let toplam = 0
for (let i = 0; i < sayilar.length; i++){
    console.log(toplam += sayilar[i]);
}

for (let index in sayilar){
    console.log(toplam +=sayilar[index])
}

const user = {
    "ad": "Zeynep Nur",
    "soyad": "Saltık",
    "email": "zeysaltik200@gmail.com",
    "yas": 16
}

for (let key in user){
    console.log(user[key]);
}

let users = [
    {
        "id": 0,
        "ad": "Zeynep Nur",
        "soyad": "Saltık",
        "email": "zeysaltik200@gmail.com",
        "yas": 16
    },
    {
        "id": 1,
        "ad": "Deniz Ekin",
        "soyad": "Saltık",
        "email": "emaili yokk.",
        "yas": 4
    },
    {
        "id": 2,
        "ad": "Ela",
        "soyad": "Çapkın",
        "email": "emilini bilmiyom",
        "yas": 14
    },
    {
        "id": 3,
        "ad": "Ecem Sultan",
        "soyad": "Bağarkası",
        "email": "bunun da emailini bilmiyom",
        "yas": 16
    }
                
]

// console.log(users[0].ad);
// console.log(users[1].ad);
// console.log(users[2].ad);
// console.log(users[3].ad);

for(let i = 0; i < users.length; i++){
    console.log(users[i].ad);
}

// let yazi = ""
//  for (let i = 0; i < 5; i++) {
//      yazi += "*"
//     console.log(yazi)
// }


let yazi = ""
// console.log(yazi.slice(0, 5))
// console.log(yazi.slice(0, 4))
// console.log(yazi.slice(0, 3))
// console.log(yazi.slice(0, 2))
// console.log(yazi.slice(0, 1))

let starCount = 3;
for (let i = 0; i < starCount; i++) {
    yazi += "*" 
}

console.log(yazi)
for (let i = starCount; i > 0; i--) {
    console.log(yazi.slice(0, i))
}


// let calismaSayisi = 3
// let yildizsayisi = calismaSayisi * 2 + 1
// for (let i = 0; i <= calismaSayisi; i++) {
//     let bosluk = ""
//     for (let j = 0; j < i; j++) {
//         bosluk += " "
//     }
//     let yildizlar = ""
//     for (let j = yildizsayisi; j > 0; j--) {
//         yildizlar += "*"
//     }
//     yildizsayisi -= 2
//     console.log(bosluk + yildizlar)
// }

let calismaSayisi1 = 0
let yildizsayisi2 = 1
for (let i = 2; i >= calismaSayisi1; i--) {
    let bosluk = ""
    for (let j = 0; j < i; j++) {
        bosluk += " "
    }
    let yildizlar = ""
    for (let j = 0; j < yildizsayisi2; j++) {
        yildizlar += "*"
    }
    yildizsayisi2 += 2
    console.log(bosluk + yildizlar)
}

let calismaSayisi2 = 1
let yildizsayisi1 = 3
for (let i = 0; i <= calismaSayisi2; i++) {
    let bosluk1 = ""
    for (let j = 0; j <= i; j++) {
        bosluk1 += " "
    }
    let yildizlar1 = ""
    for (let j = yildizsayisi1; j > 0; j--) {
        yildizlar1 += "*"
    }
    yildizsayisi1 -= 2
    console.log(bosluk1 + yildizlar1)
}

let calismaSayisi = 6

let yildizsayisi2 = 1
for (let i = calismaSayisi; i > 0; i--) {
    let bosluk = ""
    for (let j = 0; j < i - 1; j++) {
        bosluk += "_"
    }
    let yildizlar = ""
    for (let j = 0; j < yildizsayisi2; j++) {
        yildizlar += "*"
    }
    yildizsayisi2 += 2
    console.log(bosluk + yildizlar)
}


let yildizsayisi = calismaSayisi * 2 - 3
for (let i = 0; i <= calismaSayisi - 2; i++) {
    let bosluk = "_"
    for (let j = 0; j <= i - 1; j++) {
        bosluk += "_"
    }
    let yildizlar = ""
    for (let j = yildizsayisi; j > 0; j--) {
        yildizlar += "*"
    }
    yildizsayisi -= 2
    console.log(bosluk + yildizlar)
}

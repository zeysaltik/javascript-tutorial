let calismaSayisi = 8
let yildizsayisi = calismaSayisi * 2 + 1
for (let i = 0; i <= calismaSayisi; i++) {
    let bosluk = ""
    for (let j = 0; j < i; j++) {
        bosluk += " "
    }
    let yildizlar = ""
    for (let j = yildizsayisi; j > 0; j--) {
        yildizlar += "*"
    }
    yildizsayisi -= 2
    console.log(bosluk + yildizlar)
}

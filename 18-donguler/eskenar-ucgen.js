// console.log("   *   ")
// console.log("  ***  ")
// console.log(" ***** ")
// console.log("*******")


let yildizsayisi = 1;
for (let i = 8; i >= 0; i--) {
    let bosluk = ""
    for (let j = 0; j < i; j++) {
        bosluk += " "
    }
    let yildizlar = ""
    for (let j = 0; j < yildizsayisi; j++) {
        yildizlar += "*"
    }
    yildizsayisi += 2
    console.log(bosluk + yildizlar)
}


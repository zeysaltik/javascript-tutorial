

let en = 10
let boy = 4
if (en == boy) {
    console.log("baska bir sayı giriniz")
} else {
    for (let i = 0; i < boy; i++) {
        let yildizlar = "*".repeat(en)
        console.log(yildizlar)
    }
}
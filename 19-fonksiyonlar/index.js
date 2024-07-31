// Basit Toplama
function sayilariTopla(sayi1, sayi2) {
    let toplama = sayi1 + sayi2
    console.log(toplama)
}
sayilariTopla(3, 5)

let toplam = 0
function sayiToplami(...sayilar) {
    for(let sayi of sayilar){
        toplam += sayi
    }
}

sayiToplami(3, 5, 7, 9, 11)
console.log(toplam)

function yas(dogumTarihi) {
    return new Date().getFullYear() - dogumTarihi
}
const yasHesapla = yas(2008)
console.log(yasHesapla)
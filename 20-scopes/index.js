var kullanici = "global scope: Zeynep"

const isim = "Zeynep"
isim = "Deniz"

console.log(isim); //hata verir

function isimYazdir() {
    var kullanici = "function scope: Deniz"
    console.log(kullanici);
}

if (true) {
    let kullanici = "if scope: Leyla" //var ile değişken atarsak global scope'u da değiştirir
    console.log(kullanici);
}

isimYazdir() //fonksiyonun içinde olduğundan function scope'u yazdırır
console.log(kullanici) //global scope yazdırır

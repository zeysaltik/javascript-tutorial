/*
    Öğrenci Bilgileri
    1- Zeynep Nur Saltık
        Doğum Tarihi: 2008
        Bilgisayar Dersi Notları: 100, 90, 10

    2- Deniz Ekin Saltık
        Doğum Tarihi: 2020
        Bilgisayar Notları: 60, 30, 50
    Geçer Not: 50

    Program Şartları:
    1- Öğrencilerin yaşlarını hesaplayınız.
    2- Öğrencilerin ders ortalamasını hesaplayınız.
    3- öğrencilerin dersten kalıp kalmadığını hesaplayınız.
    */

let suankiYil = new Date().getFullYear()
let gecmeNotu = 50

let ogr1 = "Zeynep Nur Saltık"
let ogr1DogumYil = 2008
let suankiYas1 = suankiYil - ogr1DogumYil
let ogr1DersNot1 = 100
let ogr1DersNot2 = 90
let ogr1DersNot3 = 10
let ogr1DersNotOrt = parseInt((ogr1DersNot1 + ogr1DersNot2 + ogr1DersNot3) / 3)
let ogr1DersDurum = ogr1DersNotOrt > gecmeNotu

console.log("1. Öğrencinin adı: ",ogr1)
console.log("1. Öğrencinin yaşı: ",suankiYas1)
console.log("1.Öğrencinin Ders Not Ortalaması: ",ogr1DersNotOrt)
console.log("1. öğrencinin Ders Durmu: ",ogr1DersDurum)

let ogr2 = "Deniz Ekin Saltık"
let ogr2DogumYil = 2020
let suankiYas2 = suankiYil - ogr2DogumYil
let ogr2DersNot1 = 60
let ogr2DersNot2 = 30
let ogr2DersNot3 = 50
let ogr2DersNotOrt = parseInt((ogr2DersNot1 + ogr2DersNot2 + ogr2DersNot3) / 3)
let ogr2DersDurum = ogr2DersNotOrt > gecmeNotu

console.log("2. Öğrencinin adı: ",ogr2)
console.log("2. Öğrencinin yaşı: ",suankiYas2)
console.log("2.Öğrencinin Ders Not Ortalaması: ",ogr2DersNotOrt)
console.log("2. öğrencinin Ders Durmu: ",ogr2DersDurum)

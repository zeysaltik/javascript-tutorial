let tarih = new Date()

let result
result = tarih.getDate() //ay olarak gün
result = tarih.getDay() //hafta olarak gün
result = tarih.getFullYear() //yıl
result = tarih.getHours() //saat
result = tarih.getTime()

console.log(result)

// tarih.setFullYear(2025)
tarih.setMonth(2)
tarih.setDate(15)

result = tarih
console.log(result)

//Doğum Tarihi

let dogumTarihi = new Date(2008, 11, 7)
result = tarih.getFullYear() - dogumTarihi.getFullYear()

console.log(result)
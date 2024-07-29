let products =["iphone5", "samsung", "huawei"]
let result

result = products.length
// result = products.toString()
// result = products.join("")

// result = products.shift()
// result = products.pop()

// result = products.push("xiaomi")
// result = products.unshift("xiaomi")

let urunler1 = ["asus", "apple"]
let urunler2 = ["dell", "casper"]
let urunler3 = ["acer", "exper"]

// result = urunler1.concat(urunler2, urunler3)
// result = urunler1.splice(0, 0, urunler2)
// result = urunler1.splice(0, 0, "elma")
result = urunler1.splice(0, 1)

console.log(result)
console.log(urunler1);
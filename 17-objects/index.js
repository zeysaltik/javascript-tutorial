// let customers = ["zeynep", ["asus", "monster", "del",[10, 20, 30]]]

// console.log(`Ürün: ${customer1[1][0]} Fiyatı: ${customer1[1][3][0]}`)

let customer1 = {
    "ad": "Zeynep Nur",
    "soyad": "Saltık",
    "şehir": "İzmir",
    "yaş": 16,
    "products": [
        "laptop", "car", "phone"
    ]
}

let customer2 = {
    "ad": "Deniz Ekin",
    "soyad": "Saltık",
    "şehir": "İzmir",
    "yaş": 4,
    "products":
        {
            "phone": "iphone6",
            "price": 10
        }
}

let customer3 = {
    "ad": "Leyla",
    "soyad": "Panoğlu",
    "şehir": "İzmir",
    "yaş": 16
}

console.log(customer2.products.price)

let musteriler = [
    customer1,
    customer2,
    customer3
]

console.log(musteriler)

let urunler = [
    {
        "id": 1,
        "urunAdi": "huawei",
        "fiyati": 10
    },
    {
        "id": 2,
        "urunAdi": "apple",
        "fiyati": 20
    },
    {
        "id": 3,
        "urunAdi": "vestel",
        "fiyati": 30
    },
       
]

console.log(urunler)
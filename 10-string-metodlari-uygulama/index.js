let url = "https://www.zeynepnursaltik.com"
let youtube = "Zeynep nur Saltik"
let result

result = url.length
result = youtube.length
result = youtube.replace(" ", "").length

result = youtube.split(" ").length
result = url.split(".").length

result=youtube.startsWith("Zeynep")
result = url.startsWith("https")

if(result){
    console.log("yapılacaklar")
} else {
    console.log("False döndü")
}

if(youtube.indexOf("nur")>-1){
    console.log("çalıştı")
} else{
    console.log("çalışmadı")
}

console.log(result)

youtube = youtube.toLowerCase().replace(" ", "-").replace(" ", "-")

console.log(youtube)

console.log(url)

let newUrl = url.replace(url, url+youtube)
newUrl = `${url}/${youtube}`
console.log(newUrl)

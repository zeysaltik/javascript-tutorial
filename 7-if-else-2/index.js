let yas = 16
let mezuniyet = "üniversite"

if (yas >= 18 && (mezuniyet == "üniversite" || mezuniyet == "lise")) {
    console.log("Ehliyet şartlarını karşıladığın için ehliyet alabilirsin.")
} else if(yas === 17){
    console.log("Dayan son 1 sene")
}
else {
    console.log("Ehliyet şartlarını karşılamadığın için ehliyet alamazsın.")
}


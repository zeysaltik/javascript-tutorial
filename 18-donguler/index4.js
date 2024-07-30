function drawDiamond(n) {
    if (n % 2 === 0) {
        console.log("Lütfen tek bir sayı girin.");
        return;
    }

    let midPoint = Math.floor(n / 2);

    // Üst kısım
    for (let i = 0; i <= midPoint; i++) {
        let stars = '*'.repeat(2 * i + 1);
        let spaces = ' '.repeat(midPoint - i);
        console.log(spaces + stars + spaces);
    }

    // Alt kısım
    for (let i = midPoint - 1; i >= 0; i--) {
        let stars = '*'.repeat(2 * i + 1);
        let spaces = ' '.repeat(midPoint - i);
        console.log(spaces + stars + spaces);
    }
}

// Kullanıcıdan bir sayı alalım ve fonksiyonu çağıralım
let size = 9
drawDiamond(parseInt(size));

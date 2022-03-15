const cekAngkaBagi = (angka1, angka2) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const bagi = angka1 / angka2

            if(isFinite(bagi)){
                resolve("hasil pembagian angka berhingga/terbatas")
            }
            else{
                reject("hasil pembagian angka tak berhingga")
            }
        }, 2000);
    })
}

cekAngkaBagi(22,0)
    .then((berhingga)=>{
        console.log(berhingga)
    })
    .catch((takberhingga)=>{
        console.log(takberhingga)
    })


const cekPalindrom = (word) => {
    return new Promise((resolve, reject)=>{
        const reverse = word.toLowerCase().split("").reverse().join("")

        if(reverse==word.toLowerCase()){
            resolve("Merupakan kata palindrom")
        }
        else{
            reject("Bukan kata palindrom")
        }
    })
}

cekPalindrom("Ada")
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })

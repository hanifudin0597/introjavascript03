const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }
            else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

cekHariKerja('senin')
.then((hasil) => {
    console.log(hasil)
})
.catch((error) => {
    console.log(error.message)
})

const utama = async () => {
    try {
        
        const hariKerja = await cekHariKerja('minggu')
        console.log(hariKerja)
        
    } catch (error) {
        console.log(error.message)
    }
}

utama()
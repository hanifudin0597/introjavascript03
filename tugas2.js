const getMonth = (callback) =>{
    setTimeout(() => {
        let error = false
        let month = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','oktober','November','Desember']
        
        if (!error){
            callback(null,month)
        }
        else{
            callback(new Error("Sorry Data not Found",[]))
        }
        
    }, 1000);
}

const showMonth = (err,month) =>{
    if(!err){
        month.forEach(element => {
            console.log(element) 
        })
    }
    else{
        console.log(err.message)
    }
}


getMonth(showMonth)

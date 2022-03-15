fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => data.map((e)=>{
        console.log(e.name)
    }))
    .catch(err => console.log(err))
 
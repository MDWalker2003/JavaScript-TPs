// async function fetchUserData(id) {
//     var data = await
//     fetch(`https://dummyjson.com/users/${id}`)
//     .then(res => res.json())
//     console.log(res)
//     // .then(res => data = res)
//     .catch(console.log('404 Not Found'))
//     return data    
// }

// fetchUserData(6)

function fetchUserData(id) {
    fetch(`https://dummyjson.com/users/${id}`).then(res=>res.json()).then(console.log(res)).catch(console.log("not Found"))

}

fetchUserData(6)
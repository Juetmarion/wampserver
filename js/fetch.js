/* 1ere syntaxe */
/* fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
}) */


/* 2eme syntaxe */
/* fetch("https://jsonplaceholder.typicode.com/users")
.then(response  => response.json()).then(console.log)    */

// on crée une fonction asynchrone 
let getUsers = async function(){
    try {
        // on veut qu'il attende de récupérer les données et les parser
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (response.ok){
            let data = await response.json()
            console.log(data)
        } else {
            console.log("Retour du serveur : ", response.status)
        }   
    } catch(e) {
        console.log(e)
    }
} 

const insertPost = async function(data){
    let request = new Request('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(data)
    })
    let response = await fetch(request)
    let responseData = await response.json()
    console.log(responseData)

}

insertPost({
    name:'Jean', 
    age: 29
})
/* getUsers()  */
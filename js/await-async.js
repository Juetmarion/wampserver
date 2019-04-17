
  let get = function(url){
    return new Promise(function(resolve, reject){
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
      if (req.readyState === 4){
        if (req.status >= 200 && req.status < 400){
          resolve(req.responseText) 
        } else {
          reject(req)
        }
      }
    }
    req.open('GET', url, true)
    req.send()
    })
  }

  let getPosts = async function(){ // 1  on précise le async
    // on déclare response pour pouvoir faire attendre l'appel
    let response = await get('https://jsonplaceholder.typicode.com/users')
    let users = JSON.parse(response)
    // on attend aussi
    reponse = await get('https://jsonplaceholder.typicode.com/comments?userId='+ users[0].id)
    let posts = JSON.parse(response);
    return posts
  }

  console.log(getPosts()) // retourne une promesse à cause du async
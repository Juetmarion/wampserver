
  var get = function(url){
    return new Promise(function(resolve, reject){
    var req = new XMLHttpRequest();
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

  var getPosts = async function(){ // 1  on précise le async et retourne une promise
    try {
        // on déclare response pour pouvoir faire attendre l'appel
        // await resolve la promise
        var response = await get('https://jsonplaceholder.typicode.com/users')
        var users = JSON.parse(response)
        reponse = await get('https://jsonplaceholder.typicode.com/comments?userId='+ users[0].id)
        var posts = JSON.parse(response)
    } catch (e) {
        console.log('Oups il y a eu un pb', e)
    }
    return posts
  }

  // console.log(getPosts()) // retourne une promesse à cause du async

  var getFirstPosts = async function(){
      var posts = await getPosts()
      return posts[0]
  }

  getFirstPosts().then(function(post){
      //console.log(post)
  })

  var demo = async function(){
      var arr = await Promise.all([getPosts(), getFirstPosts()])
      console.log(arr)
  }

  //demo() // va faire les deux requetes à la fois en simultanée
  getPosts()

  let get = function(url){
    // on crée le promise pour le pas faire passer le success et error en callback de get
    return new Promise(function(resolve, reject){
    // on crée la requete HTTP
    let req = new XMLHttpRequest();
    
    // quand un mouvement de requete est effetué : 
    req.onreadystatechange = function(){
      // on cherche à voir si elle est passée : 
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState 
      if (req.readyState === 4){
        // et si statut entre 200 et 400 : ok 
        if (req.status >= 200 && req.status < 400){
          // on recupere le parametre resolve
          // là on obtient le json entier 
          resolve(req.responseText) 
        } else {
          reject(req)
        }
      }
    }
    // on configure la requete 
    req.open('GET', url, true)
    // et on la send
    req.send()
    })
  }

  console.log(get('https://jsonplaceholder.typicode.com/users')) // promesse
  // .then = lorsque c'est ok 
  get('https://jsonplaceholder.typicode.com/users').then(function (response){
    //console.log(response)
  }).catch(function(error){ //.catch = en cas d'erreur
    console.log(error);
  })

  // la fonction pour appeler l'erreur sera toujours la même on la déclare donc 
  let catchError = function (err){ console.error(err) }


  let getPosts = function(){
        return get('https://jsonplaceholder.typicode.com/users').then(function(response){
        let users = JSON.parse(response)
        return get('https://jsonplaceholder.typicode.com/comments?userId='+ users[0].id)
        }).then(function(response){
            let posts = JSON.parse(response);
            return posts
          })
  }

  getPosts().then(function(posts){
    console.log(posts[0])
  }).catch(function(error){
    console.error(error)
  }).then(function(){ // celle-ci passera toujours
    console.log('Fin des requetes Ajax')
  }) 
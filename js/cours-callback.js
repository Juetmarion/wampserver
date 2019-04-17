  

  let get = function(url, success, error){
    // on crée la requete HTTP
    let req = new XMLHttpRequest();
    
    // quand un mouvement de requete est effetué : 
    req.onreadystatechange = function(){
      // on cherche à voir si elle est passée : 
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState 
      if (req.readyState === 4){
        // et si statut entre 200 et 400 : ok 
        if (req.status >= 200 && req.status < 400){
          // on recupere en callback la fonction success
          // là on obtient le json entier 
          success(req.responseText) 
        } else {
          error(req)
        }
      }
    }
    // on configure la requete 
    req.open('GET', url, true)
    // et on la send
    req.send()
  }

  let getPosts = function(success, error){
    get('https://jsonplaceholder.typicode.com/users', function(response){
    console.log(response)  
    let users = JSON.parse(response)
    // on obtient donc le 1er utilisateur
    console.log(users[0])
    // apres avoir obtenu la liste complete on peut donc afficher le 1er article
      get('https://jsonplaceholder.typicode.com/comments?userId='+ users[0], function(response){
        // on json la reponse
        let posts = JSON.parse(response);
        success(posts)
      }, function (err) { // 3em callback de la fonction get One
        error('Erreur ajax', err)
    
    }, function (err){ //3eme callback pour afficher l'erreur get all
      error(err)
    })
  })
  }
  console.log(getPosts(function(posts){
    console.log("le premier article"+ posts[0])
  }, function(error) {
    console.log(error)
  }
  ))
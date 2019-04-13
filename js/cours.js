/* MANIERE SYNCHRONE */
/*1 var req = new XMLHttpRequest(); // permet de créer des requêtes HTTP

// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
// .open() permet de configurer la requête HTTP
// .open(le + souvent GET, POST ou PUT, url, boolean (true = async, false=sync)
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false);

// Envoi de la requête
// .send() envoie la requête HTTP vers l'URL cible fournie à .open()
// Prend en paramètre l'éventuelle information envoyée au serveur
// (requêtesPOSTouPUT), ou bien null dans le cas d'une requête GET.
req.send(null);
// Affiche la réponse reçue pour la requête
// .responseText = contenu du *fichier*.txt récupéré par la requête
console.log(req.responseText); 1*/

/* MANIERE ASYNCHRONE */
/*  var req = new XMLHttpRequest();
// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    // Affiche la réponse reçue pour la requête
    console.log(req.responseText);
});
req.send(null);  */

/* ASYNCHRONE GESTION ERREUR */
/*1 var req = new XMLHttpRequest();
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
        console.log(req.responseText);
    } else {
        // Affichage des informations sur l'échec du traitement de la requête
        console.error(req.status + " " + req.statusText);
    }
});
req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
req.send(null); 1*/

/* EX GET FILM */
/*1 ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
}); 1*/



ajaxGet("http://localhost:8000/javascript-web-srv/data/langages.txt", afficher);

function afficher(reponse) {
    let tabReponse = reponse.split(';'); // permet de transformer en tableau et couper à ";"
    tabReponse.forEach(answer =>{
        let writeAnswer = document.createElement("li");
        writeAnswer.textContent = answer;
        document.querySelector('#langages').appendChild(writeAnswer);
    }) 
}
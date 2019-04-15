
// ajaxGet() permet d'exécuter une requête HTTP asynchrone
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    console.log(url)
    // on cree la requetes HTTP
    var req = new XMLHttpRequest();
    // .open() permet de configurer la requête HTTP
    // .open(le + souvent GET, POST ou PUT, url, boolean (true = async, false=sync)
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) { // si serveur a réussi à traiter la requête
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            // Affichage des informations sur l'échec du traitement de la requête
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () { 
        // La requête n'a pas réussi à atteindre le serveur
        console.error("Erreur réseau avec l'URL " + url);
    });
    // .send() envoie la requête HTTP vers l'URL cible fournie à .open()
    // Prend en paramètre l'éventuelle information envoyée au serveur
    // (requêtesPOSTouPUT), ou bien null dans le cas d'une requête GET.
    req.send(null);
}

// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
function ajaxPost(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(data);
}
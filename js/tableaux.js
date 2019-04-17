
// on appelle ajaxGet avec url et callback afficher
ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", afficher);

function afficher(reponse) {
    console.log(JSON.parse(reponse));
    let reponseParse = JSON.parse(reponse);
    document.querySelector('#tableaux').innerHTML = '<table id="headerTab"><td>Nom</td><td>Année</td><td>Peintre</td></table>' 
    reponseParse.forEach(elt =>{
        console.log(elt);
        document.querySelector('#headerTab').innerHTML += '<tr>'; 
        document.querySelector('#headerTab').innerHTML += '<td>'+elt.nom+ '</td> <td>'+elt.annee+'</td><td>'+elt.peintre+'</td>'; 
        document.querySelector('#headerTab').innerHTML += '</tr>'; 
        /* let tabElt = createElement('') */
    })
}
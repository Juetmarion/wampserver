
// Envoi de l'objet FormData au serveur
var form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  var temoignage = {
    pseudo: e.target.elements.pseudo.value,
    evaluation: e.target.elements.evaluation.value,
    message: e.target.elements.message.value
  };
  ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", temoignage, function(
    temoignage
  ) {
    var messageElt = document.createElement("p");
    messageElt.textContent = "Le temoignage a bien été ajouté.";
    document.getElementById("resultat").appendChild(messageElt);
  });

});


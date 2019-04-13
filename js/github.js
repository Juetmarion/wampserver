
/* 
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function (reponse) {


}); */


document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault(); // sinon la page se recharge
    let inputText = document.querySelector('#profilGitHub').value;
    console.log(inputText);
    ajaxGet("https://api.github.com/users/"+ inputText, afficher);
    function afficher(profil){
        var profilParse = JSON.parse(profil);
        console.log(profilParse);
        let profilComplete = document.createElement("div");
        profilComplete.innerHTML = '<img src="'+profilParse.avatar_url+'"';
        profilComplete.innerHTML = '<div>'+ profilParse.name +'</div>';
        console.log(profilComplete.textContent)
        document.querySelector('#result').appendChild(profilComplete);
    }
})
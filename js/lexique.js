
let tabLettre = [" A ", "|", " B ", "|", " C ", "|", " D ", "|", " E ", "..."];
console.log(tabLettre);

tabLettre.forEach(lettre => {
    let uneLettre = document.createElement("a")
    uneLettre.textContent = lettre;
    uneLettre.value = lettre;
    uneLettre.href = "#";
    uneLettre.className = "aLettre";
    document.querySelector("#lettres").appendChild(uneLettre);
    let lesLettres = document.querySelector(".aLettre");
    lesLettres.addEventListener("click", function(){
        console.log(uneLettre)
    })
})


//ajaxGet("https://c-jswebsrv.herokuapp.com/api/lexique/"+lettre, callback);


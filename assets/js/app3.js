var carteList = document.querySelectorAll(".play");
var totalCartes = 16;
var click = 0;
var match = 0;
var image1 = "";
var image2 = "";
var score = 0;
var scoreFinal = document.getElementById("score");
var win = document.getElementById("win");
var galerie = [
    "assets/img/aragorn.jpg",
    "assets/img/frodon.jpg",
    "assets/img/gandalf.jpg",
    "assets/img/gimli.jpg",
    "assets/img/legolas.jpg",
    "assets/img/merry.jpg",
    "assets/img/pippin.jpg",
    "assets/img/sam.jpg",
    "assets/img/aragorn.jpg",
    "assets/img/frodon.jpg",
    "assets/img/gandalf.jpg",
    "assets/img/gimli.jpg",
    "assets/img/legolas.jpg",
    "assets/img/merry.jpg",
    "assets/img/pippin.jpg",
    "assets/img/sam.jpg",
];

generation();

/*on initialise la galerie*/
function generation() {
    for (let i = 0; i < 16; i++) {
        var hasard = Math.floor(Math.random() * totalCartes)
        carteList[i].innerHTML = `<img src="${galerie[hasard]}" alt="image" >`;
        galerie.splice(hasard, 1); /* supprime l'image qui a été placé*/
        totalCartes--
    }
}

/*on cache les cartes après 4 secondes */
var hide = setTimeout(function () {
    for (var i = 0; i < 16; i++) {
        carteList[i].firstChild.classList.add("hidden")
    }
}, 4000);

/*logique du jeu*/

/*Pour toutes les cartes du tableau on devoile la carte au clic */
for (let j = 0; j < carteList.length; j++) {
    carteList[j].addEventListener("click", function () {
        this.firstChild.classList.remove("hidden");
        /*carte 1*/
        if (click <1) {
            image1 = this;
            click = 1
        }
        /*carte 2*/
        else if (this !== image1) {
            image2 = this;

            /*si les images sont differentes on les cache*/
            if (image1.firstChild.src !== image2.firstChild.src) {
                 setTimeout(function () {
                    image1.firstChild.classList.add("hidden");
                    image2.firstChild.classList.add("hidden");
                }, 400);
                if (score > 0) {
                    score -= 2;
                }
                scoreFinal.textContent = score;
            }


            /*si les images sont les memes*/
            
            else {
                match += 2;
                score += 10;
                image1.classList.remove("play");
                image2.classList.remove("play");
                image1.firstChild.classList.add("match");
                image2.firstChild.classList.add("match");
                scoreFinal.textContent = score;

                /* Victoire*/
                if (match === 16) {
                    win.classList.remove("hidden");
                    win.textContent = `Félicitations, ton score est de ${score} points ! ! !`;
                }
            }
            click = 0;
        }
    });
}
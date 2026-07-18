// Chargement des miniatures
    
    let images=[
                 "images/caroussel3.jpeg",
                 "images/caroussel2.jpeg",
                 "images/caroussel4.jpeg",
		         "images/caroussel5.jpeg",
];

let index = 0;

let imagePrincipale = document.getElementById("imagePrincipale");

  
let titres = [
    "Villa moderne",
    "Appartement de luxe",
    "Terrain à vendre",
	"Duplex"
];

let paragraphes = [
    "Découvrez une villa spacieuse avec piscine et jardin.",
    "Profitez d'un appartement confortable au cœur de la ville.",
    "Investissez dans un terrain idéal pour construire votre maison.",
	"profitez avec des tes terains de jeux incroyables"
];
 
function afficher() {
    document.getElementById("imagePrincipale").src = images[index];
    document.getElementById("titre").innerHTML = titres[index];
    document.getElementById("text").innerHTML = paragraphes[index];
}

function suivant() {
    index = index + 1;
	if(index==images.length)
	{
		index=0;
	}
    afficher();
}
function precedent(){
	index=index-1;
	if(index<0)
	{
		index=images.length-1;
	}
	afficher();
}
setInterval(suivant, 3000);
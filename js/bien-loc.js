// Chargement des miniatures
let img1=document.getElementById("img1")
let img2=document.getElementById("img2")
let img3=document.getElementById("img3")
let img4=document.getElementById("img4")
let images=[
  img1.src,
  img2.src,
  img3.src,
  img4.src
];
let index = 0;

let imagePrincipale = document.getElementById("imageprincipale");

// Affichage initial
imagePrincipale.src = images[index];

// Image suivante
function imageSuivante(){
    index++;

    if(index >= images.length){
        index = 0;
    }

    imagePrincipale.src = images[index];
}

// Image précédente
function imagePrecedente(){

    index--;

    if(index < 0){
        index = images.length - 1;
    }

    imagePrincipale.src = images[index];
}

let i=0;
// Cliquer sur une miniature
function changerImage(i){
    index = i;
    imagePrincipale.src = images[index];
}
setInterval(function(){
	i++
	if(i>=images.length)
		i=0
    changerImage(i)}
	,3000);
const biens = [

    {
		type:"Résidence",
        titre: "Résidence Prestige R+5",
        image: "images/t8.jpeg",
        localisation: "Almadies, Dakar",
        caracteristiques: "Appartements F2 à F4 • Ascenseur. Parking",
        description: "Immeuble moderne comprenant plusieurs appartemants spacieux, idéal pour un investissement immobilier.",
        prix: "120 000 000 FCFA",
		lien:"bien-loc-11.html"
    },

    {
		type:"Villa",
        titre: "Villa  contemporaine",
        image: "images/t10.jpeg",
        localisation: "Mbour",
        caracteristiques: "7 chambres • 550 m²",
        description: "Grande Villa situé prés de l'autoroute, avec piscine, jardin et accés rapide aux grands axes.",
        prix: "800 000 000 FCFA",
		lien:"bien-loc-12.html"
    },

    {
		type:"Maison",
        titre: "Maison familiale",
        image: "images/t11.jpeg",
        localisation: "Diamniadio",
        caracteristiques: "5 chambres • 220 m²",
        description: "Maison confortable avec cour , idéale pour une famille cherchant calme et sécurité.",
        prix: "130 000 000 FCFA",
		lien:"bien-loc-13.html"
    },

    {
		type:"Villa",
        titre: "Villa Prestige",
        image: "images/tr4.jpeg",
        localisation: "Ngor",
        caracteristiques: "5 chambres • 450 m²",
        description: "Villa haut standing avec piscine, jardin et sécurité.",
        prix: "330 000 000 FCFA",
		lien:"bien-loc-14.html"
    },

    {
		type:"Maison",
        titre: "Maison à étage",
        image: "images/t3.jpeg",
        localisation: "Ouakam",
        caracteristiques: "4 pièces • 220 m²",
        description:" Maison a étage avec balcon, grande terrasse et pièces lumineuses.",
        prix: "310 000 000 FCFA",
		lien:"bien-loc-15.html"
    },

    {
		type:"Terrain",
        titre: "Terrain en bordure d'autoroute",
        image: "images/t7.jpeg",
        localisation: "Diamniadio",
        caracteristiques: "1000 m² accès directe",
        description: "Terrain parfaitement situé pour un projet commercial ou résidenciel avec exellente visibilité.",
        prix: "75 000 000 FCFA",
		lien:"bien-loc-16.html"
    },

    {
		type:"Studio",
        titre: "Studio Moderne",
        image: "images/t1.jpeg",
        localisation: "Mermoz",
        caracteristiques: "1 pièce • 150 m²",
        description: "Studio entièrement aménagé, idéal pour un étudiant, un jeune actif et un investissement idéal.",
        prix: "28 000 000 FCFA",
		lien:"bien-loc-17.html"
    },

    {
		type:"appartemants",
        titre: "appartemants F2 a F5",
        image: "images/t9.jpeg",
        localisation: "Yoff",
        caracteristiques: "Appartements F3 et F4 Ascenseur",
        description: "Nouvelle résidance sécurisé proposant des apartements modernes avec Parking privé.",
        prix: "75 000 000 FCFA",
		lien:"bien-loc-18.html"
    },

    {
		type:"terrain",
        titre: "terrain constructible",
        image: "images/terrain1.jpg",
        localisation: "Sacré-Cœur",
        caracteristiques: "500 m² • Titre foncier",
        description: "Terrain plat dans un quaartier résidanciel, parfait pour construire une villa ou un immeuble.",
        prix: "35 000 000 FCFA",
		lien:"bien-loc-19.html"
    },

    {
		type:"Maison",
        titre: "Maison de standing",
        image: "images/villa1.jpeg",
        localisation: "Saly",
        caracteristiques: "4 chambres • 300m²",
        description: "Magnifique villa avec piscine privée et grand jardin arboré.",
        prix: "105 000 000 FCFA",
		lien:"bien-loc-20.html"
    }

];

var texte = "";

for (var i = 0; i < biens.length; i++) {

    texte = texte +
    "<article id='bloc'>" +

        "<div id='bloc1'>" +
            "<a href='" + biens[i].lien + "'>" +
                "<img src='" + biens[i].image + "' alt='" + biens[i].titre + "'>" +
            "</a>" +
        "</div>" +

        "<div id='bloc2'>" +
            "<p id='type'>" + biens[i].type + "</p>" +
            "<h3 id='titre'>" + biens[i].titre + "</h3>" +
            "<p id='localisation'>" + biens[i].localisation + "</p>" +
            "<p >" + biens[i].caracteristiques + "</p>" +
            "<p id='description'>" + biens[i].description + "</p>" +
            "<h3 id='prix'>" + biens[i].prix + "</h3>" +
            "<a href=" + biens[i].lien + ">Voir plus</a>" +
        "</div>" +

    "</article>";
}

document.getElementById("listeBiens").innerHTML = texte;
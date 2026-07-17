const biens = [

    {
		type:"villa",
        titre: "Villa moderne",
        image: "images/villa1.jpeg",
        localisation: "Maristes",
        caracteristiques: "4 pièces 250 m²",
        description: "Une magnifique villa moderne avec piscine, jardin, garage et sécurité 24h/24.",
        prix: "850 000 FCFA / mois",
		lien:"bien-loc-1.html"
    },

    {
		type:"Apparement",
        titre: "Apparement lumineux",
        image: "images/villa2.jpeg",
        localisation: "Mermoz",
        caracteristiques: "3 pièces 120 m²",
        description: "Appartement spacieux, lumineux et climatisé avec balcon, cuisine équipée et parking sécurisé.",
        prix: "450 000 FCFA / mois",
		lien:"bien-loc-2.html"
    },

    {
		type:"Studio",
        titre: "Studio premium meublé",
        image: "images/villa3.jpeg",
        localisation: "Almadies",
        caracteristiques: "1 pièces 45 m²",
        description: "Studio moderne entièrement meublé avec connexion Wi-Fi, cuisine équipée et sécurité 24h/24.",
        prix: "300 000 FCFA / mois",
		lien:"bien-loc-3.html"
    },

    {
		type:"Duplex",
        titre: "Duplex prestige",
        image: "images/villa4.jpeg",
        localisation: " Sacré-Cœur",
        caracteristiques: "6 pièces 320 m²",
        description: "Grand duplex avec terrasse, garage double, chambres spacieuses et finitions haut de gamme.",
        prix: "1 200 000 FCFA / mois",
		lien:"bien-loc-4.html"
    },

    {
		type:"Maison",
        titre: "Maison confort",
        image: "images/villa5.jpeg",
        localisation: " Rufisque",
        caracteristiques: "5 pièces 280 m²",
        description:"Maison familiale avec grand jardin, terrasse ombragée, garage et espace barbecue.",
        prix: "700 000 FCFA / mois",
		lien:"bien-loc-5.html"
    },

    {
		type:"Apparement",
        titre: "Apparement haut standing",
        image: "images/Villa6.jpeg",
        localisation: "Ouakam",
        caracteristiques: "4 pièces 190 m²",
        description: "Appartement haut standing avec ascenseur, salle de sport, piscine commune et gardiennage permanent.",
        prix: "950 000 FCFA / mois",
		lien:"bien-loc-6.html"
    },

    {
		type:"villa",
        titre: "Villa face a l'Océan",
        image: "images/villa7.jpeg",
        localisation: "Ngor",
        caracteristiques: "7 pièces 420 m²",
        description: "Villa offrant une vue exceptionnelle sur l'océan avec piscine, terrasse et accès rapide à la plage.",
        prix: "2 300 000 FCFA / mois",
		lien:"bien-loc-7.html"
    },

    {
		type:"Studio",
        titre: "Studio moderne quartier Point E",
        image: "images/villa8.jpeg",
        localisation: "Point E",
        caracteristiques: "1 pièces 38 m²",
        description: "Studio fonctionnel idéal pour étudiant ou jeune professionnel, proche des commerces et universités.",
        prix: "180 000 FCFA / mois",
		lien:"bien-loc-8.html"
    },

    {
		type:"villa",
        titre: "Villa contemporaire",
        image: "images/villa9.jpeg",
        localisation: "Point E",
        caracteristiques: "6 pièces 350 m²",
        description: "Villa contemporaine avec architecture moderne, jardin, piscine, garage.",
        prix: "250 000 FCFA / mois",
		lien:"bien-loc-9.html"
    },

    {
		type:"villa",
        titre: "Villa moderne",
        image: "images/villa10.jpeg",
        localisation: "Cité Keur Gorgui",
        caracteristiques: "6 pièces 350 m²",
        description: "Une magnifique villa moderne avec piscine, jardin, garage et sécurité 24h/24.",
        prix: "1 650 000 FCFA / mois",
		lien:"bien-loc-10.html"
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
            "<p>" + biens[i].localisation + "</p>" +
            "<p>" + biens[i].caracteristiques + "</p>" +
            "<p>" + biens[i].description + "</p>" +
            "<h3 id='prix'>" + biens[i].prix + "</h3>" +
            "<a href='" + biens[i].lien + "'>Cliquez sur l'image</a>" +
        "</div>" +

    "</article>";
}

document.getElementById("listeBiens").innerHTML = texte;
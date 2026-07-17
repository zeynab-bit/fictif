let formulaire = document.getElementById("contactForm");

formulaire.addEventListener("submit", function(e) {

    e.preventDefault(); // Empêche l'envoi du formulaire

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let sujet = document.getElementById("sujet").value;
    let message = document.getElementById("message").value;

    // Vérification du nom
    if(nom == ""){
        alert("Veuillez saisir votre nom.");
        document.getElementById("nom").focus();
        return;
    }

    // Vérification du prénom
    if(prenom == ""){
        alert("Veuillez saisir votre prénom.");
        document.getElementById("prenom").focus();
        return;
    }

    // Vérification de l'email
   /* let modeleEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;*/

    if(email == ""){
        alert("Veuillez saisir votre email.");
        document.getElementById("email").focus();
        return;
    }

    else if(!email.includes("@")||!email.includes(".")){
        alert("Adresse email invalide.");
        document.getElementById("email").focus();
        return;
    }

    // Vérification du sujet
    if(sujet == ""){
        alert("Veuillez saisir le sujet.");
        document.getElementById("sujet").focus();
        return;
    }

    // Vérification du message
    if(message == ""){
        alert("Veuillez saisir votre message.");
        document.getElementById("message").focus();
        return;
    }

    if(message.length < 10){
        alert("Le message doit contenir au moins 10 caractères.");
        document.getElementById("message").focus();
        return;
    }

    alert("Formulaire envoyé avec succès !");
    formulaire.submit();
});
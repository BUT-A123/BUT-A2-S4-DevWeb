<?php

require_once 'Coordonnees.php';
require_once 'Personnage.php';

// exemple d'objets classiques
$coord = new Coordonnees("archibald@yopmail.com","Moulinsart");
$haddock = new Personnage("Haddock","Archibald",$coord,"marin");

// affichage de l'encodage JSON de l'objet
echo json_encode($haddock);

?>

<!--
let xhr = new XMLHttpRequest();
xhr.open("GET","https://td3js/ex3/haddock_v2.php",true);
xhr.send(null);
xhr.readyState; -> 4
xhr.responseText; -> '\r\n\r\n{"nom":"Haddock","prenom":"Archibald","coordonnees":{"email":"archibald@yopmail.com","adresse":"Moulinsart"},"profession":"marin"}'
let resultat = xhr.responseText;
resultat; -> '\r\n\r\n{"nom":"Haddock","prenom":"Archibald","coordonnees":{"email":"archibald@yopmail.com","adresse":"Moulinsart"},"profession":"marin"}'
let obj = JSON.parse(resultat);
obj; -> {nom: 'Haddock', prenom: 'Archibald', coordonnees: {…}, profession: 'marin'}
// Pour connaitre le nom du prototype de la sortie de JSON.parse()
obj.constructor.name; -> Object
obj.nom; -> 'Haddock'
obj.prenom; -> 'Archibald'
obj.coordonnees; -> {email: 'archibald@yopmail.com', adresse: 'Moulinsart'}
obj.coordonnees.email; -> 'archibald@yopmail.com'
-->
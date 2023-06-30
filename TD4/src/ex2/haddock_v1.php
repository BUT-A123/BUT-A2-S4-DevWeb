<?php

// exemple d'un tableau indicé classique
$haddock = ["Haddock","Archibald","chateau de Moulinsart","marin","president de la ligue anti-alcolique"];

// affichage de l'encodage JSON du tableau
echo json_encode($haddock);

?>

<!--
let xhr = new XMLHttpRequest();	-> création de l'objet XMLHttRequest
xhr.open("GET","https://td3js/ex2/haddock_v1.php",true); -> renseignement des éléments nécessaires pour la requête
xhr.send(null); -> envoie de la requête
xhr.readyState; -> 4
xhr.responseText; -> '["Haddock","Archibald","chateau de Moulinsart","marin","president de la ligue anti-alcolique"]'
// Pour connaitre le nom du prototype de responseText
xhr.responseText.constructor.name; -> String
let resultat = xhr.responseText;
resultat; -> '["Haddock","Archibald","chateau de Moulinsart","marin","president de la ligue anti-alcolique"]'
let tab = JSON.parse(resultat);
tab; -> ['Haddock', 'Archibald', 'chateau de Moulinsart', 'marin', 'president de la ligue anti-alcolique']
// Pour connaitre le nom du prototype de la sortie de JSON.parse()
tab.constructor.name; -> Array
tab.length; -> 5
tab[0]; -> 'Haddock'
tab[1]; -> 'Archibald'
tab[4]; -> 'president de la ligue anti-alcolique'
-->
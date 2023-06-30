### Exercice 1

#### Question 2
L'appel à un item du menu actualise les différentes images de fleur et la notification d'appel au serveur

### Exercice 2

#### Question 3
Les images contiennent maintenant soit des erreurs, soit des images non affichables (avec l'alt)

#### Question 6
"Uncaught ReferenceError: adapterGalerie is not defined
at HTMLAnchorElement.onclick (VM371 index.php:24:68)" 

==> la fonction adapterGalerie est appelée sur le click de l'item mais n'existe pas encore

#### Question 8
console.log("bonjour de la part du menu !");==> print le message dans la console

console.log(nom); ==> print le nom de la variété de fleur dans la console

#### Question 9
document.getElementById('fleur' + i) ==> récupère le nom de l'image d'id fleurI (rose1.jpg, rose2.jpg...)

image.src ==> définie le chemin d'accès à l'image ('img/fleurs/rose/rose1.jpg')
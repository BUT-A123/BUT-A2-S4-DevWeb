<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="img/icones/fleur.ico" rel="icon" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" href="css/stylesDivers.css">
    <link rel="stylesheet" type="text/css" href="css/stylesBanniere.css">
    <link rel="stylesheet" type="text/css" href="css/stylesMenu.css">
    <link rel="stylesheet" type="text/css" href="css/stylesGalerie.css">
    <script defer type="text/javascript" src="js/script_td1.js"></script>
    <title>Galeries de fleurs</title>
  </head>
  <body data-id="4">
    <div id="page">
      <img id="parametres" src="img/divers/parametres.png" onclick="changerParametres();">
      <header>
        <div id="banniere" onclick="stopperDefilement();" ondblclick="lancerDefilement();">
          <img id="1" class="img-banniere visible" alt="banniere" src="img/banniere/banniere1.jpg">
          <img id="2" class="img-banniere cachee" alt="banniere" src="img/banniere/banniere2.jpg">
          <img id="3" class="img-banniere cachee" alt="banniere" src="img/banniere/banniere3.jpg">
          <img id="4" class="img-banniere cachee" alt="banniere" src="img/banniere/banniere4.jpg">
          <img id="5" class="img-banniere cachee" alt="banniere" src="img/banniere/banniere5.jpg">
          <img id="6" class="img-banniere cachee" alt="banniere" src="img/banniere/banniere6.jpg">
        </div>
        <nav>
          <ul>
            <li><a href="#" onclick="adapterGalerie('rose');">rose</a></li>
            <li><a href="#" onclick="adapterGalerie('hortensia');">hortensia</a></li>
            <li><a href="#" onclick="adapterGalerie('fruitier');">fruitier</a></li>
            <li><a href="#" onclick="adapterGalerie('autre');">autre</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div class="titrePage">
          <h1><span id="titre">Galerie de roses</span></h1>
        </div>
        <div class='galerie'>
          <div class='ligne-galerie'>
            <img id='fleur1' class='img-galerie' alt='rose1' title='rose' src='img/fleurs/rose/rose1.jpg'>
            <img id='fleur2' class='img-galerie' alt='rose2' title='rose' src='img/fleurs/rose/rose2.jpg'>
            <img id='fleur3' class='img-galerie' alt='rose3' title='rose' src='img/fleurs/rose/rose3.jpg'>
          </div>
          <div class='ligne-galerie'>
            <img id='fleur4' class='img-galerie' alt='rose4' title='rose' src='img/fleurs/rose/rose4.jpg'>
            <img id='fleur5' class='img-galerie' alt='rose5' title='rose' src='img/fleurs/rose/rose5.jpg'>
            <img id='fleur6' class='img-galerie' alt='rose6' title='rose' src='img/fleurs/rose/rose6.jpg'>
            <!-- Affiche les fleurs correspondant à la variété de fleur définie dans le queryString et stockée dans $fleur) -->
          </div>
        </div>
      </main>
      <footer onmouseover="construitInfobulle();" onmouseout="detruitInfobulle();">
        <p>JavaScript 2022</p>
        <p>TD1 - dynamiser les pages web</p>
      </footer>
    </div>
  </body>
</html>

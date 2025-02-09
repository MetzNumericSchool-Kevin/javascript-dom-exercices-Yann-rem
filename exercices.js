// Exercice 1 : Quel est le titre de la boutique

// Récupération du titre de la boutique
const title = document.querySelector("h1");
const titleContent = title.textContent;

// Affichage du titre de la boutique dans la console
console.log(titleContent);

// Exercice 2 : Des informations manquent !

// Récupération de la description de la boutique
const shopDescription = document.querySelector("#description_boutique");

// Création d'un nouvel élément paragraphe
const paragraph = document.createElement("p");

// Ajout de texte à l'élément paragraphe
paragraph.textContent =
  "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.";

// Ajout de l'élément paragraphe dans la description de la boutique
shopDescription.appendChild(paragraph);

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

// Exercice 3 : Roger, enfoiré !

// Récupération de la blague de Roger
const rogerJoke = document.querySelector("#blague_de_roger_le_sorcier");

// Suppression de la blague de Roger
rogerJoke.remove();

// Exercice 4 : Archibald n'est pas là, appelons le !

// Récupération du bouton pour appeler Archibald
const callArchibald = document.querySelector("#call_archibald");

// Ajout d'un écouteur d'événement sur le bouton pour appeler Archibald
callArchibald.addEventListener("click", () => {
  alert("🧙‍♂️ J'arrive, j'arrive Aventurier !.");
});

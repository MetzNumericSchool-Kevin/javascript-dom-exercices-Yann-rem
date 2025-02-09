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

// Exercice 5 : Faisons un peu de magie 🪄

// Récupération des boîtes magiques
const magicBoxes = document.querySelectorAll("#boites_magique .boite");

// Ajout d'un écouteur d'événement sur chaque boîte magique
document.querySelectorAll("#btn_change_red, #btn_change_blue, #btn_change_green").forEach((button) =>
  button.addEventListener("click", () => {
    switch (button.id) {
      // Première boîte magique en rouge
      case "btn_change_red":
        magicBoxes[0].style.backgroundColor = "#ff0000";
        break;

      // Deux premières boîtes magiques en bleu
      case "btn_change_blue":
        [...magicBoxes].slice(0, 2).forEach((box) => {
          box.style.backgroundColor = "#0000ff";
        });
        break;

      // Toutes les boîtes magiques en vert
      case "btn_change_green":
        magicBoxes.forEach((box) => {
          box.style.backgroundColor = "#00ff00";
        });
        break;
    }
  })
);

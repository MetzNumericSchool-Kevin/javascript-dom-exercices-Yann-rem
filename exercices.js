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

// Exercice 6 : Aventurier, voici ma boutique !

// Liste de potions
const potions = [
  {
    name: "Potion de soin",
    description:
      "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
    price: 10,
  },
  {
    name: "Potion de sommeil",
    description:
      "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
    price: 50,
  },
];

// Récupération du conteneur de la liste de potions
const potionList = document.querySelector("#liste_potions");

// Récupération du template
const potionTemplate = document.querySelector("#template_potion");

// Boucle pour insérer chaque potion dans la liste
potions.forEach((potion) => {
  // Clonage du template
  const potionElement = potionTemplate.content.cloneNode(true);

  // Modification des éléments du clone avec les données de la potion
  potionElement.querySelector(".nom_potion").textContent = potion.nom;
  potionElement.querySelector(".description_potion").textContent = potion.description;
  potionElement.querySelector(".prix_potion").textContent = potion.prix;

  // Ajout du clone dans le conteneur
  potionList.appendChild(potionElement);
});

// Exercice 7 : Plus de potions, nous avons besoin de plus de potions !

// Fonction pour ajouter une nouvelle potion dans la boutique
const addPotion = (name, description, price) => {
  // Clonage du template
  const potionElement = potionTemplate.content.cloneNode(true);

  // Modification des éléments du clone avec les données de la potion
  potionElement.querySelector(".nom_potion").textContent = name;
  potionElement.querySelector(".description_potion").textContent = description;
  potionElement.querySelector(".prix_potion").textContent = price;

  // Ajout du clone dans le conteneur
  potionList.appendChild(potionElement);
};

// Récupération du formulaire
const form = document.querySelector(".form");

// Récupération du message d'erreur
const invalidFeedback = document.querySelector(".invalid-feedback");

// Variable pour stocker le timeout de l'affichage du message d'erreur
let invalidFeedbackTimeout;

// Ajout d'un écouteur d'événement sur la soumission du formulaire
form.addEventListener("submit", (event) => {
  // Blocage des comportements par défaut
  event.preventDefault();

  // Récupération des données du formulaire avec l'objet `FormData`
  const formData = new FormData(form);

  // Récupération des valeurs des champs du formulaire avec `trim()`
  const name = formData.get("nom").trim();
  const description = formData.get("description").trim();
  const price = formData.get("prix").trim();

  // Vérification des données du formulaire
  if (!name || !description || !price) {
    // Affichage du message d'erreur
    invalidFeedback.style.display = "block";

    // Annulation d'un éventuel timeout précédent
    clearTimeout(invalidFeedbackTimeout);

    // Masquage du message d'erreur après 3 secondes
    invalidFeedbackTimeout = setTimeout(() => {
      invalidFeedback.style.display = "none";
    }, 3000);

    return;
  }

  // Ajout de la potion dans la boutique
  addPotion(name, description, price);

  // Réinitialisation du formulaire après soumission
  form.reset();
});

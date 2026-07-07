const colors = require("colors");
const express = require("express");

const app = express();
const port = 3000;
const host = "localhost";

// Permet à Express de lire le JSON envoyé avec POST et PUT
app.use(express.json());

/*
 * --------------------
 * Données de test
 * --------------------
 */
let entities = [
  { id: 1, name: "Google Pixel 6 Pro", data: { color: "Cloudy White", capacity: "128 GB" } },
  { id: 2, name: "Apple iPhone 12 Mini, 256GB, Blue", data: null },
  { id: 3, name: "Apple iPhone 12 Pro Max", data: { color: "Cloudy White", capacity: "512 GB" } },
  { id: 4, name: "Apple iPhone 11, 64GB", data: { price: 389.99, color: "Purple" } },
  { id: 5, name: "Samsung Galaxy Z Fold2", data: { price: 689.99, color: "Brown" } }
];

/*
 * --------------------
 * Fonctions utilitaires
 * --------------------
 */
function success(message, data) {
  return {
    message: message,
    data: data
  };
}

function getNextId() {
  if (entities.length === 0) {
    return 1;
  }

  return Math.max(...entities.map(entity => entity.id)) + 1;
}

/*
 * --------------------
 * Page d'accueil
 * --------------------
 */
app.get("/", (req, res) => {
  res.send("Home Page");
});

/*
 * --------------------
 * GET : récupérer toutes les entités
 * --------------------
 */
app.get("/api/entities", (req, res) => {
  const message = `Liste de toutes les entités : ${entities.length}`;
  res.status(200).json(success(message, entities));
});

/*
 * --------------------
 * GET : récupérer une entité par son ID
 * --------------------
 */
app.get("/api/entities/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const entity = entities.find(entity => entity.id === id);

  if (!entity) {
    return res.status(404).json({
      message: `Aucune entité trouvée avec l'id ${id}`
    });
  }

  const message = `Entité trouvée avec l'id ${id}`;
  res.status(200).json(success(message, entity));
});

/*
 * --------------------
 * POST : ajouter une nouvelle entité
 * --------------------
 */
app.post("/api/entities", (req, res) => {
  const newEntity = {
    id: getNextId(),
    name: req.body.name,
    data: req.body.data || null,
    created: new Date()
  };

  entities.push(newEntity);

  const message = `L'entité ${newEntity.name} a été ajoutée avec succès`;
  res.status(201).json(success(message, newEntity));
});

/*
 * --------------------
 * PUT : modifier une entité existante
 * --------------------
 */
app.put("/api/entities/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const entity = entities.find(entity => entity.id === id);

  if (!entity) {
    return res.status(404).json({
      message: `Impossible de modifier : aucune entité trouvée avec l'id ${id}`
    });
  }

  entity.name = req.body.name || entity.name;
  entity.data = req.body.data || entity.data;
  entity.updated = new Date();

  const message = `L'entité ${id} a été modifiée avec succès`;
  res.status(200).json(success(message, entity));
});

/*
 * DELETE : supprimer une entité
 */
app.delete("/api/entities/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const entity = entities.find(entity => entity.id === id);

  if (!entity) {
    return res.status(404).json({
      message: `Impossible de supprimer : aucune entité trouvée avec l'id ${id}`
    });
  }

  entities = entities.filter(entity => entity.id !== id);

  const message = `L'entité ${id} a été supprimée avec succès`;
  res.status(200).json(success(message, entity));
});

/*
 * Lancement du serveur
 */
app.listen(port, host, () => {
  console.log("------------------------------------------".red);
  console.log(`Serveur lancé sur http://${host}:${port}`.green);
  console.log("------------------------------------------".red);
});
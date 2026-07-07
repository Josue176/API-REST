# APIs-REST

Une API REST robuste construite avec Node.js et Express permettant de gérer une liste d'entités (téléphones mobiles) avec toutes les opérations CRUD (Create, Read, Update, Delete).

## 🚀 Fonctionnalités
- **GET** `/` : Page d'accueil de l'API.
- **GET** `/api/entities` : Récupère la liste complète de toutes les entités.
- **GET** `/api/entities/:id` : Récupère une entité spécifique par son identifiant unique.
- **POST** `/api/entities` : Ajoute une nouvelle entité (génération automatique de l'ID et de la date de création).
- **PUT** `/api/entities/:id` : Modifie le nom ou les données d'une entité existante (ajoute une date de mise à jour).
- **DELETE** `/api/entities/:id` : Supprime définitivement une entité de la liste.

## 🛠️ Technologies utilisées
- **Node.js** (Environnement d'exécution)
- **Express** (Framework web v5.x)
- **Colors** (Formatage et couleurs des logs dans le terminal)
- **Nodemon** (Outil de développement pour le redémarrage automatique du serveur)

## 📦 Installation et Prérequis

Assure-toi d'avoir installé [Node.js](https://nodejs.org/) sur ta machine.

1. Clone le dépôt GitHub sur ton ordinateur :
```bash
git clone [https://github.com/Josue176/API-REST.git](https://github.com/Josue176/API-REST.git)
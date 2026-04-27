# Poké-MongoDB

Tu vas construire une **API Pokémon** avec Node, Express et MongoDB. Ton API permettra d’effectuer des opérations CRUD sur les  Pokémon originaux.

## Démarrer l’application

- `npm install`
- `npm start`


### Back-end

En utilisant le code existant dans `server/`, suis les étapes ci-dessous pour construire l’API Pokémon :

|         URL          | Verbe HTTP | Body de la requête |                                  Résultat                                  |
| :------------------: | :--------: | :----------------: | :-------------------------------------------------------------------------: |
|     /api/pokemon     |    GET     |      vide          |                    Retourne le JSON de tous les Pokémon                     |
|     /api/pokemon     |    POST    |      JSON          | Crée un Pokémon et retourne le JSON du Pokémon créé                         |
|     /api/pokemon     |   DELETE   |      vide          | Supprime tous les Pokémon et retourne le JSON des éléments supprimés        |
| /api/pokemon/:number |    GET     |      vide          | Retourne le JSON d’un seul Pokémon correspondant au `number`                |
| /api/pokemon/:number |    PUT     |      JSON          | Met à jour le Pokémon correspondant au `number` et retourne le JSON mis à jour |
| /api/pokemon/:number |   DELETE   |      vide          | Supprime le Pokémon correspondant au `number` et retourne le JSON supprimé   |

- [ ] Connecter Mongoose à ta base Mongo locale dans `db/config.js`.
- [ ] Créer un modèle Pokémon dans `model/Pokemon.js` et l’enregistrer auprès de Mongoose sous la collection `Pokemon` avec les propriétés suivantes :
  - [ ] `number`, un numéro 
  - [ ] `name`, une chaîne 
  - [ ] `types`, une chaîne
  - [ ] `imageUrl`, une chaîne
- [ ] Remplir la base Mongo avec les Pokémon de `data/pokemon.json` en exécutant `npm run seed:db` (FAIRE CETTE ÉTAPE APRÈS AVOIR IMPLÉMENTÉ TON SCHEMA).
- [ ] Créer un contrôleur dans `controller/pokemonController.js` qui interagit avec ton modèle Pokémon.
- [ ] Créer un router dans `router/pokemonRouter.js` qui utilise chaque méthode du contrôleur. Gérer correctement les erreurs.
- [ ] Importer `pokemonRouter` dans `server/index.js` et l’affecter à la route appropriée.


- [ ]  Mettre en place une protection sur ton API afin d’éviter les spam de requêtes :

- [ ] Tu dois utiliser le middleware express-rate-limit pour limiter le nombre de requêtes envoyées chaque utilisateur (IP) peut envoyer maximum 5 requêtes : 

La fenêtre de temps est de 10 secondes
Si la limite est dépassée 
  la requête est bloquée
  un statut 429 (Too Many Requests) est retourné
  un message clair est affiché

Installer le package express-rate-limit
Créer un middleware de limitation
Appliquer ce middleware :
soit sur toute l’API
soit uniquement sur /api/pokemon
Tester avec plusieurs requêtes rapides

## Rate Limiting (Protection de l’API)

Dans cette partie, tu dois protéger ton API contre les abus en limitant le nombre de requêtes par utilisateur (IP).

---

## Créer un middleware de limitation avec express-rate-limit
- Configurer les règles (limite + fenêtre de temps)
- Appliquer le middleware :
 uniquement sur la route /api/pokemon
---

## Règles à respecter

- Chaque utilisateur (IP) peut envoyer **maximum 5 requêtes**
- La fenêtre de temps est de **10 secondes**
- Si la limite est dépassée :
  - la requête est bloquée  
  - un statut HTTP **429 (Too Many Requests)** est retourné  
  - un message d’erreur clair est affiché  

---

## Installation

```bash
npm install express-rate-limit
```

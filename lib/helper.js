// lib/helper.js

// Cette fonction permet d'harmoniser le format de réponse de notre API
const success = (message, data) => {
    return {
        message: message,
        data: data
    };
};

// Cette fonction calcule automatiquement le prochain ID unique disponible pour un nouvel élément
const nextID = (entities) => {
    const listIds = entities.map(e => parseInt(e.id));
    const maxId = listIds.reduce((a, b) => Math.max(a, b), 0);
    return (maxId + 1).toString();
};

module.exports = { success, nextID };
import { Database } from "bun:sqlite";

// Ouvre (ou crée) la base de données dans le dossier data
const db = new Database("./data/clients.db", { create: true });

// Création de la table
db.run(`
  CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    address TEXT,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL
  )
`);

// Insertion des 4 enregistrements
const insert = db.prepare(`
  INSERT INTO clients (name, email, address, latitude, longitude) 
  VALUES (?, ?, ?, ?, ?)
`);

insert.run('Jean Dupont', 'jean.dupont@email.com', '10 Rue de la Paix, Paris', 48.8698, 2.3323);
insert.run('Marie Curie', 'marie.curie@email.com', '1 Rue Pierre et Marie Curie, Paris', 48.8441, 2.3446);
insert.run('Alan Turing', 'alan.turing@email.com', 'Bletchley Park, UK', 51.9977, -0.7407);
insert.run('Ada Lovelace', 'ada.lovelace@email.com', 'Londres, UK', 51.5074, -0.1278);

console.log("Base de données ./data/clients.db créée et peuplée avec succès !");
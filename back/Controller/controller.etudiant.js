/** @format */

const db = require("../Config/db");

//creation des etudiants

const AjouterEtudiant = (req, res) => {
  const {
    matricule_eleves,
    nom_etudiant,
    prenom_etudiant,
    date_naissance,
    address,
    telephone,
    classe_id,
    sexe_id,
  } = req.body;

  db.query(
    "INSERT INTO Etudiant(matricule_eleves, nom_etudiant,prenom_etudiant, date_naissance, address, telephone, classe_id, sexe_id) VALUES(?,?,?,?,?,?,?,?)",
    [
      matricule_eleves,
      nom_etudiant,
      prenom_etudiant,
      date_naissance,
      address,
      telephone,
      classe_id,
      sexe_id,
    ],
    (err, resultat) => {
      if (!err) {
        return res.status(201).json({
          message: "Etudiant crée avec succès",
          resultat: resultat,
        });
      } else {
        res.status(500).json({
          message: "Il y a une erreur sur la création etudiant",
          resultat: err,
        });
      }
    },
  );
};

const AfficherEtudiant = (req, res) => {
  db.query("SELECT*FROM vue_etudiant", (err, resultat) => {
    if (!err) {
      return res.status(200).json(resultat);
    } else {
      res.status(500).json(err);
    }
  });
};

const AfficherEtudiantById = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT*FROM vue_etudiant WHERE id_etudiant=?",
    [id],
    (err, resultat) => {
      if (!err) {
        return res.status(200).json(resultat);
      } else {
        res.status(500).json(err);
      }
    },
  );
};

const DeleteEtudiant = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM Etudiant WHERE id_etudiant=?",
    [id],
    (err, resultat) => {
      if (!err) {
        return res.status(200).json("etudiant supprimé avec succès!");
      } else {
        res.status(500).json(err);
      }
    },
  );
};

module.exports = {
  AjouterEtudiant,
  AfficherEtudiant,
  AfficherEtudiantById,
  DeleteEtudiant,
};

/** @format */

const db = require("../Config/db");

const AjouterMatiere = (req, res) => {
  const { nom_matiere, coeff } = req.body;

  db.query(
    "INSERT INTO Matiere (nom_matiere, coeff) VALUES (?,?)",
    [nom_matiere, coeff],
    (err, resultat) => {
      if (!err) {
        return res.status(201).json({
          message: "matière crée avec succès",
          resultat: resultat,
        });
      }
    },
  );
};

const AfficherMatiere = (req, res) => {
  db.query("SELECT*FROM Matiere", (err, resultat) => {
    if (!err) {
      return res.status(200).json({
        resultat: resultat,
      });
    } else {
      res.status(500).json({
        message: "Il y a une erreur sur l'affichage matiere",
        erreur: err,
      });
    }
  });
};

const AfficherMatiereById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT*FROM Matiere WHERE id=?", [id], (err, resultat) => {
    if (!err) {
      return res.status(200).json(resultat);
    } else {
      res.status(500).json({
        message: "Il y a une erreur sur Affichage de matière by id",
        erreur: err,
      });
    }
  });
};

const UpdateMatiere = (req, res) => {
  const { nom_matiere, coeff } = req.body;
  const { id } = req.params;

  if (!nom_matiere || !coeff) {
    return res.status(404).json("Le champ doit remplir");
  }

  db.query(
    "UPDATE Matiere SET nom_matiere =?, coeff = ? WHERE id=?",
    [nom_matiere, coeff, id],
    (err, resultat) => {
      if (!err) {
        return res.status(200).json({
          message: "matière modifié",
          resultat: resultat,
        });
      } else {
        res.status(500).json({ message: err.message });
      }
    },
  );
};

const DeleteMatiere = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM Matiere WHERE id=?", [id], (err) => {
    if (!err) {
      return res.status(200).json({
        message: "matière supprimés",
      });
    } else {
      res.status(500).json(err);
    }
  });
};

module.exports = {
  AfficherMatiere,
  AfficherMatiereById,
  AjouterMatiere,
  UpdateMatiere,
  DeleteMatiere,
};

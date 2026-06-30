/** @format */

const db = require("../Config/db");

const AjouterClasses = (req, res) => {
  const { nom_classe } = req.body;
  db.query(
    "INSERT INTO classes (nom_classe) VALUES (?) ",
    [nom_classe],
    (err, resultat) => {
      if (!err) {
        return res.status(201).json(resultat);
      } else {
        res.status(500).json("Erreur dans la création classes:", err);
      }
    },
  );
};

const AfficherClasses = (req, res) => {
  db.query("SELECT*FROM classes", (err, resultat) => {
    if (!err) {
      return res.status(200).json(resultat);
    } else {
      res.status(500).json("Il y a une erreur sur affichage:", err);
    }
  });
};

const AfficherClassesById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT*FROM classes WHERE id=?", [id], (err, resultat) => {
    if (!err) {
      return res.status(200).json(resultat);
    } else {
      res.status(500).json({
        message: "Il y a une erreur sur affichage",
        erreur: err,
      });
    }
  });
};

const ModifierClasses = (req, res) => {
  const { id } = req.params;
  const { nom_classe } = req.body;

  if (!nom_classe) {
    res.statu(404).json("Le champ doit compléter!");
  }

  db.query(
    "UPDATE classes SET nom_classe = ? WHERE id = ?",
    [nom_classe, id],
    (err, resultat) => {
      if (!err) {
        return res.status(200).json({
          message: "Classe modifié!",
          resultat: resultat,
        });
      } else {
        res.status(500).json({
          message: "Il y a une erreur sur la modification",
          erreur: err,
        });
      }
    },
  );
};

const DeleteClasses = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM classes WHERE id=?", [id], (err, resultat) => {
    if (!err) {
      return res.status(200).json({
        message: "classe supprimés",
      });
    } else {
      res.status(404).json({ message: err.message });
    }
  });
};

module.exports = {
  AfficherClasses,
  AfficherClassesById,
  AjouterClasses,
  ModifierClasses,
  DeleteClasses,
};

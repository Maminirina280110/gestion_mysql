/** @format */

const db = require("../Config/db");

const AjouterProf = (req, res) => {
  const { nom_prof, prenom_prof, tel_pro, specialite } = req.body;

  db.query(
    "INSERT INTO Professeur (nom_prof, prenom_prof, tel_pro, specialite) VALUES (?,?,?,?)",
    [nom_prof, prenom_prof, tel_pro, specialite],
    (err, resultat) => {
      if (!err) {
        return res.status(201).json({
          message: "Professeur crée avec succès",
          resultat: resultat,
        });
      } else {
        res.status(500).json({
          message: "erreur lors de la création professeur",
          erreur: err,
        });
      }
    },
  );
};

const AfficherProf = (req, res) => {
  db.query("SELECT*FROM Professeur", (err, resultat) => {
    if (!err) {
      return res.status(200).json(resultat);
    } else {
      res.status(500).json({
        message: "erreur lors de la création professeur",
        erreur: err,
      });
    }
  });
};

const AfficherProfById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT*FROM Professeur WHERE id_prof=?", [id], (err, resultat) => {
    if (!err) {
      return res.status(200).json(resultat);
    } else {
      res.status(500).json({
        message: "erreur sur afficher par id",
        err: err,
      });
    }
  });
};

const UpdateProf = (req, res) => {
  const { id } = req.params;
  const { nom_prof, prenom_prof, tel_pro, specialite } = req.body;

  db.query(
    "Update Professeur SET nom_prof = ?, prenom_prof = ?, tel_pro = ?, specialite = ? WHERE id_prof =? ",
    [nom_prof, prenom_prof, tel_pro, specialite, id],
    (err, resultat) => {
      if (!err) {
        return res.status(200).json({
          message: "Professeur modifié",
          resultat: resultat,
        });
      } else {
        return res.status(500).json({
          message: "Il y a une problème sur la modification",
          err: err,
        });
      }
    },
  );
};
module.exports = { AfficherProf, AjouterProf, AfficherProfById, UpdateProf };

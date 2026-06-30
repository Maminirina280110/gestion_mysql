/** @format */

const db = require("../Config/db");

//create edt

const AjouterEdt = (req, res) => {
  const { jour, heures, classe_id, matiere_id, prof_id } = req.body;

  db.query(
    "INSERT INTO EDT(jour, heures, classe_id, matiere_id, prof_id) VALUES (?,?,?,?,?)",
    [jour, heures, classe_id, matiere_id, prof_id],
    (err, resultat) => {
      if (!err) {
        return res.status(201).json({
          message: "Vous avez ajouté une emploi du temps!",
          resultat: resultat,
        });
      } else {
        res.status(500).json(err);
      }
    },
  );
};

const AfficherEDT = (req, res) => {
  db.query("SELECT*FROM vue_edt", (err, resultat) => {
    if (!err) {
      return res.status(200).json(resultat);
    } else {
      res.status(500).json(err);
    }
  });
};

const AfficherEDTById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT*FROM vue_edt WHERE id=? ", [id], (err, resultat) => {
    if (!err) {
      return res.status(200).json(resultat);
    } else {
      res.status(500).json(err);
    }
  });
};

module.exports = { AjouterEdt, AfficherEDT, AfficherEDTById };

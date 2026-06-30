/** @format */

const db = require("../Config/db");

//create sex

const AjouterSexe = (req, res) => {
  const { lib_sexe } = req.body;

  db.query(
    "INSERT INTO Sexe (lib_sexe) VALUES (?)",
    [lib_sexe],
    (err, resultat) => {
      if (!err) {
        return res.status(201).json({
          message: "Vous avez ajouté un sexe",
          resultat: resultat,
        });
      } else {
        res.status(500).json({
          message: "Il y a une message lors de la créatiion",
          resultat: err,
        });
      }
    },
  );
};

//get sex

const AfficherSexe = (req, res) => {
  db.query("SELECT*FROM Sexe", (err, resultat) => {
    if (!err) {
      return res.status(200).json({
        message: "Listes des sexes",
        resultat: resultat,
      });
    } else {
      res.status(404).json({
        message: "Il y a une erreur lors de l'affichage",
        resultat: err,
      });
    }
  });
};

// get by Id

const GetSexeById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM Sexe WHERE id=?", [id], (err, resultat) => {
    if (!err) {
      return res.status(200).json({
        message: `Sexe affiché a une id: ${id}`,
        resultat: resultat,
      });
    } else {
      res.status(500).json({
        message: "Il y a une erreur sur le getSexeById",
        resultat: resultat,
      });
    }
  });
};
module.exports = {
  AjouterSexe,
  AfficherSexe,
  GetSexeById,
};

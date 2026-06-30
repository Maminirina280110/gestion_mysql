/** @format */

const db = require("../Config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Register = async (req, res) => {
  const { nom, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO Users(nom, email, password) VALUES (?,?,?)",
      [nom, email, hashedPassword],
      (err, resultat) => {
        if (err) {
          return res.status(500).json({ message: "Server error" });
        } else {
          return res.status(200).json("User crée avec succès!");
        }
      },
    );
  } catch (error) {
    console.error(error);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    db.query(
      "SELECT * FROM Users WHERE email=?",
      [email],
      async (err, resultat) => {
        if (err) {
          return res.status(500).json({ message: "Server error" });
        }

        if (resultat.length === 0) {
          return res.status(404).json({
            message: "Utilisateur non trouvé!",
          });
        }

        const user = resultat[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res.status(401).json({
            message: "Mot de passe incorrect",
          });
        }

        const token = jwt.sign(
          {
            id: user.id,
            nom: user.nom,
            email: user.email,
          },
          "SECRET_KEY",
          {
            expiresIn: "1h",
          },
        );

        return res.status(200).json({
          message: "Connexion réussie",
          token,
        });
      },
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Erreur serveur",
    });
  }
};
module.exports = { Login, Register };

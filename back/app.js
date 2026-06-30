/** @format */

const express = require("express");
const app = express();

require("dotenv").config();
require("./Config/db");
const PORT = process.env.PORT || 3000;

const routesClasses = require("./Routes/routes.classe");
const routesMatieres = require("./Routes/routes.matiere");
const routesProf = require("./Routes/routes.prof");
const routesSexe = require("./Routes/routes.sexe");
const routesEdt = require("./Routes/routes.edt");
const routesEtudiant = require("./Routes/routes.etudiant");
const routesJwt = require("./Routes/routes.jwt");

app.use(express.json());

app.use("/api", routesClasses);
app.use("/api", routesMatieres);
app.use("/api", routesProf);
app.use("/api", routesSexe);
app.use("/api", routesEdt);
app.use("/api", routesEtudiant);
app.use("/api", routesJwt);

app.listen(PORT, () => {
  console.log(`Serveur est lancé sur http://localhost:${PORT}/api/classe`);
});

require("dotenv").config();
const app = require("./src/app")

const port = process.env.PORT || 3001;

app.listen(port);

app.get("/", (req, res) => {
    res.send("La pagina de Inicio")
});

console.log(`Listen on port ${port}`);
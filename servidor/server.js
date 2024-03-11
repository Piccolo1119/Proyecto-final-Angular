const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 204,
  methods: "GET, POST, DELETE",
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/teatros", (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const perPage = parseInt(req.query.perPage) || 10;

  fs.readFile("teatros.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const jsonData = JSON.parse(data);

    const start = page * perPage;
    const end = start + perPage;

    const result = jsonData.teatros.slice(start, end);

    res.status(200).json({
      teatros: result,
      total: jsonData.teatros.length,
      page,
      perPage,
      totalPages: Math.ceil(jsonData.teatros.length / perPage),
    });
  });
});

app.post("/teatros", (req, res) => {
  const { nombre, direccion } = req.body;

  fs.readFile("teatros.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    const jsonData = JSON.parse(data);

    const maxId = jsonData.teatros.reduce(
      (max, teatro) => Math.max(max, teatro.id),
      0
    );
    const newTeatro = {
      id: maxId + 1,
      nombre,
      direccion
    }

    jsonData.teatros.push(newTeatro);

    fs.writeFile("teatros.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(201).json(newTeatro);
    });
  });
});

app.delete("/teatros/:id", (req, res) => {
  const id = parseInt(req.params.id);

  fs.readFile("teatros.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const jsonData = JSON.parse(data);
    const teatroIndex = jsonData.teatros.findIndex(teatro => teatro.id === id);

    if (teatroIndex === -1) {
      res.status(404).json({ message: "Teatro no encontrado" });
      return;
    }

    jsonData.teatros.splice(teatroIndex, 1);
    
    jsonData.teatros = jsonData.teatros.map((teatro, index) => {
      return { ...teatro, id: index + 1 };
    });

    fs.writeFile("teatros.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }
      res.status(200).json({ message: "Teatro eliminado con éxito" });
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

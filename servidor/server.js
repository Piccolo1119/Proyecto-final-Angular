
//Se importan los módulos necesarios: express para crear el servidor, fs para trabajar
// con el sistema de archivos y cors para habilitar el intercambio de recursos entre distintos dominios.

const express = require("express");
const fs = require("fs");
const cors = require("cors");
//Se crea una instancia de Express llamada app.

const app = express();
//Se define el puerto en el que el servidor escuchará las solicitudes, en este caso, el puerto 3000.

const port = 3000;
//Se configura el middleware cors para permitir solicitudes solo desde http://localhost:4200 y definir los métodos permitidos como GET, POST y DELETE.

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 204,
  methods: "GET, POST, DELETE",
};

//Se configura el middleware express.json() para analizar el cuerpo de las solicitudes como objetos JSON.

app.use(cors(corsOptions));
app.use(express.json());

//GET /teatros: Devuelve una lista paginada de teatros del archivo teatros.json. Permite la paginación especificando los parámetros page y perPage.

app.get("/teatros", (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const perPage = parseInt(req.query.perPage) || 10;

  //Para las solicitudes GET /teatros, se lee el archivo teatros.json, se extraen los teatros necesarios según la paginación
  //y se devuelve la respuesta con la información solicitada.
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

//POST /teatros: Agrega un nuevo teatro al archivo teatros.json utilizando los datos proporcionados en el cuerpo de la solicitud.

app.post("/teatros", (req, res) => {
  const { nombre, direccion } = req.body;

  //Para las solicitudes POST /teatros, se lee el archivo teatros.json, se agrega un nuevo teatro con el ID incrementado al máximo encontrado más 1,
  // y se guarda la información actualizada en el archivo.

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

//DELETE /teatros/:id: Elimina un teatro específico según su ID proporcionado en la URL.

app.delete("/teatros/:id", (req, res) => {
  const id = parseInt(req.params.id);

  //Para las solicitudes DELETE /teatros/:id, se lee el archivo teatros.json, se busca el teatro con el ID proporcionado,
  // se elimina del arreglo de teatros y se guarda la información actualizada en el archivo.

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

//Se inicia el servidor y se hace que escuche las solicitudes en el puerto especificado.
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

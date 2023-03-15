const express = require("express");
const app = express();
const axios = require("axios");
const { users } = require("./endpoints");
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userHandlers = users({ axios });
app.get("/", userHandlers.get);

app.post("/", userHandlers.post);

app.put("/:id", userHandlers.put);

app.delete("/:id", userHandlers.delete);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

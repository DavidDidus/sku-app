import express from "express"
import path from "path"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.resolve(".")))

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT)
})
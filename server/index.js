import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import propertyRouter from "./routes/property.routes.js"
import connectDb from "./mongodb/connect.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: "50mb" }))

app.get("/", (req, res) => {
  res.send("Welcome Jaaa")
})

app.use("/api/v1/users", userRouter)
app.use("/api/v1/properties", propertyRouter)

const startServer = async () => {
  try {
    connectDb(process.env.MONGO_URL)
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

startServer()

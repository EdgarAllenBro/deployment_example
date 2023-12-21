import express from 'express'
import ViteExpress from "vite-express"
import cors from "cors"
const app =  express()
const port = 8000
app.use(express.json())
app.use(cors())



ViteExpress.listen(app,port,()=>{
    console.log("server live on port " + port)
})
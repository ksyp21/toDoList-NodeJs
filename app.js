const express = require('express')
const { QueryTypes } = require('sequelize')
const { lists, sequelize } = require('./model/index')
const { renderList, addTask, allList, deleteList } = require('./controller/listController')

const app = express()

//routes
const listRoute = require("./routes/listRoute")


// telling the nodejs to set view-engine to ejs
app.set('view engine', 'ejs')

// database connection 
require("./model/index")


// form bata data aairaxa parse gara or handle gar vaneko ho
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("", listRoute)

app.listen(3000, () => {
    console.log("NodeJs project has started at port 3000")
})
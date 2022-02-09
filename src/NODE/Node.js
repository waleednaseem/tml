const express = require('express')
const App = express()
const port = 4000
const ctrl = require('./Sequelize/Controllers')
const cors = require('cors')

App.use(cors({
    origin:'*'
}))

App.use(express.urlencoded({ extended: true }));
App.use(express.json())

App.post('/Register', ctrl.makeUser)
App.post('/login',ctrl.Login)
App.post('/insertdata',ctrl.insertData)
App.post('/location',ctrl.findCountry)
App.post('/ShowAllData',ctrl.AllData)
App.post('/SearchByConsignee',ctrl.searchConsignee)


App.listen(port, () => {
    console.log('node connected')
})
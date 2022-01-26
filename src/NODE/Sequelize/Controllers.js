const db = require('./Model')
const jwt = require('jsonwebtoken')
// const iplocate = require("node-iplocate");
const geoip = require('geoip-lite')
const ip = require('ip')
const dbip = require('dbip')
const dataInsert = require('./Model/dataInsert')



const User = db.User
const userData = db.userData
const makeUser = async (req, res) => {
    const body = req.body
    await User.create(body)
    res.send('inserted')
}
const Login = async (req, res) => {
    const credentials = { Username: req.body.Username, Password: req.body.Password }
    const login = await User.findOne({ where: credentials })

    if (login) {
        jwt.sign({ user: credentials }, 'secretKey', (err, token) => {

            res.status(200).json({ msg: 'Logged in', token })
        })

    }
    else {
        res.json({ msg: 'Wrong credentials ' })
    }
}

const insertData = async (req, res) => {
    

    const data = {
        order_from_country: req.body.order_from_country,
        shipAddr: req.body.shipAddr,
        shipTell: req.body.shipTell,
        shipEmail: req.body.shipEmail,
        shipPic: req.body.shipPic,
        consAddr: req.body.consAddr,
        consTell: req.body.consTell,
        consEmail: req.body.consEmail,
        consPic: req.body.consPic,
        competition: req.body.competition,
        volume: req.body.volume,
        port_of_loading: req.body.port_of_loading,
        port_of_discharge: req.body.port_of_discharge,
        final_destination: req.body.final_destination,
        comodities: req.body.comodities,
        freight_term: req.body.freight_term,
        remark: req.body.remark,
    }
    const Cdata = {
        // order_from_country: req.body.order_from_country,
        shipAddr: req.body.shipAddr,
        shipTell: req.body.shipTell,
        shipEmail: req.body.shipEmail,
        shipPic: req.body.shipPic,
        consAddr: req.body.consAddr,
        consTell: req.body.consTell,
        consEmail: req.body.consEmail,
        consPic: req.body.consPic,
        competition: req.body.competition,
        volume: req.body.volume,
        port_of_loading: req.body.port_of_loading,
        port_of_discharge: req.body.port_of_discharge,
        final_destination: req.body.final_destination,
        comodities: req.body.comodities,
        freight_term: req.body.freight_term,
        remark: req.body.remark,
    }

    console.log(Cdata);
    
    const insertDatas=await userData.findOne({where:Cdata})

    if(insertDatas){
        res.json(`Data is already inserted from ${insertDatas.order_from_country} at ${insertDatas.createdAt}`)
    }else{
        await userData.create(data)
        res.status(200).json({msg:'Data inserted', data})
    }
    // res.send(insertDatas)
}
module.exports = {
    makeUser,
    Login,
    insertData
}
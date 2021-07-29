const fncUtils = require('../utils/fnc.utils');
const pageModel = require('../models/pages.mysql.model');
const userModel = require('../models/usracss.mysql.model');

const pagesControl = {
    home:(req, res)=>{
        res.status(200).json('El Home')
    },
    findWrdAllEvnt: async (req, res)=>{
        
        const word = {
            keyTipoE: req.body.wordSearch,
            keyCiudad: req.body.wordSearch,
            keyNmbE: req.body.wordSearch,
            keyPrec: req.body.wordSearch,
            keyDscrpt: req.body.wordSearch
        }
        const dataWord = Object.values(word)
        try{
            let data = await pageModel.allWords(dataWord)
            res.status(200).json(data)
            data = [{ codeError:"Error en consultar los datos", numError: -999 }]
        }catch(err){
            console.log(err)
        }
    },
    findDestacados: async(req,res) =>{
        try{
            let data = await pageModel.destEvents()
            res.status(200).json(data)
        }catch(err){   
            console.log(err)
            data = [{ codeError:"Error en consultar los datos", numError: -999 }]
        }
    },
    getDetailEvent: async(req, res )=>{
        const obj = {
            id: req.body.id_evento
        }

        const dataWord = Object.values(obj)

        try{
            let data = await pageModel.detailEvent(dataWord)
            res.status(200).json(data)
        }catch(err){
            console.log(err)
            data = [{ codeError:"Error en consultar los datos", numError: -999 }]
        }
    },
    setComments: async(req,res) => {
        const date = new Date(Date.now())
        const obj= {
            id_user: req.body.id_user,
            id_evento: req.body.id_evento,
            comentario: req.body.comentario,
            //fecha: date.toISOString()
            fecha:new Date().toISOString().slice(0, 10)
        }
        
        const dataComment = Object.values(obj)
        try{
            let data = await pageModel.insertComment(dataComment)
            res.status(200).json(data)
        }catch(err){
            console.log(err)
            data = [{ codeError:"Error en consultar los datos", numError: -999 }]

        }
    },
    getComments: async(req,res) => {
        
        const obj= {
            id_evento: req.body.id_evento, 
        }
        
        const dataComment = Object.values(obj)
        try{
            let data = await pageModel.callComment(dataComment)
            res.status(200).json(data)
        }catch(err){
            console.log(err)
            data = [{ codeError:"Error en consultar los datos", numError: -999 }]

        }
    },
    getUser: async(req,res) => {
        
        const obj= {
            id_user: req.body.id_user, 
        }
        
        const dataComment = Object.values(obj)
        try{
            let data = await userModel.getRowUser(dataComment)
            res.status(200).json(data)
        }catch(err){
            console.log(err)
            data = [{ codeError:"Error en consultar los datos", numError: -999 }]

        }
    }

}

module.exports = pagesControl;
const fncUtils = require('../utils/fnc.utils');
const pageModel = require('../models/pages.mysql.model')

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
    }

}

module.exports = pagesControl;
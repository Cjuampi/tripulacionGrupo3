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
            console.log('el data:',data)
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = pagesControl;
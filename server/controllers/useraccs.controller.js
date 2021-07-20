const utilsUserAccs = require('../utils/useraccss.utils')
const userAccess = {
    postLogin:(req, res)=>{
        console.log(req)
        res.status(200).json('postLogin')
    },
    postSingUp:async (req, res)=>{
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        let data = await utilsUserAccs.existUser(user.email)

        if(data.errorCatch === true){
            //error en el server
            res.status(500).json(data)
        }else if (data !== undefined && data.length != 0){
            //existe el usuario
            res.status(200).json(data)
        }else{
            //no existe el usuario (crear el usuario)
            let data = await utilsUserAccs.createUser(user)
            if(data !== undefined){
                //usuario creado
                res.status(201).json(data)
            }else{
                //error al crear el usuario
                let data = {'errorCatch':true, 'message': 'Error en el servidor'}
                res.status(500).json(data)
            }
        }
    }
}

module.exports = userAccess;
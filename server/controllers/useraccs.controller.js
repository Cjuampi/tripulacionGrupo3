const fncUtils = require('../utils/fnc.utils');
const userModel = require('../models/usracss.mysql.model')
var bcrypt = require('bcryptjs');



const userAccs = {
    postLogin: async (req, res) => {
        /* console.log(req) */
        const user = {
            email: req.body.userEmail,
            password: req.body.userPassword,
        };
        try {
            const data = await userModel.getRowUser(req.body.userEmail)
            
            if (data == undefined) {
                res.status(403).json({ type: 'Error', message: 'Usuario no registrado, registrate para continuar' })
            } else {
                if (data.hasOwnProperty('numError')) {
                    res.status(500).json({ type: 'Error', message: 'No se puede ejecutar la acción, intentelo más tarde' })
                } else {
                    if (data.password == undefined) {
                        res.status(403).json({ type: 'Error', message: 'Usuario no registrado, registrate para continuar' })
                    } else {
                        /* console.log('data',data.password) */
                        bcrypt.compare(user.password, data.password, function (err, resp) {
                            if (err) {
                                res.status(500).json({ type: 'Error', message: 'No se puede ejecutar la accíon de autenticar, intentelo más tarde' })
                            } else {
                                if (resp) {
                                    let newToken = fncUtils.generateToken(user.email)
                                    let updateResult = async () => {
                                        let result = await userModel.insertNewToken(user.email, newToken)
                                        console.log(result)
                                        return result
                                    }
                                    let updateToken = updateResult()
                                    try {
                                        if (updateToken == undefined) {
                                            console.log('undefined: ', updateToken)
                                            res.status(403).json({ type: 'Error', message: 'No se registra la autenticacion, intentolo más tarde' })
                                        } else {
                                            if (updateToken.hasOwnProperty('numError')) {
                                                console.log('numError: ', updateToken)
                                                res.status(500).json({ type: 'Error', message: 'No se puede escribir la autenticacion, intentelo más tarde' })
                                            } else {
                                                
                                                /* res.cookie('token', newToken) */
                                                res.status(200).cookie('token', newToken).json({ type: 'Ok', message: 'Acceso'})
                                                /* data.admin==0?res.cookie('token',newToken).status(200).json('dashboard'):res.cookie('token',newToken).status(200).json('admin') */
                                            }
                                        }
                                    } catch (err) {
                                        console.log(err)
                                        res.status(500).json({ type: 'Error', message: 'Catch No se puede ejecutar la accíon de autenticar, intentelo de nuevo' })
                                    }
                                } else {
                                    res.status(403).json({ type: 'Error', message: 'Password incorrecta' })
                                }
                            }
                        });
                    }
                }
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({ type: 'Error', message: 'Ocurrio un error inesperado!' })
        }
    },
    postSingUp: async (req, res) => {
        const user = {
            name: req.body.userName,
            email: req.body.userEmail,
            password: fncUtils.cryptoW(req.body.userPassword),
            token: fncUtils.generateToken(req.body.userEmail)
        }
        const dataUser = Object.values(user)
        try {
            const data = await userModel.existUser(req.body.userEmail)
            if (data == undefined) {
                try {
                    const data = await userModel.createUser(dataUser);
                    if (data.affectedRows == 1) {
                        res.status(201).cookie('token', user.token).json({ type: 'Ok', message: 'Usuario creado correctamente'})
                    } else {
                        res.status(403).json({ type: 'Error', message: 'No se puede crear el usuario, inténtelo más tarde.'})
                    }
                } catch (error) {
                    res.status(500).json({ type: 'Error', message: 'El usuario no fue creado'})
                }
            } else {
                if (data.hasOwnProperty('numError')) {
                    res.status(500).json({ type: 'Error', message: 'No se puede ejecutar la acción, intentelo más tarde'})
                } else {
                    res.status(403).json({ type: 'Error', message: 'Usuario ya registrado, inicia sesión para continuar'})
                }
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({ type: 'Error', message: 'Ocurrio un error inesperado :('})

        }
    }
}

module.exports = userAccs;
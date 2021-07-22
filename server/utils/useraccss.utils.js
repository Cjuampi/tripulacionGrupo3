const Usermodel = require('../models/user.schema')
const utilUserAccs = {
    existUser: async(email)=>{
        let resutl;
        try {
            result = await Usermodel.find({email})
            /* console.log('resutl existeUser ',result) */
        } catch (err) {
            result={'errorCatch':true, 'message': 'Error en el servidor'}
            console.log('error :', err)
        }
        return result;
    },
    createUser: async(user) =>{
        /* console.log(user) */

        let result;

        const userSingup = new Usermodel({
            name: user.name,
            email: user.email,
            password:user.password
        })

        try{
            result= await userSingup.save()
            /* console.log(result) */
        }catch(err){
            console.log(err)
            result={'errorCatch':true, 'message': 'Error en el servidor'}
        }
        return result;
    }
}

module.exports = utilUserAccs;
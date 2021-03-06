const pool = require('../config/msql.cnx')

const userMySQL = {
    createUser : async(data) =>{
        let conn;
        let result;
        try {
            conn = await pool.getConnection();
            let sqlQuery = ("INSERT INTO usuarios (nombre, email, password, token) value (?,?,?,?)")
            result = await conn.query(sqlQuery,data);
            /* console.log('result',result); */
        } catch (err) {
            result = {codeError: err.code, numError: err.errno}
            console.log(err)
        } finally {
            if (conn) conn.end();
        }
        return result
    },
    existUser : async (email) =>{
        let conn;
        let result;
        try {
            conn = await pool.getConnection();
            let sqlQuery = ("select email from usuarios where email=?")
            result = await conn.query(sqlQuery,email);
            /* console.log('resultUserExiste',result); */
            result = result[0]
            /* console.log('array0',result); */
        } catch (err) {
            result = {codeError: err.code, numError: err.errno}
            console.log(result)
        } finally {
            if (conn) conn.end();
        }
        return result
    },
    getRowUser: async(email)=>{
        let conn;
        let result;
        try {
            conn = await pool.getConnection();
            let sqlQuery = ("select * from usuarios where email=?")
            result = await conn.query(sqlQuery,email);
            result = result[0]
            /* console.log('result User Existe',result); */
        } catch (err) {
            result = {codeError: err.code, numError: err.errno}
            /* console.log('result de catch',result) */
        } finally {
            if (conn) conn.end();
        }
        return result      
    },
    insertNewToken: async(email,token)=>{
        let conn;
        let result;
        try {
            conn = await pool.getConnection();
            let sqlQuery = ("update usuarios set token=? where email=?")
            result = await conn.query(sqlQuery,[token,email]);
            /* console.log(result) */
        } catch (err) {
            console.log(err)
            result = {codeError: err.code, numError: err.errno}
            /* console.log(result)  */
        } finally {
            if (conn) conn.end();
        }
        return result  
    }
}

module.exports = userMySQL
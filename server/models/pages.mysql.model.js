const pool = require('../config/msql.cnx')

const pageMySQL = {
    allWords: async (data) => {
        let conn;
        let result;
        try {
            conn = await pool.getConnection();
            /* let sqlQuery = ("INSERT INTO usuarios (nombre, email, password, token) value (?,?,?,?)") */
            let sqlQuery = ("SELECT id_evento, nombre_evento, fecha_inicio, fecha_fin, precio, imagen_url from evento where tipo_evento regexp ? OR ciudad regexp ? or nombre_evento regexp ? or precio regexp ? or descripcion regexp ?")
            result = await conn.query(sqlQuery, data);
            /* console.log('result',result[0]); */
        } catch (err) {
            result = [{ codeError: err.code, numError: err.errno }]
            console.log(err)
        } finally {
            if (conn) conn.end();
        }
        return result
    }
}

module.exports = pageMySQL
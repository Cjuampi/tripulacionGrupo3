const pool = require('../config/msql.cnx')

const pageMySQL = {
    allWords: async (data) => {
        let conn;
        let result;
        try {
            conn = await pool.getConnection();
            let sqlQuery = ("SELECT id_evento, nombre_evento, descripcion,fecha_inicio, fecha_fin, precio, imagen_url, lat, lon from evento where tipo_evento regexp ? OR ciudad regexp ? or nombre_evento regexp ? or precio regexp ? or descripcion regexp ?")
            result = await conn.query(sqlQuery, data);
            /* console.log('result',result[0]); */
        } catch (err) {
            result = [{ codeError: err.code, numError: err.errno }]
            console.log(err)
        } finally {
            if (conn) conn.end();
        }
        return result
    },
    destEvents: async (data) => {
        let conn;
        let result;
        try {
            conn = await pool.getConnection();
            let sqlQuery = ("SELECT id_evento, nombre_evento, descripcion,fecha_inicio, fecha_fin, precio, imagen_url FROM evento as A INNER JOIN (SELECT DISTINCT tipo_evento as tipo, min(fecha_inicio) as fecha, min(id_evento) as id FROM evento GROUP BY tipo) as B ON A.tipo_evento = B.tipo AND A.fecha_inicio = B.fecha AND A.id_evento = B.id ORDER BY fecha_inicio")
            result = await conn.query(sqlQuery, data);
        } catch (err) {
            result = [{ codeError: err.code, numError: err.errno }]
            console.log(err)
        } finally {
            if (conn) conn.end();
        }
        return result
    },
    detailEvent:async(data) =>{
        let conn;
        let result;
        try {
            conn = await pool.getConnection();
            let sqlQuery = ("SELECT id_evento, tipo_evento, nombre_evento, descripcion, direccion, lon, lat, contacto, accesibilidad, precio, fecha_inicio, fecha_fin, imagen_url, ciudad FROM evento where id_evento = ? ")
            result = await conn.query(sqlQuery, data);
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
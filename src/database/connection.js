const sql = require('mssql');

const config = {
    user: 'moneda',
    password: '1234',
    server: '127.0.0.1',
    database: 'LA_MONEDITA27',
    options: {
        encrypt: true, // Habilitar encriptación SSL
        trustServerCertificate: true, // Desactivar verificación de certificado (solo para pruebas)
    },
};

const getConection= async () =>{
    try{
        const pool = await sql.connect(config);
        return pool;
    }catch(error){
        console.log(error);
    }
    
}

module.exports = getConection;
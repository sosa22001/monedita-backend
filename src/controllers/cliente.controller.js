const express = require('express');
const getConection = require('../database/connection')
const sql = require('mssql');
export const stephany = () =>{

}

exports.crearClientes = async (req, res) => {
    const info = req.body;
    try{
        const pool = await getConection();
        const query = 'INSERT INTO clientes (DNI,id_ocupacion,id_tipo_cliente) values(@DNI,@id_ocupacion,@id_tipo_cliente)'
        const result = await pool.request()
            .input('DNI',sql.VarChar, info.DNI)
            .input('id_ocupacion',sql.Int, info.id_ocupacion)
            .input('id_tipo_cliente',sql.Int, info.id_tipo_cliente)
            .query(query)

        res.send("se creó el cliente verificar en la BD");
    }catch(error){
        res.send(error);
    }
    
};


exports.obtenerClientes = async (req,res)=>{
    const pool = await getConection();
    const result = await pool.request().query('select * from clientes');
    res.send(result.recordset);
};

exports.eliminarCliente = async (req,res)=>{

}
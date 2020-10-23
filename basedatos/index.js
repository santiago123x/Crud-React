const keys = require('./keys/keys.js')
const { Pool } = require('pg');
const cors = require("cors");
const express = require("express")
const router = express();


const pool = new Pool({
    connectionString:keys.posgresqlURI,
    ssl: {
      rejectUnauthorized: false
    }
  });
  

//middleware
router.use(cors());
router.use(express.json());


//crear todo





  router.post('/pacientes', async(req,res)=>{
    try{
        const { nombre, apellido, numid } = req.body;
        newTodo = await pool.query(
        `INSERT INTO pacientes(nombre, apellido, numid) VALUES('${nombre}','${apellido}','${numid}')`);
        res.json("INSERTADO 7W7");
    }catch(e){
        console.log(e);
    }
      
  });

 


router.delete('/pacientes/:numid', async (req,res)=>{
    try{
        const { numid } = req.params;
        await pool.query(`DELETE FROM pacientes WHERE numid = '${numid}'`);
        res.json('ELIMINADO');
    }
    catch(err){
        console.error(err);
    }
});




router.put('/pacientes/:id',async (req,res)=>{
   try{
       const { id } = req.params;
    const { nombre, apellido, numid } = req.body;
  await pool.query(
    `UPDATE pacientes SET nombre = '${nombre}', apellido  = '${apellido}', numid = '${numid}'
    WHERE id = ${id}`
  );
  res.json('ACTUALIZADO');
   }catch(e){
    console.log("F");
   }
});



router.get('/pacientes',async (req,res) =>{
    try{
        
        const arreglo = await pool.query('SELECT * FROM pacientes ORDER BY id');
        res.send(arreglo.rows);
         
    } catch(e){
        console.log(":C");
    } 
});


module.exports = router;
router.listen(5000, () => {
    console.log("server has started on port 5000");
  });

/*
const getPacientes = async () =>{
    try{
        const res = await pool.query('SELECT * FROM pacientes');
        console.log(res.rows);
         
    } catch(e){
        console.log(e);
    }
}

*/


//insertarPaciente();
//editarPaciente();
//deletePacientes();
//getPacientes();


 /*const insertarPaciente = async(req,res) =>{
    try{
        const text = 'INSERT INTO pacientes(nombre, apellido, numid) VALUES($1, $2, $3) ';
    const values = ['Pablito3','Clavo3','674378'];
    res = await pool.query(text,values);
    console.log('epa');
    }catch(e){
        console.log(e);
    }
    

}*/

/*
const editarPaciente = async()=>{
    try{
        const text = 'UPDATE pacientes SET nombre = $1, apellido = $2  WHERE numid = $3';
    const values = ['Andres','Moreno','908'];
    res = await pool.query(text,values);
    console.log('F mani');
    }catch{
        console.log(e);
    }
}
*/

/*const deletePacientes=async()=>{
    
    try{
        const text = 'DELETE FROM pacientes WHERE numid = $1';
    const values = ['5555'];

    res = await pool.query(text,values);
    console.log('F');
    }catch{
        console.log(e);
    }

}*/

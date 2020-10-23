import React, { Fragment, useEffect, useState } from "react";
import {  Button } from 'reactstrap';



const GeneraTabla = props => {
  const [Allpacientes, setTodos] = useState([]);

  // ---------------- BORRAR --------------------------

  const borrar = async numid => {
    try {
      var opcion = window.confirm("Desea eliminar el registro: " + numid);
      if (opcion) {
        
           const borrar = await fetch(`http://localhost:5000/pacientes/${numid}`, { method: "DELETE" });
      }
      setTodos(Allpacientes.filter(paciente => paciente.numid !== numid));
    } catch (err) {
      console.error(err.message);
    }

    
  };


  // ------------------ GENERAR FILAS ------------------


  const cargartabla = async () => {
    try{
      console.log("aqui va a morir todo");
    const res = await fetch('http://localhost:5000/pacientes');
    console.log("PERO NO!!!");
    const jsonData = await res.json();

    setTodos(jsonData);
    }catch(err){
        console.error(err.message);
    }
  };

  useEffect(() => {
    cargartabla();
  }, []);

  return(
    <Fragment>
     
    {Allpacientes.map(paciente =>
      
        <tr key = {paciente.id}> 
            <td className="text-center align-middle">{paciente.id}</td>
            <td className=" text-center align-middle">{paciente.nombre}</td>
            <td className=" text-center align-middle">{paciente.apellido}</td>
            <td className="text-center align-middle">{paciente.numid}</td>

              <td className="text-center align-middle"> 
              <Button   color='danger' onClick={()=>borrar(paciente.numid)}>Eliminar</Button>
              
            </td>
            
    </tr>)}
        </Fragment>
  );

}


export default GeneraTabla;

  /*
    function genera_filas(data) {
  
      var row = document.getElementById("contenedorTabla");
      var filas = "";
      for (var i = 0; i < data.length; i++) {
        filas += "<tr>";
        filas += "<td>" + data[i].id + "</td>";
        filas += "<td>" + data[i].nombre + "</td>";
        filas += "<td>" + data[i].apellido + "</td>";
        filas += "<td>" + data[i].numid + "</td>";
        filas += '<td><Button color="primary" onClick={()=>this.mostrarModalActualizar(' + data[i] + ')}>Editar</Button> {"  "}'
          + '<Button color="danger" onClick={()=>borrar(' + data[i].id + ')}>Eliminar</Button></td>'
        filas += "</tr>";
      }
      row.innerHTML = filas;*/

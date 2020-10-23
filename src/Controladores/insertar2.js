import React, { Component, FormData,Fragment, useState } from "react";
import {  ModalBody, ModalHeader, ModalFooter, Button, Form ,Label,Input } from 'reactstrap';


class Insertar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      nombre:'',
      apellido:'',
      numid:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }; 

  handleChange (event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
    
  async handleSubmit(event) {
    
    if (window.confirm(`Desea agregar al paciente ${this.state.nombre}`)){
      try {
                
          var nombre = this.state.nombre;
          var apellido = this.state.apellido;
          var numid = this.state.numid;

          const body = {nombre, apellido, numid};
          
          const response = await fetch("http://localhost:5000/pacientes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
        await alert(`El paciente ${nombre} fue agregado con exito`);
        
      } catch (err) {
        console.error(err.message);
      }
    }
  };

 
 
 render () {
  return (
    <Fragment>
      
      <ModalHeader>
        <div><h3>Insertar Registro</h3></div>
      </ModalHeader>
        <ModalBody>
        <Form className="d-flex mt-5" id='envio' onSubmit={this.handleSubmit}  >
            <Label>
              Nombre: 
            </Label>
              <Input
                  id = "nombre"
                  className="form-control"
                  name="nombre"
                  type="text"
                  value = {this.state.nombre}
                  onChange={this.handleChange}
              />
            <Label>
              Apellido:
            </Label>
              <Input
                  id = "apellido"
                  className="form-control"
                  name="apellido"
                  type="text"
                  value = {this.state.apellido}
                  onChange={this.handleChange}
              />
            <Label>
              Id Paciente:
            </Label>
              <Input
                  id = "numid"
                  className="form-control"
                  name="numid"
                  type="text"
                  value = {this.state.numid}
                  onChange={this.handleChange}                  
              />
              <Button type = "submit" color="success" className="btn-btn-succes" >Insertar</Button>
          </Form>
        </ModalBody>
      <ModalFooter >
          
          
      </ModalFooter>
    </Fragment>
  );
  };
};

export default Insertar;


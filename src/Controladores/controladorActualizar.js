import React, { Fragment, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, FormGroup, Form, Label, Input } from 'reactstrap';
class Actualizar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      nombre: '',
      apellido: '',
      numid: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  async handleSubmit(event) {

    var opcion = window.confirm("Desea Editar el registro: " + this.state.id);
    if (opcion) {
      try {
        
        var id = this.state.id;
        var nombre = this.state.nombre;
        var apellido = this.state.apellido;
        var numid = this.state.numid;

        const body = { nombre, apellido, numid };

        const response = await fetch(`http://localhost:5000/pacientes/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
         
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  render() {
    return (

      <Fragment>

        <div className="modal-header">
          <h4 className="modal-title">Actualizar Paciente</h4>

        </div>

        <Form className="d-flex mt-5 pb-3" id='actualizar' onSubmit={this.handleSubmit}>
          <Label className="d-flex pl-3 pr-3" >id: </Label>
          <Input
            type="text"
            className="form-control"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
          <Label className="d-flex pl-3 pr-3">Nombre: </Label>
          <Input
            type="text"
            className="form-control"
            name="nombre"
            value={this.state.nombre}
            onChange={this.handleChange}
          />
          <Label className="d-flex pl-3 pr-3">Apellido: </Label>
          <Input
            type="text"
            className="form-control"
            name="apellido"
            value={this.state.apellido}
            onChange={this.handleChange}
          />
          <Label className="d-flex pl-3 pr-3">Codigo: </Label>
          <Input
            type="text"
            className="form-control"
            name="numid"
            value={this.state.numid}
            onChange={this.handleChange}
          />
          <Button
            color="success"
            type="submit"
            className="btn-btn-succes"
          >
            Editar
              </Button>
        </Form>

      </Fragment>

    );
  };
};



export default Actualizar;

/*


  function actua() {
    let datos = new FormData(formulario);
    let nombrepaciente = datos.get('nombre');
    let apellidopaciente = datos.get('apellido');
    let idpaciente = datos.get('identificacion');
    let id = datos.get('id');

    let myHeaders = new Headers();

    const options = {
      method: 'PUT',
      headers: myHeaders,
      body: new URLSearchParams({
        'nombre': nombrepaciente,
        'apellido': apellidopaciente,
        'numid': idpaciente,
        'id': id
      }),
    }


    fetch('/basedatos/actualizarpaciente', options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };*/
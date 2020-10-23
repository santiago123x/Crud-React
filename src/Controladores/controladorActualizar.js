import React, { Fragment } from "react";
import { Row,  Modal, ModalBody, ModalHeader, ModalFooter, Button, Form,  InputGroup, InputGroupText, InputGroupAddon, Input, ButtonToggle } from 'reactstrap';
class Actualizar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      nombre: '',
      apellido: '',
      numid: '',
      modolActua: false
    };
    this.handleChange = this.handleChange.bind(this);

  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  mostarActua() {
    this.setState({
      modalActua: !this.state.modalActua
    });
  }

  async actualizar() {

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

        alert(`Se ha actualizado el registro: ${this.state.id}`);
        window.location.reload();

      } catch (err) {
        console.error(err.message);
      }
    }
  };

  render() {
    return (

      <Fragment>
        <ButtonToggle  color='primary' onClick={() => this.mostarActua()}>Actualizar Paciente</ButtonToggle>
        <Modal
          size="md"
          centered isOpen={this.state.modalActua} id="actu">
          <ModalHeader>
            <div><h3>Actualizar Registro</h3></div>
          </ModalHeader>
          <ModalBody>

            <Form className="d-flex mt-5 pb-3" id='actualizar'>
              <Row className="justify-content-md-center mt-3">
                <div className ="mx-auto mb-3"> 
              <InputGroup  >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="d-flex pl-3 pr-3">id :</InputGroupText>
                  </InputGroupAddon>
                  <Input id="id"
                    placeholder="Id"
                    className="form-control"
                    name="id"
                    type="text"
                    value={this.state.id}
                    onChange={this.handleChange} />
                </InputGroup>
                </div>
                <div className ="mx-auto mb-3">
                <InputGroup  >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="d-flex pl-3 pr-3">Nombre :</InputGroupText>
                  </InputGroupAddon>
                  <Input id="nombre"
                    placeholder="Nombre"
                    className="form-control"
                    name="nombre"
                    type="text"
                    value={this.state.nombre}
                    onChange={this.handleChange} />
                </InputGroup>
                </div>
                <div className ="mx-auto mb-3">
                <InputGroup  >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="d-flex pl-3 pr-3">Apellido :</InputGroupText>
                  </InputGroupAddon>
                  <Input id="apellido"
                    placeholder="Apellido"
                    className="form-control"
                    name="apellido"
                    type="text"
                    value={this.state.apellido}
                    onChange={this.handleChange} />
                </InputGroup>
                </div>
                <div className ="mx-auto mb-3">
                <InputGroup  >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="d-flex pl-3 pr-3">Codigo :</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    id="numid"
                    placeholder="Codigo"
                    className="form-control"
                    name="numid"
                    type="text"
                    value={this.state.numid}
                    onChange={this.handleChange}
                  /></InputGroup>
                  </div>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter >
            <Button color="success" onClick={() => this.actualizar()}>Editar</Button>
            <Button color="danger" onClick={() => this.mostarActua()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
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
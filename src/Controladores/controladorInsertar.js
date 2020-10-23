import React, { Fragment } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, Form,  InputGroup, InputGroupText, InputGroupAddon, Input, ButtonToggle } from 'reactstrap';


class Insertar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      numid: '',
      modalInser: false
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

  mostarInser() {
    this.setState({
      modalInser: !this.state.modalInser
    });
  }

  async insertar() {

    if (window.confirm(`Desea agregar al paciente ${this.state.nombre}`)) {
      try {

        var nombre = this.state.nombre;
        var apellido = this.state.apellido;
        var numid = this.state.numid;

        const body = { nombre, apellido, numid };

        const response = await fetch("http://localhost:5000/pacientes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        alert(`Se ha agregado al paciente ${this.state.nombre}`);
        window.location.reload();
      } catch (err) {
        console.error(err.message);
      }
    }
  };
  a


  render() {
    return (
      <Fragment>

        <ButtonToggle className="mb-3" color='primary' onClick={() => this.mostarInser()}>Insertar Nuevo Paciente</ButtonToggle>

        <Modal
          size="md"
          centered isOpen={this.state.modalInser} id="insertar">
          <ModalHeader>
            <div><h3>Insertar Registro</h3></div>
          </ModalHeader>
          <ModalBody>

            <Form className="d-flex mt-5" id='envio' >
              <ul>
                <div className="mb-3 pl-5 ">
                  <InputGroup  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="d-flex pl-3 pr-3">Nombre</InputGroupText>
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
                <div className="mb-3 pl-5 " >
                  <InputGroup  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="d-flex pl-3 pr-3">Apellido</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="apellido"
                      placeholder="Apellido"
                      className="form-control"
                      name="apellido"
                      type="text"
                      value={this.state.apellido}
                      onChange={this.handleChange}
                    /> </InputGroup>
                </div>
                <div className="pl-5 " >
                  <InputGroup  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="d-flex pl-3 pr-3">Codigo</InputGroupText>
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
                </div></ul>
            </Form>
          </ModalBody>
          <ModalFooter >
            <Button color="success" onClick={() => this.insertar()}>Insertar</Button>
            <Button color="danger" onClick={() => this.mostarInser()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  };
};

export default Insertar;


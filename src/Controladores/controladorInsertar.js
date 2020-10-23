/*import React, { Fragment, useState } from "react";


const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("basedatos/index/pacientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/HospitalCentral";
    } catch (err) {
      console.error(err.message);
    }
  };

    
  return (
    
    <ModalHeader>
                            <div><h3>Insertar Registro</h3></div>
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <label>
                                    id:
                            </label>
                                <input
                                    className="form-control"
                                    readOnly
                                    type="text"
                                    value={this.state.data.length + 1}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Nombre:
                            </label>
                                <input
                                    className="form-control"
                                    name="nombre"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Apellido:
                            </label>
                                <input
                                    className="form-control"
                                    name="apellido"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Codigo:
                            </label>
                                <input
                                    className="form-control"
                                    name="numid"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={() => this.envar()}>Insertar</Button>
                            <Button color="danger" onClick={() => this.ocultarModalInsertar()}>Cancelar</Button>
                        </ModalFooter>
  );
};

export default InputTodo;


/*

function envar(){
  console.log('me diste un click');
  let datos = new FormData(formulario);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  console.log('vamos a enviar a la base de datos');
  fetch('/basedatos/insertarpaciente', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
*/
/*--------------- borrar ---------------------------*/
/*




/*------------------ Actualizar ----------------*/
/*


/*----------------consultar-------------------------*/
/*



*/
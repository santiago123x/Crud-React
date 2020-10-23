/*import React from 'react';
import "./App.css";
import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';




/*const data = [
    { id: 1, nombre: "David", apellido: "Gomez", numid: "1234" },
    { id: 2, nombre: "Victor", apellido: "Hernandez", numid: "2345" },
]
*/
/*
class App extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: '',
            nombre: '',
            apellido: '',
            numid: ''
        },

    };

    // Consultas

    
        mostrarModalActualizar = (registro) => {
            this.setState({ modalActualizar: true, form: registro });

        }
        ocultarModalActualizar = () => {
            this.setState({ modalActualizar: false });
        }

        mostrarModalInsertar = () => {
            this.setState({ modalInsertar: true });

        }
        ocultarModalInsertar = () => {
            this.setState({ modalInsertar: false });
        }

        insertar = () => {
            var valorNuevo = { ...this.state.form };
            valorNuevo.id = this.state.data.length + 1;
            var lista = this.state.data;
            lista.push(valorNuevo);
            this.setState({ data: lista, modalInsertar: false });
        }



        edita = (dato) => {
            var contador = 0;
            var lista = this.state.data;
            lista.map((registro) => {
                if (dato.id == registro.id) {
                    lista[contador].nombre = dato.nombre;
                    lista[contador].apellido = dato.apellido;
                    lista[contador].numid = dato.numid;
                }
                contador++;
            });
            this.setState({ data: lista, modalActualizar: false });
        };

        eliminar = (dato) => {
            var opcion = window.confirm("Desea eliminar el registro: " + dato.id);
            if (opcion) {
                var contador = 0;
                var lista = this.state.data;
                lista.map((registro) => {
                    if (registro.id == dato.id) {
                        lista.splice(contador, 1);
                    }
                    contador++;
                });
                this.setState({ data: lista });
            }
        }
        render(){
            return (
                <>
                    <Container>

                        <br />
                        <Button color='success' onClick={() => this.mostrarModalInsertar()}>Insertar Nuevo Paciente</Button>
                        <br /><br />
                        <div id = 'contenedorTabla'>
                            
                        </div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Codigo</th>
                                </tr>
                            </thead>
                            <tbody id='cuerpotabla'>
                            {this.state.data.map((elemento)=>(
                        <tr>
                            <td>{elemento.id}</td>
                            <td>{elemento.nombre}</td>
                            <td>{elemento.apellido}</td>
                            <td>{elemento.numid}</td>
                            <td><Button color='primary'onClick={()=>this.mostrarModalActualizar(elemento)}>Editar</Button> {"  "}
                                <Button color='danger' onClick={()=>this.eliminar(elemento.id)}>Eliminar</Button></td>
                        </tr>
                    ))}
                            </tbody>
                        </Table>

                    </Container>

                    <Modal isOpen={this.state.modalActualizar}>
                        <ModalHeader>
                            <div><h3>Actualizar Registro</h3></div>
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
                                    value={this.state.form.id}
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
                                    value={this.state.form.nombre}
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
                                    value={this.state.form.apellido}
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
                                    value={this.state.form.numid}
                                />

                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={() => this.edita(this.state.form)}>Editar</Button>
                            <Button color="danger" onClick={() => this.ocultarModalActualizar()}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalInsertar} id = "insertar">
                        
                    </Modal>
                </>)
        }
    }

    export default App;*/
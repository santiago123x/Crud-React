/*import React, { Fragment, Component, useState } from "react";
import { Row, Modal, ModalBody, ModalHeader, ModalFooter, Button, Form, InputGroup, InputGroupText, InputGroupAddon, Input, ButtonToggle } from 'reactstrap';

const Actualizar = (props, id ) => {

    const {
            nombre,
            apellido,
            numid,
            modalActua
        } = props;
    
        
    const [modalActua, setModalActua] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [numid, setNumid] = useState('');

    const mostarActua = () => setModalActua (!modalActua)
    

    const actualizar = async() => {

        var opcion = window.confirm("Desea Editar el registro: " +id);
        if (opcion) {
            try {

                const body = { setNombre, apellido, numid };

                const response = await fetch(`http://localhost:5000/pacientes/${id}`,
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body)
                    });

                alert(`Se ha actualizado el registro: ${id}`);
                window.location.reload();

            } catch (err) {
                console.error(err.message);
            }
        }
    };


    return (

        <Fragment>
            <ButtonToggle className="mt-3 mb-3 " color='primary' onClick={mostarActua}>Actualizar</ButtonToggle>
            <Modal
                size="md"
                centered isOpen={modalActua} id="actu">
                <ModalHeader>
                    <div><h3>Actualizar Registro</h3></div>
                </ModalHeader>
                <ModalBody>

                    <Form className="d-flex mt-5 pb-3" id='actualizar'>
                        <Row className="justify-content-md-center mt-3">
                            <div className="mx-auto mb-3">
                                <InputGroup  >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText className="d-flex pl-3 pr-3">Nombre :</InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="nombre"
                                        placeholder="Nombre"
                                        className="form-control"
                                        name="nombre"
                                        type="text"
                                        value={nombre}
                                        onChange={setNombre} />
                                </InputGroup>
                            </div>
                            <div className="mx-auto mb-3">
                                <InputGroup  >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText className="d-flex pl-3 pr-3">Apellido :</InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="apellido"
                                        placeholder="Apellido"
                                        className="form-control"
                                        name="apellido"
                                        type="text"
                                        value={apellido}
                                        onChange={setApellido} />
                                </InputGroup>
                            </div>
                            <div className="mx-auto mb-3">
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
                                        value={numid}
                                        onChange={setNumid}
                                    /></InputGroup>
                            </div>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter >
                    <Button color="success" onClick={() => actualizar()}>Insertar</Button>
                    <Button color="danger" onClick={() => mostarActua()}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </Fragment>

    );
};



export default Actualizar;
*/
import React, {Fragment} from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Label } from 'reactstrap';
import GeneraTabla from "./Controladores/controladorGet";
import Insertar from "./Controladores/insertar2"
import Actualizar from "./Controladores/controladorActualizar"



function App() {

    

    return (
        <Fragment>
            <Container>
             <Insertar />
            </Container>
            <Container>

                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Codigo</th>
                        </tr>
                    </thead>
                    <tbody >
                        <GeneraTabla />

                    </tbody>
                </Table>

            </Container>
           <Container>
               <Actualizar />
           </Container>
            
        </Fragment>);
}
export default App;


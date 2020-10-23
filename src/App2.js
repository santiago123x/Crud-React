import React, {Fragment} from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,  Container} from 'reactstrap';
import GeneraTabla from "./Controladores/controladorGet";
import Insertar from "./Controladores/controladorInsertar"
import Actualizar from "./Controladores/controladorActualizar"



function App() {
    
    return (
        <Fragment>
            
            <Container className='container-fluid'>
                <div className="mr-2">
                <Insertar />
                </div>
                <div className="mr-2">
                <Actualizar />
                </div>
           </Container>
            <Container>
                <div className="modal-header">
                    <h4 className="modal-title">Pacientes</h4>
                </div>
                <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th className="text-center align-middle">Id</th>
                            <th className="text-center align-middle">Nombre</th>
                            <th className="text-center align-middle">Apellido</th>
                            <th className="text-center align-middle">Codigo</th>
                        </tr>
                    </thead>
                    <tbody >
                        <GeneraTabla />
                    </tbody>
                </Table>
            </Container>
            
        </Fragment>
    );
}
export default App;


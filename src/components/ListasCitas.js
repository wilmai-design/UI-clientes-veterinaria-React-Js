import React from 'react';
import Cita from './Cita';

const ListasCitas = ({citas, eliminarCita}) => {

    // imprimir un mensaje en base si hay citas o no
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aqui';

    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
            <h2 className="card-title text-center">{mensaje}</h2>

                <div className="lista-citas">
                    {citas.map(cita => (
                        <Cita 
                            key={cita.id}
                            cita={cita}
                            eliminarCita={eliminarCita}
                        />
                    ))}

                </div>

            </div>
        </div>
    );
}

export default ListasCitas;
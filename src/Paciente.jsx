import React from 'react'

export const Paciente = ({info, priscilaRemove}) => {

    return (
        <div className="card">
            <p><b>Apellidos y Nombres:</b> {info.info}</p>
            <p><b>N° de documento:</b> {info.dni}</p>
            <p><b>Número de celular:</b> {info.telf}</p>
            <p><b>Correo electrónico:</b>  {info.mail}</p>
            <p><b>Día y hora deseada: </b> {info.datetime}</p>

            <button onClick={() => priscilaRemove(info.id)}>Eliminar</button>
        </div>


    )
}

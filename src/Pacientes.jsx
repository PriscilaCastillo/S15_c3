import React from 'react'
import { Paciente } from './Paciente';

export const Pacientes = ({ priscilainfo, priscilaRemove }) => {
    console.log(priscilainfo);
    return (
                
        <div className='card-container'>
       
            {
                priscilainfo.map((info) => (
                    <Paciente info={info} key={info.id} priscilaRemove={priscilaRemove} />
                ))}
        </div>

    )
}

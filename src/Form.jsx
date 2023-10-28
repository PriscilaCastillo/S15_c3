import React, { useState } from 'react'

export const Form = ({ setPriscilainfo, priscilainfo }) => {

    const [info, setInfo] = useState([]);
    const [dni, setDNI] = useState('');
    const [telf, setTelf] = useState('');
    const [mail, setMail] = useState('');
    const [datetime, setDateTime] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        const data = { info, dni, telf, mail, datetime, id: new Date().getMilliseconds() };
        console.log(data);
        setPriscilainfo([...priscilainfo, data]);

        setInfo('');
        setDNI('');
        setTelf('');
        setMail('');
        setDateTime('');
    }

    return (
        <div className='form-container'>
            <p>Por favor completa el siguiente formulario.</p>

            <form className='data-container' onSubmit={handleAdd}>

                <div className='data'>
                    <div className='label-data'>
                        <label htmlFor="">Apellidos y Nombres</label>
                    </div>
                    <input type="text" value={info} onChange={(e) => setInfo(e.target.value)} />
                </div>

                <div className='data'>
                    <div className='label-data'>
                        <label htmlFor="">N° de documento</label>
                    </div>
                    <input type="text" value={dni} onChange={(e) => setDNI(e.target.value)} />
                </div>

                <div className='data'>
                    <div className="label-data">
                        <label htmlFor="">Número de celular</label>
                    </div>
                    <input type="tel" value={telf} onChange={(e) => setTelf(e.target.value)} />
                </div>

                <div className='data'>
                    <div className='label-data'>
                        <label htmlFor="">Correo electrónico</label>
                    </div>
                    <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} />
                </div>

                <div className='data'>
                    <div className="label-data">
                        <label htmlFor="">Selecciona el dia y la hora deseada</label>
                    </div>
                    <input type="datetime-local" value={datetime} onChange={(e) => setDateTime(e.target.value)} />
                </div>

                <div>
                    <button className='data-button' type='submit' disabled={!info || !dni || !telf || !mail || !datetime} >Enviar</button>
                </div>

                <p>(*) Estimado Paciente: Por favor registre todos sus datos correctamente para poder validar su información. </p>

            </form>

        </div>
    )
}

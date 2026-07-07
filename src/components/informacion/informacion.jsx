import style from './informacion.module.css';
import { useState } from 'react';
import Marcador from './marcador/marcador';
import Campo from './campo/campo';

function Informacion() {
    const [puntaje, setPuntaje] = useState(0);

    const aumentarPuntaje = () => {
        setPuntaje((p) => p + 1);
    };

    return (
        <div>
            <Marcador score={puntaje} />
            <Campo onCartaClick={aumentarPuntaje} />
        </div>
    );
}

export default Informacion;

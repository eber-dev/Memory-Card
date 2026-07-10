import style from './informacion.module.css';
import { useState } from 'react';
import Marcador from './marcador/marcador';
import Campo from './campo/campo';

function Informacion() {
    const [puntaje, setPuntaje] = useState(0);
    const [seleccionado, setSeleccionado] = useState([]);

    const aumentarPuntaje = (id) => {
        if (seleccionado.length == 0) {
            setSeleccionado([...seleccionado, id]);
            setPuntaje((p) => p + 1);
        } else {
            if (seleccionado.includes(id)) {
                setPuntaje(0);
                setSeleccionado([]);
            } else {
                setSeleccionado([...seleccionado, id]);
                setPuntaje((p) => p + 1);
            }
        }
    };

    return (
        <div>
            <Marcador score={puntaje} />
            <Campo onCartaClick={aumentarPuntaje} />
        </div>
    );
}

export default Informacion;

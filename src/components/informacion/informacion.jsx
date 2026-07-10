import style from './informacion.module.css';
import { useState } from 'react';
import Marcador from './marcador/marcador';
import Campo from './campo/campo';

function Informacion() {
    const [puntaje, setPuntaje] = useState(0);
    const [seleccionado, setSeleccionado] = useState([]);
    const [mayorpuntaje, setMayorpuntaje] = useState(0);

    const aumentarPuntaje = (id) => {
        if (seleccionado.length == 0) {
            setSeleccionado([...seleccionado, id]);
            setPuntaje((p) => p + 1);
        } else {
            if (seleccionado.includes(id)) {
                if (mayorpuntaje == 0) {
                    setMayorpuntaje(puntaje);
                }

                if (puntaje > mayorpuntaje) {
                    setMayorpuntaje(puntaje);
                }

                setPuntaje(0);
                setSeleccionado([]);
            } else {
                setSeleccionado([...seleccionado, id]);
                setPuntaje((p) => p + 1);
            }
        }
    };

    return (
        <div className={style.caja}>
            <div className={style.titulos}>
                <h1>🎮 Memory Card</h1>
                <h3>
                    Pon a prueba tu memoria. Selecciona todas las cartas sin
                    repetir ninguna.
                </h3>
            </div>
            <Marcador score={puntaje} bestscore={mayorpuntaje} />
            <Campo onCartaClick={aumentarPuntaje} />
        </div>
    );
}

export default Informacion;

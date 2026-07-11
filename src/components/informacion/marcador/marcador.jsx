import style from './marcador.module.css';

function Marcador({ score, bestscore }) {
    return (
        <div className={style.marca}>
            <div className={style.puntuacion}>
                <span>Puntaje actual</span>
                <strong>{score}</strong>
            </div>

            <div className={style.puntuacion}>
                <span>Mayor puntaje</span>
                <strong>{bestscore}</strong>
            </div>
        </div>
    );
}

export default Marcador;

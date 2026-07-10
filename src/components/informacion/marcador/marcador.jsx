import style from './marcador.module.css';

function Marcador({ score, bestscore }) {
    return (
        <div className={style.marca}>
            <p>Puntaje Actual: {score}</p>
            <p>Mayor puntaje: {bestscore}</p>
        </div>
    );
}

export default Marcador;

import style from './marcador.module.css';

function Marcador({ score, bestscore }) {
    return (
        <div className={style.marca}>
            <p>{score}</p>
            <p>{bestscore}</p>
        </div>
    );
}

export default Marcador;

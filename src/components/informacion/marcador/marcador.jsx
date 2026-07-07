import style from './marcador.module.css';

function Marcador({ score }) {
    return (
        <div>
            <p>{score}</p>
        </div>
    );
}

export default Marcador;

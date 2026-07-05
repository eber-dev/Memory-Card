import style from './campo.module.css';
import { useEffect, useState } from 'react';

function Campo() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    const generarIdAleatorio = () => {
        const idAleatorio = Math.floor(Math.random() * 151) + 1;
        return idAleatorio;
    };

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const promesas = [];
                const data_convertido = [];

                setLoading(true);
                for (let i = 0; i < 10; i++) {
                    promesas.push(
                        fetch(
                            `https://pokeapi.co/api/v2/pokemon/${generarIdAleatorio()}`,
                        ),
                    );
                }

                const data = await Promise.all(promesas);

                for (let i = 0; i < 10; i++) {
                    data_convertido.push(await data[i].json());
                }

                setPokemons(data_convertido);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, []);

    return loading ? (
        <p>Cargando....</p>
    ) : (
        <div className={style.tablero}>
            {pokemons.map((pokemon, i) => (
                <div key={i} className={style.carta}>
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                    <p>{pokemon.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Campo;

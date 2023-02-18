import { Input } from 'antd';
import { shallowEqual, useSelector } from 'react-redux';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useState } from 'react';
import "./searcher.css"
const Searcher = () => {
    const pokemones = useSelector(state=> state.data.pokemons,shallowEqual)    
    const [auxiliar, setAuxiliar] = useState(false);
    const [auxPokemon, setAuxPokemon] = useState({});
    let foundPokemon
    let allSkills
    const searchPokemon = (name)=>{
        foundPokemon = pokemones.find( pokemon => {return pokemon.name === name} )
        allSkills = foundPokemon.abilities.map(element => element.ability.name).join(', ')
        setAuxiliar(true)
        setAuxPokemon({...foundPokemon,allSkills})
    }
    return (
        <div>
            <Input.Search placeholder='Buscar...' style={{marginBottom: 10}} onSearch={(value)=> searchPokemon(value)}/>
            
            { auxiliar && 
                <Card
                        className='card-found'
                        title={auxPokemon.name}
                        cover={
                             <img 
                                 src={auxPokemon.sprites.front_default} 
                                 alt={auxPokemon.name} 
                            />}
                        //extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
                    >
                        <Meta description={auxPokemon.allSkills} />
                </Card>
            }
        </div>
    )
}


export default Searcher;
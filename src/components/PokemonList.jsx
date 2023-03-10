import PokemonCard from "./PokemonCard";
import './PokemonList.css'
const PokemonList = ({pokemons}) => {
    // console.log({pokemons});
    return (
        <div className="PokemonList">
            {pokemons.map( (pokemon)=>{
                return <PokemonCard 
                            name={pokemon.name} 
                            key={pokemon.name}
                            image={pokemon.sprites.front_default}
                            skills={pokemon.abilities}
                            id={pokemon.id}
                            favorite={pokemon.favorite}    
                        />
            } )}
        </div>
    );
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''), 
}
export default PokemonList;

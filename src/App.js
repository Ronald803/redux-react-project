import { useEffect } from 'react';
import { Col , Spin } from 'antd';
import { useSelector,useDispatch, shallowEqual } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg'
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import './App.css';

function App() {
  const pokemons = useSelector(state => 
    state.data.pokemons, shallowEqual)
  const loading = useSelector( state => state.ui.loading )
  
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, []);
  return (
    <div className="App">
      <div>
        <Col span={4} offset={10}>
          <img src={logo} alt="Pokedux"/>
        </Col>
        <Col span={8} offset={8}>
          <Searcher/>
        </Col>
      </div>
      {loading ? (
        <Col offset={12}>
          <Spin
            spinning
            size='large'
          ></Spin>
        </Col> ): (
          <PokemonList pokemons={pokemons} ></PokemonList>
        )}

    </div>
  );
}


export default App;

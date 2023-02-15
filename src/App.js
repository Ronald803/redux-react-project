import { Col } from 'antd';
import './App.css';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList></PokemonList>
    </div>
  );
}

export default App;

import './App.css';
import Counter from './components/Counter'
import { useSelector } from 'react-redux';

function App() {

  const color = useSelector(state => state.backgroundColor);

  return (
    <div className="App" style={{background: color.backgroundColor}}>
        <Counter></Counter>
    </div>
  );
}

export default App;

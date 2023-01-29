import './App.css';
import Fruits from './components/Fruits';
function App() {
  const fruits = ["Apple", "Banana", "Orange", "Kiwi", "Pineapple"];
  return (
    <div className="App">
      <p>These are all the fruits we have available with us</p>
      <Fruits items={fruits} />

    </div>
  );
}

export default App;

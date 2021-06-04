import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer productos="Acá abajo va a ir la lista de productos" />
    </div>
  );
}

export default App;

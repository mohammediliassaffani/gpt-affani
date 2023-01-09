import Articale from "./components/articale/Articale";
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";
import Feature from "./components/feature/Feature";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cta />
      <Articale />
      <Feature />
      <Brand /><
    </div>
  );
}

export default App;

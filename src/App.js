import Education from "./components/Education";
import PracticalExp from "./components/PracticalExp";
import Generalnfo from "./components/Generalnfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Generalnfo />
      <Education />
      <PracticalExp />
    </div>
  );
}

export default App;

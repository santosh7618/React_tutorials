import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import "./Style/App.scss";
import "./Style/Header.scss";





function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </Router>
    
  );
}

export default App;

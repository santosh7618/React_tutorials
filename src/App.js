import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx"
import Contact from "./Components/Contact.jsx";
import Services from "./Components/Services.jsx";

import "./Style/App.scss";
import "./Style/Header.scss";
import "./Style/Home.scss";
import "./Style/Footer.scss";
import "./Style/Contact.scss";
import "./Style/Mediaquery.scss";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

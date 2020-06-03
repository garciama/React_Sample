import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import Header from "./components/header_component/header";
import Footer from "./components/footer_component/footer";
import Homepage from "./components/pages/home_page";
import Products from "./components/pages/products";
import Contact from "./components/pages/contact";

// includes
import "./Assets/css/default.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/" component={Homepage} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

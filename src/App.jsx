import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import MtaDownload from "./pages/MtaDownload";
import "../src/styles/main.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hakkımızda" component={About} />
            <Route path="/mta-indir" component={MtaDownload} />
          </Switch>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;

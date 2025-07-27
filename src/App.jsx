import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WaveBackground from "./components/WaveBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import MtaDownload from "./pages/MtaDownload";
import GmodLogin from "./pages/GmodLogin";
import "../src/styles/main.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <WaveBackground />
        <Header />
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hakkımızda" component={About} />
            <Route path="/mta-indir" component={MtaDownload} />
            <Route path="/gmod" component={GmodLogin} />
          </Switch>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;

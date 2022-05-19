import "./sass/App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="App">
      <Header />

      {/* <Home /> */}

      {/* <AboutMe /> */}

      <Projects />

      <Footer />
    </div>
  );
};

export default App;

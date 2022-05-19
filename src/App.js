import "./sass/App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

const App = () => {
  return (
    <div className="App">
      <Header />

      {/* <Home /> */}

      <AboutMe />

      <Footer />
    </div>
  );
};

export default App;

import "../sass/App.scss";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Home />

      <Footer />
    </div>
  );
};

export default App;

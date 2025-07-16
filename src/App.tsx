import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Content from "./Components/Content";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navigation />

      <Home />
      <br />
      <div id="Content">
        <Content />
        <br></br>
        <br></br>
      </div>
      <Section />
      <div id="foot">
        <Footer />
      </div>
    </>
  );
};

export default App;

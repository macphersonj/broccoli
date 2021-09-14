import "./styles/style.scss";
import Header from "./components/Header/Header";
import Billboard from "./components/Billboard/Billboard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Billboard message="A better way to enjoy every day."></Billboard>
      <Footer></Footer>
    </div>
  );
}

export default App;

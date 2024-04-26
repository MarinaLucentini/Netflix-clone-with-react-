import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./MyNav";
import Home from "./HomeMain";
import MyFooter from "./MyFooter";

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <main>
        <Home />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;

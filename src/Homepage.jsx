import MyNav from "./MyNav";
import Home from "./HomeMain";
import MyFooter from "./MyFooter";
function Homepage() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <Home />
      </main>
      <MyFooter />
    </>
  );
}

export default Homepage;

import "./App.css";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { About } from "./pages/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  const navlinkArray = [
    { url: "#home", title: "Home" },
    { url: "#about", title: "About" },
    { url: "#products", title: "Products" },
  ];

  return (
    <>
      <Navbar navLinks={navlinkArray} />
      <Home title="Home page" />
      <Products title="Product page" />
      <About title="About page" />
      <Footer />
    </>
  );
}

export default App;

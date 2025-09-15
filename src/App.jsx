import AboutMe from "./components/AboutMe.jsx";
import BookTime from "./components/BookTime.jsx";
import Checkout from "./components/Checkout.jsx";

export default function App() {
  return (
    <div style={{ maxWidth: 720, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Consulting with Pablo Paredes</h1>
      <AboutMe />
      <BookTime />
      <Checkout />
    </div>
  );
}

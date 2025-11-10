import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/base.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingBottom: 32 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

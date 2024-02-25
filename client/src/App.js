import { Route, Routes, Navigate } from "react-router-dom"
import Signup from "./components/Singup";
import Login from "./components/Login";
import Home from "./components/Home/Home";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Header />

      <Routes>
        {user && <Route path="/" exact element={<Home />}></Route>}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;


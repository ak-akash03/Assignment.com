import "./App.css";
// import About from "./pages/About/About";
import Home from "./pages/Home/Home";
// import Contact from "./pages/Contact/Contact";
// import Help from "./pages/Help/Help"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Leyout from "./Leyout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Leyout />}>
      <Route path="" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/help" element={<Help />} /> */}

    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

          </div>
  );
}

export default App;
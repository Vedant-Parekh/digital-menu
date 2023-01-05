import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Menu from "./components/customer/Menu";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Navbar from "./components/Navbar";
import Cart from "./components/customer/Cart";

const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      {/* <Navbar /> */}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="payment" element={<Profile />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

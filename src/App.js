import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Navbar from "./component/Navigation/Navbar";
import Cart from "./pages/Cart";
import { DefaultLayout } from "./component/Layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import {BrowserRouter , Routes, Route} from "react-router-dom"

import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

import {Toaster} from "react-hot-toast"

 import "./Style/app.scss"
 import "./Style/header.scss"
 import "./Style/home.scss"
 import "./Style/cart.scss"

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
   </Routes>
   <Toaster/>
   </BrowserRouter>
  );
}

export default App;

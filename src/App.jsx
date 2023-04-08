
import { Route, Routes } from "react-router-dom"
import './index.css'
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Home from "./Routes/Home"
  

 
function App() {
  return (
      <div className="App">
          <Navbar/>
         <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/Detail' element={<Detail/>}/>
         <Route path='/Detail/:id' element={<Detail/>}/>
         <Route path='/Favs' element={<Favs/>}/>

         </Routes>
          <Footer/>
      </div>
  );
}

export default App;

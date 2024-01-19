import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'

import Notecontext from './context/Notes/Notecontext'
import Home from './components/Home';
import About from './components/About'
function App() {
  return (
    <>
<Routes>
  
    <Route path='/' element={<Home/>} />
    <Route path="about" element={<About/>} />
 

  <Route exact path='/login' element={<Login />}></Route>
  <Route exact path='/signup' element={<Signup />}></Route>
</Routes>


    </>
  );
}

export default App;

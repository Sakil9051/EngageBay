
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import DashNavbar from './Components/DashNav';
import Home from "./Pages/Home/Home.jsx";
import {Route,Routes} from "react-router-dom";
import Login from "./Pages/loginAndSignup/Login.jsx"
import Signup from './Pages/loginAndSignup/Signup';
import VideoBackGround from './Pages/Home/VideoBackGround';
function App() {
  return (
    <div className="App">
       
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>


    </div>
  );
}

export default App;

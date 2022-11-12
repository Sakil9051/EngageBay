import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import DashNavbar from "./Components/DashNav";
import Home from "./Pages/Home/Home.jsx";
import VideoBackGround from "./Pages/Home/VideoBackGround";
import Dashboard from "./Components/Dashboard";
import { InlineForm } from "./Pages/InlineForm/InlineForm";
import { PopupForm } from "./Pages/PopupForm/PopupForm";
import Allroutes from "./Routes/Allroutes";

function App() {
  return (
    <div className="App">

   
      <Allroutes/>
    </div>
  );
}

export default App;

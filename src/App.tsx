import MiddleContainer from "./components/MiddleContainer";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
function App() {
  return (
   <Router>
     <div className="lg:w-[80%] lg:mx-auto lg:pt-[3%]">
      <Navbar />
      <MiddleContainer />
    </div>
   </Router>
  );
}

export default App;

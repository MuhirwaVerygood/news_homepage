import Footer from "./components/Footer";
import GivenHumburger from "./components/GivenHumburger";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
function App() {
  return (
   <Router>
     <div className="lg:w-[80%] ss:w-full sm:w-[90%]  sm:mx-auto lg:pt-[3%]">
      {/* <Navbar /> */}
      <GivenHumburger />
      <Main />
      <Footer />
    </div>
   </Router>
  );
}

export default App;

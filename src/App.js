import "./App.css";
import Navbar from "./components/Ankit/Navbar";
import Footer from "./components/Ankit/Footer";

import { useEffect } from "react";
import AllRoutes from "./Routes/AllRoutes";


function App() {
  // useEffect(()=>{
  //   AOS.init({duration:2000})
  //   },[])

  return (
    <div className="App text-center text-lg-start">
      <Navbar />
      <AllRoutes />
      {/* <Faq/>   */}
      <Footer />
    </div>
  );
}

export default App;

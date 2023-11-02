import "./App.css";
import Navbar from "./components/Ankit/Navbar";
import Faq from "./components/Ankit/Faq";
import Footer from "./components/Ankit/Footer";

import { useEffect } from "react";
import AllRoutes from "./components/Ankit/Routes/AllRoutes";

function App() {
  // useEffect(()=>{
  //   AOS.init({duration:2000})
  //   },[])

  return (
    <div className="App ">
      <Navbar />
      <AllRoutes />
      {/* <Faq/>   */}
      <Footer />
    </div>
  );
}

export default App;

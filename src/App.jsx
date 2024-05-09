import react from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        navbar
        <Navbar />
        <Routes>
          <Route path='/' element={"home"} />
          <Route path='/*'
            element={
              
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                
              
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
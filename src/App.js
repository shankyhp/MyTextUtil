
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';
// import About from './components/About'


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode enabled", "success")

    }
  }



  return (
    // <Router>
    //   {/* Navbar and Alert are placed outside Routes */}
    //   <Navbar
    //     title="TextUtils"
    //     mode={mode}
    //     toggleMode={toggleMode}
    //     orangeMode={orangeMode}
    //     greenMode={greenMode}
    //     yellowMode={yellowMode}
    //   />
    //   <Alert alert={alert} />

    //   <div className="container my-3">
    //     <Routes>
    //       {/* Use element prop for Route components */}
    //       <Route path="/about" element={<About mode={mode}  />} />
    //       <Route
    //         path="/"
    //         element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />}
    //       />
    //     </Routes>
    //   </div>
    // </Router>
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}

      />
      <Alert alert={alert} />

      <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />
    </>
  );
}

export default App;
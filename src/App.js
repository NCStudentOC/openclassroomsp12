import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Loader from './components/Loader/Loader'
import './App.css'; // Assurez-vous d'avoir le fichier CSS correspondant

const App = () => {
  const [loading, setLoading] = useState(true);
  const [mouseDown, setMouseDown] = useState(false);
  const [pageY, setPageY] = useState(0);
  const appRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Changez cette valeur pour contrôler combien de temps le loader doit être affiché

    return () => clearTimeout(timer);
  }, []);

  const handleMouseDown = (event) => {
    setMouseDown(true);
    setPageY(event.pageY);
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handleMouseMove = (event) => {
    if (mouseDown) {
      appRef.current.scrollTop = appRef.current.scrollTop + (pageY - event.pageY);
      setPageY(event.pageY);
    }
  };

  return (
    <Router>
      {loading ? <Loader /> : (
        <div
          ref={appRef}
          className={`App ${mouseDown ? 'grabbing' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;

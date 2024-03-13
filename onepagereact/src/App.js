// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navbar';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <section id="section1" className="section vh-100 d-flex align-items-center justify-content-center section1">
        <h1>Section 1</h1>
      </section>
      <section id="section2" className="section vh-100 d-flex align-items-center justify-content-center section2">
        <h1>Section 2</h1>
      </section>
      <section id="section3" className="section vh-100 d-flex align-items-center justify-content-center section3">
        <h1>Section 3</h1>
      </section>
      <section id="section4" className="section vh-100 d-flex align-items-center justify-content-center section4">
        <h1>Section 4</h1>
      </section>
      <section id="section5" className="section vh-100 d-flex align-items-center justify-content-center section5">
        <h1>Section 5</h1>
      </section>
    </div>
  );
}

export default App;
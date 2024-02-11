import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Covid from './Covidv1';
import CovidV2 from './Covidv2'
import Covidv3 from './Covidv3'
import 'bootstrap/dist/css/bootstrap.min.css'

function Menu() {
    return ( 
        <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/app'} className="nav-link"> App </Link></li>
            <li><Link to={'/covidv1'} className="nav-link">TP Covid</Link></li>
            <li><Link to={'/covidv2'} className="nav-link">TP Covid V2</Link></li>
            <li><Link to={'/covidv3'} className="nav-link">TP Covid V3</Link></li>

          </ul>
          </nav>
          <hr />

          <Routes>
                <Route path='/app' element={<App/>} />
                <Route path='/covidv1'  element={<Covid/>} />
                <Route path='/covidv2' element={<CovidV2 />} />
                <Route path='/covidv3' element={<Covidv3 />} />
              
        </Routes>
        
        </div>
      </Router>

    );
}

export default Menu;
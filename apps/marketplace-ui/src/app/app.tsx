import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './adminPanel';
import Collection from './collection';
import Footer from './components/footer';
import Header from './components/header';
import CreateNFT from './create';
import Home from './home';
import ViewDetails from './viewDetails';
import './css/app.css';

export function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/create' element={<CreateNFT />} />
          <Route path='/view-details' element={<ViewDetails />} />
          <Route path='/admin-panel' element={<AdminPanel />} />
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './home/Home';
import Hotels from './hotels/Hotels';
import HotelsSearch from './hotels/hotels_search/HotelsSearch';


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotels/hotels-search' element={<HotelsSearch />} />
      </Routes>
    </Router>
  );
}

export default App;

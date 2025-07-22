import { Routes, Route } from 'react-router-dom';
import { Home, SingleHotel, SearchResults, Wishlist, Payment } from "./pages";
import './App.css';
import { Filter } from './components';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/hotels/:name/:address/:id/reserve' element={<SingleHotel />}/>
      <Route path='/hotels/:address' element={<SearchResults />}/>
      <Route path='/wishlist' element={<Wishlist />}/>
      <Route path='/confirm-booking/stay/:id' element={<Payment />}/>
    </Routes>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { Home, SingleHotel, SearchResults } from "./pages";
import './App.css';
import { Filter } from './components';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/hotels/:name/:address/:id/reserve' element={<SingleHotel />}/>
      <Route path='/hotels/:address' element={<SearchResults />}/>
    </Routes>
  );
}

export default App;

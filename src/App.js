
import './App.css';
import { Home } from './component/page/Home';
import { Routes, Route } from "react-router-dom";
import { MovieDetails } from "./component/page/movieDetails";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home/:productId' element={<MovieDetails/>}></Route>
        
      </Routes>
      
      
    </div>
  );
}

export default App;

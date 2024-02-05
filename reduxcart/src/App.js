
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Products from './Products';
import MyCart from './MyCart';
import Navbar from './Navbar';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element ={<Products/>}/>
    <Route path='/mycart' element ={<MyCart/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import ItemPromise from './container/ItemPromise';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/carrito/Cart';
import getFirestoreApp from './firebase/configFirebase';
import NavBar from './components/menu/navBar';

getFirestoreApp();

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <div className='App'>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemPromise />} />
                        <Route
                            path='/categoria/:categoriaId'
                            element={<ItemPromise />}
                        />
                        <Route
                            path='/detalle/:detalleId'
                            element={<ItemDetailContainer />}
                        />
                        <Route path='/cart' element={<Cart />} />
                        <Route
                            path='*'
                            element={
                                <center>
                                    <h1 className='not-found'>Not Found</h1>
                                    <Link to='/'>Home</Link>
                                </center>
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

import Homepage from './components/Homepage';
import Products from './components/Products';
import Cart from './components/Cart';
import About from './components/About';

function App() {
  const [user, setUser] = React.useState(false);
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout isLoggedIn={user} setUser={setUser}/>}>
                <Route index element={<Homepage isLoggedIn={user} />}/>
                <Route path='cart' element={<Cart />}/>
                <Route path='about' element={<About />}/>
                <Route path='products'>
                  <Route index element={<Products />}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

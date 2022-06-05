import { Route, Routes } from 'react-router';
import { Home, Products, Cart, Wishlist, Login, Register, Page404 } from './views';
import { HideForAuth, RequiresAuth } from './router';

import './styles/base.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* Auth Routes */}
        <Route element={<HideForAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* Private Routes */}
        <Route element={<RequiresAuth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;

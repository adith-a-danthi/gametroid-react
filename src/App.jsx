import { Route, Routes } from 'react-router';
import { Home } from './views/Home/Home';
import { Products } from './views/Products/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

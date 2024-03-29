import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../features/authSlice';
import { getCart } from '../features/cartSlice';
import { getWishlist } from '../features/wishlistSlice';

export default function Login() {
  // Hooks
  const [form, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, password } = form;

  // Handlers
  const formHandler = (field, value) => {
    setFormData({ ...form, [field]: value });
  };
  const toggleCheckbox = () => setShowPassword((value) => !value);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();

      dispatch(getCart());
      dispatch(getWishlist());

      navigate('/products', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="fill-height grid place-items-center my-8">
      <section className="login-section">
        {/* Logo */}
        <div className="text-center mb-4">
          <a href="/" className="heading-1 text-gray text-decoration-none">
            <span className="fas fa-gamepad text-primary mr-4"></span>
            Gametroid
          </a>
        </div>

        {/* Login Form */}
        <div className="card outlined-card">
          <div className="card-content">
            <h3 className="heading-3">Login</h3>

            <form className="flex flex-col my-4">
              <input
                type="email"
                className="input mb-4"
                placeholder="Email"
                value={email}
                onChange={(e) => formHandler('email', e.target.value)}
              />

              <input
                type={showPassword ? 'text' : 'password'}
                className="input mb-2"
                placeholder="password"
                value={password}
                onChange={(e) => formHandler('password', e.target.value)}
              />

              <div className="mb-4">
                <input
                  className="input mr-2"
                  type="checkbox"
                  name="show-password"
                  id="show-password"
                  value={showPassword}
                  onChange={toggleCheckbox}
                />
                <label htmlFor="show-password">Show Password</label>
              </div>

              <button className="btn" onClick={loginHandler}>
                Login
              </button>

              <Link to="/register" className="text-center">
                <button className="btn link text-sm text-center">
                  Create an account <strong>&gt;</strong>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

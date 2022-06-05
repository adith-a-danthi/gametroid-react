import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';

export default function Register() {
  // Hooks
  const [form, setFormData] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const { name, email, password } = form;
  // Handlers
  const formHandler = (field, value) => {
    setFormData({ ...form, [field]: value });
  };
  const toggleCheckbox = () => setShowPassword((value) => !value);

  const signUpHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });

      const { encodedToken, createdUser } = response.data;
      login({ token: encodedToken, user: createdUser });

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
            <h3 className="heading-3">Register</h3>

            <form className="flex flex-col my-4">
              <input
                type="text"
                className="input mb-4"
                placeholder="Name"
                value={name}
                onChange={(e) => formHandler('name', e.target.value)}
              />

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

              <button className="btn" onClick={signUpHandler}>
                Sign Up
              </button>

              <p className="text-sm text-center mt-2">
                Already have an account?
                <Link to="/login" className="text-decoration-none">
                  <span className="btn link text-sm px-1">Log In!</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

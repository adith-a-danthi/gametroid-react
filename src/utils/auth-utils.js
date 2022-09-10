import axios from 'axios';

const loginAPI = async (email, password) => {
  try {
    const response = await axios.post('/api/auth/login', {
      email,
      password,
    });
    const { encodedToken: token, foundUser: user } = response.data;
    saveUserToLocalStorage({ token, user });
    return { token, user };
  } catch (error) {
    console.log(error);
  }
};

const signUpAPI = async (name, email, password) => {
  try {
    const response = await axios.post('/api/auth/signup', {
      name,
      email,
      password,
    });
    const { encodedToken: token, createdUser: user } = response.data;
    saveUserToLocalStorage({ token, user });
    return { token, user };
  } catch (error) {
    console.log(error);
  }
};

const saveUserToLocalStorage = ({ token, user }) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
};

const clearLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

const loadUserFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  const userString = localStorage.getItem('user');

  if (token && userString) {
    return { token, user: JSON.parse(userString) };
  }
  return null;
};

export { loginAPI, signUpAPI, clearLocalStorage, loadUserFromLocalStorage };

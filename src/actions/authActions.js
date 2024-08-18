import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}login`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { token } = response.data;

    // Save the token in localStorage
    localStorage.setItem('token', token);

    // Dispatch success action
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: token,
    });
    alert('login sucessful!')
  } catch (error) {
    let errorMessage = 'Login failed';
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    } else if (error.message) {
      errorMessage = error.message;
    }

    // Dispatch fail action with the error message
    dispatch({
      type: 'LOGIN_FAIL',
      payload: errorMessage,
    });
  }
};

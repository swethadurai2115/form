const initialState = {
    token: localStorage.getItem('token') || null,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload,
          error: null
        };
      case 'LOGIN_FAIL':
        return {
          ...state,
          token: null,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  
const initialState = {
  name: '',
  jobPosition: '',
  error: '',
  isLogin: false,
  isLoading: false,
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'LOGIN':
      let {name, jobPosition} = action.payload;
      return {
        ...state,
        isLogin: true,
        isLoading: true,
        name, 
        jobPosition,
      }

    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        isLoading: true,
      }

    default:
      return state;
  }
}
const initialState = {
  modalReview: false,
  modalResult: false,

  //employee
  employeeName: '',
  jobPosition: '',
  error: '',
  isLogin: false,
  isLoading: false,

  //patient
  currMonth: '',
  currYear: '',
  MRD: '',
  name: '',
  domicileAddress: '',
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'SAVE_PATIENT_SUCCESS':
      let {currMonth, currYear, MRD, name, domicileAddress} = action.payload;
      return {
        ...state,
        modalReview: false,
        modalResult: true,
        currMonth,
        currYear,
        MRD,
        name,
        domicileAddress,
      }

    case 'LOGIN':
      let {employeeName, jobPosition} = action.payload;
      return {
        ...state,
        isLogin: true,
        isLoading: true,
        employeeName, 
        jobPosition,
      }

    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        isLoading: true,
      }

    case 'REVEIW_PATIENT':
      return {
        ...state,
        modalReview: true,
        modalResult: false,
      }
    
    case 'HIDE_REVEIW_PATIENT':
      return {
        ...state,
        modalReview: false,
      }
    
    case 'HIDE_SAVED_PATIENT':
      return {
        ...state,
        modalResult: false,
      }

    default:
      return state;
  }
}
import axios from 'axios';

const apiUrl = 'http://10.0.2.2:3000'

export const saveNewPatient = ({NIK, name, placeOfBrith, dateOfBrith, identityAddress, domicileAddress, religion, maritalStatus, occupation, nationality, identityCreatedDate, identityValidDate}) => {
  return (dispatch) => {
    axios.post(`${apiUrl}/patients`,{NIK, name, placeOfBrith, dateOfBrith, identityAddress, domicileAddress, religion, maritalStatus, occupation, nationality, identityCreatedDate, identityValidDate})
      .then(response => {
        dispatch(savePatientSuccess(response.data))
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }
}

export const savePatientSuccess = (data) => {
  return {
    type: 'SAVE_PATIENT_SUCCESS',
    payload: data,
  }
}

export const loginUser = ({NIK, password}) => {
  return (dispatch) => {
    axios.post(`${apiUrl}/users/signin`, {NIK, password})
      .then(response => {
        dispatch(loginSuccess(response.data))
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }
}

export const loginSuccess = (data) => {
  return {
    type: 'LOGIN',
    payload: data,
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT',
  }
}

export const showReviewPatient = () => {
  return {
    type: 'REVEIW_PATIENT',
  }
}

export const hideReviewPatient = () => {
  return {
    type: 'HIDE_REVEIW_PATIENT',
  }
}

export const hideSavedPatient = () => {
  return {
    type: 'HIDE_SAVED_PATIENT',
  }
}
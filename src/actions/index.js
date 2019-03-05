import axios from 'axios';

const apiUrl = 'http://10.0.2.2:3000'

export const saveNewPatient = ({ NIK, name, placeOfBrith, dateOfBrith, identityAddress, domicileAddress, religion, maritalStatus, occupation, nationality, identityCreatedDate, identityValidDate}) => {
  return () => {
    console.log(`===================`)
    console.log({ NIK, name, placeOfBrith, dateOfBrith, identityAddress, domicileAddress, religion, maritalStatus, occupation, nationality, identityCreatedDate, identityValidDate})
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
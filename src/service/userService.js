
import instance from "../axiosConfig"
import axios from 'axios'

const registerUserCall = async (body) => {
    try {
      const response = await axios.post('http://localhost:8080/auth/signup', body);
      return response.data;
    } catch (err) {
      throwError(err);
    }
  };

const loginUserCall = async (body) =>  {
   const response = await axios.post(`http://localhost:8080/auth/signin`, body)
     return response.data;  
}

const checkLoginKey = () => {
    return instance.get(`auth/checkkey`)
        .then((response) => response.data)
        .catch((err) => {
            throwError(err)
        })
}
const getUserProfile = (username) => {
    return instance.get(`user/${username}`)
        .then((response) => response.data)
        .catch((err) => {
            throwError(err)
        })
}
function throwError (err){
    if (err.response) {
        if(err.response.data.fieldErrors){
            err.response.data.message = err.response.data.fieldErrors[0].field + ": " + err.response.data.fieldErrors[0].message;
        }
        throw err.response.data.message;
    } else if (err.request) {
        throw err.request;
    } else {
        throw err;
    }
}

export {
    registerUserCall,
    loginUserCall,
    checkLoginKey,
    getUserProfile
}
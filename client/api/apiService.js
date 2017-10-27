import Axios from 'axios'

export const apiService = {
    login,
    logout
}

const apiUrl = "http://localhost:8850/api";

//region login
function login(email, password) {
    console.log('api in');
    return Axios.post(`${apiUrl}/Members/login`,{
        email: email,
        password: password
    })
    .then(function (response) {
        console.log(response)
        if(response.status != 200){
            return Promise.reject(response.statusText);
        }

        return {
            id: response.data.userId, 
            token: response.data.id,
            email: email
        };
    })
    .then(user => {
        console.log(user)
        if(user && user.token) {
            localStorage.setItem('user', JSON.stringify(user));
        }

        console.log(localStorage.getItem('user'))
        return user;
    })
}
//endregion

//region logout
function logout(token){
    console.log('api logout');
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    if(user && user.id){
        Axios.post(`${apiUrl}/Members/logout?access_token=${user.token}`);
        localStorage.removeItem('user');
    }
}

//endregion
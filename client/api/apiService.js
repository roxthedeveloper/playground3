import Axios from 'axios'

export const apiService = {
    login,
    logout,
    register,
    getTaskList
}

const apiUrl = "http://localhost:8850/api";

Axios.interceptors.response.use(function (response) {
    //console.log('response intercepted:', response);
    return response;
}, function (error) {
    // Intercept 4XX error and forward
    let res = error.response;
    //console.log('error intercepted:', res);
    return {
        status: res.status,
        statusText: res.statusText,
        data: res.data
    };
});

//region login
function login(email, password) {
    console.log('api login');

    return Axios.post(`${apiUrl}/Members/login`,{
        email: email,
        password: password
    })
    .then(function (response) {
        console.log("response:", response)
        if(response.status != 200){
            return Promise.reject(response);
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
            console.log(localStorage.getItem('user'))
            return user;
        }
    })
}
//endregion

//region logout
function logout(token){
    console.log('api logout');
    let user = JSON.parse(localStorage.getItem('user')); //TODO: move out
    console.log(user)
    if(user && user.id){
        Axios.post(`${apiUrl}/Members/logout?access_token=${user.token}`);
        localStorage.removeItem('user');
    }
}
//endregion

//region registration
function register(email, username, password) {
    console.log('api register');

    return Axios.post(`${apiUrl}/Members`,{
        email: email,
        username: username,
        password: password
    })
    .then(function (response) {
        console.log("response:", response)
        if(response.status != 200){
            return Promise.reject(response);
        }

        return {
            id: response.data.id,
            token: '',
            email: email,
            username: username
        };
    })
    .then(user => {
        console.log('user=>', user)
        if(user && user.id) {
            return user;
        }
    })
}
//endregion

//region getTaskList
function getTaskList(userId, token) {
    console.log('api getTaskList');
    let user = JSON.parse(localStorage.getItem('user')); //TODO: move out
    return Axios.get(`${apiUrl}/WorkEvents?access_token=${user.token}`)
        //.then();
}
//endregion

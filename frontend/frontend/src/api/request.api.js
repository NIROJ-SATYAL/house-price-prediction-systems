import http from 'api/http.api';

export const getUsers = () => {
    return http.get('/user');
}

export const deleteUser = (id) => {
    return http.delete(`/user/${id}`);
}


export const register = (data) => {
    console.log(data);
    return http.post(`/register`, data);
}
export const user = (data) => {

    return http.post(`/user`, data);
}

export const login = (credential) => {
    
    return http.post(`/login`, credential);
}
export const getPrediction = () => {
    return http.get('/prediction');
}

export const deletePrediction = (id) => {
    return http.delete(`/prediction/${id}`);
}
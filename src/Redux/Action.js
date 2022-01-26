import axios from 'axios'
import jwt from 'jwt-decode'

export function LoginNow({ name, password }) {
    return function (dispatch) {
        axios.post('http://localhost:4000/login', {
            Username: name,
            Password: password
        }).then((res) => {
            if (res.data.token) {
                // console.log(res.data)
                // localStorage.setItem(res.data.token ? "Login" : '', res.data.token ? res.data.token : '')
                localStorage.setItem("Login",res.data.token)
                const JWT=jwt(res.data.token)
                dispatch({
                        type: "Login",
                        payload: JWT,
                      });
                window.location('/')
            }else{
                console.log(res.data)
            }
        }).catch(
            (err) => err
        );
    }

}
export function currentCountry({setCountry,Country}){
    return function (dispatch){
        dispatch({
            type:'country',
            payload: Country
        })
    }
}
import axios from 'axios'

export function LoginNow({ name, password }, onSuccess) {
    return function (dispatch) {
        axios.post('http://localhost:4000/login', {
            Username: name,
            Password: password
        }).then((res) => {
            const DATA = res.data
            if (res.data.token) {
                localStorage.setItem("Login", DATA.token)
                dispatch({
                    type: "Login",
                    payload: DATA.login,
                });
                window.location('/')
            } else {
                console.log(res.data)
            }
            onSuccess(true)
        }).catch(
            (err) => {
                onSuccess(false)
            }
        );
    }

}
export function currentCountry({ setCountry, Country }) {
    return function (dispatch) {
        dispatch({
            type: 'country',
            payload: Country
        })
    }
}
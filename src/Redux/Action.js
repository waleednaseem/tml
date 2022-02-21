import axios from 'axios'

export function LoginNow({ name, password }) {
    return function (dispatch) {
        axios.post('http://localhost:4000/login', {
            Username: name,
            Password: password
        }).then((res) => {
            const DATA = res.data
            // console.log(DATA.login.Username)
            if (res.data.token) {
                localStorage.setItem("Login", DATA.token)
                dispatch({
                    type: "Login",
                    payload: DATA.login,
                })
                DATA.login.Username ==='admin'? window.location = '/history': window.location = '/'
                // window.location = '/'
            } else {
                console.log(res.data)
            }
            // onSuccess(true)
        }).catch(
            (err) => {
                // onSuccess(false)
                console.log(err)
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
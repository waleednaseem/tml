const initstate = {
    user: null,
    country:null
}
export default function Reducer(state = initstate, action) {
    switch (action.type) {
        case 'Login':
            return { ...state, user: action.payload }
        case 'country':
            return {...state, country: action.payload}
        default:
            return state
    }
}
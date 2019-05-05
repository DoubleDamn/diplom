const initState = '';

export default function Search (state = initState, action) {
    if (action.type === 'FIND_COUNTRY') {
        return action.payload
    }
    return state
}
export const fetch_reducer = (state = [], action) => {
    switch (action.type) {
        case ("ADD_DATA"):
            return action.data
        default:
            return state

    }
}
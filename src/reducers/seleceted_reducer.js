export const selected_reducer = (state = 1, action) => {
    switch (action.type) {
        case "SELECT":
        //    let key = `r${action.payload}`
            return action.payload
        default:
            return state
    }
}
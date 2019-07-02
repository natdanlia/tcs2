export const child_reducer = (state = 0, action) => {
    switch (action.type) {
        case ("ADD_CHILDREN"):
            return parseInt(action.num)
        default:
            return state
            
    }
}
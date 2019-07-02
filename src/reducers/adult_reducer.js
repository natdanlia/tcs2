

export function adult_reducer(state = 1, action) {
    switch (action.type) {
        case ("ADD_ADULT"):
            return parseInt(action.num)
        default:
            return state
    }
}


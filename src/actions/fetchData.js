export function fetchData() {
    return (dispatch) => {
        dispatch({ type: 'START_DATA_REQUEST' });
        return fetch('https://tcs-backend.herokuapp.com/rooms')
            .then(response => response.json())
            .then(data => dispatch({ type: 'ADD_DATA', data }));
    };
}

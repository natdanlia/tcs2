import { adult_reducer } from './adult_reducer'
import { combineReducers } from 'redux'
import { child_reducer } from './child_reducer';
import { fetch_reducer } from './fetch_reducer';
import { selected_reducer } from './seleceted_reducer';



const rootReducer = combineReducers({
    adult: adult_reducer,
    child: child_reducer,
    data: fetch_reducer,
    isSelected: selected_reducer,
   
})

export default rootReducer
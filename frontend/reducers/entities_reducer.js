import { combineReducers } from "redux";
import benchesReducer from "./benches_reducer";
import usersReducer from "./users_reducer";
import filterReducer from './filter_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    benches: benchesReducer,
    filters: filterReducer
});

export default entitiesReducer;
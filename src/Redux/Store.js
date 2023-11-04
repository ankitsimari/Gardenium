import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as PlantReducer} from "./ProductRoute/Reducer";
import { reducer as AuthReducer} from "./AuthRouter/reducer";
import thunk from "redux-thunk";

const rootRouter = combineReducers({PlantReducer,AuthReducer})

export const Store = legacy_createStore(rootRouter,applyMiddleware(thunk));


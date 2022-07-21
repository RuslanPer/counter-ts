import {combineReducers, createStore} from "redux";
import {changeSettingsAC, counterReducer, incrementAC, resetAC} from './counter-reducer';

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

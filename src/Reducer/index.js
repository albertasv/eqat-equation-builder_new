import { createStore, combineReducers, applyMiddleware } from 'redux';
import LayoutReducer from './LayoutReducer';
import EditorReducer from './EditorReducer';
import DataReducer from './DataReducer';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import commonSaga from '../Saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

let initialState = {

}

let rootReducer = combineReducers({
    router: connectRouter(history),
    layout: LayoutReducer,
    editor: EditorReducer,
    data: DataReducer,
});

export default function configureStore(initialState={}) {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
            )
        )
    );

    sagaMiddleware.run(commonSaga);

    return store;
}

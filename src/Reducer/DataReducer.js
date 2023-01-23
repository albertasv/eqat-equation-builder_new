import { createReducer } from 'redux-act';
import { setDataObject } from '../Action/DataActions';

export default createReducer({
    [setDataObject]: (state, payload) => {
        if (state.dataObject === null) {
            return {
                ...state,
                dataObject: payload
            }
        }
        return state;
    }
}, {
    dataObject: null,
    hasUpdates: false,
});

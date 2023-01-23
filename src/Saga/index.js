import {call, put, takeEvery, delay, select} from 'redux-saga/effects'
import layoutSaga from './Layout';
import editorSaga from './Editor';
import { setEditorReadyStatus, setEditorReadyStatusPercent, setEditorInitialLayoutState } from '../Action/LayoutActions';
import StartupLayputBuilder from '../Api/StartupLayputBuilder';
import { setDataObject } from '../Action/DataActions';
import { PullDataObject } from '../Api/DataObject';
import { BuildDataObject } from '../Data';

function* init() {
    try {
        yield put(setEditorReadyStatusPercent(10));

        const rawDataObject = yield call(PullDataObject);
        // const initProps = yield call(?);
        // const savedInitProps = yield call(?);

        const dataObject = yield call(BuildDataObject, rawDataObject);
        yield put(setDataObject(dataObject));
    
        yield put(setEditorReadyStatusPercent(40));
    
        const layoutCfg = yield call(StartupLayputBuilder, dataObject);
        
        yield put(setEditorInitialLayoutState({
            ...layoutCfg
        }));
    
        yield delay(200);
        yield put(setEditorReadyStatusPercent(75));
        yield delay(500);
        yield put(setEditorReadyStatusPercent(100));
        yield put(setEditorReadyStatus());
    } catch (e) {
        // FIXME: implement handler
    }
}

function* commonSaga() {

    yield* init();

    yield* layoutSaga();
    yield* editorSaga();
    
}

export default commonSaga;

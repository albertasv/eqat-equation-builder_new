import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import {openVariableEditor, openChemFormulaEditor, openMultipleChoiceEditor, openMathFormulaEditor, openLearnosityEditor} from '../Action/EditorActions';
import {pushEditorToEditline, popEditorToEditline, setActiveEditorInEditline, stretchingActiveEditorInEditline, toggleSingleViewMode} from '../Action/LayoutActions';
import {EDITOR_Q_VARIABLE, EDITOR_Q_CHEM_FORMULA, EDITOR_Q_MULTIPLE_CHOICE, EDITOR_Q_MATH_FORMULA, EDITOR_Q_LEARNOSITY} from '../Component/Editor/types';

function* resetEditline(editlineId, editorId, index, closeCurrent = false) {
    const elId = editlineId || (yield select(state => state.layout.activeEditLine));
    const editLinePool = yield select(state => state.layout.editLine);
    const editLine = editLinePool.filter(line => line.id === elId)[0];
    let delta = editLine.stack.length - index;
    while ( closeCurrent ? delta >= 1 : delta > 1 ) {
        yield put(popEditorToEditline({editlineId: elId}));
        --delta;
    }
    return elId;
}

function* doOpenVariableEditor({payload, editlineId, editorId, index}) {
    yield put(pushEditorToEditline(
        {
            editlineId: yield resetEditline(editlineId, editorId, index),
            editorId: EDITOR_Q_VARIABLE,
            data: payload,
        }
    ));
}

function* doOpenChemFormulaEditor({payload, editlineId, editorId, index}) {
    yield put(pushEditorToEditline(
        {
            editlineId: yield resetEditline(editlineId, editorId, index),
            editorId: EDITOR_Q_CHEM_FORMULA,
            data: payload,
            singleView: true
        }
    ));
}

function* doSetActiveEditorInEditline({payload, editlineId, editorId, index}) {
    yield resetEditline(editlineId, editorId, index, (payload && payload.closeCurrent));
}

function* doStretchingActiveEditorInEditline({editlineId, editorId, index}) {
    yield resetEditline(editlineId, editorId, index);
    yield put(toggleSingleViewMode({editlineId, editorId}));
}

function* doOpenMultipleChoiceEditor({payload, editlineId, editorId, index}) {
    yield put(pushEditorToEditline(
        {
            editlineId: yield resetEditline(editlineId, editorId, index),
            editorId: EDITOR_Q_MULTIPLE_CHOICE,
            data: payload
        }
    ));
}

function* doOpenMathFormulaEditor({payload, editlineId, editorId, index}) {
    yield put(pushEditorToEditline(
        {
            editlineId: yield resetEditline(editlineId, editorId, index),
            editorId: EDITOR_Q_MATH_FORMULA,
            data: payload
        }
    ));
}

function* doOpenLearnosityEditor({editlineId, editorId, index}) {
    yield put(pushEditorToEditline(
        {
            editlineId: yield resetEditline(editlineId, editorId, index),
            editorId: EDITOR_Q_LEARNOSITY,
            singleView: true
        }
    ));
}

function* editorSaga() {
    yield takeEvery(stretchingActiveEditorInEditline.getType(), doStretchingActiveEditorInEditline);
    yield takeEvery(setActiveEditorInEditline.getType(), doSetActiveEditorInEditline);
    yield takeEvery(openVariableEditor.getType(), doOpenVariableEditor);
    yield takeEvery(openChemFormulaEditor.getType(), doOpenChemFormulaEditor);
    yield takeEvery(openMultipleChoiceEditor.getType(), doOpenMultipleChoiceEditor);
    yield takeEvery(openMathFormulaEditor.getType(), doOpenMathFormulaEditor);
    yield takeEvery(openLearnosityEditor.getType(), doOpenLearnosityEditor);
}

export default editorSaga;

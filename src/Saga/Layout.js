import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import {naviNavigation, showLeftPopover, closeLeftPopover, pinLeftPopover, showLeftSidePanel, setActiveEditline, naviProperties, naviExtraInfo, naviLinks, naviPreviewE4, naviPreviewWAS, naviXml, naviBody, naviVariables, naviHistory, naviHelp, showRightSidePanel, unpinRightSidePanel, naviActionToolbar, naviPreviewE4InLeftSidePanel, pinEditorToLeftSidePanel, unpinLeftSidePanel, onMouseMoveNewPosition, setBottomHeightForRightSidePanel, setWidthForRightSidePanel, setResizerLastValue, setWidthForLeftSidePanel, } from '../Action/LayoutActions';
import {EDITOR_Q_NAVIGATION, EDITLINE_XML, EDITLINE_BODY, EDITLINE_VARIABLES, EDITOR_Q_LOCAL_CHANGE_HISTORY, EDITOR_Q_HELP, EDITLINE_E4, EDITLINE_WAS, EDITLINE_PROPERTIES, EDITLINE_EXTRA_INFO, EDITLINE_LINKS, EDITOR_Q_ACTION_TOOLBAR, EDITOR_Q_PREVIEW_E4, EDITOR_Q_PREVIEW_WAS} from '../Component/Editor/types';

function* showNavigationInPopover(action) {
    const leftSidePanel = yield select(state => state.layout.panels.leftSidePanel)
    if (leftSidePanel && leftSidePanel.visible && (leftSidePanel.editorId === EDITOR_Q_NAVIGATION)) {
        /** ;) */
    } else {
        if (yield select(state => state.layout.panels.leftPopover.visible)) {
            yield put(closeLeftPopover());
        } else {
            yield put(showLeftPopover({editorId: EDITOR_Q_NAVIGATION}));
        }
    }
}
function* doPinLeftPopover(action) {
    yield put(showLeftSidePanel({
        editorId: yield select(state => state.layout.panels.leftPopover.editorId)
    }));
    yield put(closeLeftPopover());
}

function* showQuestionXMLEditline() {
    yield put(setActiveEditline({editlineId: EDITLINE_XML}));
}
function* showQuestionBodyEditline() {
    yield put(setActiveEditline({editlineId: EDITLINE_BODY}));
}
function* showQuestionVariableEditline() {
    yield put(setActiveEditline({editlineId: EDITLINE_VARIABLES}));
}
function* showQuestionPreviewE4Editline() {
    yield* checkUnpin(EDITOR_Q_PREVIEW_E4);
    yield* checkUnpin(EDITOR_Q_PREVIEW_WAS);

    yield put(setActiveEditline({editlineId: EDITLINE_E4}));
}
function* showQuestionPreviewWASEditline() {
    yield* checkUnpin(EDITOR_Q_PREVIEW_E4);
    yield* checkUnpin(EDITOR_Q_PREVIEW_WAS);
    
    yield put(setActiveEditline({editlineId: EDITLINE_WAS}));
}
function* showNaviPropertiesEditline() {
    yield put(setActiveEditline({editlineId: EDITLINE_PROPERTIES}));
}
function* showNaviExtraInfoEditline() {
    yield put(setActiveEditline({editlineId: EDITLINE_EXTRA_INFO}));
}
function* showNaviLinksEditline() {
    yield put(setActiveEditline({editlineId: EDITLINE_LINKS}));
}

// function* doPinRightPopover(action) {
//     yield put(showRightSidePanel({
//         editorId: yield select(state => state.layout.panels.rightPopover.editorId)
//     }));
//     yield put(closeRightPopover());
// }

function* showActionToolbarInToolbar(editorId) {
    yield* showXXXInToolbar(EDITOR_Q_ACTION_TOOLBAR, true);
}
function* showHistoryInToolbar(editorId) {
    yield* showXXXInToolbar(EDITOR_Q_LOCAL_CHANGE_HISTORY);
}
function* showHelpInToolbar(action) {
    yield* showXXXInToolbar(EDITOR_Q_HELP);
}
function* showXXXInToolbar(editorId, top = false) {
    const rightSidePanel = yield select(state => state.layout.panels.rightSidePanel);
    const eid = rightSidePanel && (top ? rightSidePanel.topEditorId: rightSidePanel.bottomEditorId );

    if (rightSidePanel && rightSidePanel.visible && (eid === editorId)) {
        yield put(unpinRightSidePanel({top}));
    } else {
        yield put(showRightSidePanel({
            editorId: editorId,
            top
        }));
    }
}

function* showPreviewInLeftSidePanel(action) {
    yield put(showLeftSidePanel({
        editorId: EDITOR_Q_PREVIEW_E4
    }));
}

function* doPinEditorToLeftSidePanel({editlineId, editorId, index}) {
    yield put(showLeftSidePanel({
        editorId
    }));
    yield* showQuestionBodyEditline();
}

function* checkUnpin(checkForId) {
    const pinnedEditorId = yield select(state => state.layout.panels.leftSidePanel.editorId);
    if (pinnedEditorId === checkForId) {
        yield put(unpinLeftSidePanel());
    }
}

//#region resizer
function* doMouseMoveNewPosition(action) {
    const resizerState = yield select(state => state.layout.toolbarResizer);

    let scope = null;
    if (resizerState.active === 'right-side-panel-bottom') {
        scope = yield* doMouseMoveNewPositionForBottomOfRightSidePanel(action, resizerState);
    }
    if (resizerState.active === 'right-side-panel') {
        scope = yield* doMouseMoveNewPositionForRightSidePanel(action, resizerState);
    }
    if (resizerState.active === 'left-side-panel') {
        scope = yield* doMouseMoveNewPositionForLeftSidePanel(action, resizerState)
    }

    yield put(setResizerLastValue(scope.newPosition));

    const delta = scope.newPosition - resizerState.lastValue;
    const targetValue = scope.applyDelta(scope.oldTargetValue, delta);
    yield put(scope.action(targetValue));
}

function* doMouseMoveNewPositionForBottomOfRightSidePanel(action, resizerState) {
    const oldTargetValue = yield select(state => state.layout.panels.rightSidePanel.bottomHeight);
    return {
        newPosition: action.payload.y,
        action: setBottomHeightForRightSidePanel,
        oldTargetValue,
        applyDelta: (oldTargetValue, delta) => oldTargetValue - delta,
    }
}
function* doMouseMoveNewPositionForRightSidePanel(action, resizerState) {
    const oldTargetValue = yield select(state => state.layout.panels.rightSidePanel.width);
    return {
        newPosition: action.payload.x,
        action: setWidthForRightSidePanel,
        oldTargetValue,
        applyDelta: (oldTargetValue, delta) => oldTargetValue - delta,
    }
}
function* doMouseMoveNewPositionForLeftSidePanel(action, resizerState) {
    const oldTargetValue = yield select(state => state.layout.panels.leftSidePanel.width);
    return {
        newPosition: action.payload.x,
        action: setWidthForLeftSidePanel,
        oldTargetValue,
        applyDelta: (oldTargetValue, delta) => oldTargetValue + delta,
    }
}
//#endregion resizer

function* layoutSaga() {
    yield takeEvery(naviNavigation.getType(), showNavigationInPopover);
    yield takeEvery(pinLeftPopover.getType(), doPinLeftPopover);

    yield takeEvery(naviProperties.getType(), showNaviPropertiesEditline);
    yield takeEvery(naviExtraInfo.getType(), showNaviExtraInfoEditline);
    yield takeEvery(naviLinks.getType(), showNaviLinksEditline);
    yield takeEvery(naviPreviewE4.getType(), showQuestionPreviewE4Editline);
    yield takeEvery(naviPreviewWAS.getType(), showQuestionPreviewWASEditline);
    yield takeEvery(naviXml.getType(), showQuestionXMLEditline);
    yield takeEvery(naviBody.getType(), showQuestionBodyEditline);
    yield takeEvery(naviVariables.getType(), showQuestionVariableEditline);

    yield takeEvery(naviActionToolbar.getType(), showActionToolbarInToolbar);
    yield takeEvery(naviHistory.getType(), showHistoryInToolbar);
    yield takeEvery(naviHelp.getType(), showHelpInToolbar);

    yield takeEvery(naviPreviewE4InLeftSidePanel.getType(), showPreviewInLeftSidePanel);

    yield takeEvery(pinEditorToLeftSidePanel.getType(), doPinEditorToLeftSidePanel);

    yield takeEvery(onMouseMoveNewPosition.getType(), doMouseMoveNewPosition);
}

export default layoutSaga;

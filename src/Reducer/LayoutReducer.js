import React from 'react';
import { createReducer } from 'redux-act';
import {showLeftPopover, closeLeftPopover, toggleLeftToolbar, showLeftSidePanel, unpinLeftSidePanel, unpinRightSidePanel, showRightPopover, closeRightPopover, showRightSidePanel, setEditorReadyStatus, setEditorReadyStatusPercent, setEditorInitialLayoutState, startResizeHeightForRightSidePanel, startResizeWidthForLeftSidePanel, stopResizeToolbar, onMouseMoveNewPosition, startResizeWidthForRightSidePanel, setWidthForRightSidePanel, setWidthForLeftSidePanel, setBottomHeightForRightSidePanel, setResizerLastValue} from '../Action/LayoutActions';
import {setActiveEditline, pushEditorToEditline, popEditorToEditline, toggleSingleViewMode} from '../Action/LayoutActions';
import {EDITLINE_BODY}  from '../Component/Editor/types';

export default createReducer({
    [showLeftPopover]: (state, {editorId}) => ({
        ...state,
        panels: {
            ...state.panels,
            leftPopover: {
                ...state.panels.leftPopover,
                visible: true,
                editorId: editorId
            },
        }
    }),
    [closeLeftPopover]: state => ({
        ...state,
        panels: {
            ...state.panels,
            leftPopover: {
                ...state.panels.leftPopover,
                visible: false,
            },
        }
    }),
    [showLeftSidePanel]: (state, {editorId}) => ({
        ...state,
        panels: {
            ...state.panels,
            leftSidePanel: {
                ...state.panels.leftSidePanel,
                visible: true,
                editorId
            }
        }
    }),
    [unpinLeftSidePanel]: state => ({
        ...state,
        panels: {
            ...state.panels,
            leftSidePanel: {
                ...state.panels.leftSidePanel,
                visible: false,
                editorId: null,
            }
        }
    }),
    [showRightPopover]: (state, {editorId}) => ({
        ...state,
        panels: {
            ...state.panels,
            rightPopover: {
                ...state.panels.rightPopover,
                visible: true,
                editorId: editorId
            },
        }
    }),
    [closeRightPopover]: state => ({
        ...state,
        panels: {
            ...state.panels,
            rightPopover: {
                ...state.panels.rightPopover,
                visible: false,
            },
        }
    }),
    [showRightSidePanel]: (state, {editorId, top}) => ({
        ...state,
        panels: {
            ...state.panels,
            rightSidePanel: {
                ...state.panels.rightSidePanel,
                visible: true,
                topEditorId: (top ? editorId : state.panels.rightSidePanel.topEditorId),
                bottomEditorId: (!top ? editorId : state.panels.rightSidePanel.bottomEditorId),
            }
        }
    }),
    [unpinRightSidePanel]: (state, {top}) => ({
        ...state,
        panels: {
            ...state.panels,
            rightSidePanel: {
                ...state.panels.rightSidePanel,
                visible: !(top ? (state.panels.rightSidePanel.bottomEditorId === null) : (state.panels.rightSidePanel.topEditorId === null)),
                topEditorId: (top ? null : state.panels.rightSidePanel.topEditorId),
                bottomEditorId: (!top ? null : state.panels.rightSidePanel.bottomEditorId),
            }
        }
    }),
    [toggleLeftToolbar]: state => ({
        ...state,
        panels: {
            ...state.panels,
            leftToolbar: {
                ...state.panels.leftToolbar,
                expanded: !state.panels.leftToolbar.expanded,
            }
        }
    }),
    [setActiveEditline]: (state, {editlineId}) => ({
        ...state,
        activeEditLine: editlineId
    }),
    [pushEditorToEditline]: (state, {editlineId, editorId, data, singleView}) => ({
        ...state,
        editLine: state.editLine.map(line => {
            if (line.id === editlineId) {
                return ({
                    ...line,
                    stack: [
                        ...line.stack,
                        {
                            editorId: editorId,
                            data,
                            singleView: !!singleView || false
                        }
                    ]
                })
            }
            return line;
        })
    }),
    [popEditorToEditline]: (state, {editlineId}) => ({
        ...state,
        editLine: state.editLine.map(line => {
            if (line.id === editlineId) {
                line.stack.pop();
                return ({
                    ...line,
                    stack: line.stack
                })
            }
            return line;
        })
    }),
    [toggleSingleViewMode]: (state, {editlineId, editorId}) => ({
        ...state,
        editLine: state.editLine.map(line => {
            if (line.id === editlineId) {
                return ({
                    ...line,
                    stack: line.stack.map(editor => {
                        if (editor.editorId === editorId) {
                            editor.singleView = !editor.singleView;
                        }
                        return editor;
                    })
                })
            }
            return line;
        })
    }),
    [setEditorReadyStatus]: (state, payload) => ({
        ...state,
        readyStatus: (payload && payload.status) || true
    }),
    [setEditorReadyStatusPercent]: (state, readyPercent) => ({
        ...state,
        readyPercent
    }),
    [setEditorInitialLayoutState]: (state, payload) => ({
        ...state,
        ...payload
    }),

    [startResizeHeightForRightSidePanel]: (state, {y}) => ({
        ...state,
        toolbarResizer: {
            active: 'right-side-panel-bottom',
            lastValue: y,
        }
    }),
    [setResizerLastValue]: (state, lastValue) => ({
        ...state,
        toolbarResizer: {
            ...state.toolbarResizer,
            lastValue,
        }
    }),
    [startResizeWidthForRightSidePanel]: (state, {x}) => ({
        ...state,
        toolbarResizer: {
            active: 'right-side-panel',
            lastValue: x,
        }
    }),
    [startResizeWidthForLeftSidePanel]: (state, {x}) => ({
        ...state,
        toolbarResizer: {
            active: 'left-side-panel',
            lastValue: x,
        }
    }),
    [stopResizeToolbar]: state => ({
        ...state,
        toolbarResizer: {
            active: null,
        }
    }),
    [setWidthForRightSidePanel]: (state, width) => ({
        ...state,
        panels: {
            ...state.panels,
            rightSidePanel: {
                ...state.panels.rightSidePanel,
                width
            }
        }
    }),
    [setWidthForLeftSidePanel]: (state, width) => ({
        ...state,
        panels: {
            ...state.panels,
            leftSidePanel: {
                ...state.panels.leftSidePanel,
                width
            }
        }
    }),
    [setBottomHeightForRightSidePanel]: (state, bottomHeight) => ({
        ...state,
        panels: {
            ...state.panels,
            rightSidePanel: {
                ...state.panels.rightSidePanel,
                bottomHeight
            }
        }
    }),
}, {
    readyStatus: false,
    readyPercent: 0,
    panels: {},
    editLine: [],
    activeEditLine: EDITLINE_BODY,
    toolbarResizer: {
        active: null,
        lastValue: -1,
    }
});

import { createAction } from 'redux-act';

export const toggleLeftToolbar = createAction();

export const showLeftSidePanel = createAction();
export const unpinLeftSidePanel = createAction();

export const showLeftPopover = createAction();
export const closeLeftPopover = createAction();
export const pinLeftPopover = createAction();

export const showRightSidePanel = createAction();
export const unpinRightSidePanel = createAction();

export const showRightPopover = createAction();
export const closeRightPopover = createAction();

export const naviProperties = createAction();
export const naviExtraInfo = createAction();
export const naviLinks = createAction();
export const naviNavigation = createAction();
export const naviBody = createAction();
export const naviVariables = createAction();
export const naviXml = createAction();

export const naviPreviewE4 = createAction();
export const naviPreviewWAS = createAction();
export const naviPreviewE4InLeftSidePanel = createAction();
export const naviPreviewWASInLeftSidePanel = createAction();

export const naviActionToolbar = createAction();
export const naviHelp = createAction();
export const naviHistory = createAction();
export const naviLibrary = createAction();

export const setActiveEditline = createAction('setActiveEditline');
export const setActiveEditorInEditline = createAction('setActiveEditorInEditline');
export const stretchingActiveEditorInEditline = createAction('stretchingActiveEditorInEditline');
export const pushEditorToEditline = createAction('pushEditorToEditline');
export const popEditorToEditline = createAction('popEditorToEditline');
export const toggleSingleViewMode = createAction('toggleSingleViewMode');
export const pinEditorToLeftSidePanel = createAction('pinEditorToLeftSidePanel');

export const setEditorReadyStatus = createAction('setEditorIsReadyStatus');
export const setEditorReadyStatusPercent = createAction('setEditorReadyStatusPercent');
export const setEditorInitialLayoutState = createAction('setEditorInitialLayoutState');

// remove it
export const tryToggleLeftToolbar = createAction();
// 

export const startResizeWidthForRightSidePanel = createAction('startResizeWidthForRightSidePanel');
export const startResizeHeightForRightSidePanel = createAction('startResizeHeightForRightSidePanel');
export const startResizeWidthForLeftSidePanel = createAction('startResizeWidthForLeftSidePanel');
export const stopResizeToolbar = createAction('stopResizeToolbar');
export const onMouseMoveNewPosition = createAction('onMouseMoveNewPosition');
export const setResizerLastValue = createAction('setResizerLastValue');

export const setWidthForRightSidePanel = createAction('setWidthForRightSidePanel');
export const setWidthForLeftSidePanel = createAction('setWidthForLeftSidePanel');
export const setBottomHeightForRightSidePanel = createAction('setBottomHeightForRightSidePanel');

import React from 'react'

import QSaveCtrl from "../Component/QSaveCtrl";
import { naviProperties, naviExtraInfo, naviLinks, naviBody, naviVariables, naviXml, naviPreviewE4, naviPreviewWAS, naviNavigation, naviHelp, naviHistory, naviLibrary, naviActionToolbar, naviPreviewE4InLeftSidePanel } from "../Action/LayoutActions";
import svgHistory from "../Assets/History.svg"
import svgHelp from "../Assets/InfoHelp.svg"
import { EDITOR_Q_ACTION_TOOLBAR, EDITOR_Q_LOCAL_CHANGE_HISTORY, EDITOR_Q_HELP, EDITLINE_PROPERTIES, EDITLINE_EXTRA_INFO, EDITLINE_LINKS, EDITLINE_BODY, EDITLINE_XML, EDITLINE_E4, EDITLINE_WAS, EDITOR_Q_PREVIEW_E4, EDITOR_Q_PREVIEW_WAS } from '../Component/Editor/types';
import {Icon} from 'semantic-ui-react';
import { GlobalHeadBreadcrumb } from '../Component/GlobalHeadBreadcrumb';

export function BuildPanelsStartupState(qType) {
    let panels = {
        ...DefaultPanels,
        ...Panels
    };

    panels.leftToolbar.actions = BuildActionsForLeftPanel(qType);
    panels.topToolbar.actions = BuildActionsForTopPanel(qType);
    panels.rightToolbar.actionsTop = BuildActionsTopForRightPanel(qType);
    panels.rightToolbar.actionsBottom = BuildActionsBottomForRightPanel(qType);

    return panels;
}

function BuildActionsTopForRightPanel(qType) {
    let list = [];

    list.push({
        id: "q-tool-actions",
        title: "properties & actions",
        action: naviActionToolbar,
        isActiveIfEditorId: EDITOR_Q_ACTION_TOOLBAR
    });
    
    return list;
}
function BuildActionsBottomForRightPanel(qType) {
    let list = [];

    list.push({
        id: "q-tool-history",
        title: "history",
        action: naviHistory,
        isActiveIfEditorId: EDITOR_Q_LOCAL_CHANGE_HISTORY
    });

    list.push({
        id: "q-tool-help",
        title: "help",
        action: naviHelp,
        isActiveIfEditorId: EDITOR_Q_HELP
    });

    return list;
}

function BuildActionsForTopPanel(qType) {
    let list = [];

    if (qType === 53) {
        list.push({
            id: "q-save-ctrl",
            component: <GlobalHeadBreadcrumb />,
        });
        list.push({
            id: "q-save-ctrl",
            side: "center",
            component: <QSaveCtrl />,
        });
        // list.push({
        //     id: "help",
        //     side: "right",
        //     subtitle: "help",
        //     icon: svgHelp,
        //     iconText: "Help View",
        //     action: naviHelp,
        // });
    }

    return list;

    return [
        {
            id: "title",
            text: "Question for XYZ chanter in C.123",
            subtext: "Chem and math exam"
        },
        {
            id: "library",
            side: "right",
            subtitle: "library",
            icon: svgHelp,
            iconText: "Library View",
            action: naviLibrary,
        },
        {
            id: "history",
            side: "right",
            subtitle: "history",
            icon: svgHistory,
            iconText: "Question History View",
            action: naviHistory,
        },
        {
            id: "help",
            side: "right",
            subtitle: "help",
            icon: svgHelp,
            iconText: "Help View",
            action: naviHelp,
        },
        {
            id: "q-save-ctrl",
            side: "center",
            component: <QSaveCtrl />,
        }
    ];
}

function BuildActionsForLeftPanel(qType) {

    let list = [];

    if (qType === 53) {
        list.push({
            id: "q-metadata-properties",
            title: "Question Properties",
            icon: 'cog',
            action: naviProperties,
            isActiveIfEditorLine: EDITLINE_PROPERTIES,
        });
        list.push({
            id: "q-metadata-extra-info",
            title: "Question Extra Info",
            icon: 'sticky note outline',
            action: naviExtraInfo,
            isActiveIfEditorLine: EDITLINE_EXTRA_INFO,
        });
        list.push({
            id: "q-metadata",
            title: "Question Links",
            icon: 'linkify',
            action: naviLinks,
            isActiveIfEditorLine: EDITLINE_LINKS,
        });
        list.push({
            type: 'splitter',
        });
        list.push({
            id: "q-body",
            title: "Question Body",
            icon: 'flask',
            action: naviBody,
            isActiveIfEditorLine: EDITLINE_BODY,
        });
        list.push({
            id: "q-xml-editor",
            title: "Xml Editor",
            icon: 'file code outline',
            action: naviXml,
            isActiveIfEditorLine: EDITLINE_XML,
        });
        list.push({
            type: 'splitter',
        });
        list.push({
            id: "preview-e4",
            title: "E4 Preview",
            icon: "search",
            action: naviPreviewE4,
            isActiveIfEditorLine: EDITLINE_E4,
            isPinnedIfEditor: EDITOR_Q_PREVIEW_E4,
        });
        list.push({
            id: "preview-was",
            title: "WAS Preview",
            iconComponent: <Icon.Group size='large'>
                <Icon name='search' />
                <Icon corner='top right' name='asterisk' />
            </Icon.Group>,
            action: naviPreviewWAS,
            isActiveIfEditorLine: EDITLINE_WAS,
            isPinnedIfEditor: EDITOR_Q_PREVIEW_WAS,
        });
    }

    return list;

    return [
        {
            id: "q-variables",
            title: "Variables",
            icon: 'calculator',
            action: naviVariables,
        },
        {
            type: 'splitter',
            color: 'green',
        },
        {
            bottom: true,
            id: "q-navigation",
            title: "Navigation",
            icon: 'list alternate outline',
            action: naviNavigation,
        },
    ];
}

const DefaultPanels = {
    leftSidePanel: {
        width: 300,
        visible: false,
        editorId: null,
    },
    leftPopover: {
        visible: false,
        editorId: null,
    },

    //#region; TODO: remove, not needed with rightSige tool panel ?
    rightSidePanel: {
        width: 300,
        bottomHeight: 300,
        visible: false,
        topEditorId: null,
        bottomEditorId: null,
    },
    rightPopover: {
        visible: false,
        editorId: null,
    }
    //#endregion
}

// TODO: need to add visible field to panels. currentlly uses [] as marker of visibility.

const Panels = {
    contentStatusbar: false,
    topToolbar: {
        actions: []
    },
    leftToolbar: {
        expanded: false,
        topHelp: null,
        bottomHelp: null,
        actions: [],
    },
    rightToolbar: {
        actionsTop: [],
        actionsBottom: [],
    }
};

export default Panels;

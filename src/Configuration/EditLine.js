import React from 'react';

import { EDITLINE_PROPERTIES, EDITOR_Q_PROPERTY, EDITLINE_EXTRA_INFO, EDITOR_Q_EXTRA_INFO, EDITLINE_LINKS, EDITOR_Q_LINKS, EDITLINE_BODY, EDITOR_Q_BODY, EDITLINE_VARIABLES, EDITOR_Q_VARIABLE_LIST, EDITLINE_XML, EDITOR_Q_XML, EDITLINE_E4, EDITOR_Q_PREVIEW_E4, EDITLINE_WAS, EDITOR_Q_PREVIEW_WAS, EDITOR_Q_LEARNOSITY, EDITOR_Q_LEARNOSITY_TYPE_WRAPPER } from '../Component/Editor/types';

export function BuildEditLineStartupState(qType) {
    let list = [];

    list.push({
        id: EDITLINE_PROPERTIES,
        stack: [
            {
                editorId: EDITOR_Q_PROPERTY
            },
        ]
    });
    list.push({
        id: EDITLINE_EXTRA_INFO,
        stack: [
            {
                editorId: EDITOR_Q_EXTRA_INFO
            },
        ]
    });
    list.push({
        id: EDITLINE_LINKS,
        stack: [
            {
                editorId: EDITOR_Q_LINKS
            },
        ]
    });
    list.push({
        id: EDITLINE_BODY,
        stack: [
            {
                editorId: (qType === 53) ? EDITOR_Q_LEARNOSITY_TYPE_WRAPPER : EDITOR_Q_BODY,
            }
        ]
    });
    list.push({
        id: EDITLINE_XML,
        stack: [
            {
                editorId: EDITOR_Q_XML
            }
        ]
    });
    list.push({
        id: EDITLINE_E4,
        stack: [
            {
                editorId: EDITOR_Q_PREVIEW_E4
            }
        ]
    });
    list.push({
        id: EDITLINE_WAS,
        stack: [
            {
                editorId: EDITOR_Q_PREVIEW_WAS
            }
        ]
    });

    return list;
}

// const EditLine = [
//     {
//         id: EDITLINE_VARIABLES,
//         stack: [
//             {
//                 editorId: EDITOR_Q_VARIABLE_LIST,
//                 singleView: false
//             }
//         ]
//     },
// ];

// export default EditLine;



/*
{
            id: EDITLINE_BODY,
            stack: [
                {
                    editorId: EDITOR_Q_LEARNOSITY_TYPE_WRAPPER,
                }
            ]
        },
{
            id: EDITLINE_BODY,
            stack: [
                {
                    editorId: EDITOR_Q_BODY,
                },
                {
                    editorId: "q-multiple-choice",
                    data: {},
                    singleView: true
                }
            ]
        },
*/

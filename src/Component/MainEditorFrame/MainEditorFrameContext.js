import React from 'react';

export const MainEditorFrameContext = React.createContext({
    editlineId: null,
    editorId: null,
    index: null,
    data: null,
    fire: action => {  }
});

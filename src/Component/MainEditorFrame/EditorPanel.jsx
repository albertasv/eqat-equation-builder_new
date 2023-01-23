import React, {Component} from "react";
import Editor from "../Editor";
import {setActiveEditorInEditline} from '../../Action/LayoutActions';
import {MainEditorFrameContext} from '../MainEditorFrame/MainEditorFrameContext';

export default class EditorPanel extends Component {
    static contextType = MainEditorFrameContext;
    coverClickAction = () => {
        this.context.fire(setActiveEditorInEditline());
    }
    render() {
        return (
            <div className="xuiPanel xuiPanelBorderAndBG">
                <Editor />
                <div className="xui_STASHED_COVER" onClick={this.coverClickAction}></div>
            </div>
        )
    }
}

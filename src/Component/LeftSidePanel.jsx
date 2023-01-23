import React, {Component} from "react";
import { connect } from 'react-redux';
import "./LeftSidePanel.css";
import Editor from "./Editor";
import {unpinLeftSidePanel, startResizeWidthForLeftSidePanel} from '../Action/LayoutActions';
import PanelToolbar from './PanelToolbar';

export class LeftSidePanel extends Component {
    startResizeWidth = e => {
        this.props.startResizeWidth({x: e.screenX, y: e.screenY});
    }
    render() {
        const {editorId, close} = this.props;
        return (
            <div style={{width: this.props.width}} 
                className="xuiLeftSidePanel xuiPanelBorderAndBG"
            >
                <div className="xuiVResizer xuiNoSelect" onMouseDown={this.startResizeWidth}></div>

                <Editor type={editorId} />
            </div>
        )
    }
}

export default connect(
    state => ({
        ...state.layout.panels.leftSidePanel
    }),
    dispatch => ({
        close: () => dispatch(unpinLeftSidePanel()),
        startResizeWidth: data => dispatch(startResizeWidthForLeftSidePanel(data))
    })
)(LeftSidePanel);

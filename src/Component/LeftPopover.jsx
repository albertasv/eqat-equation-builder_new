import React, {Component} from "react";
import { connect } from 'react-redux';
import "./RootLayour.css";
import Editor from "./Editor";
import {closeLeftPopover, pinLeftPopover} from '../Action/LayoutActions';
import PanelToolbar from './PanelToolbar';

export class LeftPopover extends Component {
    render() {
        const {editorId, close, pinEditor} = this.props;
        return (
            <div className="xuiLeftPopover">
                <PanelToolbar actions={[{title:'close', handler:close}, {title:'pin',handler:pinEditor}]} />
                <div className="xuiCommonPaddingBorder">
                    <Editor type={editorId} />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        ...state.layout.panels.leftPopover
    }),
    dispatch => ({
        close: () => dispatch(closeLeftPopover()),
        pinEditor: () => dispatch(pinLeftPopover()),
    })
)(LeftPopover);

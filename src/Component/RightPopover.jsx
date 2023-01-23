import React, {Component} from "react";
import { connect } from 'react-redux';
import "./RootLayour.css";
import Editor from "./Editor";
import {closeRightPopover} from '../Action/LayoutActions';
import PanelToolbar from './PanelToolbar';

export class RightPopover extends Component {
    render() {
        const {editorId, close, pinEditor} = this.props;
        return (
            <div className="xuiRightPopover">
                <PanelToolbar actions={[{title:'close', handler:close}]} />
                <div className="xuiCommonPaddingBorder">
                    <Editor type={editorId} />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        ...state.layout.panels.rightPopover
    }),
    dispatch => ({
        close: () => dispatch(closeRightPopover()),
    })
)(RightPopover);

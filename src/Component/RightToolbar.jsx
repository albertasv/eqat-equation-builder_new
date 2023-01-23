import React, {Component} from "react";
import { connect } from 'react-redux';
import "./RootLayour.css";
import "./RightToolbar.css";
import RightToolbarItem from "./RightToolbarItem";

export class RightToolbar extends Component {
    render() {
        const {actionsTop, actionsBottom, rspVisible, topRspEditorId, bottomRspEditorId} = this.props;
        return (
            <div className="xuiRightToolbar">
                {
                    actionsTop
                        .map(item => {
                            return <RightToolbarItem key={item.id} item={item} active={rspVisible && (topRspEditorId === item.isActiveIfEditorId)} />;
                        })
                }
                <div className="xuiToolbarSplitter"></div>
                {
                    actionsBottom
                        .map(item => {
                            return <RightToolbarItem key={item.id} item={item} active={rspVisible && (bottomRspEditorId === item.isActiveIfEditorId)} />;
                        })
                }
            </div>
        )
    }
}

export default connect(
    state => ({
        ...state.layout.panels.rightToolbar,
        rspVisible: state.layout.panels.rightSidePanel.visible,
        topRspEditorId: state.layout.panels.rightSidePanel.topEditorId,
        bottomRspEditorId: state.layout.panels.rightSidePanel.bottomEditorId,
    }),
    dispatch => ({
    })
)(RightToolbar);

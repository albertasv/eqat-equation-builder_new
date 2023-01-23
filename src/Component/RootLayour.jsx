import React, {Component} from "react";
import { connect } from 'react-redux';
import "./RootLayour.css";
import TopToolbar from "./TopToolbar";
import Content from "./Content";
import LeftToolbar from "./LeftToolbar";
import ContentToolbar from "./ContentToolbar";
import ContentStatusbar from "./ContentStatusbar";
import LeftSidePanel from "./LeftSidePanel";
import MainEditorFrame from "./MainEditorFrame";
import RightSidePanel from "./RightSidePanel";
import LeftPopover from "./LeftPopover";
import RightPopover from "./RightPopover";
import 'semantic-ui-css/semantic.min.css';
import GlobalProcessing from "./GlobalProcessing";
import RightToolbar from "./RightToolbar";
import { HotKeys } from "react-hotkeys";
import { onMouseMoveNewPosition, stopResizeToolbar } from "../Action/LayoutActions";

const keyMap = {
    VISIBLE_TOP_TOOLBAR: "alt+t",
};

export class RootLayour extends Component {
    hotKeysHandlers = {
        VISIBLE_TOP_TOOLBAR: () => { alert(123); }
    }
    handleMouseMove = (e) => {
        if (this.props.toolbarResizer.active) {
            this.props.handleMouseMove({x: e.screenX, y: e.screenY});
        }
    }
    handleMouseUp = () => {
        if (this.props.toolbarResizer.active) {
            this.props.handleMouseUp();
        }
    }
    render() {
        const {topToolbar, leftToolbar, rightToolbar, leftPopover, rightPopover, leftSidePanel, rightSidePanel, contentStatusbar} = this.props.panels;

        const readyStatus = this.props.readyStatus;

        const visibleLeftPopover = leftPopover && leftPopover.visible;
        const visibleRightPopover = rightPopover && rightPopover.visible;
        const visibleLeftSidePanel = leftSidePanel && leftSidePanel.visible;
        const visibleRightSidePanel = rightSidePanel && rightSidePanel.visible;

        return (
            <HotKeys keyMap={keyMap} handlers={this.hotKeysHandlers}>
                <div className="xuiRootLayour" onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseUp}>
                    {topToolbar ? <TopToolbar /> : null}
                    <Content disable={visibleLeftPopover || visibleRightPopover}>
                        {leftToolbar ? <LeftToolbar /> : null}
                        <Content direction="vertical">
                            {/*<ContentToolbar />*/}
                            <Content bg={"#EBEAEA"}>
                                { visibleLeftSidePanel ? <LeftSidePanel /> : null}
                                <MainEditorFrame />
                                {visibleRightSidePanel ? <RightSidePanel /> : null}
                            </Content>
                            {contentStatusbar ? <ContentStatusbar /> : null}
                        </Content>
                        {rightToolbar ? <RightToolbar /> : null}
                        
                        { visibleLeftPopover ? <LeftPopover /> : null }
                        { visibleRightPopover ? <RightPopover /> : null }
                    </Content>
                    {
                        !readyStatus
                        ? <GlobalProcessing percent={this.props.readyPercent} />
                        : null
                    }
                </div>
            </HotKeys>
        )
    }
}

export default connect(
    state => ({
        ...state.layout,
    }),
    dispatch => ({
        handleMouseMove: data => dispatch(onMouseMoveNewPosition(data)),
        handleMouseUp: () => dispatch(stopResizeToolbar()),
    })
)(RootLayour);

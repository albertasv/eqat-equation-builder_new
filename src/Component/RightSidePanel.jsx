import React, {Component} from "react";
import { connect } from 'react-redux';
import "./RightSidePanel.css";
import Editor from "./Editor";
import { checkIfEditorIsAvailableForEditline } from "./Editor/types";
import { startResizeHeightForRightSidePanel, startResizeWidthForRightSidePanel } from "../Action/LayoutActions";

export class RightSidePanel extends Component {
    startResizeWidth = e => {
        this.props.startResizeWidth({x: e.screenX, y: e.screenY});
    }
    startResizeHeight = e => {
        this.props.startResizeHeight({x: e.screenX, y: e.screenY});
    }
    render() {
        const {topEditorId, bottomEditorId, activeEditLine} = this.props;
        const topEditorIsAvailableForEditline = checkIfEditorIsAvailableForEditline(topEditorId, activeEditLine);
        const bottomEditorIsAvailableForEditline = checkIfEditorIsAvailableForEditline(bottomEditorId, activeEditLine);

        const showTop = topEditorIsAvailableForEditline && topEditorId;
        const showBottom = bottomEditorId && bottomEditorIsAvailableForEditline;
        const showPanel = showTop || showBottom;
        const showBothPanels = showTop && showBottom;

        return showPanel
            ? (
                <div className="xuiRightSidePanel" style={{width: this.props.width}}>
                    <div className="xuiVResizer xuiNoSelect" onMouseDown={this.startResizeWidth}></div>
                    {
                        showTop ? 
                            <div className="xuiSubPanel xuiPanelBorderAndBG">
                                <div className="xuiCommonPaddingBorder">
                                    <Editor type={topEditorId} />
                                </div>
                            </div>
                        : null
                    }
                    {
                        (showTop && showBottom) ? <div className="xuiDevider xuiNoSelect" onMouseDown={this.startResizeHeight}></div> : null
                    }
                    {
                        showBottom
                        ? (
                            showBothPanels ? (
                                <div className="xuiSubPanel xuiPanelBorderAndBG xuiNoGrow"
                                    style={{height: this.props.bottomHeight}}
                                >
                                    <div className="xuiCommonPaddingBorder">
                                        <Editor type={bottomEditorId} />
                                    </div>
                                </div>
                            ) : (
                                <div className="xuiSubPanel xuiPanelBorderAndBG">
                                    <div className="xuiCommonPaddingBorder">
                                        <Editor type={bottomEditorId} />
                                    </div>
                                </div>
                            )
                        ) : null
                    }
                </div>
            )
            : null;
    }
}

export default connect(
    state => ({
        ...state.layout.panels.rightSidePanel,
        activeEditLine: state.layout.activeEditLine,
    }),
    dispatch => ({
        startResizeWidth: data => dispatch(startResizeWidthForRightSidePanel(data)),
        startResizeHeight: data => dispatch(startResizeHeightForRightSidePanel(data)),
    })
)(RightSidePanel);

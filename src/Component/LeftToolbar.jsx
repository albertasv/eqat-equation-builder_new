import React, {Component} from "react";
import { connect } from 'react-redux';
import "./RootLayour.css";
import "./LeftToolbar.css";
import LeftToolbarItem from "./LeftToolbarItem";
import {toggleLeftToolbar} from '../Action/LayoutActions';
import className from 'classnames';
import {Divider} from 'semantic-ui-react';

export class LeftToolbar extends Component {
    render() {

        const {toggle, expanded, topHelp, bottomHelp, actions, activeEditLine, pinnedEditor} = this.props;
        let groupColor = 'black';

        return (
            <div className={className("xuiLeftToolbar", {xuiExpanded: expanded})}>
                <button className="xuiExpander" onClick={toggle}> {
                    expanded ? " << " : " >> "
                } </button>
                {
                    actions
                        .filter(item => !item.bottom)
                        .map(item => {
                            if (item.type === 'splitter') {
                                groupColor = item.color;
                                return <Divider></Divider>;
                            }
                            return <LeftToolbarItem key={item.id} item={item} full={expanded} color={groupColor} active={item.isActiveIfEditorLine === activeEditLine} pinned={item.isPinnedIfEditor === pinnedEditor} />;
                        })
                }
                { (topHelp && expanded) ? <HelpMessage>{topHelp}</HelpMessage> : null }
                <div className="xuiStretchPlaceholder"></div>
                { (bottomHelp && expanded) ? <HelpMessage>{bottomHelp}</HelpMessage> : null }
                {
                    actions
                        .filter(item => item.bottom)
                        .map(item => <LeftToolbarItem key={item.id} item={item} full={expanded} active={item.isActiveIfEditorLine === activeEditLine} pinned={item.isPinnedIfEditor === pinnedEditor} />)
                }
            </div>
        )
    }
}

function HelpMessage({children}) {
    return (
        <div className="xuiHelpMessage">{children}</div>
    )
}

export default connect(
    state => ({
        ...state.layout.panels.leftToolbar,
        activeEditLine: state.layout.activeEditLine,
        pinnedEditor: state.layout.panels.leftSidePanel.editorId,
    }),
    dispatch => ({
        toggle: () => dispatch(toggleLeftToolbar())
    })
)(LeftToolbar);

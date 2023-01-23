import React, {Component} from "react";
import { connect } from 'react-redux';
import {setActiveEditorInEditline} from '../../Action/LayoutActions';
import {MainEditorFrameContext} from '../MainEditorFrame/MainEditorFrameContext';

export default class EditorBreadcrumb extends Component {
    static contextType = MainEditorFrameContext;
    clickHandler = () => {
        this.context.fire(setActiveEditorInEditline());
    }
    render() {
        return (
            <div className="xuiBreadcrumb" onClick={this.clickHandler}>
                <div className="xuiTextWrapper">
                    <div className="xuiText">{this.props.title}</div>
                </div>
            </div>
        )
    }
}

import React, {Component} from "react";
import { connect } from 'react-redux';
import ActionsAndPropertiesPanel from "../LearnosityTypeWrapperEditor/ActionsAndPropertiesPanel";

export class ActionToolbarEditor extends Component {
    render() {
        return (
            <div>
                <ActionsAndPropertiesPanel />
            </div>
        )
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(ActionToolbarEditor);

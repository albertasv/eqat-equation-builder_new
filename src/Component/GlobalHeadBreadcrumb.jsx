import React, {Component} from "react";
import {Icon} from "semantic-ui-react";
import { connect } from 'react-redux';
import "./GlobalHeadBreadcrumb.css";

export class GlobalHeadBreadcrumb extends Component {

    render() {
        return (
            <div className="xuiGlobalHeadBreadcrumb">
                <div className="xuiAppMarker">QAP <Icon name="angle right" /></div>
                <div>
                    <div>Question title</div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(GlobalHeadBreadcrumb);

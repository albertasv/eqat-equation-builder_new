import React, {Component} from "react";
import { connect } from 'react-redux';
import PanelToolboxWrapper from '../../PanelToolboxWrapper';
import { Button, Checkbox, Form, Label, Placeholder } from 'semantic-ui-react';

export class ExtraInfoEditor extends Component {
    render() {
        return (
            <PanelToolboxWrapper hideSystemCtrls={true}>
                <h3>Extra Info</h3>

                <Placeholder>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder>
            </PanelToolboxWrapper>
        )
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(ExtraInfoEditor);

import React, {Component} from "react";
import { connect } from 'react-redux';
import PanelToolboxWrapper from '../../PanelToolboxWrapper';
import { Button, Checkbox, Form, Label, Placeholder } from 'semantic-ui-react';

export class PropertyEditor extends Component {
    render() {
        return (
            <PanelToolboxWrapper hideSystemCtrls={true}>
                <h3>Properties</h3>

                <div style={{width:'40%'}}>
                    <Form size="mini">
                        <Form.Field>
                            <label>Question name</label>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Description</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Type</label>
                            <Label>L-DD</Label>
                        </Form.Field>
                        <Form.Field>
                            <label>Shortenet label</label>
                            <Label>L-DD</Label>
                        </Form.Field>
                        <Form.Field>
                            <label>Associated with</label>
                            <Label>Untitled Course</Label>
                        </Form.Field>
                        <Form.Field>
                            <label>Originated from</label>
                            <Label>http://...</Label>
                        </Form.Field>

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

                    </Form>
                </div>
            </PanelToolboxWrapper>
        )
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(PropertyEditor);

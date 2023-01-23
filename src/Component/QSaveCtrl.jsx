import React, {Component} from "react";
import { connect } from 'react-redux';
import "./RootLayour.css";
import warning from '../Assets/Warning.svg';
import {Button, Checkbox, Icon} from 'semantic-ui-react';

export class QSaveCtrl extends Component {

    render() {
        return this.props.visible 
        ? (
            <div className="xuiUnsavedChangesWidget">
                <Icon disabled name='attention' color="red" size='large' />
                <div className="xuiText" style={{marginRight:'15px'}}>
                    <div>unsaved changes</div>
                    <small>unsaved for 3 min</small>
                </div>

                <Button.Group size='mini'>
                    <Button color='teal'>save</Button>
                    <Button.Or />
                    <Button color='green'>save & close</Button>
                    <Button.Or />
                    <Button color='pink'>discard & close</Button>
                </Button.Group>
                <div style={{marginLeft:'15px'}}>
                    <Checkbox label='autosave' />
                </div>
            </div>
        )
        : null
    }
}

export default connect(
    state => ({
        visible: state.data.hasUpdates
    }),
    dispatch => ({
    })
)(QSaveCtrl);

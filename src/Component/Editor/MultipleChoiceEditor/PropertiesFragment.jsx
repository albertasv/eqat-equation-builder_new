import React, {Component} from "react";
import {Checkbox} from 'semantic-ui-react';

export default class PropertiesFragment extends Component {
    render() {
        return (
            <div>
                <Checkbox label='Allow Shuffle' />
            </div>
        );
    }
}

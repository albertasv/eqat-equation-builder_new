import React, {Component} from "react";
import PanelToolboxWrapper from '../../PanelToolboxWrapper';
import {Button, Popup, Icon, Select, Image, Input} from 'semantic-ui-react';
import {openLearnosityEditor} from '../../../Action/EditorActions';

export default class LearnosityTypeWrapperEditor extends Component {
    openLearnosity = () => {
        this.props.fire(openLearnosityEditor());
    }
    render() {
        const {fire, data} = this.props;

        return (
            <PanelToolboxWrapper hideSystemCtrls={true}>
                <div>
                    <div className="xuiIFrameWrapper">
                        <iframe src="http://127.0.0.1:51974/learnosity/?masterReference=lref-eqat-4d8469ae-f1e1-4a5c-8835-77c0cb4aa353"></iframe>
                    </div>
                </div>
            </PanelToolboxWrapper>
        )
    }
}

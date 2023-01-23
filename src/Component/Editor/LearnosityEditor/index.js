import React, {Component} from "react";
import PanelToolboxWrapper from '../../PanelToolboxWrapper';

export default class LearnosityEditor extends Component {
    render() {
        const {fire, data} = this.props;
        return (
            <PanelToolboxWrapper>
                <div className="xuiIFrameWrapper">
                    <iframe src="http://127.0.0.1:51974/learnosity/?masterReference=lref-eqat-4d8469ae-f1e1-4a5c-8835-77c0cb4aa353"></iframe>
                </div>
            </PanelToolboxWrapper>
        )
    }
}

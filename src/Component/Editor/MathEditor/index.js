import React, {Component} from "react";
import PanelToolboxWrapper from '../../PanelToolboxWrapper';
import './Style.css';

export default class MathEditor extends Component {
    render() {
        const {fire, data} = this.props;
        return (
            <PanelToolboxWrapper>
                <div className="xuiIFrameWrapper">
                    <iframe src="http://www.imatheq.com/imatheq/com/imatheq/math-equation-editor.html"></iframe>
                </div>
            </PanelToolboxWrapper>
        )
    }
}

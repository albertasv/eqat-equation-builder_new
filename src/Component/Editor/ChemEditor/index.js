import React, {Component} from "react";
import PanelToolboxWrapper from '../../PanelToolboxWrapper';

export default class ChemEditor extends Component {
    render() {
        const {data} = this.props;
        return (
            <PanelToolboxWrapper>
                <div className="xuiIFrameWrapper">
                    <iframe src="http://molview.org/"></iframe>
                </div>
            </PanelToolboxWrapper>
        )
    }
}

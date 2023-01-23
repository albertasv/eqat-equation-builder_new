import React, {Component} from "react";
import PanelToolboxWrapper from '../../PanelToolboxWrapper';
import {Icon} from 'semantic-ui-react';

export default class PreviewWASEditor extends Component {
    render() {
        const {fire, data} = this.props;
        const controls = [
            {title:<><Icon name="refresh"></Icon>refresh</>, handler:() => {}},
        ];

        const editorPlacedInEditLine = !!fire; // HACK to detect editor location

        return (
            <PanelToolboxWrapper controls={controls} hideSystemCtrls={true} pinable={editorPlacedInEditLine} unpinable={!editorPlacedInEditLine}>
                <div className="xuiIFrameWrapper">
                    <iframe src="https://was-stg.api.wiley.com/was/v1/frontpage/questionView?studentMode=true&qid=f476061d-af2d-496d-aa1b-d8822f3c1c95"></iframe>
                </div>
            </PanelToolboxWrapper>
        )
    }
}

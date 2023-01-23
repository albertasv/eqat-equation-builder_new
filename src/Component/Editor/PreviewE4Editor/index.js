import React, {Component} from "react";
import PanelToolboxWrapper from '../../PanelToolboxWrapper';
import {Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';

export class PreviewE4Editor extends Component {
    render() {
        const {fire, data} = this.props;
        const controls = [
            {title:<><Icon name="refresh"></Icon>refresh</>, handler:() => {}},
            {title:<><Icon name="external"></Icon>open in tab</>, handler:() => {}},
        ];

        const editorPlacedInEditLine = !!fire; // HACK to detect editor location

        return (
            <PanelToolboxWrapper controls={controls} hideSystemCtrls={true} pinable={editorPlacedInEditLine} unpinable={!editorPlacedInEditLine}>
                <div className="xuiIFrameWrapper">
                    <iframe src="http://edugen-eqatprod.wileyplus.com/edugen/admin/courses/qmanager/qcheck_index.uni?qtype=0&id=quest3665578&chapter=itm2625321&client=eqat&s1ice="></iframe>
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
)(PreviewE4Editor);

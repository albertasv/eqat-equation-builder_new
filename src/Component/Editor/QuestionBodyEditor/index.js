import React, {Component} from "react";
import { connect } from 'react-redux';
import TinymceWrapper from '../TinymceWrapper';
import PanelToolboxWrapper from '../../PanelToolboxWrapper';

/**
 * https://www.tiny.cloud/docs/advanced/events/
 * 
 */
export class QuestionBodyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { content: '<p><img data-type="Math" src="/formula_2.png"></img></p><p>A trial balance will not balance if  <img data-type="MultipleChoice" src="/multiselection.gif" style="vertical-align:middle;"></img></p><p>please, put your answer here <img data-type="Variable" src="/variable_a.png" style="vertical-align:middle;"></img> variable</p>' };
    }

    render() {
        return (
            <PanelToolboxWrapper hideSystemCtrls={true}>
                <div style={{width:'100%',height:'100%'}}>
                    <TinymceWrapper value={this.state.content} />
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
)(QuestionBodyEditor);

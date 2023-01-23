import React, {Component} from "react";
import {Icon} from 'semantic-ui-react';
import PropertiesFragment from './PropertiesFragment';
import FeedbackEditor from '../FeedbackEditor';
import AnswersFragment from './AnswersFragment';
import PanelToolboxWrapper from '../../PanelToolboxWrapper';

export default class MultipleChoiceEditor extends Component {
    state = { activeItem: 'answers' }
    handleItemClick = name => this.setState({ activeItem: name })
    render() {
        const {fire, data} = this.props;
        const { activeItem } = this.state;
        const tabs = [
            {name:'answers', handler: this.handleItemClick},
            {name:'feedback', handler: this.handleItemClick},
            {name:'properties', handler: this.handleItemClick},
        ];
        return (
            <PanelToolboxWrapper tabs={tabs}>
                {activeItem === 'answers' ? <AnswersFragment /> : null}
                {activeItem === 'feedback' ? <FeedbackEditor /> : null}
                {activeItem === 'properties' ? <PropertiesFragment /> : null}
            </PanelToolboxWrapper>
        )
    }
}

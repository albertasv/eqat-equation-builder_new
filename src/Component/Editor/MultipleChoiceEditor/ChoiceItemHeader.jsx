import React, {Component} from "react";
import {Icon, Label, Button} from 'semantic-ui-react';

export default class ChoiceItemHeader extends Component {
    clone = e => {
        e.stopPropagation();
        this.props.clone(this.props.index);
    }
    remove = e => {
        e.stopPropagation();
        this.props.remove(this.props.index);
    }
    render() {
        const {visible, title, excludeFromShuffle, correct, content, active} = this.props;

        return (
            <div className="mcChoiceItemHeader">
                <div className="header">
                    <Icon name='dropdown' />
                    <div>{title}</div>
                    <div className="devider"></div>

                    {correct ? <Label color='green'><Icon name="check" /> correct</Label> : null}
                    {excludeFromShuffle ? null : <Icon circular inverted color='blue' name="shuffle" />}

                    <div className="itemCtrls">
                        <Button circular size="mini" icon="remove" onClick={this.remove}></Button>
                        <Button circular size="mini" icon="clone" onClick={this.clone}></Button>
                    </div>
                </div>
                 
                {active ? null : <div style={{padding:'10px 50px'}} dangerouslySetInnerHTML={{__html: content}}></div>}
            </div>
        );
    }
}

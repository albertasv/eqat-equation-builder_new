import React, {Component} from "react";
import {Popup, Input, Checkbox, Radio, Form, Label} from 'semantic-ui-react';
import TinymceWrapper from '../TinymceWrapper';

export default class ChoiceItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            choice: props.content,
            label: props.label,
            feedback: props.feedback,
         };
    }

    handleChoiceEditorChange = (choice, editor) => {
        this.setState({ choice });
    }
    handleLabelEditorChange = (label, editor) => {
        this.setState({ label });
    }
    handleFeedbackEditorChange = (feedback, editor) => {
        this.setState({ feedback });
    }

    render() {
        const {correct, excludeFromShuffle, visible, title} = this.props;

        return (
            <div className="mcChoiceItem">
            
                <div className="mcPropsRow">
                    <div className="mcTitle">
                        <div className="optTitle">Title</div>
                        <Input size="mini" value={title} />
                    </div>
                </div>
                <div className="mcPropsRow">
                    <div className="optTitle"></div>
                    <div className="mcProp">
                        <Radio label='Correct' value={correct} />
                    </div>
                    <div className="mcProp">
                        <Checkbox label='Exclude From Shuffle' value={excludeFromShuffle} />
                    </div>
                    <div className="mcProp">
                        <Checkbox label='Visible' value={visible} />
                    </div>
                </div>
                <div className="mcBodyRow">
                    <div className="optTitle"><h4>Answer Body</h4></div>
                    <div className="editorField">
                        <TinymceWrapper
                            inline={true}
                            value={this.state.choice}
                            onEditorChange={this.handleChoiceEditorChange} />
                    </div>
                </div>
                <div className="mcAddInfoRow">
                    <div className="optTitle">Label</div>
                    <div className="editorField">
                        <TinymceWrapper
                            inline={true}
                            value={this.state.label}
                            onEditorChange={this.handleLabelEditorChange} />
                    </div>
                </div>
                <div className="mcAddInfoRow">
                    <div className="optTitle">Feedback</div>
                    <div className="editorField">
                        <TinymceWrapper
                            inline={true}
                            value={this.state.feedback}
                            onEditorChange={this.handleFeedbackEditorChange} />
                    </div>
                </div>
            </div>
        );
    }
}

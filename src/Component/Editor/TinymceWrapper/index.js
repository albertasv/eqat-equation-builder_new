import React, {Component} from "react";
import { connect } from 'react-redux';
import {openMultipleChoiceEditor, openVariableEditor, openMathFormulaEditor} from '../../../Action/EditorActions';
import { Editor } from '@tinymce/tinymce-react';
import {MainEditorFrameContext} from '../../MainEditorFrame/MainEditorFrameContext';

/**
 * https://www.tiny.cloud/docs/advanced/events/
 * 
 */
export default class TinymceWrapper extends Component {
    static contextType = MainEditorFrameContext;
    constructor(props) {
        super(props);
        this.state = { content: props.value };
    }

    handleEditorChange = (content, editor) => {
        if (this.props.onEditorChange) {
            this.props.onEditorChange(content);
        } else {
            this.setState({ content });
        }
    }

    getValueToShow = () => {
        if (this.props.onEditorChange) {
            return this.props.value;
        }
        return this.state.content;
    }

    init_instance_callback = (editor) => {
        editor.on('dblclick', e => {
            if (e.target.nodeName === 'IMG' && e.target.getAttribute('data-type') === 'MultipleChoice') {
                this.context.fire(openMultipleChoiceEditor({}));
            }
            if (e.target.nodeName === 'IMG' && e.target.getAttribute('data-type') === 'Variable') {
                this.context.fire(openVariableEditor({varname: "$1"}));
            }
            if (e.target.nodeName === 'IMG' && e.target.getAttribute('data-type') === 'Math') {
                this.context.fire(openMathFormulaEditor({}));
            }
        });
    }

    render() {
        const {inline} = this.props;
        return (
            <Editor
                init={{ 
                    plugins: 'link table',
                    height: "100%",
                    branding: false,
                    resize: false,
                    inline: inline,
                    init_instance_callback: this.init_instance_callback
                }}
                value={this.getValueToShow()}
                onEditorChange={this.handleEditorChange}
            />
        )
    }
}

/*
question body editor
                <b><div>{editlineId} -> {editorId} -> {index}</div></b>

                <div>
                    <button onClick={() => fire(openVariableEditor({varname: "$1"}))}>edit variable $1</button>
                    <br /><br />
                    <button onClick={() => fire(openVariableEditor({varname: "$2"}))}>edit variable $2</button>
                    <br /><br />
                </div>

*/
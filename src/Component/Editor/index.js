import React, {Component} from "react";
import "./EditorStyle.css";
import PropertyEditor from './PropertyEditor';
import ExtraInfoEditor from './ExtraInfoEditor';
import LinksEditor from './LinksEditor';
import NoneEditor from './NoneEditor';
import VariableListEditor from './VariableListEditor';
import VariableEditor from './VariableEditor';
import XmlQuestionEditor from './XmlQuestionEditor';
import QuestionBodyEditor from './QuestionBodyEditor';
import NavigationEditor from './NavigationEditor';
import LocalChangeHistoryEditor from './LocalChangeHistoryEditor';
import HelpEditor from './HelpEditor';
import ChemEditor from './ChemEditor';
import MathEditor from './MathEditor';
import MultipleChoiceEditor from './MultipleChoiceEditor';
import PreviewE4Editor from './PreviewE4Editor';
import PreviewWASEditor from './PreviewWASEditor';
import LearnosityEditor from './LearnosityEditor';
import LearnosityTypeWrapperEditor from './LearnosityTypeWrapperEditor';
import ActionToolbarEditor from './ActionToolbarEditor';
import {EDITOR_Q_PROPERTY, EDITOR_Q_EXTRA_INFO, EDITOR_Q_LINKS, EDITOR_Q_VARIABLE_LIST, EDITOR_Q_VARIABLE, EDITOR_Q_XML, EDITOR_Q_BODY, EDITOR_Q_NAVIGATION, EDITOR_Q_LOCAL_CHANGE_HISTORY, EDITOR_Q_HELP, EDITOR_Q_CHEM_FORMULA, EDITOR_Q_MATH_FORMULA, EDITOR_Q_MULTIPLE_CHOICE, EDITOR_Q_PREVIEW_E4, EDITOR_Q_PREVIEW_WAS, EDITOR_Q_LEARNOSITY, EDITOR_Q_LEARNOSITY_TYPE_WRAPPER, EDITOR_Q_ACTION_TOOLBAR} from './types';
import {MainEditorFrameContext} from '../MainEditorFrame/MainEditorFrameContext';

function selectEditorByType(type) {
    let editor = NoneEditor;
    switch(type) {
        case EDITOR_Q_PROPERTY:
            editor = PropertyEditor;
            break;
        case EDITOR_Q_EXTRA_INFO:
            editor = ExtraInfoEditor;
            break;
        case EDITOR_Q_LINKS:
            editor = LinksEditor;
            break;
        case EDITOR_Q_VARIABLE_LIST: 
            editor = VariableListEditor;
            break;
        case EDITOR_Q_VARIABLE:
            editor = VariableEditor;
            break;
        case EDITOR_Q_XML:
            editor = XmlQuestionEditor;
            break;
        case EDITOR_Q_BODY:
            editor = QuestionBodyEditor;
            break;
        case EDITOR_Q_NAVIGATION:
            editor = NavigationEditor;
            break;
        case EDITOR_Q_LOCAL_CHANGE_HISTORY:
            editor = LocalChangeHistoryEditor;
            break;
        case EDITOR_Q_HELP:
            editor = HelpEditor;
            break;
        case EDITOR_Q_CHEM_FORMULA:
            editor = ChemEditor;
            break;
        case EDITOR_Q_MATH_FORMULA:
            editor = MathEditor;
            break;
        case EDITOR_Q_MULTIPLE_CHOICE:
            editor = MultipleChoiceEditor;
            break;
        case EDITOR_Q_PREVIEW_E4:
            editor = PreviewE4Editor;
            break;
        case EDITOR_Q_PREVIEW_WAS:
            editor = PreviewWASEditor;
            break;
        case EDITOR_Q_LEARNOSITY:
            editor = LearnosityEditor;
            break;
        case EDITOR_Q_LEARNOSITY_TYPE_WRAPPER:
            editor = LearnosityTypeWrapperEditor;
            break;
        case EDITOR_Q_ACTION_TOOLBAR:
            editor = ActionToolbarEditor;
            break;
    }
    return editor;
}

export default class Editor extends Component {
    static contextType = MainEditorFrameContext;
    render() {
        const CurrentEditor = selectEditorByType(this.props.type || this.context.editorId);
        return this.props.type // TODO: WTF?
            ? <CurrentEditor 
                data={this.props.data}
            />
            : <CurrentEditor 
                fire={this.context.fire}
                data={this.context.data}
            />
    }
}

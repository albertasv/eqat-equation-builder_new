import React, {Component} from "react";
import AceEditor from 'react-ace';
import brace from 'brace';
import PanelToolbar from '../../PanelToolbar';
import {Icon} from 'semantic-ui-react';
import 'brace/mode/xml';
import 'brace/theme/github';
import './Style.css';
import PanelToolboxWrapper from '../../PanelToolboxWrapper';

export default class XmlQuestionEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {value:`<?xml version="1.0" encoding="UTF-8"?>
<questestinterop xmlns:uni="http://schemas.wiley.ru/uni" xmlns:tes="http://schemas.wiley.ru/script" xmlns:ext="http://www.wiley.com/namespaces/wiley/qti/ext" xmlns:html="http://www.w3.org/1999/xhtml" uni:version="2.0" uni:difficulty="1" uni:restriction="0">
  <qticomment />
  <uni:learningObjectiveGroup>
    <uni:learningObjective value="aaaa" />
    <uni:learningObjective value="qwe sdf asdfasdf" />
    <uni:learningObjective value="qe" />
    <uni:learningObjective value="qwe" />
  </uni:learningObjectiveGroup>
  <item title="New Question" uni:type="53" uni:difficulty="1" uni:restriction="0" ident="EAT_1565346215701_1_8486187369748812">
    <itemmetadata>
      <qmd_computerscored>Yes</qmd_computerscored>
      <qmd_feedbackpermitted>Yes</qmd_feedbackpermitted>
      <qmd_responsetype>Single</qmd_responsetype>
      <qmd_scoringpermitted>Yes</qmd_scoringpermitted>
      <qmd_toolvendor>John Wiley and Sons Inc.</qmd_toolvendor>
    </itemmetadata>
    <presentation xml:space="preserve">
      <response_str ident="EAT_1565346215701_1_8486187369748812_learnosity_es_2">
        <render_extension>
          <uni:integration system="LEARNOSITY">
            <uni:param name="itemId" value="lref-eqat-f3fe86f0-4e68-43ee-93e5-349372f84f15" />
            <uni:param name="flavor" value="L-ES" />
          </uni:integration>
        </render_extension>
      </response_str>
    </presentation>
    <resprocessing>
      <outcomes>
        <decvar varname="fibscore" />
      </outcomes>
      <respcondition title="Correct">
        <conditionvar>
          <varequal respident="EAT_1565346215701_1_8486187369748812_learnosity_es_2" uni:grader="LearnosityManualGrader" />
        </conditionvar>
        <setvar action="Add" varname="fibscore">1</setvar>
      </respcondition>
      <respcondition title="Incorrect">
        <conditionvar>
          <other />
        </conditionvar>
      </respcondition>
    </resprocessing>
  </item>
</questestinterop>`}
    }
    onChange = value => {
        this.setState({value});
    }
    render() {
        const controls = [
            {title:<><Icon name="code"></Icon>format</>, color:"teal", handler:() => {}},
        ];  
        return (
            <PanelToolboxWrapper controls={controls} hideSystemCtrls={true}>
                <AceEditor
                    value={this.state.value}
                    fontSize={14}
                    mode="xml"
                    theme="textmate"
                    onChange={this.onChange}
                    name="aceeditordiv"
                    editorProps={{$blockScrolling: true}}
                    setOptions={{
                        wrap: true,
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 4,
                    }}
                />
            </PanelToolboxWrapper>
        )
    }
}

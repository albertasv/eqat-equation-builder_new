import React, {Component} from "react";
import {openChemFormulaEditor} from '../../../Action/EditorActions';
import PanelToolboxWrapper from '../../PanelToolboxWrapper';
import {Form, Checkbox, Button, Select} from 'semantic-ui-react';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/github';

const VAR_TYPE_MATH = 'math';
const VAR_TYPE_IMG = 'img';
const VAR_TYPE_CHEM = 'chem';

const options = [
    { key: VAR_TYPE_MATH, text: 'Math Variable', value: VAR_TYPE_MATH },
    { key: VAR_TYPE_IMG, text: 'Image Variable', value: VAR_TYPE_IMG },
    { key: VAR_TYPE_CHEM, text: 'Chemical Variable', value: VAR_TYPE_CHEM },
];

export default class VariableEditor extends Component {
    state = {variableType: VAR_TYPE_MATH}
    changeVariableType = (e, {value}) => {
        this.setState({variableType: value});
    }
    render() {
        const {fire, data} = this.props;
        return (
            <PanelToolboxWrapper>
                <div style={{color:'red'}}>TODO: need to work with layout. Use two fluid collums with props and editor, if has set of props. or fixed editor width.</div>
                <Form size="mini">
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Variable Name' value={data.varname} />
                    </Form.Field>
                    <Form.Field control={Select} value={this.state.variableType} label='' options={options} onChange={this.changeVariableType} />
                    <Form.Field>
                        <Checkbox label='Substitute' />
                    </Form.Field>
                    
                    { this.state.variableType === VAR_TYPE_IMG ? 
                        <div>
                            <br /><br /><br />
                            <h2><b>Image</b> variable editor</h2>
                            <div style={{color:'red'}}>not implemented yet</div>
                            <div style={{width:'800px',height:'500px',position:'relative'}}>
                                <div className="xuiIFrameWrapper">
                                    <iframe src="http://www.imatheq.com/imatheq/com/imatheq/math-equation-editor.html"></iframe>
                                </div>
                            </div>
                        </div>
                    : null }

                    { this.state.variableType === VAR_TYPE_CHEM ? 
                        <div>
                            <br /><br /><br />
                            <h2><b>Chemical</b> variable editor</h2>
                            <div style={{color:'red'}}>not implemented yet</div>
                            <Button onClick={() => fire(openChemFormulaEditor())}>OPEN EXTERNALEDITOR</Button>
                        </div>
                    : null }

                    { this.state.variableType === VAR_TYPE_MATH ? 
                        <>
                            <Form.Field>
                                <label>Value</label>
                                <div style={{display:'flex',flexDirection:'row'}}>
                                    <div>
                                        <AceEditor
                                            value={"sig(n,x)"}
                                            fontSize={14}
                                            mode="javascript"
                                            theme="textmate"
                                            name="acevariableeditordiv"
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
                                    </div>
                                    <div style={{padding:'5px'}}>
                                        list of math entries
                                        <br />
                                        ...
                                        <br />
                                        <i>need more size, need usefull list of entries</i>
                                    </div>
                                </div>
                            </Form.Field>
                            <Form.Field control={Select} value={'int'} label='Type' options={[
                                { key: 'int', text: 'int', value: 'int' },
                                { key: 'long', text: 'long', value: 'long' },
                            ]} />
                            <Form.Field>
                                <label>Static</label>
                                <input />
                            </Form.Field>
                            <Form.Field>
                                <label>Tolerance</label>
                                <input /> <Checkbox label='Recalculate' />
                            </Form.Field>
                            <Form.Field>
                                <label>Static Tolerance</label>
                                <input /> <Checkbox label='Recalculate' />
                            </Form.Field>
                            <Form.Field>
                                <label>Min</label>
                                <input />
                            </Form.Field>
                            <Form.Field>
                                <label>Max</label>
                                <input />
                            </Form.Field>
                            <Form.Field>
                                <label>Description</label>
                                <input />
                            </Form.Field>
                        </>: null
                    }
                    
                </Form>

            </PanelToolboxWrapper>
        )
    }
}

/*
<div>
                    variable editor
                    <div>
                        <h2>{data.varname}</h2>
                    </div>

                    <button onClick={() => fire(openChemFormulaEditor({varname: data.varname}))}>edit formula</button>
                </div>
*/
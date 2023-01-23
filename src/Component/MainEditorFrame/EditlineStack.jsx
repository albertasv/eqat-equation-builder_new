import React, {Component} from 'react';
import { connect } from 'react-redux';
import EditorPanel from './EditorPanel';
import EditorBreadcrumb from './EditorBreadcrumb';
import {MainEditorFrameContext} from './MainEditorFrameContext';

export class EditlineStack extends Component {
    render () {
        const {lines, refMap, doFire} = this.props;
        return (

            lines.map(line => {
                refMap[line.id] = [];
                const wrapperRef = React.createRef();
                refMap['wrapper_' + line.id] = wrapperRef;
                return (
                    <div ref={wrapperRef} key={line.id} className="xuiEditlineWrapper">{
                        line.stack
                            .map((editor, index) => {
                                const key = `${line.id}_${editor.editorId}_${index}`;
                                const contextValue = {
                                    editlineId: line.id,
                                    editorId: editor.editorId,
                                    index: index,
                                    data: editor.data || {},
                                    fire: action => { doFire(action, line.id, editor.editorId, index) }
                                };
                                const ref = React.createRef();
                                refMap[line.id].push(ref);
                                return (
                                    <MainEditorFrameContext.Provider key={key} value={contextValue}>
                                        <EditorPanel ref={ref} />
                                    </MainEditorFrameContext.Provider>
                                )
                            })
                    }</div>
                )
            })

        )
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
        doFire: (action, editlineId, editorId, index) => dispatch({
            ...action,
            editlineId,
            editorId,
            index
        })
    })
)(EditlineStack);
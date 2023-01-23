import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import "../RootLayour.css";
import EditlineStack from './EditlineStack';

export class MainEditorFrame extends Component {
    refMap = {};
    /*shouldComponentUpdate(nextProps, nextState) {
        return false;
    }*/
    /*static getDerivedStateFromProps(props, state) {
        
    }*/
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.resetZIndex();
        this.setZIndex();
    }
    componentDidMount(prevProps, prevState, snapshot) {
        this.resetZIndex();
        this.setZIndex();
    }
    setZIndex() {
        if (this.refMap[this.props.activeEditLine]) {
            const stateLineStack = this.props.lines.filter(line => line.id === this.props.activeEditLine)[0].stack;
            let z = 10;

            let refLine = this.refMap[this.props.activeEditLine];
            let refWrapper = this.refMap['wrapper_' + this.props.activeEditLine];

            const wrapperNode = ReactDOM.findDOMNode(refWrapper.current);
            wrapperNode.style.display = 'block';
            wrapperNode.style.zIndex = z++;

            const lineSize = refLine.length;
            const lastN = lineSize - 1;
            const singleViewForLatest = (lineSize > 1) ? (stateLineStack[lastN].singleView || stateLineStack[lastN - 1].singleView) : true;

            const vDelta = 10;
            const hDelta = 30;
            let left = 0;
            let right = 0;
            const frameWidth = wrapperNode.clientWidth;

            if (!singleViewForLatest) {
                const lastRes = refLine[lastN];
                const lastNode = ReactDOM.findDOMNode(lastRes.current);
                lastNode.style.display = 'flex';
                lastNode.style.zIndex = z + lineSize;
                lastNode.style.left = frameWidth / 2 + 'px';
                right = frameWidth / 2 - 5;
                refLine = refLine.slice(0, lineSize - 1);

                // + hide cover
                const list = lastNode.getElementsByClassName('xui_STASHED_COVER');
                for (let i =0; i< list.length; i++) {
                    list[i].style.display = 'none';
                }
                // - hide cover
            }

            let top = (refLine.length - 1) * vDelta;
            let bottom = (refLine.length - 1) * vDelta;

            for (let ref of refLine) {
                const node = ReactDOM.findDOMNode(ref.current);

                // + hide cover
                const stashed = top > 0;
                const list = node.getElementsByClassName('xui_STASHED_COVER');
                for (let i =0; i< list.length; i++) {
                    list[i].style.display = stashed ? 'block' : 'none';
                }
                // - hide cover

                node.style.display = 'flex';
                node.style.zIndex = z;
                node.style.top = top + 'px';
                node.style.left = left + 'px';
                node.style.bottom = bottom + 'px';

                if (right > 0) {
                    node.style.width = (right - left) + 'px';
                } else {
                    node.style.width = null;
                    node.style.right = '0px';
                }
                
                top -= vDelta;
                bottom -= vDelta;
                left += hDelta;
                z += 1;
            }
        }
    }
    resetZIndex() {
        for(let key of Object.keys(this.refMap)) {
            if (key.indexOf('wrapper_') === 0) {
                const node = ReactDOM.findDOMNode(this.refMap[key].current);
                node.style.display = 'none';
                node.style.zIndex = 1;
            } else {
                for (let panelRef of this.refMap[key]) {
                    const node = ReactDOM.findDOMNode(panelRef.current);
                    node.style.display = 'none';
                    node.style.zIndex = 1;
                    node.style.top = 0 + 'px';
                    node.style.left = 0 + 'px';
                    node.style.bottom = 0 + 'px';
                    node.style.right = 0 + 'px';
                }
            }
        }
    }
    render() {
        const {lines} = this.props;
        /*
        let barrier = 2;
        if (
            line.stack[line.stack.length - 1].singleView ||
            (line.stack[line.stack.length - 2] && line.stack[line.stack.length - 2].singleView)
        ) {
            barrier = 1;
        }
        barrier = line.stack.length - barrier;
        */
        return (
            <div className="xuiMainEditorFrame">
                <EditlineStack lines={lines} refMap={this.refMap} />
            </div>
        )
    }
}

export default connect(
    state => ({
        lines: state.layout.editLine,
        activeEditLine: state.layout.activeEditLine,
    }),
    dispatch => ({
    })
)(MainEditorFrame);

/*
line: state.layout.editLine.filter(l => l.id === state.layout.activeEditLine)[0],


{(index >= barrier) ? <EditorPanel /> : null}
{(index < barrier) ? <EditorBreadcrumb title={key} /> : null}
*/

/*
                {
                    line.stack
                        .map((editor, index) => {
                            const key = line.id + editor.editorId + index;
                            const contextValue = {
                                editlineId: line.id,
                                editorId: editor.editorId,
                                index: index,
                                data: editor.data || {},
                                fire: action => { this.props.doFire(action, line.id, editor.editorId, index) }
                            };
                            return (
                                <MainEditorFrameContext.Provider key={key} value={contextValue}>
                                    {(index >= barrier) ? <EditorPanel /> : null}
                                    {(index < barrier) ? <EditorBreadcrumb title={key} /> : null}
                                </MainEditorFrameContext.Provider>
                            )
                        })
                }
*/

/*
<EditorBreadcrumb title="Question Body" />
<EditorBreadcrumb title="Chem Right Answer" />
<EditorPanel />
<EditorPanel />


<iframe src="http://v.wiley.com:3535/dtds/wpqti/doc/html/"></iframe>
*/

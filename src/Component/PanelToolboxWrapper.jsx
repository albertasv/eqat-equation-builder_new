import React, {Component} from "react";
import { connect } from 'react-redux';
import {Icon} from 'semantic-ui-react';
import PanelToolbar from './PanelToolbar';
import {MainEditorFrameContext} from './MainEditorFrame/MainEditorFrameContext';
import {setActiveEditorInEditline, stretchingActiveEditorInEditline, pinEditorToLeftSidePanel, unpinLeftSidePanel} from '../Action/LayoutActions';

export class PanelToolboxWrapper extends Component {
    static contextType = MainEditorFrameContext;

    handleItemClick = name => this.setState({ activeItem: name })

    render() {
        const {tabs, hideSystemCtrls, controls, hideToolbar, pinable, unpinable} = this.props;

        const actions = hideSystemCtrls 
            ? []
            : [
                {icon:'arrows alternate horizontal', color:"gray", handler:() => {
                    this.context.fire(stretchingActiveEditorInEditline());
                }},
                {title:'close', color:"gray", handler:() => {
                    this.context.fire(setActiveEditorInEditline({closeCurrent: true}));
                }},
            ];

        if (pinable) {
            actions.push({title:<><Icon name="pin"></Icon>pin</>, handler:() => {
                this.context.fire(pinEditorToLeftSidePanel());
            }});
        }

        if (unpinable) {
            actions.push({title:<Icon name="close"></Icon>, handler:() => {
                this.props.doUnpin();
            }});
        }

        return (
            <>
                {
                    !hideToolbar ? <PanelToolbar controls={controls} actions={actions} tabs={tabs} /> : null
                }
                <div style={{flex:2,position:'relative'}}>
                    <div style={{position:'absolute',top:'0px',bottom:'10px',left:'10px',right:'10px',overflowY:'auto'}}>
                        
                        {this.props.children}

                    </div>
                </div>
            </>
        )
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
        doUnpin: () => dispatch(unpinLeftSidePanel())
    })
)(PanelToolboxWrapper);

import React, {Component} from "react";
import { Button, Menu } from 'semantic-ui-react';

export default class PanelToolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        if (props.tabs) {
            this.state.active = props.activeTab || props.tabs[0].name
        }
    }
    tabClick = name => {
        this.setState({active: name});
        this.props.tabs.filter(item => item.name === name)[0].handler(name);
    }
    render() {
        const {actions, tabs, controls} = this.props;
        return (
            <div className="xuiPanelToolbar">
                {
                    tabs
                    ? <>
                        <Menu size='mini' secondary>{
                            tabs.map(item => <Menu.Item
                                name={item.name}
                                active={item.name === this.state.active}
                                onClick={() => this.tabClick(item.name)}
                            />)
                        }</Menu>
                        <div className="mcPlaceholder"></div>
                    </>
                    : null
                }
                {
                    (controls && controls.length)
                    ? 
                        <Button.Group size='mini'>
                            {
                                controls.map(act => {
                                    if (act.icon) {
                                        return <Button basic icon={act.icon} onClick={act.handler}></Button>;
                                    }
                                    return <Button color={act.color ? act.color : 'gray'} onClick={act.handler}>{act.title}</Button>;
                                })
                            }
                        </Button.Group>
                    : null
                }
                {
                    (actions && actions.length) ?
                        <>
                            <div className="mcPlaceholder"></div>
                            <Button.Group size='mini'>
                                {
                                    actions.map(act => {
                                        if (act.icon) {
                                            return <Button color={act.color ? act.color : 'gray'} icon={act.icon} onClick={act.handler}></Button>;
                                        }
                                        return <Button color={act.color ? act.color : 'gray'} onClick={act.handler}>{act.title}</Button>;
                                    })
                                }
                            </Button.Group>
                        </>
                    : null
                }
            </div>
        )
    }
}

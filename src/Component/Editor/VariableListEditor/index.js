import React, {Component} from "react";
import {openVariableEditor} from '../../../Action/EditorActions';
import {Header, Image, Icon, Table, Button} from 'semantic-ui-react';
import PanelToolboxWrapper from '../../PanelToolboxWrapper';

export default class VariableListEditor extends Component {
    render() {
        const {fire} = this.props;
        let list = [];
        for(let i=0; i<20; i++) {
            list.push(i);
        }

        const controls = [
            {title:<><Icon name="add"></Icon>add new variable</>, color:"green", handler:() => {}},
            {title:<><Icon name="check circle outline"></Icon>validate</>, color:"orange", handler:() => {}},
            {title:<><Icon name="redo"></Icon>recalculate static values</>, color:"teal", handler:() => {}},
        ];  
        return (
            <PanelToolboxWrapper controls={controls} hideSystemCtrls={true}>
                <Table selectable basic='very' celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Algorithmic</Table.HeaderCell>
                            <Table.HeaderCell>Static</Table.HeaderCell>
                            <Table.HeaderCell>Tolerance</Table.HeaderCell>
                            <Table.HeaderCell>Static Tolerance</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            list.map(n => (
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as='h4' image>
                                            <Header.Content>
                                                $A{n}
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>

                                    <Table.Cell>
                                        some value {n}
                                    </Table.Cell>
                                    <Table.Cell>
                                        some value {n}
                                    </Table.Cell>
                                    <Table.Cell>
                                        some value {n}
                                    </Table.Cell>
                                    <Table.Cell>
                                        some value {n}
                                    </Table.Cell>

                                    <Table.Cell collapsing>
                                        <Button basic size="mini" icon labelPosition='right' 
                                            onClick={() => fire(openVariableEditor({varname: "$"+n}))}
                                        >
                                            edit <Icon name='right arrow' />
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
            </PanelToolboxWrapper>
        )
    }
}

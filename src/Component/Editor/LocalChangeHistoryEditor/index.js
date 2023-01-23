import React, {Component} from "react";
import {List, Button} from 'semantic-ui-react';

export default class LocalChangeHistoryEditor extends Component {
    render() {
        return (
            <div>

                <Button size="mini" color='violet'>Drop All Changes</Button>
                <Button size="mini" color='violet'>Save Question</Button>
                
                <List divided relaxed>
                    <List.Item>
                        <List.Content>
                            <List.Header>Semantic-Org/Semantic-UI</List.Header>
                            <List.Description as='a'>Updated 10 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Semantic-Org/Semantic-UI-Docs</List.Header>
                            <List.Description as='a'>Updated 22 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Semantic-Org/Semantic-UI-Meteor</List.Header>
                            <List.Description as='a'>Updated 34 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                </List>

            </div>
        )
    }
}

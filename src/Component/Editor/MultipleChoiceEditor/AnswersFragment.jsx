import React, {Component} from "react";
import {Popup, Input, Button, Icon, Accordion, Form, Label} from 'semantic-ui-react';
import ChoiceItem from './ChoiceItem';
import ChoiceItemHeader from './ChoiceItemHeader';
import './Style.css';

export default class AnswersFragment extends Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
        for (let i=0; i< 3; i++) {
            this.state.items.push({
                id: i,
                content: `<p><b>answer ${i}</b> bla bla <img data-type="Math" src="/formula_1.png" style="vertical-align:middle;"></img> bla</p>`,
                correct: i === 1,
                excludeFromShuffle: i == 2,
                label: '<p><b>L</b>abel</p>',
                visible: i > 1,
                feedback: '<p>test</p>',
                title: `A trial balance will not balance if test_x_${i}`,
                active: false,
            });
        }
    }
    addNewItem = () => {
        const i = this.state.items.length + 1;
        this.setState({
            items: [
                ...this.state.items,
                {
                    id: i,
                    content: `<p><b>answer ${i}</b><br /> Variable <img data-type="Variable" src="/variable_b.png" style="vertical-align:middle;"></img></p>`,
                    correct: false,
                    excludeFromShuffle: false,
                    label: '',
                    visible: false,
                    feedback: '',
                    title: `test_x_${i}`,
                    active: true,
                }
            ]
        });
    }
    selectItem = (e, {index}) => {
        this.state.items[index].active = !this.state.items[index].active;
        this.setState({
            items: [...this.state.items]
        })
    }
    collapseAll = () => {
        this.setState({
            items: this.state.items.map(item => {
                item.active = false;
                return item;
            })
        })
    }
    expandAll = () => {
        this.setState({
            items: this.state.items.map(item => {
                item.active = true;
                return item;
            })
        })
    }
    removeAllAnswers = () => {
        this.setState({
            items: []
        })
    }
    removeItem = index => {
        this.setState({
            items: this.state.items.filter((item, i) => i != index)
        })
    }
    cloneItem = index => {
        const i = this.state.items.length + 1;
        this.setState({
            items: [
                ...this.state.items,
                {
                    ...(this.state.items[index]),
                    id: i,
                    title: `test_y_${i}`,
                    active: true,
                }
            ]
        });
    }
    render() {
        return ( 
            <div className="mcAnswerFragment">
                
                <div className="mcAnswersToolbar">
                    <div className="title">
                        <Form size="mini">
                            <Form.Field inline>
                                <label>Title</label>
                                <Popup position='right center' content='This fiels will be used as uniq key for...' trigger={<Input placeholder='' />} />
                            </Form.Field>
                        </Form>
                    </div>
                    
                    <Button basic size="mini" onClick={this.addNewItem}>
                        <Icon name="add" /> add new item
                    </Button>
                    <Button basic size="mini" icon="hide" onClick={this.collapseAll}/>
                    <Button basic size="mini" icon="unhide" onClick={this.expandAll}/>
                    <Button basic size="mini" icon="trash alternate outline" onClick={this.removeAllAnswers}/>
                    
                </div>

                {
                    this.state.items.length > 0
                    ? <Accordion exclusive={false} fluid>
                    {
                        this.state.items.map((item, index) => (
                            <div className="mcChoiceItemElement">
                                <Accordion.Title active={item.active} index={index} onClick={this.selectItem}>
                                    <ChoiceItemHeader clone={this.cloneItem} remove={this.removeItem} index={index} {...item} />
                                </Accordion.Title>
                                <Accordion.Content active={item.active}>
                                    <ChoiceItem {...item} />
                                </Accordion.Content>
                            </div>
                        ))
                    }
                    </Accordion>
                    : <div style={{padding:'20px',}}>There is no content to show, please create answer</div>
                }
                
                <div className="mcAddNewItemBtn" onClick={this.addNewItem}>
                    <div><Icon name='add' /> add new item</div>
                </div>

            </div>
        );
    }
}

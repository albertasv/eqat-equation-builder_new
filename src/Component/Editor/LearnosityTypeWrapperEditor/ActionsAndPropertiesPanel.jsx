import React, {Component} from "react";
import {openLearnosityEditor} from '../../../Action/EditorActions';
import cn from 'classnames';

export default class ActionsAndPropertiesPanel extends Component {
    openLearnosity = () => {
        this.props.fire(openLearnosityEditor());
    }
    buildField(field) {
        switch(field.type) {
            case 'select':
                return (
                    <select>{
                        field.data.map(item => <option>{item.text}</option>)
                    }</select>
                )
            case 'action':
                return (
                    <button onClick={field.data}>{field.title}</button>
                )
        }
    }
    render() {
        const {fire, data} = this.props;

        const countryOptions = [
            { key: 'L-DD', value: 'L-DD', text: 'Learnosity Drag & Drop (L-DD)' },
            { key: 'L-ES', value: 'L-ES', text: 'Learnosity Essay (L-ES)' },
            { key: 'L-MT', value: 'L-MT', text: 'Learnosity Math (L-MT)' },
        ]

        const fields = [
            {
                title: 'Learnosity question type',
                type: 'select',
                data: countryOptions
            },
            {
                title: 'Change the Type',
                type: 'action',
                data: () => {}
            },
            {
                title: 'Enter the Reference ID',
                type: 'action',
                data: () => {}
            },
        ]

        return (
            <div>


                <div>
                    <table width="100%" cellSpacing="0">
                        {
                            fields.map((field, index) => <tr className={cn({'xuiOddRow': index %2 === 0})}>
                                {field.type !== 'action' ? <td>{field.title}</td> : <td></td>}
                                <td>{this.buildField(field)}</td>
                            </tr>)
                        }
                    </table>
                </div>

            </div>
        )
    }
}

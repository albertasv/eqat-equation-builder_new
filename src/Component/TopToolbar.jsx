import React, {Component} from "react";
import { connect } from 'react-redux';
import "./RootLayour.css";
import TopToolbarItem from "./TopToolbarItem";

export class TopToolbar extends Component {
    render() {
        let {actions} = this.props;
        return (
            <div className="xuiTopToolbar">
                {
                    actions
                        .filter(item => (item.side !== 'right' && item.side !== 'center'))
                        .map(item => <TopToolbarItem key={item.id} item={item} />)
                }
                <div className="xuiStretchPlaceholder"></div>
                {
                    actions
                        .filter(item => item.side === 'center')
                        .map(item => <TopToolbarItem key={item.id} item={item} />)
                }
                <div className="xuiStretchPlaceholder"></div>
                {
                    actions
                        .filter(item => item.side === 'right')
                        .map(item => <TopToolbarItem key={item.id} item={item} />)
                }
            </div>
        )
    }
}

export default connect(
    state => ({
        ...state.layout.panels.topToolbar
    }),
    dispatch => ({
    })
)(TopToolbar);

import React, {Component} from "react";
import { connect } from 'react-redux';
import cn from 'classnames';
import "./RootLayour.css";
import {Icon, Popup} from 'semantic-ui-react';

export class RightToolbarItem extends Component {
    render() {
        let {item, handleClick, active} = this.props;
        let {title, action} = item;
        return (
            <div className={cn("xuiItem", {"xuiActive": active})} onClick={() => { handleClick && handleClick(action()) }}>
                <div className="xuiText">{title}</div>
            </div>
        )
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
        handleClick: (action) => dispatch(action)
    })
)(RightToolbarItem);

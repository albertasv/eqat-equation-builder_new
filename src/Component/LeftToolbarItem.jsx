import React, {Component} from "react";
import { connect } from 'react-redux';
import "./RootLayour.css";
import {Icon} from 'semantic-ui-react';
import cn from "classnames";

export class LeftToolbarItem extends Component {
    render() {
        let {full, item, handleClick, color, active, pinned} = this.props;
        let {title, icon, iconComponent, action} = item;

        let  iconComp = iconComponent || null;
        if (!iconComp) {
            iconComp = <Icon color={color} size='large' name={icon ? icon : 'hand point right outline'} />;
        }

        return (
            <div className={cn("xuiItem", {"xuiPinned": pinned, "xuiActive": active})} onClick={() => { handleClick && handleClick(action()) }}>
                { iconComp }
                { full 
                    ? <div className="xuiTitle">{title}</div> 
                    : null
                }
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
)(LeftToolbarItem);

/*
<img src={icon ? icon : defaultMenuItem} alt={iconText ? iconText : "It is a menu item"} />


item.helpNote 
                                ? <Popup position='left center' content="{item.helpNote}" trigger={
                                    <LeftToolbarItem key={item.id} item={item} full={expanded} />
                                } />
                                : 

 */
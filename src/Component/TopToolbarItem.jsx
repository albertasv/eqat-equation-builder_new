import React, {Component} from "react";
import { connect } from 'react-redux';
import "./RootLayour.css";
import defaultMenuItem from '../Assets/DefaultMenuItem.svg';

export class TopToolbarItem extends Component {

    renderTextBlock() {
        let {text, subtext} = this.props.item;
        return (
            <div className="xuiItem">
                { text 
                    ? <div className="xuiText">{text}</div> 
                    : null
                }
                { subtext 
                    ? <div className="xuiSubtext">{subtext}</div> 
                    : null
                }
            </div>
        )
    }

    renderAction() {
        let {title, subtitle, icon, iconText, action} = this.props.item;
        return (
            <div className="xuiItem xuiAction" onClick={() => this.props.doAction(action())}>
                { icon 
                    ? <img src={icon ? icon : defaultMenuItem} alt={iconText ? iconText : "It is menu item"} />
                    : null
                }
                { title 
                    ? <div className="xuiTitle">{title}</div> 
                    : null
                }
                { subtitle 
                    ? <div className="xuiSubtitle">{subtitle}</div> 
                    : null
                }
            </div>
        )
    }

    renderComponent() {
        let {component} = this.props.item;
        return (
            <div className="xuiItem">
                { component }
            </div>
        )
    }

    render() {
        return (
            this.props.item.component 
                ? this.renderComponent()
                : (
                    this.props.item.action 
                        ? this.renderAction()
                        : this.renderTextBlock()
                )
        )
    }
}

export default connect(
    state => ({
        ...state.layout.panels.topToolbar
    }),
    dispatch => ({
        doAction: action => dispatch(action)
    })
)(TopToolbarItem);


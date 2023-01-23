import React, {Component} from "react";
import "./RootLayour.css";
import { throwStatement } from "@babel/types";

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.cls = "xuiContent " + (
            this.props.direction === 'vertical' 
                ? "xuiContentDirectionVertical" 
                : "xuiContentDirectionHorizontal"
        );
        this.style = {};
        if (props.padding && props.padding > 0) {
            this.style.padding = props.padding + 'px';
        }
        if (props.bg) {
            this.style['background-color'] = props.bg;
        }
        this.contentDisableCover = <div className="xuiCover"></div>
    }
    render() {
        return (
            <div
                className={this.cls}
                style={this.style}
            >
                {
                    this.props.disable
                        ? this.contentDisableCover
                        : null
                }
                {this.props.children}
            </div>
        )
    }
}

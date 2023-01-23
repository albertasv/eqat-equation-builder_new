import React, {Component} from "react";
import {List} from 'semantic-ui-react';
import './Style.css';

export default class NavigationEditor extends Component {
    render() {
        return (
            <div>
                
                <div className="naviViewItem">
                    <div>Yes, there is a checkbox which activates search in selection mode</div>
                    <div className="extra">Additional info. Lorem ipsum.</div>
                </div>

                <div className="naviViewItem">
                    <div>I have the selected the text from editor and triggered the find(ctrl+f) by selecting the 'Search In Selection' option. It's not highlighting the text in selected range.
If i am wrong please suggest me.</div>
                    <div className="extra">Additional info. Lorem ipsum.</div>
                </div>

                <div className="naviViewItem active">
                    <div>Yes, there is a checkbox which activates search in selection mode</div>
                    <div className="extra">Additional info. Lorem ipsum.</div>
                </div>

                <div className="naviViewItem">
                    <div>I have the selected the text from editor and triggered the find(ctrl+f) by selecting the 'Search In Selection' option. It's not highlighting the text in selected range.
If i am wrong please suggest me.</div>
                </div>

                <div className="naviViewItem">
                    <div>I have the selected the text from editor and triggered the find(ctrl+f) by selecting the 'Search In Selection' option. It's not highlighting the text in selected range.
If i am wrong please suggest me.</div>
                    <div className="extra">Additional info. Lorem ipsum.</div>
                </div>

            </div>
        )
    }
}

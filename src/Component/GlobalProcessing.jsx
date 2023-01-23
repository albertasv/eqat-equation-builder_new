import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'

export default class GlobalProcessing extends Component {
    render() {
        return (
            <div className="xuiGlobalProcessing">
                <div className="box">
                    <div className="mainMesage">
                        preparing...
                    </div>
                    <Progress active percent={this.props.percent} size='tiny'></Progress>
                </div>
            </div>
        )
    }
}

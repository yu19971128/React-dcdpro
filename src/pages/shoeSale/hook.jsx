import React, { Component } from 'react'
import {Hookwrap} from './styledshoe'
export default class Hook extends Component {
    render() {
        return (
            <>
                <Hookwrap>
                    <div className="actitem1">
                        特价轮胎
                    </div>
                    <div className="actitem2">
                        买三送一
                    </div>
                </Hookwrap>
            </>
        )
    }
}

import React, { Component } from 'react'
import "../assets/style/FormBtn.less"
export default class FormBtn extends Component {
    render() {
        return (
            this.props.type === "ordinary"? <a className = "FormBtna" href="#">{this.props.children}</a>:
            // <button className = {`formBtn ${this.props.isFull?"full": ""}` }>{this.props.children}</button>
            <button onClick = {this.props.onClick} className = {"formBtn " + (this.props.isFull?"full":"")}>{this.props.children}</button>
        )
    }
}

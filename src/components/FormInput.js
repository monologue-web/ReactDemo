import React, { Component } from 'react'
import "../assets/style/FormInput.less"
import "../assets/font/iconfont.css"
export default class FormInput extends Component {
    render() {
        return (
            <div className = "input-group">
                <i className = {"iconfont " + this.props.iconclass}></i>
                <input {...this.props}/>
                {/* <input type={this.props.type}  placeholder = {this.props.placeholder} value = {this.props.value} onChange = {this.props.onChange}/> */}
            </div>
        )
    }
}

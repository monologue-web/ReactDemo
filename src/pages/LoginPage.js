import React, { Component } from 'react';
import "../assets/style/LoginPage.less"
import Img from "../components/Img"
import FormInput from "../components/FormInput"
import FormBtn from "../components/FormBtn"
import axios from "axios";
import {Toast} from 'antd-mobile'
// import Img from "../assets/images/logo.png"
export default class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      'username' : '',
      'password' : ''
    }

    this.handleChangeUname = this.handleChangeUname.bind(this)
    this.handleChangepwd = this.handleChangepwd.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChangeUname(e){
    console.log(e.target.value);
    this.setState({
      username:e.target.value
    })
  }
  handleChangepwd(e){
    console.log(e.target.value);
    this.setState({
      password:e.target.value
    })
  }
  

  handleClick(e){
    e.preventDefault()
    let params = {
      username:this.state.username,
      password:this.state.password
    }
      axios.get("/server/data.json",params).then((rasp)=>{
        if(rasp.data.success){
          Toast.success("登录成功!",1)
          this.props.router.push("/home")
        }else{
          Toast.error("登录失败！",0)
        }
      })
  }
  render() {
    return (
      <div className ="login-page"> 
            <Img src= "logo.png" height = {80} alt=""/>
            <form className = "login-form" action="">
                <FormInput type = "text" iconclass = "icon-shouji"  placeholder = "用户名" value = {this.state.username} onChange = {this.handleChangeUname}/>
                <FormInput type = "password" iconclass = "icon-mima" placeholder = "密码" value = {this.state.password} onChange = {this.handleChangepwd}/>
                <FormBtn onClick = {this.handleClick} isFull = {true}>登录</FormBtn>
                <FormBtn type = "ordinary">忘记密码</FormBtn>
                <FormBtn>免费注册</FormBtn>&emsp;
                <FormBtn>用户登录</FormBtn>
            </form>
      </div>
    );
  }
}

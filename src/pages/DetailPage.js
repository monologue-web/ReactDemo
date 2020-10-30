import React, { Component } from "react";
import Header from "../components/Header";
import "../assets/style/DetailPage.less";
import Img from "../components/Img";
import "../assets/font/iconfont.css";
import MainList from "../components/MainList";
import { Flex } from "antd-mobile";
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sub_list_data,
    };
  }
  render() {
    return (
      <div className="detailPage">
        <div className="detail-header">
          <Header isDetailPage />
        </div>

        <article className="detail-article">
          <h1>用于构建用户界面的 JavaScript 库</h1>
          <p>
            <span>
              作者: <i>张帅</i>{" "}
            </span>
            <span style={{ float: "right" }}>2020-10-29</span>
          </p>
          <Img src="dt.gif" />
          <content>
            <p>
              使用 props 和 state，我们可以创建一个简易的 Todo
              应用。在示例中，我们使用 state
              来保存现有的待办事项列表及用户的输入。尽管事件处理器看似被内联地渲染，但它们其实只会被事件委托进行收集和调用
            </p>
            <p>
              使用 props 和 state，我们可以创建一个简易的 Todo
              应用。在示例中，我们使用 state
              来保存现有的待办事项列表及用户的输入。尽管事件处理器看似被内联地渲染，但它们其实只会被事件委托进行收集和调用
            </p>
            <p>
              使用 props 和 state，我们可以创建一个简易的 Todo
              应用。在示例中，我们使用 state
              来保存现有的待办事项列表及用户的输入。尽管事件处理器看似被内联地渲染，但它们其实只会被事件委托进行收集和调用
            </p>
            <p>
              使用 props 和 state，我们可以创建一个简易的 Todo
              应用。在示例中，我们使用 state
              来保存现有的待办事项列表及用户的输入。尽管事件处理器看似被内联地渲染，但它们其实只会被事件委托进行收集和调用
            </p>
            <p>
              使用 props 和 state，我们可以创建一个简易的 Todo
              应用。在示例中，我们使用 state
              来保存现有的待办事项列表及用户的输入。尽管事件处理器看似被内联地渲染，但它们其实只会被事件委托进行收集和调用
            </p>
            <p>
              使用 props 和 state，我们可以创建一个简易的 Todo
              应用。在示例中，我们使用 state
              来保存现有的待办事项列表及用户的输入。尽管事件处理器看似被内联地渲染，但它们其实只会被事件委托进行收集和调用
            </p>
            <p>
              使用 props 和 state，我们可以创建一个简易的 Todo
              应用。在示例中，我们使用 state
              来保存现有的待办事项列表及用户的输入。尽管事件处理器看似被内联地渲染，但它们其实只会被事件委托进行收集和调用
            </p>
            <p>
              使用 props 和 state，我们可以创建一个简易的 Todo
              应用。在示例中，我们使用 state
              来保存现有的待办事项列表及用户的输入。尽管事件处理器看似被内联地渲染，但它们其实只会被事件委托进行收集和调用
            </p>
            <p>
              使用 props 和 state，我们可以创建一个简易的 Todo
              应用。在示例中，我们使用 state
              来保存现有的待办事项列表及用户的输入。尽管事件处理器看似被内联地渲染，但它们其实只会被事件委托进行收集和调用
            </p>
            <p>
              使用 props 和 state，我们可以创建一个简易的 Todo
              应用。在示例中，我们使用 state
              来保存现有的待办事项列表及用户的输入。尽管事件处理器看似被内联地渲染，但它们其实只会被事件委托进行收集和调用
            </p>
          </content>
          <p>
            <span>
              <i className="iconfont icon-liulan"></i>
              6955454人观看
            </span>
            <span style={{ float: "right" }}>
              <i className="iconfont icon-jubao"></i>
              我要举报
            </span>
          </p>
        </article>

        {this.state.sub_list_data.map((v, i) => {
          return (
            <div className="list-group" key={i}>
              <MainList obj={v} height={80} />
            </div>
          );
        })}
      
        <div className="comments">
            <div className="comments-header">
                热门评论
            </div>
            <Flex className = "commens-flex">
                <Flex.Item className = "flex-left">
                    <Img src ="t0110974b6f051c1e5a.gif" height = {60}/>
                </Flex.Item>
                <Flex.Item>
                    <p>
                        <strong>两岸猿声啼不住</strong>
                        <span style = {{float:'right'}}>3 <i className = "iconfont icon-dianzan"></i></span>
                    </p>

                    <p style = {{lineHeight:"1.666"}}>无论你现在正在使用什么技术栈，你都可以随时引入 React 来开发新特性，而不需要重写现有代码。</p>
                </Flex.Item>
            </Flex>
            <Flex className = "commens-flex">
                <Flex.Item className = "flex-left">
                    <Img src ="t0110974b6f051c1e5a.gif" height = {60}/>
                </Flex.Item>
                <Flex.Item>
                    <p>
                        <strong>轻舟已过万重山</strong>
                        <span style = {{float:'right'}}>965 <i className = "iconfont icon-dianzan"></i></span>
                    </p>

                    <p style = {{lineHeight:"1.666"}}>无论你现在正在使用什么技术栈，你都可以随时引入 React 来开发新特性，而不需要重写现有代码。</p>
                </Flex.Item>
            </Flex>
        </div>
      </div>
    );
  }
}

const sub_list_data = [
  {
    img: "t0110974b6f051c1e5a.gif",
    title: "用于构建用户界面的 JavaScript 库",
    des:
      "组件逻辑使用 JavaScript 编写而非模版，你可以轻松地在应用中传递数据，并使得状态与 DOM 分离",
  },
  {
    img: "t0177ec8627c04e438b.gif",
    title: "渐进式的JavaScript 框架",
    des: "不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩",
  },
  {
    img: "t0135a6567622271196.gif",
    title: "一套框架多种平台 移动端&桌面端",
    des: "学会用 Angular 构建应用，把这些代码和能力复用在多种不同平台的应用上",
  },
  {
    img: "t0110974b6f051c1e5a.gif",
    title: "用于构建用户界面的 JavaScript 库",
    des:
      "组件逻辑使用 JavaScript 编写而非模版，你可以轻松地在应用中传递数据，并使得状态与 DOM 分离",
  },
  {
    img: "t0177ec8627c04e438b.gif",
    title: "渐进式的JavaScript 框架",
    des: "不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩",
  },
];

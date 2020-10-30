import React, { Component } from "react";
import "../assets/style/HomePage.less";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Category from "../components/Category";
import HomePageList from "../components/HomePageList";
import { Tabs, List } from "antd-mobile";
const Item = List.Item;
const tabs = [{ title: "第一类" }, { title: "第二类" }, { title: "第三类" }];
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Category />
        <HomePageList />
        <div className="homeTab">
          <Tabs tabs={tabs} initialPage={0} animated={true} useOnPan={true}>
            <div>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
            </div>
            <div>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
            </div>
            <div>
              <Item arrow="horizontal" onClick={() => {}}>
                主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
              </Item>
            </div>
          </Tabs>
        </div>
        <Header isFooter/>
        <div className="footer">
          <p>React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图</p>
          <p>Copyright © 2020 Facebook Inc.</p>
          <p>创建拥有各自状态的组件，再由这些组件构成更加复杂的 UI</p>
          <p>组件逻辑使用 JavaScript 编写而非模版，因此你可以轻松地在应用中传递数据，并使得状态与 DOM 分离。</p>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Img from "./Img";
import { Flex, WingBlank } from "antd-mobile";
export default class MainList extends Component {
  render() {
    return (
      <div>
        <a href="#/detail">
          <WingBlank>
            <Flex className="sub-list-item">
              <Flex.Item>
                <Img src={this.props.obj.img} height={80} />
              </Flex.Item>
              <Flex.Item>
                <h3>{this.props.obj.title}</h3>
                <p>{this.props.obj.des}</p>
              </Flex.Item>
            </Flex>
          </WingBlank>
        </a>
      </div>
    );
  }
}

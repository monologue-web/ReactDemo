import React, { Component } from "react";
import "../assets/style/Header.less";
import Img from "../components/Img";
import { NavBar, Icon, SearchBar } from "antd-mobile";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* <NavBar
          mode="dark"
          icon={this.props.isDetailPage ? <Icon type="left" /> : ""}
          onLeftClick={() => console.log("onLeftClick")}

          leftContent={
            this.props.isDetailPage
              ? ""
              : [
                  this.props.isFooter ? (
                    ""
                  ) : (
                    <Img key="0" src="logo.png" height={30} />
                  ),
                ]
          }
        >

          {
       this.props.isDetailPage?(
        <Img key="0" src="logo.png" height={30} />
      ):
          this.props.isFooter ? (
            <div
              className="footerImg"
              style={{ width: "100%", textAlign: "right" }}
            >
              <Img key="0" src="logo.png" height={30} />
            </div>
          ) : (
            <SearchBar placeholder="Search" maxLength={8} />
          )}
        </NavBar> */}
       {this.props.isDetailPage?
         <NavBar
         icon={<Icon type="left" />}
          onLeftClick={() => window.history.go(-1)}
          ><a href="#/home"><Img key="0" src="logo.png" height={30} /></a>
         </NavBar>:
        <NavBar
          // mode="dark"
          icon={this.props.isDetailPage ? <Icon type="left" /> : ""}
          onLeftClick={() => window.history.go(-1)}
          leftContent={
           [
                  this.props.isFooter ? (
                    ""
                  ) : (
                    <a href="#/home"><Img key="0" src="logo.png" height={30} /></a>
                  ),
                ]
          }
        >
          { this.props.isFooter ? (
            <div
              className="footerImg"
              style={{ width: "100%", textAlign: "right" }}
            >
              <a href="#/home"><Img key="0" src="logo.png" height={30} /></a>
            </div>
          ) : (
            <SearchBar placeholder="Search" maxLength={8} />
          )}
        </NavBar>
      }

 
      </div>
    );
  }
}

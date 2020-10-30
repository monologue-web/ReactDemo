import React, { Component } from "react";
import { Flex } from "antd-mobile";
import "../assets/style/Category.less";
import axios from "axios";
import {connect} from 'react-redux'
class Category extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     subject_data: [],
  //   };
  // }

  componentDidMount = () => {
    axios.get("/server/subject.json").then((rasp) => {
      // console.log(rasp);
      this.props.init_subject_data(rasp.data)
      // this.setState({
      //   subject_data: rasp.data,
      // });
    });
  };

  render() {
    return (
      <div>
        <Flex>
          {this.props.subject_data.map((v, i) => {
            if (i < 4) {
              return (
                <Flex.Item key={v.id}>
                  <a href={"#/list/" + v.id}>
                    <span style={{ backgroundPositionX: -50 * i }}></span>
                    <p>{v.subjectName}</p>
                  </a>
                </Flex.Item>
              );
            } else {
              return "";
            }
          })}
        </Flex>
        <Flex>
          {this.props.subject_data.map((v, i) => {
            if (i >= 4) {
              return (
                <Flex.Item key={v.id}>
                  <a href={"#/list/" + v.id}>
                    <span style={{ backgroundPositionX: -50 * i }}></span>
                    <p>{v.subjectName}</p>
                  </a>
                </Flex.Item>
              );
            } else {
              return "";
            }
          })}
          <Flex.Item></Flex.Item>
        </Flex>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    subject_data : state.subject_data
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    init_subject_data(resp){
      let action = {
        type:"init_subject_data",
        value:resp
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category)
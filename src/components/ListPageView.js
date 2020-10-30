import React, { Component } from "react";
import {ListView,WingBlank,Flex} from 'antd-mobile'
import MainList from '../components/MainList';
const data = [
  {
    img: "t0110974b6f051c1e5a.gif",
    title: "用于构建用户界面的 JavaScript 库",
    des: "React 使创建交互式 UI 变得轻而易举",
  },
  {
    img: "t0177ec8627c04e438b.gif",
    title: "小米新品发布会定档 MIX新品亮相",
    des: "Yeelight智能LED灯丝灯发布：复古设计 亮度可调",
  },
  {
    img: "t0135a6567622271196.gif",
    title: "iPhone12开始出货 本周五发售",
    des: "首批售卖的iPhone 12、iPhone 12 Pro和iPhone 12 Pro Max已经从工厂送出",
  },
];

const NUM_ROWS = 15;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

export default class ListPageView extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }
//   handleRow(obj){
//       return(
//             <MainList obj = {obj}/>
//       )
//   }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
          <MainList obj = {obj}/>  
      )
  }

    return (
      <ListView
        // ref={(el) => (this.lv = el)}
        dataSource={this.state.dataSource}
        // renderHeader={() => <span>header</span>}
        renderFooter={() => (
          <div style={{ padding: 30, textAlign: "center" }}>
            {this.state.isLoading ? "加载中..." : "加载完成"}
          </div>
        )}
        renderRow={row}
        // renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        // onScroll={() => {
        //   console.log("scroll");
        // }}
        // scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        // onEndReachedThreshold={10}
      />
    );
  }
}

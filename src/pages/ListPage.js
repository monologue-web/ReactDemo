import React, { Component } from 'react'

import Header from "../components/Header";
import ListPageView from "../components/ListPageView";
import "../assets/style/ListPage.less"
export default class ListPage extends Component {

    componentDidMount(){
        // console.log(this.props.routeParams.subjectId);
    };
    


    render() {
        return (
            <div className = "list-page">
                <Header />
                <div className="ListPageview">
                    <div className="sub-list-header">相关资讯</div>
                    <ListPageView />
                </div>
            </div>
        )
    }
}

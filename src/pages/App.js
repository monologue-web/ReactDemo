import React, { Component, Fragment } from 'react'
import ReactDOM from "react-dom"
import LoginPage from "./LoginPage"
import HomePage from "./HomePage";
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import {Router,Route,hashHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// export default class App extends Component {
//     render() {
//         return (
//            <Fragment>
//                 <ListPage />
//                 <DetailPage />
//                 <HomePage />
//            </Fragment>
//         )
//     }
// }


// ---------------------------------------------
// 使用react-redux处理Category组件中的状态
// ---------------------------------------------
const defaultState =  {
    subject_data: [],
}

const reducer = (state = defaultState, action) => {
    if(action.type === "init_subject_data"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.subject_data = action.value;
        return newState
    }
    return state;
}

const store = createStore(reducer);


const appRouter = <Provider store = {store}>
<Router history = {hashHistory}>
    <Route path = "/" component = {LoginPage} />
    <Route path = "/home" component = {HomePage} />
    <Route path = "/list/:subjectId" component = {ListPage} />
    <Route path = "/detail" component = {DetailPage} />
 
</Router>
</Provider>

ReactDOM.render(appRouter,document.getElementById("root"))
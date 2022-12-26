import React from 'react'; // React 框架的核心包
import ReactDOM from 'react-dom/client'; // 专门做渲染的包
import App from './App';
import Dash from "./Dash"; // 引入的根组件
import {Provider} from "react-redux";
import {store} from "./store/index";
import UserLogin from "./UserLogin";

/**
 * 本项目介绍 redux 使用
 * redux 可以实现各个组件之间的快捷通讯
 * 原理：数据仓库 + 数据处理器
 * 数据处理器会负责接受数据，处理完成后推送数仓，数仓会通知监听它的组件
 * （1）创建数据仓库 store 和数据处理器 reducer
 * （2）使用 dispatch(action) 可触发数据处理器 reducer
 * （3）使用 subscribe(()=>{}) 可监听数仓 store 的变化
 * （4）使用 getState() 可以拉取数仓 store 的最新数据或状态
 * @type {Root}
 */


const root = ReactDOM.createRoot(document.getElementById('root'));
// 渲染根组件APP 到一个id为root的dom节点上
root.render(
    // 严格模式节点需要去掉
    // userEffect执行时机
    <>
        <p style={{color: "blue"}}>APP Component: </p>
        <App/>
        <Provider store = {store}>
            <p style={{color: "blue"}}>Dash Component: </p>
            <Dash/>
            <p style={{color: "blue"}}>UserLogin Component: </p>
            <UserLogin/>
        </Provider>
    </>

);
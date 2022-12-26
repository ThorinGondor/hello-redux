## 引入 redux 初始化

     npm add redux react-redux redux-thunk

### redux 提供全局数据管理，react-redux 提供 连接 react 和 redux 功能，提供简便的工具，redux-thunk 是实现异步请求的中间件，也就是我们常说的请求后端接口

## 创建数据仓库 store

    // 创建 数据管理器
    function reducer(state = {num: 1}, action) {
        return state
    }
    // 创建仓库，并将 reducer 加入到数据仓库 store
    const store = createStore(reducer)
    export {store}

## store 的三个方法

    getState() 获取状态
    dispatcher() 触发数据管理器 reducer
    subscribe(() => {}) 监听 store 数据仓库的变化并触发回调函数

## 集中管理 actions 方法

### 在 store/index.js 下声明 actions 集中的处理动作

    const actions = {
        add: v=> ({
          type: "ADD",
          value: v
        })
    }

## react-redux 连接器 connect 简化了 调用 redux 的逻辑

### (1) 在 src/index.js 引入 Provider 和 store， 使用 Provider 包裹需要用到 connect 的组件，并引入数仓

    <Provider store = {store}>
        <Dash/>
    </Provider>

### (2) 在该需要连接器的组件，引入connect:

    import {connect} from "react-redux"

### (3) 定义映射方法，还是在这个组件下，使用 mapStateToProps 和 mapDispatchToProps

    // 映射 state 转为 props
    const mapStateToProps = state => state
    // 映射 dispatch 方法转为 props
    const mapDispatchToProps = actions

### (4) 导出连接后的 Dash：

    export defaul connect(mapStateToProps, mapDispatchToProps)(Dash)

### (5) 在组件内可以方便地调用 redux：

    function Dash(props){
        return (
            ......
            <button onClick={()=>props.add(10)}>ADD 10</button>
            <h4>{props.myNum}</h4>
            ......
        )
    }
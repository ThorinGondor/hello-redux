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
// 创建 redux 数据仓库
import {legacy_createStore as createStore} from "redux";

// 数据处理器 reducer，处理完会推送数据仓库 store
function reducer(state = {myNum: 1}, action) {
    switch (action.type) {
        case "ADD":
            // 推送 数仓
            return {...state, myNum: state.myNum + action.value}
        default:
            // 默认情况下的推送数仓，比如初始化时
            return state
    }
}

// 创建仓库，并将 reducer 加入到数据仓库 store
const store = createStore(reducer)

// 创建动作集合 actions
const actions = {
    add: v=> ({
      type: "ADD",
      value: v
    })
}

// 导出仓库
export {store, actions}
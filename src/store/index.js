// 创建 redux 数据仓库
import {legacy_createStore as createStore} from "redux";

const initState = {
    myNum: 1,
    user: {
        id: 84,
        name: "Kimi",
        age: 34
    }
}

// 数据处理器 reducer，处理完会推送数据仓库 store
function reducer(state = initState, action) {
    switch (action.type) {
        case "ADD":
            // 推送 数仓
            return {...state, myNum: state.myNum + action.value}
        case "SET_USER":
            return {...state, user: action.value}
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
    }),
    setUser: v => ({
        type: "SET_USER",
        value: v
    })
}

// 导出仓库
export {store, actions}
import {store, actions} from "./store";

// 通过 redux 连接器，简化了 redux 的调用逻辑
import {connect} from "react-redux"

function Dash(props) {

    // 触发 reducer 数据处理器，reducer 会处理数据然后提到 store 数仓
    function submitData(e, data) {
        if (e.target.value != null) {
            const action = {
                type: 'ADD',
                value: data
            }
            store.dispatch(action)
        }
    }

    return (
        <div>
            DASH:
            <button onClick={(e) => submitData(e, 5)}>ADD</button>
            <button onClick={() => store.dispatch(actions.add(2))}>ADD 2</button>
            <br/>
            {/* 通过 connect 把 store 中的参数转变为组件的 props
                * 把 action 把 store 中的 add 转化为组件的 props
                */}
            <button onClick={() => props.add(10)}>ADD 10</button>
            <h4 style={{color: "red"}}>{props.myNum}</h4>
        </div>
    )

}

// 映射 state 转为 props
const mapStateToProps = state => state
// 映射 dispatch 方法转为 props
const mapDispatchToProps = actions

// 导入 连接仓库的后包装的 Dash 组件
export default connect(mapStateToProps, mapDispatchToProps)(Dash)
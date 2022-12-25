import {store} from "./store";
import {useState} from "react";

function Dash() {

    const [data, setData] = useState(store.getState().myNum)

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
        </div>
    )

}
export default Dash
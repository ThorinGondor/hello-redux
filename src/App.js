// 引入 redux 数据仓库
import {store} from './store/index'
import {useState} from "react";

function App() {

    // 初始化时，获取一下 redux 仓库的数据
    const  [data, setData] = useState(store.getState().myNum)

    // 监听 store 仓库的数据变化，如果有变化，就会调用 subscribe() 函数，您可以拉取最新数据
    store.subscribe(() => {
        setData(store.getState().myNum)
    })

    return (
        <div>
            APP:
            <button>{data}</button>
        </div>
    )
}
export default App
import {connect} from 'react-redux'
import {actions} from "./store";
function UserLogin(props) {
    return (
        <div>
            <button onClick={() => props.setUser({
                id: 75,
                name: "Curry",
                age: 35
            })}>Set User</button>
            <p>{props.user.name}</p>
        </div>
    )
}

const mapStateToProps = state => state
const mapDispatchToProps = actions

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)
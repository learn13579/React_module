import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, fetchUsers} from "./services/users.api";
import {fetchUserS, pushUsers} from "./redax/actions";

function App() {
    let state = useSelector(state => state);

    let dispatch = useDispatch();

    let {users} = state;

    useEffect(() => {
        fetchUsers().then(value => {
                dispatch(fetchUserS(value));
            }
        )
    }, [])

    let onSubmit = (e) => {
        e.preventDefault();
        let name= e.target.name.value;
        let user={name};
        addUser(user).then(value => {
            dispatch(pushUsers(value));
        })
    };

    // let onClickSetState=()=>{
    //     fetchUsers().then(value => {
    //             let action = {type: FETCH_USERS, payload: value}
    //             dispatch(action);
    //         }
    //     )
    // };
    //
    // let onClickClearState=()=>{
    //     dispatch({type: 'CLEAR_STORE'});
    // };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'name'}/>
                <button>add user</button>
            </form>
            <hr/>
            {/*<button onClick={onClickSetState}>set state</button>*/}
            {/*<hr/>*/}
            {/*<button onClick={onClickClearState}>clear users</button>*/}
            {/*<hr/>*/}

            {
                users.map((value) => <div key={value.id}> {value.name} </div>)
            }
        </div>
    );

}

export default App;

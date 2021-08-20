//     Є дві лінки
//     /users
//     /posts
//
//     /users - робить все те, що було на занятті останнім способом (через кнопку та ддатковий запит на сервер)
//
// /posts
//     Отримує posts з jsobplaceholder, виводить їх всі.
//         Біля кожного поста зробити лінку (не конопку) яка буде вести на детальну інформацію поста. Детальну інформацію отримувати через history.state
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

export default function App() {
    return (
        <Router>
            <div>
                <div className={'header'}>

                    <Link to={'/'}><h1>Main page</h1></Link>

                    <Link to={'/users'}>Users</Link>

                    <Link to={'/posts'}>Posts</Link>

                </div>

                <div>
                    <Switch>
                        <Route path={'/users'} component={Users}/>

                        <Route path={'/posts'} component={Posts}/>
                    </Switch>
                </div>

            </div>
        </Router>
    );
}
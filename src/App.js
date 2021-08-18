import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";


export default function App() {
    return (


        <Router>
            <div className={'header'}>
                <Link to={'/'}> null</Link>
                <br/>
                <Link to={'/users'}>Users</Link>
                <br/>
                <Link to={'/posts'}>Posts</Link>
                <br/>
                <Link to={'/comments'}>Comments</Link>
            </div>
            <hr/>

            <div>
                <Switch>
                    <Route path={'/users'} component={Users}/>

                    <Route exact path={'/posts'}>
                        <Posts/>
                    </Route>

                    <Route path={'/comments'} render={(props) => {
                        console.log(props);
                        return <Comments/>
                    }}/>
                </Switch>
            </div>

        </Router>
    );
}
// <Route path={'/comments'} component={Comments}/>
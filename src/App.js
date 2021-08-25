import './App.css';
import {Form} from "./components/form/Form";
// import {Router} from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import ParniCars from "./components/Sort/ListCar";
import UpdateCar from "./components/Sort/UpdateCar";
import {ListForm} from "./components/Sort/ListForm";

function App() {
    return (
        <div>

            <Router>
                <div className={'header'}>
                    <br/>
                    <Link to={'/'}>Cars</Link>
                    <br/>
                    <Link to={'/create'}>Create-car</Link>
                    <br/>
                    <Link to={'/update'}>Update-car</Link>
                    <br/>
                </div>
                <div>
                    <Switch>

                        <Route path={'/create'} render={(props) => {
                            return <Form/>
                        }}/>

                        <Route path={'/update'} render={(props) => {
                            return <UpdateCar/>
                        }}/>

                        <Route path={'/'} render={(props) => {
                            return <ListForm/>
                        }}/>

                    </Switch>
                </div>
            </Router>

        </div>
    )
}

export default App;

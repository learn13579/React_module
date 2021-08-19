import './App.css';
import {Form} from "./components/form/Form";
// import {Router} from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import ParniCars from "./components/Sort/ParniCars";
import NeparniCars from "./components/Sort/NeparniCars";

function App() {
    return (
        <div>

            <Router>
                <div className={'header'}>
                    <br/>
                    <Link to={'/'}>Main</Link>
                    <br/>
                    <Link to={'/parni'}>Parni cars</Link>
                    <br/>
                    <Link to={'/neparni'}>Neparni cars</Link>
                    <br/>
                </div>
                <div>
                    <Switch>

                        <Route path={'/parni'} render={(props) => {
                            return <ParniCars/>
                        }}/>

                        <Route path={'/neparni'} render={(props) => {
                            return <NeparniCars/>
                        }}/>

                        <Route path={'/'} render={(props) => {
                            return <Form/>
                        }}/>

                    </Switch>
                </div>
            </Router>

        </div>
    )
}

export default App;

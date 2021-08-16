import './App.css';

import Posts from "./components/posts/Posts";
import Comments from "./components/comments/comments";

function App() {

    return (<div className={'main'}>
            <Posts/>
            <Comments/>
        </div>
    );
}

export default App;



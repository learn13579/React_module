import {
    withRouter
} from "react-router-dom";
import './user.css'

function User({item, history}) {

    const navigateTo = () => {
        history.push(`/users/${item.id}`);
    };

    return(
        <div className={'user'}>
            {item.id}.  {item.name} - <button onClick={navigateTo}> user  details</button>
        </div>
    )
}

export default withRouter(User);
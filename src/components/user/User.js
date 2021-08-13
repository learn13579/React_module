// import Posts from "../post/posts";
import './User.css';

export default function User({item, chooseUser}) {
    return (
            <div className={'user'}>
                <h3>{item.id}. {item.name}, {item.username}</h3>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>

                <button onClick={() => {
                    chooseUser(item.id)
                }}>read posts of user
                </button>


            </div>
    );
}


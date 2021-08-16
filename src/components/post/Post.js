import './Post.css';

export default function Post({item, choosePost}) {

    return (
        <div className={'post'}>
            <h3>{item.id}. {item.title}</h3>

            <button onClick={() => {
                choosePost(item.body)
            }}>details
            </button>

        </div>
    );
}
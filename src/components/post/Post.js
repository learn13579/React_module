import './Post.css';

export default function Post({item, choosePost}) {

    const onClickPostChoose = () => {
        choosePost(item);
    }

    return (
        <div className={'post'}>
            <h3>Post:  {item.id}. {item.title}</h3>

            <button onClick={onClickPostChoose}>details
            </button>

        </div>
    );
}
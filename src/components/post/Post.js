import './Post.css';

export default function Post({item, choosePost}) {

    const onClickPostChoose = () => {
        choosePost();
    }

    return (
        <div className={'post'}>
            <h3>{item.id}. {item.title}</h3>

            <button onClick={onClickPostChoose}>details
            </button>

        </div>
    );
}
import './comment.css';

export default function Comment({item, chooseComment}) {

    const onClickCommentChoose = () => {
        chooseComment(item);
    }

    return (
        <div className={'comment'}>
            <h4>Comment: {item.id}. {item.name}</h4>

            <button onClick={onClickCommentChoose}>details
            </button>

        </div>
    );
}
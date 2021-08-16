export default function Comment({item, chooseComment}) {

    const onClickCommentChoose = () => {
        chooseComment();
    }

    return (
        <div className={'comment'}>
            <h3>{item.id}. {item.name}</h3>

            <button onClick={onClickCommentChoose}>details
            </button>

        </div>
    );
}
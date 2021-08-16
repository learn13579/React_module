export default function Comment({item, chooseComment}) {
    return (
        <div className={'comment'}>
            <h3>{item.id}. {item.name}</h3>

            <button onClick={() => {
                chooseComment(item.body)
            }}>details
            </button>

        </div>
    );
}
export default function PostDetails(props) {
    let {location: {state}} = props;

    return (
        <div className={'post-detail'}>
            <h4>Id post: {state.id}.</h4>
            <h5>Title: {state.title}</h5>
            <p>Text: {state.body}</p>
        </div>
    )
}


export default function Book(props) {
    const { id, author, image, title, children, isbn, index, getBook } = props;

    return (
        <article className='book'>
            <img src={image} alt={title} />

            <h2>{title}</h2>
            <button onClick={() => getBook(id)}>Get Book ID</button>
            <h4>{author}</h4>
            <p>{isbn}</p>
            <p className='bookID'>{`#${index + 1}`}</p>
            {children}
        </article>
    );
}

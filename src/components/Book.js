export default function Book(props) {
    const { author, image, title, children, isbn, index } = props;

    return (
        <article className='book'>
            <img src={image} alt={title} />

            <h2>{title}</h2>
            {/* <button onClick={() => getBook(id)}>Get Book</button> */}
            <h4>{author}</h4>
            <p>{isbn}</p>
            <p className='bookID'>{`#${index + 1}`}</p>
            {children}
        </article>
    );
}

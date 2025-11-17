import { Link } from 'react-router-dom';

export default function Book(book) {
    const {
        rank,
        title,
        description,
        author,
        book_image,
        publisher,
        primary_isbn13,
    } = book;
    return (
        <article className='book'>
            <img src={book_image} alt={title} />
            <h2 className='book-title'>
                <Link to={`/book/${primary_isbn13}`} state={{ book }}>
                    {title}
                </Link>
            </h2>
            <h4>by {author}</h4>
            <p className='book-description'>{description}</p>
            <div className='details'>
                <p>Publisher: {publisher}</p>
                <p>ISBN: {primary_isbn13}</p>
            </div>
            <p className='bookID'>{`#${rank}`}</p>
        </article>
    );
}

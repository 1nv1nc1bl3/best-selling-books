import { Link } from 'react-router-dom';

export default function Book(book) {
    /* ----------------------------------------------
       DESTRUCTURE PROPS
       These fields come directly from the NYT API
    ---------------------------------------------- */
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
            {/* Cover Image */}
            <img src={book_image} alt={title} />

            {/* Title (clickable link) */}
            <h2 className='book-title'>
                <Link
                    to={`/book/${primary_isbn13}`} // URL with :id param
                    state={{ book }} // pass full book object to details page
                >
                    {title}
                </Link>
            </h2>

            {/* Author */}
            <h4>by {author}</h4>

            {/* Short description */}
            <p className='book-description'>{description}</p>

            {/* Bottom details */}
            <div className='details'>
                <p>Publisher: {publisher}</p>
                <p>ISBN: {primary_isbn13}</p>
            </div>

            {/* Rank badge */}
            <p className='bookID'>{`#${rank}`}</p>
        </article>
    );
}

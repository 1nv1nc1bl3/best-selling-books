import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function BookDetails() {
    /* ----------------------------------------------
       GRAB ROUTER PARAMS & LOCATION STATE
    ---------------------------------------------- */

    // Extract :id from URL → /book/:id
    const { id } = useParams();

    // Get the book object passed via <Link state={book}>
    const { state } = useLocation();
    const { book } = state || {}; // safe fallback destructuring

    /* if 'book' = undefined → redirect to 404 */
    if (!book) {
        return <Navigate to='*' />;
    }

    return (
        <main className='book-details'>
            <div className='book-body'>
                {/* BACK BUTTON */}
                <div className='book-head'>
                    <p>
                        <Link to='/'>
                            <IoIosArrowRoundBack className='arrow-back' />
                            <span>Back to Book List</span>
                        </Link>
                    </p>
                </div>

                {/* BOOK CONTENT */}
                <div className='container'>
                    <div className='image-column'>
                        <img src={book.book_image} alt={book.title} />
                    </div>

                    <div className='details-column'>
                        <h1 className='book-title'>{book.title}</h1>
                        <h4>by {book.author}</h4>

                        <p className='book-description'>{book.description}</p>

                        <div className='details'>
                            <p>Publisher: {book.publisher}</p>
                            <p>ISBN: {book.primary_isbn13}</p>
                            <p>Book ID: {id}</p> {/* Comes from URL */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

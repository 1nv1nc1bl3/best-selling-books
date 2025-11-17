import { useParams, useLocation, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';

const BookDetails = ({ theme, setTheme }) => {
    const { id } = useParams();
    const { state } = useLocation();
    const { book } = state || {};

    if (!book) {
        return <Navigate to='*' />;
    }

    return (
        <main className='book-details'>
            <div className='book-body'>
                <div className='book-head'>
                    <p>
                        <Link to='/'>
                            <IoIosArrowRoundBack className='arrow-back' />
                            <span>Back to Book List</span>
                        </Link>
                    </p>
                </div>
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
                            <p>Book ID: {id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookDetails;

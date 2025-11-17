import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';

const NotFoundPage = () => {
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
                <div className='container not-found'>
                    <p>Page not found</p>
                </div>
            </div>
        </main>
    );
};

export default NotFoundPage;

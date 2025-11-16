import { useState, useEffect } from 'react';
import '../index.css';
import '../fonts/Lodeh-VGLD6.ttf';
import '../fonts/FranklinGothic.woff';
import Book from './Book.js';
import Dropdown from './Dropdown.js';
import Spinner from './Spinner.js';

const API = 'vNARGDYNWidjIRP8Vb1QrrpQa2w885xG';

export default function Booklist() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [lists, setLists] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handlePickCategory = (id) => {
        const pickedCat = lists.find((list) => list.list_id === id);
        setSelectedCategory(pickedCat);
        // console.log(pickedCat);
    };

    const fetchBooks = async () => {
        try {
            const res = await fetch(
                `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API}`
            );
            if (!res.ok) {
                setIsError(true);
            }
            const data = await res.json();
            setLists(data.results.lists);
            setBooks(data.results.lists[4].books);
            // console.log(data.results);
        } catch (err) {
            console.log('Error fetching books', err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchBooks();
    }, []);

    useEffect(() => {
        if (selectedCategory) setBooks(selectedCategory.books);
    }, [selectedCategory]);

    return (
        <main>
            <div className='page-heading'>
                <h1 className='main-title'>The New York Times Best Sellers</h1>
                <h4 className='sub-title'>
                    Authoritatively ranked lists of books sold in the United
                    States, sorted by format and genre.
                </h4>
            </div>
            <div className='container'>
                {!isError}
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <>
                        <Dropdown
                            handlePickCategory={handlePickCategory}
                            lists={lists}
                            selectedCategory={selectedCategory}
                        />
                        <h2 className='category-title'>
                            {selectedCategory?.display_name}
                        </h2>
                        <section className='books-list'>
                            {!selectedCategory ? (
                                <p className='not-selected'>
                                    No category selected yet
                                </p>
                            ) : (
                                books.map((book) => {
                                    return (
                                        <Book
                                            key={
                                                book.primary_isbn13 ||
                                                book.primary_isbn11
                                            }
                                            {...book}
                                        ></Book>
                                    );
                                })
                            )}
                        </section>
                    </>
                )}
            </div>
        </main>
    );
}

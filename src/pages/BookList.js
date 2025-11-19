import { useState, useEffect } from 'react';
import Book from '../components/Book.js';
import DropDown from '../components/DropDown.js';
import Spinner from '../components/Spinner.js';
import '../index.css';

const API = 'vNARGDYNWidjIRP8Vb1QrrpQa2w885xG';

export default function BookList() {
    /* ----------------------------------------------
       STATE
    ---------------------------------------------- */

    // All books of the currently selected category
    const [books, setBooks] = useState([]);

    // Loading spinner flag
    const [loading, setLoading] = useState(true);

    // Error flag (true if fetch failed)
    const [isError, setIsError] = useState(false);

    // All categories returned by the API
    const [lists, setLists] = useState([]);

    // Currently selected category object
    const [selectedCategory, setSelectedCategory] = useState(null);

    /* ----------------------------------------------
       HANDLERS
    ---------------------------------------------- */

    // When the user selects a category from the dropdown
    const handlePickCategory = (id) => {
        // Find full category object by ID
        const pickedCat = lists.find((list) => list.list_id === id);
        // Store in state
        setSelectedCategory(pickedCat);
    };

    /* ----------------------------------------------
       FETCH BOOKS (ONLY ON FIRST LOAD)
    ---------------------------------------------- */
    const fetchBooks = async () => {
        try {
            const res = await fetch(
                `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API}`
            );

            // If response is NOT ok -> set error
            if (!res.ok) {
                setIsError(true);
            }

            // Parse JSON response
            const data = await res.json();

            // Save all categories to state
            setLists(data.results.lists);

            // We *used to* set default books here
            // Now we wait for user selection
        } catch (err) {
            console.log('Error fetching books', err);
            setIsError(true);
        } finally {
            // Hide the spinner
            setLoading(false);
        }
    };

    // Run fetch on mount
    useEffect(() => {
        fetchBooks();
    }, []);

    /* ----------------------------------------------
       WHEN selectedCategory changes -> update books
    ---------------------------------------------- */
    useEffect(() => {
        if (selectedCategory) setBooks(selectedCategory.books); // book[] array directly from API
    }, [selectedCategory]);

    /* ----------------------------------------------
       CONDITIONAL RENDERING
    ---------------------------------------------- */

    // Show Spinner while loading
    if (loading) {
        return (
            <main className='app'>
                <div className='container'>
                    <Spinner loading={loading} />
                </div>
            </main>
        );
    }

    // Show error message if API failed
    if (isError) {
        return (
            <main className='app'>
                <div className='container'>
                    <p>Sorry, there was an error!</p>
                </div>
            </main>
        );
    }

    // Normal UI
    return (
        <main className='app'>
            <div className='container'>
                {/* Page Heading */}
                <div className='app-heading'>
                    <h1 className='main-title'>
                        The New York Times Best Sellers
                    </h1>
                    <h4 className='sub-title'>
                        Authoritatively ranked lists of books sold in the United
                        States.
                    </h4>
                </div>

                {/* Dropdown Component */}
                <DropDown
                    handlePickCategory={handlePickCategory}
                    lists={lists}
                    selectedCategory={selectedCategory}
                />

                {/* Category Title */}
                <h2 className='category-title'>
                    {selectedCategory?.display_name}
                </h2>

                {/* Books */}
                <section className='books-list'>
                    {!selectedCategory ? (
                        <p className='not-selected'>No category selected yet</p>
                    ) : (
                        books.map((book) => (
                            <Book
                                key={book.primary_isbn13 || book.primary_isbn11}
                                {...book}
                            />
                        ))
                    )}
                </section>
            </div>
        </main>
    );
}
